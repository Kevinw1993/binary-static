const DigitInfo        = require('./charts/digit_info');
const showHighchart    = require('./charts/chart_frame').showHighchart;
const getLanguage      = require('../../base/language').get;
const State            = require('../../base/storage').State;
const Url              = require('../../base/url');
const elementInnerHtml = require('../../common_functions/common_functions').elementInnerHtml;
const JapanPortfolio   = require('../../../binary_japan/trade_japan/portfolio');

/*
 * This file contains the code related to loading of trading page bottom analysis
 * content. It will contain jquery so as to compatible with old code and less rewrite
 *
 * Please note that this will be removed in near future
 */

/*
 * This function is called whenever we change market, form
 * or underlying to load bet analysis for that particular event
 */

const TradingAnalysis = (() => {
    'use strict';

    const requestTradeAnalysis = () => {
        let form_name = State.get('is_mb_trading') ? $('#category').val() :
                                                    $('#contract_form_name_nav').find('.a-active').attr('id');
        if (form_name === 'matchdiff') {
            form_name = 'digits';
        }
        if (form_name === 'callput') {
            form_name = 'higherlower';
        }
        $('#tab_explanation').find('a').attr('href',  Url.urlFor('trade/bet_explanation',  `underlying_symbol=${$('#underlying').val()}&form_name=${form_name}`));
        if (form_name === 'digits' || form_name === 'overunder' || form_name === 'evenodd') {
            $('#tab_last_digit').removeClass('invisible');
        } else {
            $('#tab_last_digit').addClass('invisible');
        }
        sessionStorage.setItem('currentAnalysisTab', getActiveTab());
        loadAnalysisTab();
    };

    /*
     * This function bind event to link elements of bottom content
     * navigation
     */
    const bindAnalysisTabEvent = () => {
        const analysis_nav_element = document.querySelector('#trading_bottom_content #betsBottomPage');
        if (analysis_nav_element) {
            analysis_nav_element.addEventListener('click', (e) => {
                if (e.target && e.target.nodeName === 'A') {
                    e.preventDefault();

                    const clicked_link = e.target;
                    const clicked_element = clicked_link.parentElement;
                    const is_tab_active = clicked_element.classList.contains('active');

                    sessionStorage.setItem('currentAnalysisTab', clicked_element.id);

                    if (!is_tab_active) {
                        loadAnalysisTab();
                    }
                }
            });
        }
    };

    /*
     * This function handles all the functionality on how to load
     * tab according to current paramerted
     */
    const loadAnalysisTab = () => {
        const current_tab = getActiveTab();
        const current_link = document.querySelector(`#${current_tab} a`);
        const content_id = document.getElementById(`${current_tab}-content`);

        const analysis_nav_element = document.querySelector('#trading_bottom_content #betsBottomPage');
        toggleActiveNavMenuElement(analysis_nav_element, current_link.parentElement);
        toggleActiveAnalysisTabs();

        JapanPortfolio.init();
        if (current_tab === 'tab_portfolio') {
            JapanPortfolio.show();
        } else {
            JapanPortfolio.hide();
            if (current_tab === 'tab_graph') {
                showHighchart();
            } else if (current_tab === 'tab_last_digit') {
                const underlying = $('#digit_underlying option:selected').val() || $('#underlying').find('option:selected').val();
                const tick = $('#tick_count').val() || 100;
                BinarySocket.send({
                    ticks_history: underlying,
                    count        : tick.toString(),
                    end          : 'latest',
                }, {
                    callback: (response) => {
                        const type = response.msg_type;
                        if (type === 'tick') {
                            DigitInfo.updateChart(response);
                        } else if (type === 'history') {
                            DigitInfo.showChart(response.echo_req.ticks_history, response.history.prices);
                        }
                    },
                });
            } else {
                $.ajax({
                    method: 'GET',
                    url   : current_link.getAttribute('href'),
                }).done((data) => {
                    elementInnerHtml(content_id, data);
                    if (current_tab === 'tab_explanation') {
                        showExplanation(current_link.href);
                    }
                });
            }
        }
    };

    /*
     * function to toggle the active element for analysis menu
     */
    const toggleActiveAnalysisTabs = () => {
        const current_tab = getActiveTab();
        const analysis_container = document.getElementById('bet_bottom_content');

        if (analysis_container) {
            const child_elements = analysis_container.children;
            const current_tab_element = document.getElementById(`${current_tab}-content`);
            const classes = current_tab_element.classList;

            for (let i = 0, len = child_elements.length; i < len; i++) {
                child_elements[i].classList.remove('selectedTab');
                child_elements[i].classList.add('invisible');
            }

            classes.add('selectedTab');
            classes.remove('invisible');
        }
    };

    /*
     * get the current active tab if its visible i.e allowed for current parameters
     */
    const getActiveTab = () => {
        let selected_tab = sessionStorage.getItem('currentAnalysisTab') || (State.get('is_mb_trading') ? 'tab_portfolio' : window.chartAllowed ? 'tab_graph' : 'tab_explanation');
        const selected_element = document.getElementById(selected_tab);

        if (selected_element && selected_element.classList.contains('invisible') &&
            !(selected_tab === 'tab_portfolio' && JapanPortfolio.isActive())) {
            selected_tab = window.chartAllowed && !State.get('is_mb_trading') ? 'tab_graph' : 'tab_explanation';
            sessionStorage.setItem('currentAnalysisTab', selected_tab);
        }

        return selected_tab;
    };

    /*
     * handle the display of proper explanation based on parameters
     */
    const showExplanation = (href) => {
        const options = Url.paramsHash(href);
        const form_name    = options.form_name || 'risefall';
        const show_image   = options.show_image   ? options.show_image   > 0 : true;
        const show_winning = options.show_winning ? options.show_winning > 0 : true;
        const show_explain = true;
        const hidden_class = 'invisible';
        const $container   = $('#tab_explanation-content');

        if (show_winning) {
            $container.find(`#explanation_winning, #winning_${form_name}`).removeClass(hidden_class);
        }

        if (show_explain) {
            $container.find(`#explanation_explain, #explain_${form_name}`).removeClass(hidden_class);
        }

        const images = {
            risefall: {
                image1: 'rise-fall-1.svg',
                image2: 'rise-fall-2.svg',
            },
            higherlower: {
                image1: 'higher-lower-1.svg',
                image2: 'higher-lower-2.svg',
            },
            touchnotouch: {
                image1: 'touch-notouch-1.svg',
                image2: 'touch-notouch-2.svg',
            },
            endsinout: {
                image1: 'in-out-1.svg',
                image2: 'in-out-2.svg',
            },
            staysinout: {
                image1: 'in-out-3.svg',
                image2: 'in-out-4.svg',
            },
            updown: {
                image1: 'up-down-1.svg',
                image2: 'up-down-2.svg',
            },
            evenodd: {
                image1: 'evenodd-1.svg',
                image2: 'evenodd-2.svg',
            },
            overunder: {
                image1: 'overunder-1.svg',
                image2: 'overunder-2.svg',
            },
        };

        if (show_image && images.hasOwnProperty(form_name)) {
            const image_path = Url.urlForStatic(`images/pages/trade-explanation/${(getLanguage() === 'JA' ? 'ja/' : '')}`);
            $container.find('#explanation_image_1').attr('src', image_path + images[form_name].image1);
            $container.find('#explanation_image_2').attr('src', image_path + images[form_name].image2);
            $container.find('#explanation_image').removeClass(hidden_class);
        }
    };

    /*
     * toggle active class of menu
     */
    const toggleActiveNavMenuElement = (nav, event_element) => {
        const li_elements = nav.getElementsByTagName('li');
        const classes = event_element.classList;

        if (!classes.contains('active')) {
            for (let i = 0, len = li_elements.length; i < len; i++) {
                li_elements[i].classList.remove('active');
            }
            classes.add('active');
        }
    };

    return {
        request             : requestTradeAnalysis,
        getActiveTab        : getActiveTab,
        bindAnalysisTabEvent: bindAnalysisTabEvent,
    };
})();

module.exports = TradingAnalysis;
