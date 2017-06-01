const MBContract      = require('./mb_contract');
const MBDefaults      = require('./mb_defaults');
const MBNotifications = require('./mb_notifications');
const MBPrice         = require('./mb_price');
const MBProcess       = require('./mb_process');
const TradingAnalysis = require('../trade/analysis');
const debounce        = require('../trade/common').debounce;
const showHighchart   = require('../trade/charts/chart_frame').showHighchart;
const jpClient        = require('../../common_functions/country_base').jpClient;

/*
 * TradingEvents object contains all the event handler function required for
 * websocket trading page
 *
 * We need it as object so that we can call TradingEvent.init() only on trading
 * page for pjax to work else it will fire on all pages
 *
 */
const MBTradingEvents = (() => {
    'use strict';

    const initiate =  () => {
        const $form = $('.trade_form');
        const hidden_class = 'invisible';

        $(document).on('click', (e) => {
            if ($(e.target).parents('#payout').length) return;
            $form.find('.list, #payout_list').addClass(hidden_class).end()
                .find('#period, #category')
                .removeClass(hidden_class);
        });

        $form.find('.current').on('click', function(e) {
            e.stopPropagation();
            const $list = $(this).siblings('.list');
            if ($list.hasClass(hidden_class)) {
                $form.find('.list').addClass(hidden_class);
            }
            $list.toggleClass(hidden_class);
        });

        /*
         * attach event to underlying change, event need to request new contract details and price
         */
        const $underlying = $form.find('#underlying');
        if ($underlying.length) {
            $underlying.on('click', '.list > div', function() {
                const underlying = $(this).attr('value');
                MBContract.setCurrentItem($underlying, underlying);
                MBDefaults.set('underlying', underlying);
                MBNotifications.hide('SYMBOL_INACTIVE');

                MBProcess.getContracts(underlying);
                MBContract.displayDescriptions();

                showHighchart();
            });
        }

        const $category = $form.find('#category');
        if ($category.length) {
            $category.on('click', '.list > div', function() {
                const category = $(this).attr('value');
                MBContract.setCurrentItem($category, category);
                MBDefaults.set('category', category);
                MBContract.populatePeriods('rebuild');
                MBProcess.processPriceRequest();
                TradingAnalysis.request();
            });
        }

        const $period = $form.find('#period');
        if ($period.length) {
            $period.on('click', '.list > div', function() {
                const period = $(this).attr('value');
                MBContract.setCurrentItem($period, period);
                MBDefaults.set('period', period);
                MBProcess.processPriceRequest();
                $('.remaining-time').removeClass('alert');
                MBContract.displayRemainingTime('recalculate');
                MBContract.displayDescriptions();
            });
        }

        const validatePayout = (payout_amount) => {
            let is_ok = true;
            const contract = MBContract.getCurrentContracts();
            const max_amount = (Array.isArray(contract) && contract[0].expiry_type !== 'intraday') ? 20000 : 5000;
            if (!payout_amount || isNaN(payout_amount) ||
                (jpClient() && (payout_amount < 1 || payout_amount > 100)) ||
                (payout_amount <= 0 || payout_amount > max_amount)) {
                is_ok = false;
            }

            return is_ok;
        };

        const $payout = $form.find('#payout');
        if ($payout.length) {
            if (!$payout.attr('value')) {
                const payout_def = MBDefaults.get('payout') || (jpClient() ? 1 : 10);
                $payout.value = payout_def;
                MBDefaults.set('payout', payout_def);
                $payout.attr('value', payout_def).find('.current').html(payout_def);
            }
            $payout
                .find('.current').on('click', function () {
                    const $list = $(`#${$(this).parent().attr('id')}_list`);
                    const $sublist = $list.find('.list');
                    $list.toggleClass(hidden_class);
                    $sublist.toggleClass(hidden_class);
                    $category.toggleClass(hidden_class);
                    $period.toggleClass(hidden_class);
                }).end()
                .on('click', '> .list > div', debounce(function() {
                    const payout = +MBDefaults.get('payout');
                    const new_payout = payout + parseInt($(this).attr('value'));

                    if (validatePayout(new_payout)) {
                        $('.price-table').setVisibility(1);
                        MBDefaults.set('payout', new_payout);
                        $payout.attr('value', new_payout).find('.current').html(new_payout);
                        MBProcess.processPriceRequest();
                        MBContract.displayDescriptions();
                    }
                }));
        }

        const $currency = $form.find('#currency');
        if ($currency.length) {
            $currency.on('click', '.list > div', function() {
                const currency = $(this).attr('value');
                MBContract.setCurrentItem($currency, currency);
                MBDefaults.set('currency', currency);
                MBProcess.processPriceRequest();
                MBContract.displayDescriptions();
            });
        }

        const trading_status = '.trading-status';
        const $trading_status = $(trading_status);
        const $allow_trading = $trading_status.find('#allow');
        const $disallow_trading = $trading_status.find('#disallow');
        const setTradingStatus = (is_enabled) => {
            if (is_enabled) {
                MBPrice.hidePriceOverlay();
                MBNotifications.hide('TRADING_DISABLED');
                $disallow_trading.removeClass('selected');
                $allow_trading.addClass('selected');
            } else {
                MBPrice.showPriceOverlay();
                $allow_trading.removeClass('selected');
                $disallow_trading.addClass('selected');
            }
        };
        if ($trading_status.length) {
            const allow_trading_def = !MBDefaults.get('disable_trading');
            setTradingStatus(allow_trading_def);
            $trading_status.on('click', (e) => {
                const status = e.target.getAttribute('id');
                MBDefaults.set('disable_trading', status === 'disallow');
                setTradingStatus(status === 'allow');
            });
        }
    };

    return {
        init: initiate,
    };
})();

module.exports = MBTradingEvents;
