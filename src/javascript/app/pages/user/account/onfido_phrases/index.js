import pt from './pt';

const localize = require('../../../../../_common/localize').localize;

module.exports = {
    pt,
    country_select: {
        alert_dropdown: {
            country_not_found: localize('Country not found'),
        },
        alert: {
            another_doc:
                localize('Documents from that country are not currently supported — <fallback>try another document type</fallback>'),
        },
        button_primary: localize('Submit document'),
        search        : {
            accessibility    : localize('Select country'),
            input_placeholder: localize('e.g. United States'),
            label            : localize('Search for country'),
        },
        title: localize('Select issuing country'),
    },
    cross_device_checklist: {
        button_primary        : localize('Submit verification'),
        info                  : localize('Tips'),
        list_item_doc_multiple: localize('Documents uploaded'),
        list_item_doc_one     : localize('Document uploaded'),
        list_item_selfie      : localize('Selfie uploaded'),
        subtitle              : localize('We\'re now ready to verify your identity'),
        title                 : localize('Great, that\'s everything we need'),
    },
    cross_device_error_desktop: {
        subtitle: localize('The link only works on mobile devices'),
        title   : localize('Something\'s gone wrong'),
    },
    cross_device_error_restart: {
        subtitle: localize('You\'ll need to restart your verification on your computer'),
        title   : localize('Something\'s gone wrong'),
    },
    cross_device_intro: {
        button_primary    : localize('Get secure link'),
        list_accessibility:
            localize('Steps required to continue verification on your mobile'),
        list_item_finish    : localize('Check back here to finish the submission'),
        list_item_open_link : localize('Open the link and complete the tasks'),
        list_item_send_phone: localize('Send a secure link to your phone'),
        subtitle            : localize('Here\'s how to do it:'),
        title               : localize('Continue on your phone'),
    },
    cross_device_return: {
        body    : localize('Your computer may take a few seconds to update'),
        subtitle: localize('You can now return to your computer to continue'),
        title   : localize('Uploads successful'),
    },
    doc_confirmation: {
        alert: {
            blur_detail  : localize('Make sure everything is clear'),
            blur_title   : localize('Blurry photo detected'),
            crop_detail  : localize('Make sure full document is visible'),
            crop_title   : localize('Cut-off image detected'),
            glare_detail : localize('Move away from direct light'),
            glare_title  : localize('Glare detected'),
            no_doc_detail: localize('Make sure all of the document is in the photo'),
            no_doc_title : localize('No document detected'),
        },
        body_id:
            localize('Make sure your card details are clear to read, with no blur or glare'),
        body_image_medium:
            localize('It’ll take longer to verify you if we can’t read it'),
        body_image_poor: localize('To smoothly verify you, we need a better photo'),
        body_license   :
            localize('Make sure your license details are clear to read, with no blur or glare'),
        body_passport:
            localize('Make sure your passport details are clear to read, with no blur or glare'),
        body_permit:
            localize('Make sure your permit details are clear to read, with no blur or glare'),
        body_tax_letter:
            localize('Make sure details are clear to read, with no blur or glare'),
        button_close                : localize('Close'),
        button_primary_redo         : localize('Redo'),
        button_primary_upload       : localize('Confirm'),
        button_primary_upload_anyway: localize('Upload anyway'),
        button_secondary_redo       : localize('Redo'),
        button_zoom                 : localize('Enlarge image'),
        image_accessibility         : localize('Photo of your document'),
        title                       : localize('Check your image'),
    },
    doc_select: {
        button_id             : localize('Identity card'),
        button_id_detail      : localize('Front and back'),
        button_license        : localize('Driver\'s license'),
        button_license_detail : localize('Front and back'),
        button_passport       : localize('Passport'),
        button_passport_detail: localize('Face photo page'),
        button_permit         : localize('Residence permit'),
        button_permit_detail  : localize('Front and back'),
        extra_no_mobile       : localize('Sorry, no mobile phone bills'),
        list_accessibility    : localize('Documents you can use to verify your identity'),
        subtitle              : localize('It must be an official photo ID'),
        subtitle_poa          :
            localize('These are the documents most likely to show your current home address'),
        title    : localize('Choose document'),
        title_poa: localize('Select a %{country} document'),
    },
    doc_submit: {
        button_link_upload : localize('or upload photo – no scans or photocopies'),
        button_primary     : localize('Continue on phone'),
        subtitle           : localize('Take a photo with your phone'),
        title_id_back      : localize('Submit identity card (back)'),
        title_id_front     : localize('Submit identity card (front)'),
        title_license_back : localize('Submit license (back)'),
        title_license_front: localize('Submit license (front)'),
        title_passport     : localize('Submit passport photo page'),
        title_permit_back  : localize('Submit residence permit (back)'),
        title_permit_front : localize('Submit residence permit (front)'),
    },
    error_unsupported_browser: {
        subtitle_android:
            localize('Restart the process on the latest version of Google Chrome'),
        subtitle_ios : localize('Restart the process on the latest version of Safari'),
        title_android: localize('Unsupported browser'),
        title_ios    : localize('Unsupported browser'),
    },
    generic: {
        accessibility: {
            close_sdk_screen: localize('Close identity verification screen'),
            dismiss_alert   : localize('Dismiss alert'),
        },
        back  : localize('back'),
        close : localize('close'),
        errors: {
            interrupted_flow_error: {
                instruction: localize('Restart process on a different device'),
                message    : localize('Camera not detected'),
            },
            invalid_size: {
                instruction: localize('Must be under 10MB.'),
                message    : localize('File size exceeded.'),
            },
            invalid_type: {
                instruction: localize('Try using another file type.'),
                message    : localize('File not uploaded.'),
            },
            lazy_loading: {
                message: localize('An error occurred while loading the component'),
            },
            multiple_faces: {
                instruction: localize('Only your face can be in the selfie'),
                message    : localize('Multiple faces found'),
            },
            no_face: {
                instruction: localize('Your face is needed in the selfie'),
                message    : localize('No face found'),
            },
            request_error: {
                instruction: localize('Please try again'),
                message    : localize('Connection lost'),
            },
            sms_failed: {
                instruction: localize('Copy the link to your phone'),
                message    : localize('Something\'s gone wrong'),
            },
            sms_overuse: {
                instruction: localize('Copy the link to your phone'),
                message    : localize('Too many failed attempts'),
            },
            unsupported_file: {
                instruction: localize('Try using a JPG or PNG file'),
                message    : localize('File type not supported'),
            },
        },
        lazy_load_placeholder: localize('Loading...'),
        loading              : localize('Loading'),
    },
    get_link: {
        alert_wrong_number          : localize('Check that your number is correct'),
        button_copied               : localize('Copied'),
        button_copy                 : localize('Copy'),
        button_submit               : localize('Send link'),
        info_qr_how                 : localize('How to scan a QR code'),
        info_qr_how_list_item_camera:
            localize('Point your phone’s camera at the QR code'),
        info_qr_how_list_item_download:
            localize('If it doesn’t work, download a QR code scanner from Google Play or the App Store'),
        link_divider                  : localize('or'),
        link_qr                       : localize('Scan QR code'),
        link_sms                      : localize('Get link via SMS'),
        link_url                      : localize('Copy link'),
        loader_sending                : localize('Sending'),
        number_field_input_placeholder: localize('Enter mobile number'),
        number_field_label            : localize('Enter your mobile number:'),
        subtitle_qr                   : localize('Scan the QR code with your phone'),
        subtitle_sms                  : localize('Send this one-time link to your phone'),
        subtitle_url                  : localize('Open the link on your mobile'),
        title                         : localize('Get your secure link'),
        url_field_label               : localize('Copy the link to your mobile browser'),
    },
    linked_computer: {
        button_primary        : localize('Continue'),
        info                  : localize('Make sure§'),
        list_item_desktop_open: localize('2. Your desktop window stays open'),
        list_item_sent_by_you : localize('1. This link was sent by you'),
        subtitle              : localize('Continue with the verification'),
        title                 : localize('Linked to your computer'),
    },
    mobilePhrases: {
        photo_upload: {
            body_id_back      : localize('Take a photo of the back of your card'),
            body_id_front     : localize('Take a photo of the front of your card'),
            body_license_back : localize('Take a photo of the back of your license'),
            body_license_front: localize('Take a photo of the front of your license'),
            body_passport     : localize('Take a photo of your passport photo page'),
            body_selfie       : localize('Take a selfie showing your face'),
        },
        selfie_capture: {
            alert: {
                camera_inactive: {
                    detail:
                        localize('Take a photo using the <fallback>basic camera mode</fallback> instead'),
                },
                camera_not_working: {
                    detail:
                        localize('Take a photo using the <fallback>basic camera mode</fallback> instead'),
                },
            },
        },
        upload_guide: {
            button_primary: localize('Take a photo'),
            title         : localize('Passport photo page'),
        },
    },
    outro: {
        body : localize('Thank you'),
        title: localize('Verification complete'),
    },
    permission_recovery: {
        button_primary      : localize('Refresh'),
        info                : localize('Recovery'),
        list_header_cam     : localize('Follow these steps to recover camera access:'),
        list_item_action_cam:
            localize('Refresh this page to restart the identity verification process'),
        list_item_how_to_cam:
            localize('Grant access to your camera from your browser settings'),
        subtitle_cam: localize('Recover camera access to continue face verification'),
        title_cam   : localize('Camera access is denied'),
    },
    permission: {
        body_cam          : localize('We cannot verify you without using your camera'),
        button_primary_cam: localize('Enable camera'),
        subtitle_cam      :
            localize('When prompted, you must enable camera access to continue'),
        title_cam: localize('Allow camera access'),
    },
    photo_upload: {
        body_bank_statement : localize('Provide the whole document page for best results'),
        body_benefits_letter:
            localize('Provide the whole document page for best results'),
        body_bill             : localize('Provide the whole document page for best results'),
        body_government_letter:
            localize('Provide the whole document page for best results'),
        body_id_back      : localize('Upload back of card from your computer'),
        body_id_front     : localize('Upload front of card from your computer'),
        body_license_back : localize('Upload back of license from your computer'),
        body_license_front: localize('Upload front of license from your computer'),
        body_passport     : localize('Upload passport photo page from your computer'),
        body_selfie       : localize('Upload a selfie from your computer'),
        body_tax_letter   : localize('Provide the whole document page for best results'),
        button_take_photo : localize('Take photo'),
        button_upload     : localize('Upload'),
        title_selfie      : localize('Selfie'),
    },
    selfie_capture: {
        alert: {
            camera_inactive: {
                detail:
                    localize('Check that it is connected and functional. You can also <fallback>continue verification on your phone</fallback>'),
                detail_no_fallback:
                    localize('Make sure your device has a working camera'),
                title: localize('Camera not working?'),
            },
            camera_not_working: {
                detail:
                    localize('It may be disconnected. <fallback>Try using your phone instead</fallback>.'),
                detail_no_fallback: localize('Make sure your device\'s camera works'),
                title             : localize('Camera not working'),
            },
            timeout: {
                detail:
                    localize('Remember to press stop when you\'re done. <fallback>Redo video actions</fallback>'),
                title: localize('Looks like you took too long'),
            },
        },
        button_accessibility: localize('Take a photo'),
        frame_accessibility : localize('View from camera'),
        title               : localize('Take a selfie'),
    },
    selfie_confirmation: {
        image_accessibility: localize('Photo of your face'),
        subtitle           : localize('Make sure your selfie clearly shows your face'),
        title              : localize('Check selfie'),
    },
    selfie_intro: {
        button_primary        : localize('Continue'),
        list_accessibility    : localize('Tips to take a good selfie'),
        list_item_face_forward:
            localize('Face forward and make sure your eyes are clearly visible'),
        list_item_no_glasses: localize('Remove your glasses, if necessary'),
        subtitle            : localize('We\'ll compare it with your document'),
        title               : localize('Take a selfie'),
    },
    sms_sent: {
        info            : localize('Tips'),
        info_link_expire: localize('Your link will expire in one hour'),
        info_link_window: localize('Keep this window open while using your mobile'),
        link            : localize('Resend link'),
        subtitle        : localize('We\'ve sent a secure link to %{number}'),
        subtitle_minutes: localize('It may take a few minutes to arrive'),
        title           : localize('Check your mobile'),
    },
    switch_phone: {
        info             : localize('Tips'),
        info_link_expire : localize('Your mobile link will expire in one hour'),
        info_link_refresh: localize('Don\'t refresh this page'),
        info_link_window : localize('Keep this window open while using your mobile'),
        link             : localize('Cancel'),
        subtitle         : localize('Once you\'ve finished we\'ll take you to the next step'),
        title            : localize('Connected to your mobile'),
    },
    upload_guide: {
        button_primary           : localize('Upload photo'),
        image_detail_blur_alt    : localize('Example of a blurry document'),
        image_detail_blur_label  : localize('All details must be clear — nothing blurry'),
        image_detail_cutoff_alt  : localize('Example of a cut-off document'),
        image_detail_cutoff_label:
            localize('Show all details — including the bottom 2 lines'),
        image_detail_glare_alt  : localize('Example of a document with glare'),
        image_detail_glare_label: localize('Move away from direct light — no glare'),
        image_detail_good_alt   : localize('Document example'),
        image_detail_good_label : localize('The photo should clearly show your document'),
        subtitle                : localize('Scans and photocopies are not accepted'),
        title                   : localize('Upload passport photo page'),
    },
    welcome: {
        description_p_1:
            localize('To open a bank account, we will need to verify your identity.'),
        description_p_2: localize('It will only take a couple of minutes.'),
        next_button    : localize('Verify Identity'),
        title          : localize('Open your new bank account'),
    },
};
