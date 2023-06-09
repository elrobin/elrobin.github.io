
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"331",
  
  "macros":[{
      "function":"__u",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "convert_false_to":"false",
      "vtp_component":"QUERY",
      "vtp_queryKey":"debug_gdpr",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_decodeCookie":false,
      "vtp_name":"is_gdpr"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(window\u0026\u0026window.Atlantic\u0026\u0026window.Atlantic.page_info\u0026\u0026window.Atlantic.page_info.request\u0026\u0026window.Atlantic.page_info.request.is_gdpr?!0:!1)||(\"true\"===",["escape",["macro",0],8,16],"?!0:!1)||(\"1\"===",["escape",["macro",1],8,16],"?!0:!1)})();"]
    },{
      "function":"__v",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "convert_false_to":"false",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",2],
      "vtp_name":"consent_vendor_measurement_declined"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!!window.is_single_page_app})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atl_ccpa"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"1\"==",["escape",["macro",6],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||",["escape",["macro",2],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "convert_false_to":"false",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",8],
      "vtp_name":"any_consent_declined"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=43;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"universal_page_title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experiment_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experiment_variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_headline"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primary_author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"secondary_author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site_section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"top_category_full"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"top_category_one"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"top_category_two"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"top_category_three"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"top_category_four"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"editorial_project"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_advertiser"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_campaign_slug"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cds_mag_code",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cds_page_id",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"grapeshot_segments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_target_audience"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_advertiser_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_brand_integration"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_primary_page_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_secondary_page_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_topic_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_brand_kpis"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_content_kpis"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_other_meta"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_headline_character_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_headline_word_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_first_published_date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_first_published_time"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_first_published_datetime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_last_updated_datetime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_is_404"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"article-body-font-size"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_word_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_platform"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_layout"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watson_categories"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"atl_uuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"editorial_categories"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_subtype"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",59],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"notes_thread"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"channels"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canonical_url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canonical_url_hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content_source"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cds_response_key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BCSessionID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"ESI Page Meta Absent",
      "vtp_name":"page_meta_esi_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_gdpr"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"utc_offset"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blueconic_active_reader"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abt_experiment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abt_value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"template"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internal_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"[]",
      "vtp_name":"user_entitlements"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"],["map","fieldName","customTask","value",["macro",11]],["map","fieldName","title","value",["macro",12]],["map","fieldName","expId","value",["macro",13]],["map","fieldName","expVar","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",15]],["map","index","15","dimension",["macro",16]],["map","index","57","dimension",["macro",17]],["map","index","58","dimension",["macro",18]],["map","index","16","dimension",["macro",19]],["map","index","46","dimension",["macro",20]],["map","index","12","dimension",["macro",21]],["map","index","7","dimension",["macro",22]],["map","index","8","dimension",["macro",23]],["map","index","9","dimension",["macro",24]],["map","index","10","dimension",["macro",25]],["map","index","11","dimension",["macro",26]],["map","index","13","dimension",["macro",27]],["map","index","14","dimension",["macro",28]],["map","index","59","dimension",["macro",29]],["map","index","41","dimension",["macro",30]],["map","index","40","dimension",["macro",31]],["map","index","62","dimension",["macro",32]],["map","index","63","dimension",["macro",33]],["map","index","39","dimension",["macro",34]],["map","index","47","dimension",["macro",35]],["map","index","48","dimension",["macro",36]],["map","index","49","dimension",["macro",37]],["map","index","50","dimension",["macro",38]],["map","index","51","dimension",["macro",39]],["map","index","52","dimension",["macro",40]],["map","index","54","dimension",["macro",41]],["map","index","55","dimension",["macro",42]],["map","index","56","dimension",["macro",43]],["map","index","18","dimension",["macro",44]],["map","index","19","dimension",["macro",45]],["map","index","20","dimension",["macro",46]],["map","index","21","dimension",["macro",47]],["map","index","22","dimension",["macro",48]],["map","index","23","dimension",["macro",49]],["map","index","27","dimension",["macro",50]],["map","index","31","dimension",["macro",51]],["map","index","44","dimension",["macro",52]],["map","index","60","dimension",["macro",53]],["map","index","53","dimension",["macro",54]],["map","index","30","dimension",["macro",55]],["map","index","64","dimension",["macro",56]],["map","index","66","dimension",["macro",57]],["map","index","67","dimension",["macro",58]],["map","index","1","dimension",["macro",59]],["map","index","2","dimension",["macro",60]],["map","index","4","dimension",["macro",61]],["map","index","6","dimension",["macro",62]],["map","index","24","dimension",["macro",63]],["map","index","25","dimension",["macro",64]],["map","index","26","dimension",["macro",65]],["map","index","32","dimension",["macro",66]],["map","index","36","dimension",["macro",67]],["map","index","37","dimension",["macro",68]],["map","index","38","dimension",["macro",69]],["map","index","68","dimension",["macro",70]],["map","index","69","dimension",["macro",71]],["map","index","70","dimension",["macro",72]],["map","index","71","dimension",["macro",73]],["map","index","72","dimension",["macro",74]],["map","index","73","dimension",["macro",75]],["map","index","74","dimension",["macro",76]],["map","index","75","dimension",["macro",77]],["map","index","76","dimension",["macro",78]],["map","index","29","dimension",["macro",79]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-20189-19",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quantcast_labels"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",33],
      "vtp_map":["list",["map","key","218349","value","masthead-confirmation"],["map","key","214206","value","magazine-confirmation"],["map","key","217616","value","magazine-confirmation-gift"],["map","key","219874","value","magazine-order-form"],["map","key","217766","value","magazine-order-form-academic"],["map","key","219802","value","masthead-order-form"],["map","key","171696","value","magazine-order-form-gift"],["map","key","230350","value","magazine-order-form-gift-academic"],["map","key","172790","value","magazine-order-form-19-95"],["map","key","214133","value","magazine-order-form-choose-your-plan"],["map","key","215989","value","magazine-order-form-lightbox-15-percent-off"],["map","key","217549","value","magazine-order-form-29-50-welcome-series"],["map","key","218679","value","magazine-order-form-radio-discount"],["map","key","222270","value","magazine-order-form-event-attendee"],["map","key","227502","value","magazine-order-form-ab-control-standard"],["map","key","228789","value","magazine-order-form-foreign-service-rate"],["map","key","218495","value","magazine-order-form-employee-gift"],["map","key","221556","value","magazine-order-form-friends-and-family-gift"],["map","key","221642","value","magazine-order-form-emmerson-friends-and-family-gift"],["map","key","225434","value","magazine-order-form-mothers-day-gift"],["map","key","227531","value","magazine-order-form-free-gift"],["map","key","229960","value","magazine-order-form-free-gift-festival"],["map","key","227219","value","magazine-order-form-payment-hidden"],["map","key","222773","value","magazine-order-form-mlk-issue-sub"],["map","key","222849","value","magazine-order-form-mlk-single-issue"],["map","key","223002","value","magazine-order-form-mlk-included"],["map","key","223153","value","magazine-order-form-mlk-included-academic"],["map","key","232779","value","magazine-order-form-price-15-variant"],["map","key","232788","value","magazine-order-form-price-33-variant"],["map","key","217344","value","masthead-order-form-new-subs"],["map","key","217529","value","masthead-order-form-existing-subs"],["map","key","220000","value","masthead-order-form-no-print"],["map","key","221883","value","masthead-order-form-free-print-v2"],["map","key","222442","value","masthead-order-form-new-subs-copy"],["map","key","227543","value","magazine-confirmation-free-gift"],["map","key","222847","value","magazine-confirmation-with-mlk"],["map","key","222851","value","magazine-confirmation-mlk-single-issue"],["map","key","223007","value","magazine-confirmation-with-mlk-subscription"],["map","key","233105","value","magazine-order-form-price-variant-control"],["map","key","234239","value","magazine-order-form-two-for-one-holiday-gift"],["map","key","233192","value","magazine-order-form-single-gift-multi-title-gift"],["map","key","234243","value","magazine-confirmation-two-for-one-holiday-gift"],["map","key","233195","value","magazine-confirmation-single-gift-multi-title-gift"],["map","key","232292","value","magazine-order-form-drip-discount"],["map","key","235553","value","magazine-order-form-2019-new-year-special"],["map","key","238363","value","magazine-order-sem"],["map","key","238368","value","magazine-order-new-pricing-subscription"],["map","key","238372","value","magazine-order-discounted-subscription"],["map","key","238377","value","magazine-order-subscription-academic"],["map","key","239073","value","magazine-order-founders-day"],["map","key","238403","value","magazine-order-new-pricing-single-gift"],["map","key","239390","value","magazine-order-1857-single-gift"],["map","key","238613","value","magazine-order-MT-v2-single-gift"],["map","key","238362","value","magazine-order-new-pricing-pages-confirmation"]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_sponsored"
    },{
      "function":"__v",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "convert_false_to":"false",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",8],
      "vtp_name":"consent_vendor_measurement_declined"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atljwt"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=",["escape",["macro",86],8,16],",c=b.split(\".\")[1],d=c.replace(\/-\/g,\"+\").replace(\/_\/g,\"\/\"),e=decodeURIComponent(atob(d).split(\"\").map(function(a){return\"%\"+(\"00\"+a.charCodeAt(0).toString(16)).slice(-2)}).join(\"\")),a=JSON.parse(e)||{};if(a.uuid\u0026\u0026\"string\"==typeof a.uuid)return a.uuid}catch(f){}return null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"silverpop_recipient_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_subscription_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"krux_user"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"janrain_uuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletter_signup_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"data_layer_loaded"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"true\"==",["escape",["macro",93],8,16],"?!0:window.Atlantic\u0026\u0026window.Atlantic.page_info\u0026\u0026window.Atlantic.page_info.request\u0026\u0026\"undefined\"!==typeof window.Atlantic.page_info.request.is_gdpr?!window.Atlantic.page_info.request.is_gdpr:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consent_message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consent_object"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consent_value"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consent_target"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video_time"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video_article_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"time_on_page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engaged_time"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"link_click_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"link_click_target"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchased_item"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_order_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletter_signup_pagemodule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paywallCap"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paywallViews"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"onboarding_cohort"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"onboarding_action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"onboarding_message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dialogue.variantId"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bc_select_segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"autoadvance",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"silverid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"[]",
      "vtp_name":"blueconic_audiences"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"watson_categories_array"
    },{
      "function":"__j",
      "vtp_name":"Atlantic.page_info.is_instant"
    },{
      "function":"__c",
      "vtp_value":"17396"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"{}",
      "vtp_name":"simplereach_config"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"preview",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"moat_ivt"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nudgeTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gateTemplate"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atlpurchase"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.confirmation \u003E div:nth-of-type(3) \u003E div.col-sm-6:nth-child(1) \u003E p",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase_price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"splatform-page\"===Atlantic.page_info.view})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"[]",
      "vtp_name":"krux_segments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"janrain_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"articlebeta"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experiment_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"editorial_categories_array"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authors_array"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"krux_segment_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bounce_exchange_device_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.parent!==window?window.parent.location.hostname:\"isparent\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ia_document?\"fb\":\"notfb\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsored_renewal_campaign_vote_cast"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_value"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__ua",
      "priority":10000,
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":4
    },{
      "function":"__html",
      "priority":10000,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var p={get:function(){},map:function(a){return this},mapProp:function(a){return this}},q=function(a){return{get:function(){return a},map:function(d){return b(d(a))},mapProp:function(d){return b(a[d])}}},b=function(a){return\"undefined\"===typeof a||\"null\"===typeof a||\"\"===a||null===a?p:q(a)},c=function(a){return a.toLowerCase()},r=function(a){return a.length},e=function(a){return a.replace(\/\u003C[^\u003E]+\u003E\/g,\"\")},f=function(a){return a.replace(\/[^\\w\\s]\/g,\"\")},g=function(a){return function(d){return d.join(a)}},\nt=function(a){return a.length},u=function(a){return a.split(\/[ ,]+\/).length},l=function(a,b){return function(d){return d.substring(a,b)}},m=function(a){a=\"kxatlantic_\"+a;try{var d=window.localStorage}catch(v){d=null}return d?d[a]||\"\":navigator.cookieEnabled?(d=document.cookie.match(a+\"\\x3d([^;]*)\"))\u0026\u0026unescape(d[1])||\"\":\"\"},k={generateUUID:function(){var a=window.crypto||window.msCrypto,b=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\",c=new RegExp(\/[xy]\/g);return\"undefined\"!=typeof a\u0026\u0026\"undefined\"!=typeof a.getRandomValues?\nb.replace(c,function(b){var d=a.getRandomValues(new Uint8Array(1))[0]%16|0;b=\"x\"==b?d:d\u00263|8;return b.toString(16)}):b.replace(c,function(a){var b=16*Math.random()|0;a=\"x\"==a?b:b\u00263|8;return a.toString(16)})},getCookie:function(a){return(a=(new RegExp(\"(?:^|; )\"+encodeURIComponent(a)+\"\\x3d([^;]*)\")).exec(document.cookie))?a[1]:null},setCookie:function(a,b,c){var d=new Date(1E3*(Math.pow(2,31)-1));a=b+\"\\x3d\"+a+\"; expires\\x3d\"+d.toGMTString()+\"; path\\x3d\/\";void 0!==c\u0026\u0026(a+=\"; domain\\x3d\"+c);document.cookie=\na;return this.getCookie(b)},getUUID:function(){var a=\"atl_uuid\",b=this.getCookie(a);return b?b:this.setCookie(this.generateUUID(),a,\"theatlantic.com\")}},a={data_layer_loaded:\"true\"};a.universal_page_title=window.ia_document?ia_document.title:document.title;var n=new Date;a.utc_offset=\"function\"===typeof n.getTimezoneOffset?n.getTimezoneOffset():null;a.blueconic_id=",["escape",["macro",67],8,16],";if(window.Atlantic\u0026\u0026Atlantic.page_info){a.content_headline=b(Atlantic.page_info.title).map(c).map(e).get();a.primary_author=\nb(Atlantic.page_info.authors[0]).map(c).get();a.secondary_author=b(Atlantic.page_info.authors[1]).map(c).get();a.authors=b(Atlantic.page_info.authors).map(g(\" and \")).map(c).get();a.authors_array=b(Atlantic.page_info.authors).get();a.editorial_categories=b(Atlantic.page_info.categories).map(g(\",\")).map(c).get();a.editorial_categories_array=b(Atlantic.page_info.categories).get();a.content_id=b(Atlantic.page_info.article_id).get();a.page_version=b(Atlantic.page_info.version).get();a.content_type=b(Atlantic.page_info.view).get();\na.site_section=b(Atlantic.page_info.primary_channel).map(c).get();a.editorial_project=b(Atlantic.page_info.report).map(c).get();a.page_layout=b(Atlantic.page_info.layout).get();a.template=b(Atlantic.page_info.template).get();a.content_subtype=b(Atlantic.page_info.article_type).get();a.notes_thread=b(Atlantic.page_info.thread).map(c).get();a.channels=b(Atlantic.page_info.channels).map(g(\",\")).map(c).get();var h=b(Atlantic.page_info.canonical_url).get();a.canonical_url=h===window.location.href?null:\nh;a.canonical_url_hostname=null;b(h).get()\u0026\u0026-1===h.indexOf(\"",["escape",["macro",10],7],"\")\u0026\u0026(-1!==h.indexOf(\"http:\/\/\")||-1!==h.indexOf(\"https:\/\/\"))\u0026\u00262\u003Ch.split(\"\/\").length\u0026\u0026(a.canonical_url_hostname=b(h.split(\"\/\")[2]).get());b(Atlantic.page_info.is_freelance).get()?a.content_source=\"freelance\":b(Atlantic.page_info.is_licensed).get()\u0026\u0026(a.content_source=\"licensed\");b(Atlantic.page_info.is_404).get()?a.page_is_404=\"true\":(a.page_is_404=\"false\",a.content_headline_character_count=b(Atlantic.page_info.title).map(t).get(),\na.content_headline_word_count=b(Atlantic.page_info.title).map(u).get());a.content_first_published_date=b(Atlantic.page_info.date).map(l(0,10)).get();a.content_first_published_time=b(Atlantic.page_info.date).map(l(11,16)).get();a.content_first_published_datetime=b(Atlantic.page_info.date).get();a.content_platform=b(Atlantic.page_info.is_instant).get()?\"fb instant\":\"web\";a.sponsored_advertiser=b(Atlantic.page_info.advertiser).get();a.sponsored_campaign_slug=b(Atlantic.page_info.campaign_slug).get();\na.sponsored_campaign=b(Atlantic.page_info.campaign).get();a.sponsored_advertiser_category=b(Atlantic.page_info.advertiser_category).get();a.sponsored_brand_integration=b(Atlantic.page_info.brand_integration).get();a.sponsored_primary_page_type=b(Atlantic.page_info.primary_page_type).get();a.sponsored_secondary_page_type=b(Atlantic.page_info.secondary_page_type).get();a.sponsored_topic_category=b(Atlantic.page_info.topic_category).get();a.sponsored_brand_kpis=b(Atlantic.page_info.brand_kpis).get();\na.sponsored_content_kpis=b(Atlantic.page_info.content_kpis).get();a.sponsored_other_meta=b(Atlantic.page_info.other_meta).get();a.sponsored_target_audience=b(Atlantic.page_info.target_audience).get();a.is_sponsored=b(Atlantic.page_info.is_sponsored).get();e=b(Atlantic.page_info.request);c=e.mapProp(\"experiment_group\").get();e=e.mapProp(\"experiment_id\").get();a.experiment_name=c\u0026\u0026e?e+\".\"+c:null;a.experiment_id=e;a.experiment_variant=c;Atlantic.page_info.is_instant\u0026\u0026(a.ia_gtm_loaded=\"yes\")}window.Atlantic\u0026\u0026\nAtlantic.page_meta\u0026\u0026(Atlantic.article_metadata=Atlantic.page_meta.watson,c=b(Atlantic.page_meta),e=c.mapProp(\"watson\").mapProp(\"top_category\"),a.top_category_full=e.mapProp(\"full\").get(),a.top_category_one=e.mapProp(\"one\").get(),a.top_category_two=e.mapProp(\"two\").get(),a.top_category_three=e.mapProp(\"three\").get(),a.top_category_four=e.mapProp(\"four\").get(),a.grapeshot_segments=c.mapProp(\"adtargeting\").mapProp(\"grapeshot_segments\").map(g(\",\")).get(),a.watson_categories=c.mapProp(\"watson\").mapProp(\"categories\").map(g(\";\")).get(),\na.watson_categories_array=c.mapProp(\"watson\").mapProp(\"categories\").get(),a.content_last_updated_datetime=c.mapProp(\"article_last_updated\").get(),a.content_word_count=c.mapProp(\"article_word_count\").get());a.page_meta_esi_status=window.Atlantic\u0026\u0026void 0!==Atlantic.page_meta_esi?\"object\"===typeof Atlantic.page_meta_esi?Atlantic.page_meta_esi.error?\"ESI Page Meta Present with Error: \"+Atlantic.page_meta_esi.error:Atlantic.page_meta_esi.adtargeting?\"ESI Page Meta Present\":\"ESI Page Meta Present But Empty\":\n\"ESI Page Meta Present But Not Object: \"+typeof Atlantic.page_meta_esi:\"ESI Page Meta Missing\";window.Atlantic\u0026\u0026Atlantic.GTM?(Atlantic.GTM.simplereach\u0026\u0026Atlantic.GTM.simplereach.conf\u0026\u0026(a.simplereach_config=Atlantic.GTM.simplereach.conf,a.simplereach_config.page_url=\"",["escape",["macro",102],7],"\",a.simplereach_config.url=h),g=Atlantic.GTM.quantcastLabels,a.editorial_project\u0026\u0026(f=b(a.content_headline).map(f).get(),g.push(\"_campaign.branded.Editorial Projects.\"+a.editorial_project+\".\"+f)),a.site_section\u0026\u0026g.push(\"_campaign.branded.Site Section.\"+\na.site_section),a.quantcast_labels=g.join(\",\"),a.simplereach_config.pid=\"516eed0e4240cfbf3000002a\",Atlantic.page_info\u0026\u0026Atlantic.page_info.is_sponsored\u0026\u0026(a.simplereach_config.tags.push(Atlantic.page_info.sponsor),a.simplereach_config.tags.push(Atlantic.page_info.campaign_slug),a.simplereach_config.tags=a.simplereach_config.tags.concat(Atlantic.page_info.tags))):\"subscribe.theatlantic.com\"===document.location.hostname\u0026\u0026(a.quantcast_labels=\"The Atlantic.Subscription Pages\",",["escape",["macro",82],8,16],"\u0026\u0026(a.quantcast_labels+=\n\",The Atlantic.Subscription Pages.\"+",["escape",["macro",82],8,16],"),a.simplereach_config={pid:\"588a7859736b79b6670006cb\",reach_tracking:!1});(f=",["escape",["macro",130],8,16],")\u0026\u00260\u003Cf.length\u0026\u0026void 0!==window.atob\u0026\u0026(f=atob(f),a.silverpop_recipient_id=f.substring(0,f.length-1),window.history\u0026\u0026history.replaceState\u0026\u0026history.replaceState({},\"\",window.location.href.replace(\"silverid\\x3d\",\"silverid-ref\\x3d\")));window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);f=m(\"segs\");window.Krux.user=m(\"user\");window.Krux.segments=\nf?f.split(\",\"):[];a.krux_user=window.Krux.user;a.krux_segments=window.Krux.segments;a.krux_segment_count=b(window.Krux.segments).map(r).get();(function(){window.Blueconic||(Blueconic={segments:[]});try{if(window.localStorage){var b=localStorage.getItem(\"bcDFPTargetingParams\");if(b){var c=JSON.parse(b);for(b=0;b\u003Cc.length;b++)a[\"blueconic_\"+c[b].key]=c[b].value,window.Blueconic[c[b].key]=c[b].value;c=[];for(b=0;b\u003CBlueconic.segments.length;b++)\"DFP \"===Blueconic.segments[b].substring(0,4)\u0026\u0026c.push(Blueconic.segments[b]);\na.blueconic_active_reader=-1!=Blueconic.segments.indexOf(\"Atlantic Active Reader\")?!0:!1;window.localStorage.dfp_blueconic_targeting=c.slice(0,10).join(\",\")}}}catch(v){}})();a.any_consent_declined=",["escape",["macro",7],8,16],";a.consent_vendor_personalisation_declined=",["escape",["macro",7],8,16],";a.consent_vendor_ads_declined=",["escape",["macro",7],8,16],";a.consent_vendor_content_declined=",["escape",["macro",7],8,16],";a.consent_vendor_measurement_declined=",["escape",["macro",7],8,16],";",["escape",["macro",2],8,16],"\u0026\u0026window.__cmp?(__cmp(\"setConsentUiCallback\",\nfunction(a){a\u0026\u0026\"ui-closed\"===a.reason\u0026\u0026__cmp(\"getPublisherConsents\",null,function(a){var b=a.standardPurposeConsents[\"1\"]?k.getUUID():null,c=function(a,c){dataLayer.push({consent_message:\"cmp default\",consent_object:a,consent_target:\"quantcast cmp\",consent_value:c?\"1\":\"0\",event:\"Consent Updated\",atl_uuid:b})};c(\"publisher_data_collection\",a.standardPurposeConsents[\"1\"]);c(\"publisher_personalization\",a.standardPurposeConsents[\"2\"]);c(\"publisher_ad_delivery\",a.standardPurposeConsents[\"3\"]);c(\"publisher_content_delivery\",\na.standardPurposeConsents[\"4\"]);c(\"publisher_analytics\",a.standardPurposeConsents[\"5\"]);__cmp(\"getVendorConsents\",null,function(a){c(\"data_collection\",a.purposeConsents[\"1\"]);c(\"personalization\",a.purposeConsents[\"2\"]);c(\"ad_delivery\",a.purposeConsents[\"3\"]);c(\"content_delivery\",a.purposeConsents[\"4\"]);c(\"analytics\",a.purposeConsents[\"5\"])})})}),a.is_gdpr=!0,__cmp(\"getVendorConsents\",null,function(b){__cmp(\"getPublisherConsents\",null,function(c){a.atl_uuid=c.standardPurposeConsents[\"1\"]?k.getUUID():\nnull;b.purposeConsents[\"1\"]\u0026\u0026b.purposeConsents[\"2\"]||(a.consent_vendor_personalisation_declined=!0,a.any_consent_declined=!0);b.purposeConsents[\"1\"]\u0026\u0026b.purposeConsents[\"3\"]||(a.consent_vendor_ads_declined=!0,a.any_consent_declined=!0);b.purposeConsents[\"1\"]\u0026\u0026b.purposeConsents[\"4\"]||(a.consent_vendor_content_declined=!0,a.any_consent_declined=!0);b.purposeConsents[\"1\"]\u0026\u0026b.purposeConsents[\"5\"]||(a.consent_vendor_measurement_declined=!0,a.any_consent_declined=!0);a.event=\"Data Layer Loaded\";dataLayer.push(a)})})):\n(a.is_gdpr=!1,a.atl_uuid=a.any_consent_declined?null:k.getUUID(),a.event=\"Data Layer Loaded\",dataLayer.push(a))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__csm",
      "once_per_load":true,
      "vtp_clientId":"6463921",
      "tag_id":11
    },{
      "function":"__qcm",
      "once_per_load":true,
      "vtp_pcode":"p-b0K-eQJGBXxXE",
      "vtp_labels":["macro",81],
      "tag_id":18
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1017041028",
      "vtp_conversionLabel":"RvpXCIzS-XYQhKH75AM",
      "vtp_url":["macro",83],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":22
    },{
      "function":"__gclidw",
      "once_per_load":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":23
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/beacon.krxd.net\/event.gif?event_id=Ljnn5KGl\u0026event_type=clk",
      "tag_id":26
    },{
      "function":"__opt",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-NDLR5CM",
      "vtp_gaSettings":["macro",80],
      "tag_id":29
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"gtm",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"load",
      "vtp_eventLabel":"user data",
      "vtp_dimension":["list",["map","index","17","dimension",["macro",87]],["map","index","61","dimension",["macro",88]],["map","index","34","dimension",["macro",89]],["map","index","35","dimension",["macro",90]],["map","index","36","dimension",["macro",67]],["map","index","42","dimension",["macro",91]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"newsletter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"subscribe",
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"read",
      "vtp_eventLabel":"completion",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"scroll",
      "vtp_eventLabel":["template",["macro",97],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/data-cdn.theatlantic.com\/consent.gif?email=",["escape",["macro",98],12],"\u0026msg=",["escape",["macro",99],12],"\u0026obj=",["escape",["macro",100],12],"\u0026value=",["escape",["macro",101],12],"\u0026location=",["escape",["macro",102],12],"\u0026unit=atlantic\u0026target=",["escape",["macro",103],12],"\u0026atluuid=",["escape",["macro",56],12]],
      "vtp_cacheBusterQueryParam":"r",
      "vtp_randomNumber":["macro",104],
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",105],
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",106],
      "vtp_eventLabel":["template",["macro",107],": ",["macro",15]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",108],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",108]],["map","index","2","metric",["macro",109]]],
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"unloaded",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",110],
      "vtp_eventLabel":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",112],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"details view",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"front end interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"order count",
      "vtp_eventLabel":["macro",117],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"newsletter-subscription-form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"subscribe",
      "vtp_eventLabel":["template",["macro",118],": ",["macro",92]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__opt",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-WNW7W9X",
      "vtp_gaSettings":["macro",80],
      "tag_id":76
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":77
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",120],
      "vtp_eventCategory":"meter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"count",
      "vtp_eventLabel":["macro",119],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventValue":["macro",120],
      "vtp_eventCategory":["macro",121],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"eCommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",121],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1017041028",
      "vtp_conversionLabel":"RNG6CM3Gm60BElSh-QD",
      "vtp_url":["macro",83],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",123],
      "vtp_eventCategory":"Onboarding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",124],
      "vtp_eventLabel":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Blueconic Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":["macro",127],
      "vtp_eventLabel":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":602
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Blueconic",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Segments",
      "vtp_dimension":["list",["map","index","79","dimension",["macro",128]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":607
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WVCZMTX","nickname","Trivago"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",96],"\/sponsored\/trivago-2018\/the-honeymoon-sequel\/1892\/",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":621
    },{
      "function":"__evl",
      "vtp_elementId":"article-end",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"2000",
      "vtp_uniqueTriggerId":"7014765_182",
      "tag_id":622
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"7014765_186",
      "vtp_enableTriggerStartOption":true,
      "tag_id":623
    },{
      "function":"__jel",
      "tag_id":624
    },{
      "function":"__hl",
      "tag_id":625
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"7014765_439",
      "vtp_enableTriggerStartOption":true,
      "tag_id":626
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"7014765_499",
      "vtp_enableTriggerStartOption":true,
      "tag_id":627
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/cdn.blueconic.net\/theatlantic.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript class=\"kxct\" data-id=\"qrixx06d0\" data-timing=\"async\" data-version=\"3.0\" type=\"text\/gtmscript\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);window.Atlantic=window.Atlantic||{};\n(function(){function e(a,b){if(document.querySelectorAll\u0026\u0026document.addEventListener){a=document.querySelectorAll(a);for(var f=function(a){this.getAttribute\u0026\u0026b(this.getAttribute(\"data-share\"))},c=0;c\u003Ca.length;c++)a[c].addEventListener(\"click\",f),a[c].addEventListener(\"tap\",f)}}if(window.Atlantic.page_info){var a=window.Atlantic.page_info;window.Atlantic.KruxDataLayer={path:window.location.pathname,domain:window.location.hostname,authors:a.authors,canonical_url:a.canonical_url,channels:a.channels,date:a.date,\ndescription:a.description,image:a.image,kicker:a.kicker,original_url:a.original_url,primary_channel:a.primary_channel,report:a.report,tags:a.tags,title:a.title,seo_title:a.seo_title,view:a.view,article_id:a.article_id,article_type:a.article_type,is_sponsored:a.is_sponsored,is_freelance:a.is_freelance}}else window.Atlantic.KruxDataLayer={path:window.location.pathname,domain:window.location.hostname};window.Blueconic\u0026\u0026Blueconic.segments\u0026\u0026(window.Atlantic.KruxDataLayer.blueconic_segments=Blueconic.segments);\nif(window.Atlantic.User\u0026\u0026(a=window.Atlantic.User,window.Atlantic.KruxDataLayer.user={print:-1\u003Ca.entitlements.indexOf(\"print\")?\"yes\":\"no\",ehub:-1\u003Ca.entitlements.indexOf(\"adfree\")?\"yes\":\"no\",newsletters:\"no\"},!1===a.isLoggedIn()))for(var b in window.Atlantic.KruxDataLayer.user)window.Atlantic.KruxDataLayer.user[b]=\"signed-out\";b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===location.protocol?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/qrixx06d0.js\";a=document.getElementsByTagName(\"script\")[0];\na.parentNode.insertBefore(b,a);window.Atlantic\u0026\u0026Atlantic.page_info\u0026\u0026Atlantic.page_info.report\u0026\u0026window.Krux(\"ns:atlantic\",\"admEvent\",\"L5HGjjxR\",{project_name:Atlantic.page_info.report});var d={facebook:\"KprCnYga\",twitter:\"KprDGKs_\",linkedin:\"KprE2Sd6\",email:\"KprFEE7b\",print:\"Lcl38W0M\"};e(\"[data-share]\",function(a){d[a]\u0026\u0026window.Krux(\"ns:atlantic\",\"admEvent\",d[a],{})});e(\"a[href^\\x3d'mailto:?']\",function(a){window.Krux(\"ns:atlantic\",\"admEvent\",d.email,{})});b=",["escape",["macro",2],8,16],";var c=",["escape",["macro",7],8,16],";\nwindow.__cmp\u0026\u0026b?__cmp(\"getVendorConsents\",null,function(a){a={idt:\"device\",dt:\"kxcookie\",dc:a.purposeConsents[\"1\"],al:a.purposeConsents[\"5\"],tg:a.purposeConsents[\"3\"]\u0026\u0026!c,cd:a.purposeConsents[\"2\"]\u0026\u0026!c,sh:a.purposeConsents[\"3\"],re:!1};window.Krux(\"ns:atlantic\",\"consent:set\",a)}):b||(b={idt:\"device\",dt:\"kxcookie\",dc:!0,al:!0,tg:!c,cd:!0,sh:!c,re:!1},window.Krux(\"ns:atlantic\",\"consent:set\",b))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",74,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1407501962855831\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{blueconic_segments:",["escape",["macro",131],8,16],",cds_page_name:",["escape",["macro",82],8,16],",utm_campaign:",["escape",["macro",132],8,16],",sponsored_campaign:",["escape",["macro",30],8,16],",article_categories:",["escape",["macro",133],8,16],",is_instant:",["escape",["macro",134],8,16],",site_section:",["escape",["macro",21],8,16],"});\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fbAsyncInit=function(){FB.init({appId:\"100770816677686\",xfbml:!1,version:\"v2.7\"})};(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src=\"\/\/connect.facebook.net\/en_US\/sdk.js\",d.parentNode.insertBefore(a,d))})(document,\"script\",\"facebook-jssdk\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1407501962855831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(window.Atlantic\u0026\u0026Atlantic.page_info\u0026\u0026!Atlantic.page_info.is_instant){var _sf_async_config=_sf_async_config||{};_sf_async_config.uid=",["escape",["macro",135],8,16],";_sf_async_config.domain=function(){var a=window.location.host,b=location.search.match(\/utm_(?:campaign|source)=fb\\d{4}_\\d+\/i);null!==b\u0026\u0026(a=a.replace(\"www.\",\"paid.\"));return a}();_sf_async_config.flickerControl=!1;var _sf_startpt=(new Date).getTime(),_cbq=window._cbq=window._cbq||[];-1\u003C",["escape",["macro",79],8,16],".indexOf(\"masthead\")||-1\u003C",["escape",["macro",79],8,16],".indexOf(\"print\")||\n-1\u003C",["escape",["macro",79],8,16],".indexOf(\"adfree\")?_cbq.push([\"_acct\",\"paid\"]):-1\u003C",["escape",["macro",79],8,16],".indexOf(\"account\")?_cbq.push([\"_acct\",\"lgdin\"]):_cbq.push([\"_acct\",\"anon\"]);if(\"homepage\"===Atlantic.page_info.view){var script=document.createElement(\"script\");script.type=\"text\/javascript\";script.async=!0;script.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat_mab_image.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(script,s)}_sf_async_config.title=Atlantic.page_info.title;\n_sf_async_config.path=Atlantic.page_info.path||window.location.pathname;Atlantic.opts\u0026\u0026Atlantic.opts.chartbeatOverrides\u0026\u0026(Atlantic.opts.chartbeatOverrides.path\u0026\u0026(_sf_async_config.path=Atlantic.opts.chartbeatOverrides.path),Atlantic.opts.chartbeatOverrides.title\u0026\u0026(_sf_async_config.title=Atlantic.opts.chartbeatOverrides.title));_sf_async_config.playerdomain=\"www.theatlantic.com\";_sf_async_config.sections=function(a){var b=[];switch(a.article_type){case \"note\":case \"thread\":b.push(\"notes\");break;case \"blog\":case \"citylab\":case \"wire\":break;\ncase \"\":b.push(a.primary_channel);default:b.push(a.article_type)}b=b.concat(a.channels);Atlantic.page_info.version\u0026\u0026b.push(\"Article \"+Atlantic.page_info.version);return b.join(\",\")}(Atlantic.page_info);_sf_async_config.authors=Atlantic.page_info.authors.join(\",\");Atlantic.page_info.is_sponsored\u0026\u0026(_sf_async_config.zone=\"sponsored\");Atlantic.page_info.sponsor\u0026\u0026(_sf_async_config.sponsorName=Atlantic.page_info.sponsor);window._sf_endpt=(new Date).getTime();_sf_async_config.ytApikey=\"AIzaSyDP5dqEZLyedSSUKle2MCEtXyN6ppCmx8Y\";\nvar _cbv=window._cbv||(window._cbv=[]);window.addEventListener(\"YouTube:onReady\",function(a){_cbv.push(a.detail.iframeTarget)})};\u003C\/script\u003E\n\n\u003Cscript data-gtmsrc=\"\/\/static.chartbeat.com\/js\/chartbeat_video.js\" async=\"async\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__reach_config=",["escape",["macro",136],8,16],";",["escape",["macro",134],8,16],"\u0026\u0026(__reach_config.ref_url=\"https:\/\/www.facebook.com\/\",__reach_config.page_url=null,__reach_config.tags\u0026\u0026__reach_config.tags.push(\"FB_Instant\"));(function(){if(!",["escape",["macro",137],8,16],"\u0026\u0026\"yes\"!==",["escape",["macro",138],8,16],"){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/d8rk54i4mohrb.cloudfront.net\/js\/reach.js\";(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(window.Atlantic\u0026\u0026Atlantic.page_info){var _sf_async_config={};_sf_async_config.uid=",["escape",["macro",135],8,16],";_sf_async_config.domain=\"theatlantic.com\";_sf_async_config.authors=Atlantic.page_info.authors.join(\",\");_sf_async_config.useCanonical=!1;window._sf_endpt=(new Date).getTime()};\u003C\/script\u003E\n\u003Cscript defer data-gtmsrc=\"\/\/static.chartbeat.com\/js\/chartbeat_fia.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(window.Atlantic\u0026\u0026Atlantic.User){var userdl={};userdl.user_entitlements=Atlantic.User.entitlements;userdl.user_subscription_status=userdl.user_entitlements?userdl.user_entitlements.join(\",\"):void 0;userdl.janrain_uuid=Atlantic.User.getJanrainUUID();userdl.event=\"User Data Loaded\";dataLayer.push(userdl)}\nwindow.addEventListener(\"system:ready\",function(a){window.Atlantic\u0026\u0026Atlantic.User\u0026\u0026(a={},a.user_entitlements=Atlantic.User.entitlements,a.user_subscription_status=a.user_entitlements?a.user_entitlements.join(\",\"):void 0,a.janrain_uuid=Atlantic.User.getJanrainUUID(),a.event=\"User Data Loaded\",dataLayer.push(a))});window.gtm_video_time=0;window.addEventListener(\"product:interaction\",function(a){a.detail\u0026\u0026dataLayer.push({event:\"Front End Interaction\",event_action:a.detail.action,event_label:a.detail.label})});\nwindow.addEventListener(\"nudge:interaction\",function(a){a.detail\u0026\u0026dataLayer.push({event:\"Nudge Interaction\",event_category:\"Nudge Interaction\",event_action:a.detail.action,event_label:a.detail.label})});window.addEventListener(\"gateway:interaction\",function(a){a.detail\u0026\u0026dataLayer.push({event:\"Gateway Interaction\",event_category:\"Gateway Interaction\",event_action:a.detail.action,event_label:a.detail.label})});\nif(window.Atlantic\u0026\u0026window.Atlantic.meter_events\u0026\u0026window.Atlantic.meter_events instanceof Array)for(var i=0;i\u003Cwindow.Atlantic.meter_events.length;i++){var event_details=window.Atlantic.meter_events[i];dataLayer.push({event:\"Paywall Event\",event_action:event_details.action,event_label:event_details.label,event_value:event_details.value})}\nwindow.addEventListener(\"paywall:interaction\",function(a){a.detail\u0026\u0026dataLayer.push({event:\"Paywall Event\",event_action:a.detail.action,event_label:a.detail.label,event_value:a.detail.value})});\nif(",["escape",["macro",139],8,16],"||",["escape",["macro",140],8,16],"){var paywall_event_name=null,event_action=null;",["escape",["macro",139],8,16],"?(paywall_event_name=\"Nudge Template Set\",event_action=\"nudge:display\"):",["escape",["macro",140],8,16],"\u0026\u0026(paywall_event_name=\"Gateway Template Set\",event_action=\"gateway:display\");dataLayer.push({event:paywall_event_name,event_category:paywall_event_name,event_action:event_action})}\nwindow.addEventListener(\"YouTube:onStateChange\",function(a){if(a.detail){var b=function(){window.gtm_video_start\u0026\u0026(window.gtm_video_time+=Math.round((new Date).getTime()\/1E3)-window.gtm_video_start,window.gtm_video_start=null);return window.gtm_video_time};1===a.detail.data?(window.gtm_video_start=Math.round((new Date).getTime()\/1E3),dataLayer.push({event:\"Video Event\",video_status:\"playing\",video_article_id:a.detail.article_id})):2===a.detail.data?dataLayer.push({event:\"Video Event\",video_status:\"paused\",\nvideo_time:b(),video_article_id:a.detail.article_id}):3===a.detail.data?dataLayer.push({event:\"Video Event\",video_status:\"buffering\",video_time:b(),video_article_id:a.detail.article_id}):0===a.detail.data\u0026\u0026dataLayer.push({event:\"Video Event\",video_status:\"completed\",video_time:b(),video_article_id:a.detail.article_id})}});\nwindow.addEventListener(\"newsletter:signup\",function(a){dataLayer.push({email:a.detail.email,event:\"Newsletter Subscription\",newsletter_signup_id:a.detail.newsletter,newsletter_signup_pagemodule:a.detail.pagemodule});dataLayer.push({consent_message:a.detail.message,consent_object:a.detail.objective,consent_target:a.detail.newsletterName+\": \"+a.detail.newsletter,consent_value:\"1\",event:\"Consent Updated\"})});window.moatAtlanticCallback=function(a){\"load\"===a.evt\u0026\u0026(a=0===a.n?\"no\":\"yes\",dataLayer.push({moat_ivt:a}))};\nwindow.addEventListener(\"click\",function(a){for(var b=[],c=[],d=null,f=null,h=null,g=null,l=a.target.getAttribute(\"data-name\"),k=null,m=String(a.target.text||a.target.textContent).trim(),e=a.target;e;e=e.parentElement){if(!e||!e.nodeName)return;a=e.nodeName.toLowerCase();null!==d||\"a\"!=a\u0026\u0026\"button\"!==a?\"button click\"===d\u0026\u0026\"form\"===a\u0026\u0026(d=e.getAttribute(\"action\")||d):d=\"a\"===a?e.getAttribute(\"href\"):\"button click\";null!==e.getAttribute(\"class\")\u0026\u0026((e.getAttribute(\"class\").startsWith(\"c-nudge\")||e.getAttribute(\"class\").startsWith(\"c-gate\"))\u0026\u0026\nc.unshift(e.getAttribute(\"class\")),null===f\u0026\u0026(e.getAttribute(\"class\").startsWith(\"c-nudge\")?(f=\"Nudge Link Click\",h=\"Nudge Interaction\",g=\"nudge:click\"):e.getAttribute(\"class\").startsWith(\"c-gate\")\u0026\u0026(f=\"Gateway Link Click\",h=\"Gateway Interaction\",g=\"gateway:click\")));e.getAttribute(\"data-name\")\u0026\u0026(k=e.getAttribute(\"data-name\"));e.getAttribute(\"id\")\u0026\u0026b.unshift(e.getAttribute(\"id\"))}null!==d\u0026\u0026(0==d.replace(\" \",\"\").toLowerCase().indexOf(\"javascript:\")\u0026\u0026(d=\"javascript click\"),0\u003Cc.length\u0026\u0026dataLayer.push({event:f,\nevent_category:h,event_action:g+\" \"+m,event_label:d}),dataLayer.push({event:\"Link Click\",link_click_target:d,link_click_location:b.join(\" \/ \")||\"(unknown)\"}));if(null!==l||null!==k)b=l||k,c=b.indexOf(\":\"),c=-1\u003Cc?b.substr(0,c):null,\"nav:\"===b.slice(0,4)?dataLayer.push({event:\"Click Element\",event_category:\"Page\",event_action:\"Navigation\",event_label:b.slice(4)}):null!==c\u0026\u0026dataLayer.push({event:\"Click Element\",event_category:\"Page\",event_action:c,event_label:b})});\nwindow.addEventListener(\"click\",function(a){var b=[],c=null,d=null,f=null,h=null;for(a=a.target;a;a=a.parentElement){if(!a||!a.nodeName)return;var g=a.nodeName.toLowerCase();null!==c||\"a\"!=g\u0026\u0026\"button\"!==g?\"button click\"===c\u0026\u0026\"form\"===g\u0026\u0026(c=a.getAttribute(\"action\")||c):c=\"a\"===g?a.getAttribute(\"href\"):\"button click\";a.getAttribute(\"data-name\")\u0026\u0026(g=a.getAttribute(\"data-name\"),null!==g\u0026\u0026b.unshift(g));f||(f=a.getAttribute(\"data-action\")||null);d||(d=a.getAttribute(\"data-label\")||null);h||(h=a.getAttribute(\"data-category\")||\nnull)}b=0\u003Cb.length?b.join(\".\"):\"\";null!==c\u0026\u0026(0==c.replace(\" \",\"\").toLowerCase().indexOf(\"javascript:\")\u0026\u0026(c=\"javascript click\"),d=null===d?c:d,f=null===f?\"link\":f);h\u0026\u0026(c={event:\"Click Element\",event_category:h,event_action:b+\":click\"+(f?\"-\"+f:\"\"),event_label:d},dataLayer.push(c))});window.gtm_loadstart=Math.round((new Date).getTime()\/1E3);window.gtm_engagementTime=0;\n(function(){var a=new Date,b=function(){a=new Date};window.addEventListener(\"click\",b);window.addEventListener(\"mousedown\",b);window.addEventListener(\"mousemove\",b);window.addEventListener(\"scroll\",b);window.addEventListener(\"touchstart\",b);if(\"undefined\"!==typeof document.hidden){var c=\"hidden\";var d=\"visibilitychange\"}else\"undefined\"!==typeof document.mozHidden?(c=\"mozHidden\",d=\"mozvisibilitychange\"):\"undefined\"!==typeof document.msHidden?(c=\"msHidden\",d=\"msvisibilitychange\"):\"undefined\"!==typeof document.webkitHidden\u0026\u0026\n(c=\"webkitHidden\",d=\"webkitvisibilitychange\");d\u0026\u0026document.addEventListener(d,function(){document[c]||b()});d=function(){1E4\u003E=new Date-a\u0026\u0026window.gtm_engagementTime++};setInterval(d,1E3)})();window.addEventListener(\"beforeunload\",function(a){a=Math.round((new Date).getTime()\/1E3)-window.gtm_loadstart;dataLayer.push({event:\"Page Unload\",time_on_page:a,engaged_time:window.gtm_engagementTime})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cstyle\u003E.async-hide { opacity: 0 !important} \u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,b,d,e,f,a,g,h,k){b.className+=\" \"+d;a.start=1*new Date;a.end=g=function(){b.className=b.className.replace(RegExp(\" ?\"+d),\"\")};(c[e]=c[e]||[]).hide=a;setTimeout(function(){g();a.end=null},f);a.timeout=f})(window,document.documentElement,\"async-hide\",\"dataLayer\",4E3,{\"GTM-56LJR35\":!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(!window.heap){window.heap=window.heap||[];heap.load=function(b,c){window.heap.appid=b;window.heap.config=c=c||{};var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cdn.heapanalytics.com\/js\/heap-\"+b+\".js\";var d=document.getElementsByTagName(\"script\")[0];d.parentNode.insertBefore(a,d);a=function(a){return function(){heap.push([a].concat(Array.prototype.slice.call(arguments,0)))}};d=\"addEventProperties addUserProperties clearEventProperties identify removeEventProperty setEventProperties track unsetEventProperty\".split(\" \");\nfor(var e=0;e\u003Cd.length;e++)heap[d[e]]=a(d[e])};heap.load(\"3180826004\");var g={init:function(){this.milestones=[25,50,75,100];this.interval=window.setInterval(this.tick.bind(this),2E3)},tick:function(){var b=$(window).height()+window.pageYOffset,c=$(\"body\").height();b=b\/c*100;for(var a=0;a\u003Cthis.milestones.length;a++)c=this.milestones[a],b\u003Ec\u0026\u0026(this.milestones.shift(),heap.track(\"scroll depth\",{percent:c}));0===this.milestones.length\u0026\u0026window.clearInterval(this.interval)}};g.init();var f=",["escape",["macro",31],8,16],";\nheap.track(\"page enter\",{campaign:f});window.addEventListener(\"beforeunload\",function(b){heap.track(\"page exit\",{campaign:f})})}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript id=\"twitter-wjs\" data-gtmsrc=\"\/\/platform.twitter.com\/widgets.js\" async=\"async\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(f,c){var d=c.getElementsByTagName(\"script\")[0],a=c.createElement(\"script\");a.async=1;a.src=\"\/\/tru.am\/scripts\/ta-pagesocial-sdk.js\";var e=function(){var a=document.location;a=a.hostname.toLowerCase();var b;-1\u003Ca.indexOf(\"theatlantic.com\")\u0026\u0026(b=\"1373\");b\u0026\u0026f.TRUE_ANTHEM.configure(b)};a.addEventListener?a.addEventListener(\"load\",e,!1):a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}\u0026\u0026(a.onreadystatechange=null,e())};d.parentNode.insertBefore(a,d)})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a,d){var b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.src=\"\/\/tru.am\/scripts\/ta-pagesocial-sdk.js\";a.async=1;a.addEventListener(\"load\",function(){c.TRUE_ANTHEM.configure(d)},!1);b.parentNode.insertBefore(a,b)})(window,document,\"1373\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=function(a,b){var c=new Date;c.setTime(c.getTime()+864E5);c=\"expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+\";\"+c+\";secure;domain\\x3d.theatlantic.com;path\\x3d\/\"},a=document.getElementById(\"engage\");a\u0026\u0026(a.addEventListener(\"input\",function(a){if(a.target\u0026\u0026a.target.getAttribute(\"id\")){var c=a.target.getAttribute(\"id\");\"cds_email\"===c\u0026\u0026(b(\"purchase_cds_email\",a.target.value),dataLayer.push({email:a.target.value}))}}),a=document.getElementsByName(\"cds_email\"),0\u003Ca.length\u0026\u0026a[0].value\u0026\u0026\n(b(\"purchase_cds_email\",a[0].value),dataLayer.push({email:a[0].value})))})();\n(function(){var b=[],a=",["escape",["macro",82],8,16],"\u0026\u002619\u003C=",["escape",["macro",82],8,16],".length?",["escape",["macro",82],8,16],".substring(0,19):null;if(\"magazine-order-form\"==a){a=-1!=",["escape",["macro",82],8,16],".indexOf(\"-gift\");var c=-1!=",["escape",["macro",82],8,16],".indexOf(\"-academic\"),d=\"Regular\";a?d=\"Gift\":c\u0026\u0026(d=\"Academic\");a=\"Magzine Subscription\/\"+d;b.push({name:\"The Atlantic Print\",category:a});b.push({name:\"The Atlantic Digital\",category:a});b.push({name:\"The Atlantic Print + Digital\",category:a})}else\"masthead-order-form\"==a\u0026\u0026\n(b.push({name:\"The Masthead\",category:\"Membership\/Masthead + Digital + Print\/Annual\"}),b.push({name:\"The Masthead\",category:\"Membership\/Masthead + Digital\/Annual\"}),b.push({name:\"The Masthead\",category:\"Membership\/Masthead + Digital + Print\/Monthly\"}),b.push({name:\"The Masthead\",category:\"Membership\/Masthead + Digital\/Monthly\"}));0\u003Cb.length\u0026\u0026dataLayer.push({event:\"Product Details View\",ecommerce:{detail:{products:b}}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.on_atlantic_purchase=function(a){dataLayer.push({event:\"Count CDS Orders\",cds_order_count:a?a.length:0});if(a\u0026\u00260!==a.length){for(var b=[],d=a[0].orderNumber,g=a[0].product,f=0,e=0;e\u003Ca.length;e++){var c=a[e];f+=c.orderValue?c.orderValue:0;b.push({name:c.product,variant:c.variant,price:c.orderValue,quantity:c.quantity,category:c.category,dimension65:c.promotionKey})}dataLayer.push({event:\"Purchase\",purchased_item:g,purchase_price:f,ecommerce:{purchase:{actionField:{id:d},products:b}}})}};\n(function(){var a=function(a){return(a=(new RegExp(\"(?:^|; )\"+encodeURIComponent(a)+\"\\x3d([^;]*)\")).exec(document.cookie))?a[1]:null},b=function(a){document.cookie=a+\"\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;domain\\x3d.theatlantic.com;path\\x3d\/\"};if(a=a(\"purchase_cds_email\")){b(\"atlpurchase\");b(\"purchase_cds_email\");var d=",["escape",["macro",82],8,16],"\u0026\u0026",["escape",["macro",142],8,16],"?",["escape",["macro",142],8,16],":\"\";b=document.createElement(\"script\");b.src=\"https:\/\/api.atlanticinsights.com\/purchases\/recent?email\\x3d\"+\nencodeURIComponent(a)+\"\\x26account\\x3d\"+encodeURIComponent(d);a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})();\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.fbq\u0026\u0026fbq(\"track\",\"Purchase\",{currency:\"USD\",value:",["escape",["macro",143],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.gtm_bouceExchangeLoaded=function(a,b){a||dataLayer.push({bounce_exchange_device_id:b.IDs.deviceID})};(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.setAttribute(\"id\",\"c.js\");a.setAttribute(\"data-cb\",\"gtm_bouceExchangeLoaded\");a.setAttribute(\"data-gdis\",\"1\");a.setAttribute(\"data-apikey\",\"2ky2KT\");a.setAttribute(\"data-externalID\",",["escape",["macro",56],8,16],");a.src=\"https:\/\/pixel.cdnwidget.com\/cdn\/c.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.fbq\u0026\u0026fbq(\"trackCustom\",\"Newsletter Signup\",{newsletter:",["escape",["macro",92],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.fbq\u0026\u0026fbq(\"trackCustom\",\"Scroll Depth\",{depth:",["escape",["macro",97],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.blueConicClient\u0026\u0026blueConicClient.event.publish(\"scroll_depth_change\",[",["escape",["macro",97],8,16],"])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){a.kwa||(a.kwa=function(){(a.kwa.q=a.kwa.q||[]).push(arguments)});se=b.createElement(\"script\");fs=b.scripts[0];se.src=\"https:\/\/cdn.keywee.co\/dist\/analytics-1.3.4.min.js\";fs.parentNode.insertBefore(se,fs)})(window,document);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ekwa(\"initialize\",82);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){a.kwa||(a.kwa=function(){(a.kwa.q=a.kwa.q||[]).push(arguments)});se=b.createElement(\"script\");fs=b.scripts[0];se.src=\"https:\/\/cdn.keywee.co\/dist\/analytics-1.3.4.min.js\";fs.parentNode.insertBefore(se,fs)})(window,document);kwa(\"initialize\",82);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function h(b){var a=b=b.replace(\":\",\"\");try{for(var c=0;100\u003Ec\u0026\u0026(b=decodeURIComponent(b),a!=b)\u0026\u0026!b.match(\/^http(s)?:\/);c++)a=b}catch(k){}return b.replace(\/(^\\s+|\\s+$)\/g,\"\")}try{if(!location||!location.hostname||!location.pathname)return!1;var d=document.location.hostname.replace(\/^www\\.\/,\"\"),p=function(){for(var b,a=document.getElementsByTagName(\"meta\"),c,k=0,d=a.length;k\u003Cd;k++)if(c=a[k],\"og:title\"===c.getAttribute(\"property\")){b=c.getAttribute(\"content\");break}b||(b=document.title||\"Untitled\");\nreturn b}(),a={};a=function(b,a,c){a=window\u0026\u0026window.Atlantic\u0026\u0026window.Atlantic.page_info;b.l1=a\u0026\u0026a.sponsor||\"Sponsor Not Found\";b.l2=a\u0026\u0026a.campaign||\"Campaign Not Found\";b.l3=c;b.l4=\"__page__\";c=a\u0026\u0026a.tags;var d;c\u0026\u0026\"string\"===typeof c?d=c:c\u0026\u0026(d=c[0]);c=document\u0026\u0026document.location\u0026\u0026document.location.href\u0026\u0026document.location.href.match(\/utm_source=([^?\u0026;#]*)(?:$|[?\u0026;#])\/);b.zctCat=d||\"Category Type Not Found\";b.zctUTM=c\u0026\u0026c[1]||\"Unavailable\";return b}(a,d,p);var l=(new Date).getTime(),m=Math.floor(Math.random()*\nMath.pow(10,12));a.t=l;a.de=m;a.zMoatAB_SNPT=!0;d=[];var v=(new Date).getTime().toString(35),q=[h(a.l1),h(a.l2),h(a.l3),h(a.l4)].join(\":\");p=\/zct[a-z0-9]+\/i;var e=\"\",f;for(f in a)a.hasOwnProperty(f)\u0026\u0026f.match(p)\u0026\u0026(e+=\"\\x26\"+f+\"\\x3d\"+a[f]);var r=document.referrer.match(\/^([^:]{2,}:\\\/\\\/[^\\\/]*)\/),n=r?r[1]:document.referrer,w=\"https:\/\/9z4voljndh48-a.akamaihd.net\/\"+v+\".gif?e\\x3d17\\x26d\\x3d\"+encodeURIComponent(q)+\"\\x26de\\x3d\"+m+\"\\x26t\\x3d\"+l+\"\\x26i\\x3dATLANTICCONTENT1\\x26cm\\x3d1\\x26j\\x3d\"+encodeURIComponent(n)+\ne+\"\\x26mp\\x3d1\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26vc\\x3d2\\x26cs\\x3d0\",x=\"https:\/\/px.moatads.com\/pixel.gif?e\\x3d17\\x26d\\x3d\"+encodeURIComponent(q)+\"\\x26de\\x3d\"+m+\"\\x26t\\x3d\"+l+\"\\x26i\\x3dATLANTICCONTENT1\\x26cm\\x3d1\\x26j\\x3d\"+encodeURIComponent(n)+e+\"\\x26mp\\x3d0\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0\",y=\"https:\/\/px.moatads.com\/pixel.gif?e\\x3d17\\x26d\\x3d\"+encodeURIComponent(q)+\"\\x26de\\x3d\"+m+\"\\x26t\\x3d\"+l+\"\\x26i\\x3dATLANTICCONTENT1\\x26cm\\x3d1\\x26j\\x3d\"+encodeURIComponent(n)+\ne+\"\\x26ku\\x3d1\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0\";(new Image).src=w;(new Image).src=x;for(var t in a)d.push(t+\"\\x3d\"+encodeURIComponent(a[t]));d=d.join(\"\\x26\");d+=\"\\x26vc\\x3d2\";var g=document.createElement(\"script\");g.type=\"text\/javascript\";g.async=!0;g.onerror=function(){(new Image).src=y};var u=document.getElementsByTagName(\"script\")[0];u.parentNode.insertBefore(g,u);g.src=\"https:\/\/z.moatads.com\/atlantic204medR14\/moatcontent.js#\\x26zctVER\\x3d1\\x26\"+d}catch(b){try{var z=\n\"\/\/pixel.moatads.com\/pixel.gif?e\\x3d24\\x26d\\x3ddata%3Adata%3Adata%3Adata\\x26i\\x3dMOATCONTENTABSNIPPET1\"+e+\"\\x26vc\\x3d2\\x26ac\\x3d1\\x26k\\x3d\"+encodeURIComponent(b)+\"\\x26j\\x3d\"+encodeURIComponent(n)+\"\\x26cs\\x3d\"+(new Date).getTime();(new Image).src=z}catch(A){}}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"therenewalawards.theatlantic.com\"===window.location.hostname\u0026\u0026dataLayer.push({sponsored_campaign:\"2019 Renewal Awards\"});window.addEventListener(\"sponsored:interaction\",function(a){a.detail\u0026\u0026a.detail.action\u0026\u0026a.detail.label\u0026\u0026\"vote\"===a.detail.action\u0026\u0026\"Renewal\"===a.detail.label\u0026\u0026dataLayer.push({sponsored_renewal_campaign_vote_cast:\"true\"})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar paywall_event_name=null,event_action=null,event_label=null;",["escape",["macro",139],8,16],"?(paywall_event_name=\"Nudge Interaction\",event_action=\"nudge:display\",event_label=",["escape",["macro",139],8,16],"):",["escape",["macro",140],8,16],"\u0026\u0026(paywall_event_name=\"Gateway Interaction\",event_action=\"gateway:display\",event_label=",["escape",["macro",140],8,16],");dataLayer.push({event:paywall_event_name,event_category:paywall_event_name,event_action:event_action,event_label:event_label});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1407501962855831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1407501962855831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/cdn.blueconic.net\/theatlantic.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar response=window.fetch\u0026\u0026fetch(\"https:\/\/accounts-api.theatlantic.com\/api\/v1\/fbia\/?event\\x3dLogIntoAccount\",{credentials:\"include\"}).then(function(a){return a.json()}).then(function(a){a=a.url;var b=document.createElement(\"img\");b.src=a;b.style.display=\"none\";document.body.appendChild(b)})[\"catch\"](function(){});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":108
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar response=window.fetch\u0026\u0026fetch(\"https:\/\/accounts-api.theatlantic.com\/api\/v1\/fbia\/?event\\x3dSubscribe\",{credentials:\"include\"}).then(function(a){return a.json()}).then(function(a){a=a.url;var b=document.createElement(\"img\");b.src=a;b.style.display=\"none\";document.body.appendChild(b)})[\"catch\"](function(){});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1407501962855831\");fbq(\"track\",\"ViewPaywall\",{surface:\"web\",meter_count:",["escape",["macro",120],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":597
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"parsely-cfg\" data-gtmsrc=\"\/\/cdn.parsely.com\/keys\/theatlantic.com\/p.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":611
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cfigure class=\"op-tracker\"\u003E\n    \u003Ciframe\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003EPARSELY={autotrack:!1,fbInstantArticles:!0,onload:function(){PARSELY.beacon.trackPageView({urlref:\"http:\/\/facebook.com\/instantarticles\"});return!0}};\u003C\/script\u003E\n        \u003Cdiv id=\"parsely-root\" style=\"display: none\"\u003E\n            \u003Cspan id=\"parsely-cfg\" data-parsely-site=\"theatlantic.com\"\u003E\u003C\/span\u003E\n        \u003C\/div\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,c){var e=c.location.protocol,f=b+\"-\"+d,a=c.getElementById(f),g=c.getElementById(b+\"-root\");b=\"https:\"===e?\"d1z2jf7jlzjs58.cloudfront.net\":\"static.\"+b+\".com\";a||(a=c.createElement(d),a.id=f,a.async=!0,a.src=e+\"\/\/\"+b+\"\/p.js\",g.appendChild(a))})(\"script\",\"parsely\",document);\u003C\/script\u003E\n        \n    \u003C\/iframe\u003E\n\u003C\/figure\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":612
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o3j8k\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":615
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o3j8l\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o3j8l\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o3j8l\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":620
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"facebook event recorded\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a={event:\"GA Pageview Recorded\"},b=window.ga?ga.getAll():[];a.ga_client_id=0\u003Cb.length?b[0].get(\"clientId\"):void 0;dataLayer.push(a);\"undefined\"===typeof window.System\u0026\u0026dataLayer.push({event:\"No User Data Present\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"GA User Data Recorded\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Data Layer Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"www.theatlantic.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"www.theatlantic.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GA Pageview Recorded"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"subscribe.theatlantic.com"
    },{
      "function":"_sw",
      "arg0":["macro",82],
      "arg1":"magazine-confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"www.theatlantic.com"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"User Data Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Newsletter Subscription"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"article"
    },{
      "function":"_eq",
      "arg0":["macro",94],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)7014765_182($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"\/video\/iframe\/"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)7014765_186($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Consent Updated"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Video Event"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Page Unload"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Link Click"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Purchase"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Product Details View"
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",114],
      "arg1":"http"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Front End Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Count CDS Orders"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"FBAN|FBAV|FB_IAB"
    },{
      "function":"_eq",
      "arg0":["macro",119],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",120],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Paywall Event"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Nudge Link Click"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Nudge Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Gateway Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Gateway Link Click"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"eCommerceEvent"
    },{
      "function":"_eq",
      "arg0":["macro",122],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"https:\/\/www.theatlantic.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Click Element"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"(accounts|fastly-accounts-ui|subscribe)\\.theatlantic\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"onboarding_interaction"
    },{
      "function":"_re",
      "arg0":["macro",126],
      "arg1":"^(undefined|null)$"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"BlueConic.*"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Blueconic Export"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",129],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GA User Data Recorded"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"No User Data Present"
    },{
      "function":"_eq",
      "arg0":["macro",134],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"facebook event recorded"
    },{
      "function":"_cn",
      "arg0":["macro",102],
      "arg1":"\/sponsored\/nest-2016\/"
    },{
      "function":"_sw",
      "arg0":["macro",82],
      "arg1":"magazine-order-form"
    },{
      "function":"_sw",
      "arg0":["macro",82],
      "arg1":"masthead-order-form"
    },{
      "function":"_sw",
      "arg0":["macro",82],
      "arg1":"masthead-confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",141],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)7014765_499($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",134],
      "arg1":"false"
    },{
      "function":"_sw",
      "arg0":["macro",96],
      "arg1":"\/sponsored\/"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Gate Template Set"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Nudge Template Set"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"loginEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"subscribeEvent"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"accounts.theatlantic.com"
    },{
      "function":"_sw",
      "arg0":["macro",96],
      "arg1":"\/products\/"
    },{
      "function":"_eq",
      "arg0":["macro",145],
      "arg1":"undefined"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2,3,4,5],["add",0]],
    [["if",3,7,8],["unless",6],["add",2]],
    [["if",3,7,8],["add",3,42,50,51]],
    [["if",3,9,10,11],["add",4,23,54]],
    [["if",3,8],["add",5]],
    [["if",1,3,12,13],["add",6]],
    [["if",1,12,14],["add",7]],
    [["if",3,15],["add",8]],
    [["if",14,16],["add",9,21]],
    [["if",14,17,18,19,20],["add",10]],
    [["if",14,18,22,23],["unless",21],["add",11]],
    [["if",24],["add",12]],
    [["if",3,25],["add",13]],
    [["if",14,26],["add",14]],
    [["if",14,27],["add",15]],
    [["if",3,28],["add",16,55]],
    [["if",29],["add",17]],
    [["if",3,31,32],["unless",30],["add",18]],
    [["if",3,33],["add",19]],
    [["if",34],["add",20]],
    [["if",1,9,14],["add",22]],
    [["if",1,3,35],["add",24]],
    [["if",1,3],["unless",36,37],["add",25]],
    [["if",3,38],["add",25]],
    [["if",3,39],["add",26]],
    [["if",3,40],["add",26]],
    [["if",3,41],["add",26]],
    [["if",3,42],["add",26]],
    [["if",43,44,45],["add",27]],
    [["if",1,3],["unless",46],["add",27]],
    [["if",11,47],["add",28]],
    [["if",3,48],["add",29]],
    [["if",3,8,49],["add",30,65,66]],
    [["if",3,50],["add",31]],
    [["if",3,52],["unless",51],["add",32]],
    [["if",3,53],["add",33]],
    [["if",11],["add",34,35,36,37,38,39]],
    [["if",54],["add",40]],
    [["if",3,8],["unless",49],["add",41,43]],
    [["if",11],["unless",21],["add",1]],
    [["if",11,21,55],["add",1]],
    [["if",1,7,56],["add",42]],
    [["if",3,7,57],["add",44,56]],
    [["if",3,7,58],["add",44,56]],
    [["if",3,7,8],["unless",2,6],["add",45]],
    [["if",3,7,59,60],["add",46,52,61]],
    [["if",1],["add",47,63]],
    [["if",9,11],["add",48]],
    [["if",11,61],["add",48]],
    [["if",1,3,12],["add",49]],
    [["if",9,11,62],["add",53]],
    [["if",9,11,63],["add",53]],
    [["if",9,11,64],["add",54]],
    [["if",11,65],["add",54]],
    [["if",14,16],["unless",49],["add",57]],
    [["if",14,18,22,66],["unless",21,49],["add",58,59]],
    [["if",3,7,60,67],["add",60]],
    [["if",0,1,68,69],["add",62]],
    [["if",3,70],["add",64,69]],
    [["if",3,71],["add",64]],
    [["if",3,72],["add",67]],
    [["if",3,73],["add",68]],
    [["if",3,8,67],["unless",49],["add",70]],
    [["if",3,59,60],["add",71]],
    [["if",3,8,74,75],["add",72]],
    [["if",3,45],["unless",76],["add",73]]]
},
"runtime":[[50,"__qcm",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","createQueue"]],[52,"d",["c","_qevents"]],["d",[8,"qacct",[16,[15,"a"],"pcode"],"labels",[30,[16,[15,"a"],"labels"],""],"source","gtm"]],["b","https://secure.quantserve.com/quant.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__qcm":{"access_globals":{"keys":[{"key":"_qevents","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/secure.quantserve.com\/quant.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__qcm"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Of:!0},ia={};try{ia.__proto__=fa;ea=ia.Of;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=da,la=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},na=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.o={};this.m=!1;this.F={}};sa.prototype.get=function(a){return this.o["dust."+a]};sa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.o[a]=b))};sa.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=h.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.ac=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.o[d]}};ba=h.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Rb+g>b[f].max)throw Error("Quota exceeded");b[f].Rb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},ue:function(){c&&a(c,1)},kh:function(f){d=f},Ca:function(f){d&&a(d,f)},Ih:function(f,g){b[f]=b[f]||{Rb:0};b[f].max=g},Hg:function(f){return b[f]&&b[f].Rb||0},reset:function(){b={}},ng:a};e.onFnConsume=e.ih;e.consumeFn=e.ue;e.onStorageConsume=e.kh;e.consumeStorage=e.Ca;e.setMax=e.Ih;e.getConsumed=e.Hg;e.reset=e.reset;e.consume=e.ng;return e};var wa=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.o=void 0};wa.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.m)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var ya=function(a){var b=new wa(a.F,a);a.o&&(b.o=a.o);b.M=a.M;b.a=a.a;return b};var za=function(){},Ba=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Da=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Fa=function(a,b){if(a&&Da(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ga=function(a,b){if(!Ca(a)||
!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ia=function(a,b){for(var c=new Ha,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ka=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Na=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Da(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ha.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];Ja(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.a=a;this.M=b};la($a,sa);$a.prototype.toString=function(){return this.a};$a.prototype.ac=function(){return new h(ta(this))};$a.prototype.i=function(a,b){a.F.ue();return this.M.apply(ab(this,a),Array.prototype.slice.call(arguments,1))};var ab=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Da(d)?bb(e,d):d};c.prototype.F=function(d){return cb(this.m,d)};c.prototype.o=function(){return b.F};return new c(a,b)};
$a.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var cb=function(a,b){for(var c,d=0;d<b.length&&!(c=bb(a,b[d]),c instanceof qa);d++);return c},bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var db=function(){sa.call(this)};la(db,sa);db.prototype.ac=function(){return new h(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof h?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},G=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.ac(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof db){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof $a){var u=function(){for(var p=Array.prototype.slice.call(arguments,0),t=0;t<p.length;t++)p[t]=kb(p[t],b);var v=b?b.F:va(),w=new wa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(p)))};c.push(g);d.push(u);e(g,u);return u}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Da(g)||Ka(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new db;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new $a("",function(p){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=lb(this.a(t[v]),b);return f((0,this.m.M)(g,g,t))});c.push(g);d.push(r);e(g,r);return r}var u=typeof g;if(null===g||"string"===u||"number"===u||"boolean"===u)return g};return f(a)};var mb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ca(a.length+f.length);return new $a(a,function(){return function(g){var k=ya(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var u=cb(k,f);if(u instanceof qa)return"return"===u.a?u.i:u}}())},list:function(a){var b=this.o();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function pb(a,b){var c=bb(a,b);if(c instanceof qa||c instanceof $a||c instanceof h||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var qb=function(){this.m=va();this.a=new wa(this.m)},rb=function(a,b,c){var d=new $a(b,c);d.m=!0;a.a.set(b,d)};qb.prototype.Yb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};qb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.a,arguments[c]);return b};
qb.prototype.o=function(a,b){var c=ya(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=pb(c,arguments[e]);return d};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new qa("break"),wb=new qa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},Ab=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(ub,b))return kb(a[b].apply(a,sb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=sb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(tb.supportedMethods,b)){var f=sb(c);f.unshift(this.m);
return tb[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var g=a.get(b);if(g instanceof $a){var k=sb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=ya(this.m),c=cb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Fb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Gb=function(){return wb},Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.set(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){return this.a(a)==this.a(b)},Kb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=cb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof h||b instanceof $a)for(var g=b.ac(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=cb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=ya(d);xa(f,a,e,!0);return f},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=ya(d);f.add(a,e);return f},b,c)},Qb=function(a){return this.m.get(this.a(a))},Rb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof h||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Sb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){return this.a(a)===this.a(b)},Vb=function(a,b){return this.a(a)!==this.a(b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof qa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=
this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof h||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Da(d)||!Da(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new qb;zc(this)};Ac.prototype.Yb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.o(a,b)},zc=function(a){function b(e,f){var g=d.a,k=String(f);mb.hasOwnProperty(e)&&rb(g,k||e,mb[e])}function c(e,f){rb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,xb);c(1,yb);c(2,Ab);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Pb);c(15,Qb);c(16,Rb);c(17,Rb);c(18,Sb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);c(27,
ac);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();rb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};Gc[7]=function(a){return String(a).replace(Nc,Pc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Wc=/['()]/g,Xc=function(a){return"%"+a.charCodeAt(0).toString(16)};Gc[12]=function(a){var b=
encodeURIComponent(String(a));Wc.lastIndex=0;return Wc.test(b)?b.replace(Wc,Xc):b};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Da(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.ad(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.pg(d,k))}catch(y){b.Me&&b.Me(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=nd(a[n],b,c);jd&&(m=m||r===jd.Jb);d.push(r)}return jd&&m?jd.sg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Da(a[1])&&"macro"===a[1][0]&&jd.Ug(a))return jd.ph(d);d=String(d);for(var u=2;u<a.length;u++)Gc[a[u]]&&(d=Gc[a[u]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={ze:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=qd(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Fd:a("convert_case_to"),Gd:a("convert_false_to"),Hd:a("convert_null_to"),Id:a("convert_true_to"),Jd:a("convert_undefined_to"),bi:a("debug_mode_metadata"),ya:a("function"),rf:a("instance_name"),vf:a("live_only"),xf:a("malware_disabled"),yf:a("metadata"),ci:a("original_vendor_template_id"),Cf:a("once_per_event"),Rd:a("once_per_load"),Zd:a("setup_tags"),ae:a("tag_id"),be:a("teardown_tags")}}();var sd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(sd,Error);function td(a,b){if(Da(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ca(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Dd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Ed(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Dd(e,b,d,g);Dd(f,b,d,g)}}}};var Jd=function(a){var b=Fd.w,c=this;this.i=new Cd;this.a={};var d={},e=Ed(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ja(a,function(f,g){var k={};Ja(g,function(l,m){var n=Gd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Gd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Rh=Na('');Nd.Ag=Na('');var Od=Md,Pd=Nd.Ag,Qd=Nd.Rh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),u;var p=l.hostname,t=r;if(0!==t.indexOf("*."))u=p.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=p.toLowerCase().indexOf(t.toLowerCase());
u=-1===v?!1:p.length===t.length?!0:p.length!==t.length+v?!1:"."===p[v-1]}if(u){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ie,je=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.cg&&(l["fix_"+m]=!0),l.Be=l.Be||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,S:p.S,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;t[w]=z.textContent||z.innerText||B});return{tagName:p[1],S:t,Cb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=r[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.Be&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ke=function(){return this[this.length-1]};v.cd=function(z){var F=this.Ke();return F&&F.tagName&&F.tagName.toUpperCase()===z.toUpperCase()};v.og=
function(z){for(var F=0,H;H=this[F];F++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Cb=p.test(z.tagName)||z.Cb);return z},y=u,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var F=z.tagName;"TR"===F.toUpperCase()&&v.cd("TABLE")?(k="<TBODY>"+k,B()):l.li&&t.test(F)&&v.og(F)?v.cd(F)?x():(k="</"+z.tagName+">"+k,B()):z.Cb||v.push(z)},endTag:function(z){v.Ke()?l.Cg&&!v.cd(z.tagName)?x():v.pop():l.Cg&&(y(),B())}},B=function(){var z=k,F=w(y());k=z;if(F&&
A[F.type])A[F.type](F)};u=function(){B();return w(y())}}();return{append:function(p){k+=p},xh:u,ui:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},vi:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.xi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.wi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.S){var u=m.S[r];n+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Cb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ie=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,p){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(p,r[t],t)}function d(r,u,p){for(var t in r)r.hasOwnProperty(t)&&u.call(p,t,r[t])}function e(r,
u){d(u,function(p,t){r[p]=t});return r}function f(r,u){r=r||{};d(u,function(p,t){b(r[p])||(r[p]=t)});return r}function g(r){try{return m.call(r)}catch(p){var u=[];c(r,function(t){u.push(t)});return u}}var k={Sf:a,Tf:a,Uf:a,Vf:a,dg:a,eg:function(r){return r},done:a,error:function(r){throw r;},Ah:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,Db:v.defaultView||v.parentWindow,Sa:v,oc:ie("",{cg:!0}),Pc:[p],nd:"",od:v.createElement(p.nodeName),zb:[],Ia:[]});r(this.od,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var p;!this.Ub&&this.Ia.length;)p=this.Ia.shift(),"function"===typeof p?this.jg(p):this.yd(p)};u.prototype.jg=function(p){var t={type:"function",value:p.name||p.toString()};this.jd(t);p.call(this.Db,this.Sa);this.Re(t)};
u.prototype.yd=function(p){this.oc.append(p);for(var t,v=[],w,y;(t=this.oc.xh())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Xh(v);w&&this.Mg(t);y&&this.Ng(t)};u.prototype.Xh=function(p){var t=this.gg(p);t.oe&&(t.Zc=this.nd+t.oe,this.nd+=t.th,this.od.innerHTML=t.Zc,this.Uh())};u.prototype.gg=function(p){var t=this.Pc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.S){if(!/^noscript$/i.test(x.tagName)){var A=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.S.id&&"ps-style"!==x.S.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Cb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{yi:p,raw:v.join(""),oe:w.join(""),th:y.join("")}};u.prototype.Uh=function(){for(var p,t=[this.od];b(p=t.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Pc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Pc[w].appendChild(p)}t.unshift.apply(t,g(p.childNodes))}};u.prototype.Mg=function(p){var t=this.oc.clear();t&&this.Ia.unshift(t);p.src=p.S.src||p.S.di;p.src&&this.zb.length?this.Ub=p:this.jd(p);var v=this;this.Wh(p,function(){v.Re(p)})};u.prototype.Ng=function(p){var t=this.oc.clear();t&&this.Ia.unshift(t);p.type=p.S.type||p.S.TYPE||"text/css";this.Yh(p);t&&this.write()};u.prototype.Yh=function(p){var t=this.ig(p);this.Rg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Sa.createTextNode(p.content)))};u.prototype.ig=function(p){var t=this.Sa.createElement(p.tagName);t.setAttribute("type",p.type);d(p.S,function(v,w){t.setAttribute(v,w)});return t};u.prototype.Rg=function(p){this.yd('<span id="ps-style"/>');var t=this.Sa.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.jd=function(p){p.lh=this.Ia;this.Ia=[];this.zb.unshift(p)};u.prototype.Re=function(p){p!==this.zb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.zb.shift(),this.write.apply(this,p.lh),!this.zb.length&&this.Ub&&(this.jd(this.Ub),this.Ub=null))};u.prototype.Wh=function(p,t){var v=this.hg(p),w=this.Kh(v),y=this.options.Sf;p.src&&(v.src=p.src,this.Fh(v,w?y:function(){t();y()}));try{this.Qg(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.hg=function(p){var t=this.Sa.createElement(p.tagName);d(p.S,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.Qg=function(p){this.yd('<span id="ps-script"/>');
var t=this.Sa.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.Fh=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.Kh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.Ah&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Tf(),w.stream=u.apply(null,w),y.Uf())}function u(w,y,x){function A(H){H=x.eg(H);v.write(H);x.Vf(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var F=v.Db.onerror||a;v.Db.onerror=function(H,L,S){x.error({oi:H+
" - "+L+":"+S});F.apply(v.Db,arguments)};v.write(y,function(){e(B,z);v.Db.onerror=F;x.done();v=null;r()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ni?w[0]:w;var A=[w,y,x];w.oh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.dg(A);t.push(A);v||r();return w.oh},{streams:{},si:t,gi:n})}();je=l.postscribe}})();function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ba(e)?c.set(d,me(a+"_"+d,e)):(Ca(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var oe=function(a,b){E(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){E(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var we=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){E(this.i.a,["message:?string"],arguments);};var ye=function(a,b){E(this.i.a,["min:!number","max:!number"],arguments);return Ga(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.bg.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-56LJR35');a.set("version",'331');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.m=!0;return a};var Ce=function(a){return null===a?"null":a instanceof h?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Ee=function(a){return Ma(lb(a,this.m))};var Fe=function(a){return Number(lb(a,this.m))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{Ig:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Jh:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){E(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ba(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var D=window,I=document,Me=navigator,Ne=I.currentScript&&I.currentScript.src,Oe=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=na.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&oa.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){D.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?I.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(I.querySelectorAll)try{var ff=I.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==I.documentElement&&(ef=!0)}catch(a){}var bf=ef;var Fd={},O=null,vf=Math.random();Fd.w="GTM-56LJR35";Fd.Nb="4t0";Fd.Qd="";var wf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},xf="www.googletagmanager.com/gtm.js";
var yf=xf,zf=null,Af=null,Bf=null,Cf="//www.googletagmanager.com/a?id="+Fd.w+"&cv=331",Df={},Ef={},Ff=function(){var a=O.sequence||0;O.sequence=a+1;return a};var Gf={},Hf=function(a,b){Gf[a]=Gf[a]||[];Gf[a][b]=!0},If=function(a){for(var b=[],c=Gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Jf=function(){return"&tc="+fd.filter(function(a){return a}).length},Mf=function(){Kf||(Kf=D.setTimeout(Lf,500))},Lf=function(){Kf&&(D.clearTimeout(Kf),Kf=void 0);void 0===Nf||Of[Nf]&&!Pf&&!Qf||(Rf[Nf]||Sf.Wg()||0>=Tf--?(Hf("GTM",1),Rf[Nf]=!0):(Sf.yh(),Te(Uf()),Of[Nf]=!0,Vf=Wf=Qf=Pf=""))},Uf=function(){var a=Nf;if(void 0===a)return"";var b=If("GTM"),c=If("TAGGING");return[Xf,Of[a]?"":"&es=1",Yf[a],b?"&u="+b:"",c?"&ut="+c:"",Jf(),Pf,Qf,Wf,Vf,"&z=0"].join("")},Zf=function(){return[Cf,"&v=3&t=t",
"&pid="+Ga(),"&rv="+Fd.Nb].join("")},$f="0.005000">Math.random(),Xf=Zf(),ag=function(){Xf=Zf()},Of={},Pf="",Qf="",Vf="",Wf="",Nf=void 0,Yf={},Rf={},Kf=void 0,Sf=function(a,b){var c=0,d=0;return{Wg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},yh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Tf=1E3,bg=function(a,b){if($f&&!Rf[a]&&Nf!==a){Lf();Nf=a;Vf=Pf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Yf[a]="&e="+c+"&eid="+a;Mf()}},cg=function(a,b,c){if($f&&
!Rf[a]&&b){a!==Nf&&(Lf(),Nf=a);var d,e=String(b[rd.ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pf=Pf?Pf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;Vf=Vf?Vf+"."+k:"&ti="+k;Mf();2022<=Uf().length&&Lf()}},dg=function(a,b,c){if($f&&!Rf[a]){a!==Nf&&(Lf(),Nf=a);var d=c+b;Qf=
Qf?Qf+"."+d:"&epr="+d;Mf();2022<=Uf().length&&Lf()}};var eg={},fg=new Ha,gg={},hg={},kg={name:"dataLayer",set:function(a,b){G(Ya(a,b),gg);ig()},get:function(a){return jg(a,2)},reset:function(){fg=new Ha;gg={};ig()}},jg=function(a,b){if(2!=b){var c=fg.get(a);if($f){var d=lg(a);c!==d&&Hf("GTM",5)}return c}return lg(a)},lg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:mg(b)},mg=function(a){for(var b=gg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ng=function(a,b){hg.hasOwnProperty(a)||(fg.set(a,b),G(Ya(a,b),gg),ig())},ig=function(a){Ja(hg,function(b,c){fg.set(b,c);G(Ya(b,void 0),gg);G(Ya(b,c),gg);a&&delete hg[b]})},og=function(a,b,c){eg[a]=eg[a]||{};var d=1!==c?lg(b):fg.get(b);"array"===hb(d)||"object"===hb(d)?eg[a][b]=G(d):eg[a][b]=d},pg=function(a,b){if(eg[a])return eg[a][b]},qg=function(a,b){eg[a]&&delete eg[a][b]};var Q={xa:"_ee",ei:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",ia:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ja:"cookie_expires",Hb:"cookie_update",eb:"session_duration",la:"user_properties",wa:"transport_url"};Q.He=[Q.ia,Q.cb,Q.Hb];Q.Je=[Q.ja,Q.Ib,Q.eb];var tg=/[A-Z]+/,ug=/\s/,vg=function(a){if(q(a)&&(a=Qa(a),!ug.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},xg=function(a){for(var b={},c=0;c<a.length;++c){var d=vg(a[c]);d&&(b[d.id]=d)}wg(b);var e=[];Ja(b,function(f,g){e.push(g)});return e};
function wg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yg=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===zg()||d||"http:"!=D.location.protocol?a:b)+c},zg=function(){var a=Re(),b;if(1===a)a:{var c=yf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Ng=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Og={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sg=function(a){var b=jg("gtm.whitelist");b&&Hf("GTM",9);var c=b&&Wa(Pa(b),Og),d=jg("gtm.blacklist");d||(d=jg("tagTypeBlacklist"))&&Hf("GTM",3);
d?Hf("GTM",8):d=[];Rg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Hf("GTM",2);var e=d&&Wa(Pa(d),Pg),f={};return function(g){var k=g&&g[rd.ya];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ef[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Hf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=C(e,k);if(p)u=p;else{var t=Ia(e,l||[]);t&&Hf("GTM",10);u=t}}var v=!m||u;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ia(e,Qg));return f[k]=v}},Rg=function(){return Ng.test(D.location&&D.location.hostname)};var Tg={pg:function(a,b){b[rd.Fd]&&"string"===typeof a&&(a=1==b[rd.Fd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Hd)&&null===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Jd)&&void 0===a&&(a=b[rd.Jd]);b.hasOwnProperty(rd.Id)&&!0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Gd)&&!1===a&&(a=b[rd.Gd]);return a}};var Ug={active:!0,isWhitelisted:function(){return!0}},Vg=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Wg=function(){};var Xg=!1,Yg=0,Zg=[];function $g(a){if(!Xg){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xg=!0;for(var e=0;e<Zg.length;e++)J(Zg[e])}Zg.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function ah(){if(!Xg&&140>Yg){Yg++;try{I.documentElement.doScroll("left"),$g()}catch(a){D.setTimeout(ah,50)}}}var bh=function(a){Xg?a():Zg.push(a)};var ch={},dh={},eh=function(a,b,c,d){if(!dh[a]||wf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return dh[a].tags.push(e)-1},gh=function(a,b,c,d){if(dh[a]){var e=dh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hh(a){for(var b=ch[a]||[],c=0;c<b.length;c++)b[c]();ch[a]={push:function(d){d(Fd.w,dh[a])}}}
var kh=function(a,b,c){dh[a]={tags:[]};Ba(b)&&ih(a,b);c&&D.setTimeout(function(){return hh(a)},Number(c));return jh(a)},ih=function(a,b){ch[a]=ch[a]||[];ch[a].push(Ta(function(){return J(function(){b(Fd.w,dh[a])})}))};function jh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&hh(a)})},$f:function(){d=!0;b>=c&&hh(a)}}};var lh=function(){function a(d){return!Ca(d)||0>d?0:d}if(!O._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ca(kg.get("gtm.start"))?kg.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Af-b)}}};var ph={},qh=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},rh=!1;
var sh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Hf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}lh();return D[b]},th=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vh=function(a){},uh=function(){return D.GoogleAnalyticsObject||"ga"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Jh=function(){return!1},Kh=function(){var a={};return function(b,c,d){}};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var g=nd(e[rd.Zd],c,[]);if(g&&g.length){var k=g[0];f=Lh(k.index,{D:f,C:1===k.ze?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.xf])k();else{var w=od(f,c,[]),y=eh(c.id,String(f[rd.ya]),Number(f[rd.ae]),w[rd.yf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ra()-B;cg(c.id,fd[a],"5");gh(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ra()-B;cg(c.id,fd[a],"6");gh(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;cg(c.id,f,"1");var A=function(){var z=Ra()-B;cg(c.id,f,"7");gh(c.id,y,"exception",z);x||(x=!0,k())};var B=Ra();try{md(w,c)}catch(z){A(z)}}}var f=fd[a],g=b.D,k=b.C,l=b.terminate;if(c.ad(f))return null;var m=nd(f[rd.be],c,[]);if(m&&m.length){var n=m[0],r=Lh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.ze?l:r}if(f[rd.Rd]||f[rd.Cf]){var u=f[rd.Rd]?gd:c.Lh,p=g,t=k;if(!u[a]){e=Ta(e);var v=Nh(a,u,e);g=v.D;k=v.C}return function(){u[a](p,t)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{D:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.xb[d]){var e=fd[d];var f=b.add();try{var g=Lh(d,{D:f,C:f,terminate:f},a,d);g?c.push({af:d,We:pd(e),Yb:g}):(Rh(d,a),f())}catch(l){f()}}b.$f();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Yb();return 0<c.length};function Sh(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.af,k=b.af;f=g>k?1:g<k?-1:0}return f}
function Rh(a,b){if(!$f)return;var c=function(d){var e=b.ad(fd[d])?"3":"4",f=nd(fd[d][rd.Zd],b,[]);f&&f.length&&c(f[0].index);cg(b.id,fd[d],e);var g=nd(fd[d][rd.be],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}bg(a,b);var f=kh(a,d,e);og(a,"event",1);og(a,"ecommerce",1);og(a,"gtm");var g={id:a,name:b,ad:Sg(c),xb:[],Lh:[],Me:function(){Hf("GTM",6)}};g.xb=Bd(g);var k=Th(g,f);"gtm.js"!==b&&"gtm.sync"!==b||vh(Fd.w);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=fd[l];if(m&&!wf[String(m[rd.ya])])return!0}return!1};var Wh=[];function Xh(){var a=Oe("google_tag_data",{});a.ics||(a.ics={entries:{},set:Yh,update:Zh,addListener:$h,notifyListeners:ai,active:!1});return a.ics}
function Yh(a,b,c,d,e,f){var g=Xh();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=u;r&&D.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,bi(a),ai(),Hf("TAGGING",2))},f)}}}
function Zh(a,b){var c=Xh();c.active=!0;if(void 0!=b){var d=ci(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ci(a);f.quiet?(f.quiet=!1,bi(a)):g!==d&&bi(a)}}function $h(a,b){Wh.push({te:a,Dg:b})}function bi(a){for(var b=0;b<Wh.length;++b){var c=Wh[b];Da(c.te)&&-1!==c.te.indexOf(a)&&(c.Ve=!0)}}function ai(){for(var a=0;a<Wh.length;++a){var b=Wh[a];if(b.Ve){b.Ve=!1;try{b.Dg.call()}catch(c){}}}}
var ci=function(a){var b=Xh().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},di=function(){return Xh().active},ei=function(a,b){Xh().addListener(a,b)},fi=function(a){function b(){for(var e=Xh().entries,f=0;f<c.length;f++)if((e[c[f]]||{}).quiet)return!0;return!1}var c=[Q.s];if(b()){var d=!1;ei(c,function(){d||b()||(d=!0,a())})}else a()},gi=function(a,b){if(!1===ci(b)){var c=!1;ei([b],function(){!c&&ci(b)&&(a(),c=!0)})}};var hi=[Q.s,Q.R],ii=function(a){var b=a.region;b&&Hf("GTM",40);for(var c=Da(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<hi.length;e++){var f=hi[e],g=a[hi[e]],k=c[d];Xh().set(f,g,k,"ES","ES-AN",void 0)}},ji=function(a){for(var b=0;b<hi.length;b++){var c=hi[b],d=a[hi[b]];Xh().update(c,d)}Xh().notifyListeners()},ki=function(a){var b=ci(a);return void 0!=b?b:!0},li=function(){for(var a=[],b=0;b<hi.length;b++){var c=ci(hi[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};function ni(a,b){}function oi(a,b){return pi()?ni(a,b):void 0}function pi(){var a=!1;return a};var qi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.se=void 0},ri=function(a){var b=new qi;b.eventModel=a;return b},si=function(a,b){a.targetConfig=b;return a},ti=function(a,b){a.containerConfig=b;return a},ui=function(a,b){a.a=b;return a},vi=function(a,b){a.globalConfig=b;return a},wi=function(a,b){a.D=b;return a},xi=function(a,b){a.C=b;return a};
qi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var yi=function(a){function b(e){Ja(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ja(c,function(e){d.push(e)});return d};function zi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ai={},Bi=function(a){return void 0==Ai[a]?!1:Ai[a]};var Di=function(a,b,c,d){return Ci(d)?zi(a,String(b||document.cookie),c):[]},Gi=function(a,b,c,d,e){if(Ci(e)){var f=Ei(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Fi(f,function(g){return g.Vb},b);if(1===f.length)return f[0].id;f=Fi(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Hi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Di(b,f,!1,d).indexOf(c)}
var Li=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Ci(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ii(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.eh);g=e(g,"samesite",
c.Ch);c.Gh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Ji(),r=void 0,u=!1,p=0;p<n.length;++p){var t="none"!==n[p]?n[p]:void 0,v=e(g,"domain",t);try{d&&d(a,k)}catch(w){r=w;continue}u=!0;if(!Ki(t,c.path)&&Hi(v,a,b,c.Ea))return!0}if(r&&!u)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Ki(m,c.path)?!1:Hi(g,a,b,c.Ea)},Mi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Li(a,b,c)};
function Fi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ei(a,b,c){for(var d=[],e=Di(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Vb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ii=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ni=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Oi=/(^|\.)doubleclick\.net$/i,Ki=function(a,b){return Oi.test(document.location.hostname)||"/"===b&&Ni.test(a)},Ji=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Oi.test(e)||Ni.test(e)||a.push("none");
return a},Ci=function(a){if(!Bi("gtag_cs_api")||!a||!di())return!0;var b=ci(a);return null==b?!0:!!b};var Pi=function(){for(var a=Me.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Si=function(a,b,c,d,e){var f=Qi(b);return Gi(a,f,Ri(c),d,e)},Ti=function(a,b,c,d){var e=""+Qi(c),f=Ri(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Qi=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ri=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ui(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Vi(){for(var a=Wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wi,Yi;function Zi(a){Wi=Wi||Xi();Yi=Yi||Vi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Wi[l],Wi[m],Wi[n],Wi[r])}return b.join("")}
function $i(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Yi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Wi=Wi||Xi();Yi=Yi||Vi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var aj;var ej=function(){var a=bj,b=cj,c=dj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ue(I,"mousedown",d);Ue(I,"keyup",d);Ue(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},fj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};dj().decorators.push(f)},gj=function(a,b,c){for(var d=dj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ua(e,g.callback())}}return e},dj=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var hj=/(.*?)\*(.*?)\*(.*)/,ij=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,jj=/^(?:www\.|m\.|amp\.)+/,kj=/([^?#]+)(\?[^#]*)?(#.*)?/;function lj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var nj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zi(String(d))))}var e=b.join("*");return["1",mj(e),e].join("*")},mj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=aj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}aj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^aj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},pj=function(){return function(a){var b=Eh(D.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=oj(d)||{};var e=Ch(b,"fragment").match(lj("_gl"));a.fragment=oj(e&&e[3]||"")||{}}},qj=function(){var a=pj(),b=dj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},oj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=hj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===mj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=$i(u[p+1]);return r}}}}catch(t){}};
function rj(a,b,c,d){function e(n){var r=n,u=lj(a).exec(r),p=r;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=kj.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function sj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=gj(b,1,c),e=gj(b,2,c),f=gj(b,3,c);if(Va(d)){var g=nj(d);c?tj("_gl",g,a):uj("_gl",g,a,!1)}if(!c&&Va(e)){var k=nj(e);uj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){uj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){tj(m,n,r);break a}}"string"==typeof r&&rj(m,n,r,void 0)}}
function uj(a,b,c,d){if(c.href){var e=rj(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function tj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=rj(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var bj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||sj(e,e.hostname)}}catch(g){}},cj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");sj(a,b)}}catch(c){}},vj=function(a,b,c,d){ej();fj(a,b,"fragment"===c?2:1,!!d,!1)},wj=function(a,b){ej();fj(a,[Bh(D.location,"host",!0)],b,!0,!0)},xj=function(){var a=I.location.hostname,b=ij.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(jj,""),l=e.replace(jj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yj=function(a,b){return!1===a?!1:a||b||xj()};var zj=/^\w+$/,Aj=/^[\w-]+$/,Bj=/^~?[\w-]+$/,Cj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Dj=function(){if(!Bi("gtag_cs_api")||!di())return!0;var a=ci("ad_storage");return null==a?!0:!!a},Ej=function(a){Dj()?a():gi(a,"ad_storage")};function Fj(a){return a&&"string"==typeof a&&a.match(zj)?a:"_gcl"}
var Hj=function(){var a=Eh(D.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Gj(b,c,d)},Gj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Aj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Bi("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Jj=function(a){var b=Hj();Ej(function(){return Ij(b,a)})};
function Ij(a,b,c){function d(m,n){var r=Kj(m,e);r&&(Mi(r,n,f),g=!0)}b=b||{};var e=Fj(b.prefix);c=c||Ra();var f=Ui(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.zi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Mj=function(a,b){var c=qj();Ej(function(){for(var d=Fj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Cj[f]){var g=Kj(f,d),k=c[g];if(k){var l=Math.min(Lj(k),Ra()),m;b:{for(var n=l,r=Di(g,I.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(Lj(r[u])>n){m=!0;break b}m=!1}if(!m){var p=Ui(b,l,!0);p.Ea="ad_storage";Mi(g,k,p)}}}}Ij(Gj(c.gclid,c.gclsrc),b)})},Kj=function(a,b){var c=Cj[a];if(void 0!==c)return b+c},Lj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Nj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Oj=function(a,b,c,d,e){if(Da(b)){var f=Fj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Kj(a[l],f);if(m){var n=Di(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Ej(function(){vj(g,b,c,d)})}},Pj=function(a){return a.filter(function(b){return Bj.test(b)})},Qj=function(a,b){for(var c=Fj(b.prefix),d={},e=0;e<a.length;e++)Cj[a[e]]&&(d[a[e]]=Cj[a[e]]);Ej(function(){Ja(d,function(f,g){var k=Di(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Lj(l),
n={};n[f]=[Nj(l)];Ij(n,b,m)}})})};function Rj(a){for(var b=["aw","dc"],c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Sj=function(){function a(d,e,f){f&&(d[e]=f)}var b=Hj();if(Rj(b)){var c={};a(c,"gclid",b.gclid);a(c,"dclid",b.dclid);a(c,"gclsrc",b.gclsrc);wj(function(){return c},3);wj(function(){var d={};return d._up="1",d},1)}},Tj=function(){var a;if(Dj()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({td:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&
(g[b[k].td]||(g[b[k].td]=[]),g[b[k].td].push({timestamp:l[1],Fg:l[2]}))}a=g}else a={};return a};function Uj(){var a=!1;return a}
function Vj(a){function b(l){var m;O.reported_gclid||(O.reported_gclid={});m=O.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],u=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;u("gclid",p);u("gclsrc",e);var t="https://www.google.com/pagead/landing?"+r.join("&");$e(t)}}var c=Hj(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),g=Uj();if(f||g){var k=""+Pi();g?fi(function(){b();ki(Q.s)||gi(function(){return b(!0)},Q.s)}):b()}};var Wj;if(3===Fd.Nb.length)Wj="g";else{var Xj="G";Wj=Xj}
var Yj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Wj,OPT:"o"},Zj=function(a){var b=Fd.w.split("-"),c=b[0].toUpperCase(),d=Yj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Fd.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Fd.Nb+e};var jk=["1"],kk={},ok=function(a){var b=lk(a.prefix);kk[b]||mk(b,a.path,a.domain)||(nk(b,Pi(),a),mk(b,a.path,a.domain))};function nk(a,b,c){var d=Ti(b,"1",c.domain,c.path),e=Ui(c);e.Ea="ad_storage";Mi(a,d,e)}function mk(a,b,c){var d=Si(a,b,c,jk,"ad_storage");d&&(kk[a]=d);return d}function lk(a){return(a||"_gcl")+"_au"};var pk=/^\d+\.fls\.doubleclick\.net$/;function qk(a){ki("ad_storage")?a():gi(a,"ad_storage")}function rk(a){var b=Eh(D.location.href),c=Ch(b,"host",!1);if(c&&c.match(pk)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function sk(a,b){if("aw"==a||"dc"==a){var c=rk("gcl"+a);if(c)return c.split(".")}var d=Fj(b);if(ki("ad_storage")&&"_gcl"==d){var e;e=Hj()[a]||[];if(0<e.length)return e}var f=Kj(a,d),g;if(f){var k=[];if(I.cookie){var l=Di(f,I.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Nj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Pj(k)}else g=k}else g=k}else g=[];return g}
var tk=function(){var a=rk("gac");if(a)return decodeURIComponent(a);var b=Tj(),c=[];Ja(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Fg);f=Pj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},uk=function(a,b){var c=Hj().dc||[];qk(function(){ok(b);var d=kk[lk(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;$e(l);e=f[g]=!0}}null==a&&(a=
e);if(a&&d){var m=lk(b.prefix),n=kk[m];n&&nk(m,n,b)}})};var pl={},ql=["G","GP"];pl.cf="";var rl=pl.cf.split(",");function sl(){var a=O;return a.gcq=a.gcq||new tl}
var ul=function(a,b,c){sl().register(a,b,c)},vl=function(a,b,c,d){sl().push("event",[b,a],c,d)},wl=function(a,b){sl().push("config",[a],b)},xl={},yl=function(a){return!0},zl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Al=function(a,b,c,d,e){this.type=a;this.m=b;this.aa=c||"";
this.a=d;this.i=e},tl=function(){this.m={};this.i={};this.a=[]},Bl=function(a,b){var c=vg(b);return a.m[c.containerId]=a.m[c.containerId]||new zl},Cl=function(a,b,c){if(b){var d=vg(b);if(d&&1===Bl(a,b).status&&yl(d.prefix)){Bl(a,b).status=2;var e={};$f&&(e.timeoutId=D.setTimeout(function(){Hf("GTM",38);Mf()},3E3));a.push("require",[e],d.containerId);xl[d.containerId]=Ra();if(yg()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=oi(c,g)||k;Qe(l)}}}},Dl=function(a,b,c,d){if(d.aa){var e=Bl(a,d.aa),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.aa]),l=G(e.containerConfig),m=G(e.i),n=G(a.i),r=jg("gtm.uniqueEventId"),u=vg(d.aa).prefix,p=xi(wi(vi(ui(ti(si(ri(g),k),l),m),n),function(){dg(r,u,"2");}),function(){dg(r,u,"3");});try{dg(r,u,"1");f(d.aa,b,d.m,p)}catch(t){
dg(r,u,"4");}}}};
tl.prototype.register=function(a,b,c){if(3!==Bl(this,a).status){Bl(this,a).m=b;Bl(this,a).status=3;c&&(Bl(this,a).i=c);var d=vg(a),e=xl[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var k=jg("gtm.uniqueEventId"),l=g,m=Ra()-f;if($f&&!Rf[k]){k!==Nf&&(Lf(),Nf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Wf=Wf?Wf+","+n:"&cl="+n}delete xl[d.containerId]}this.flush()}};
tl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Cl(this,c,b[0][Q.wa]||this.i[Q.wa]);this.a.push(new Al(a,e,c,b,d));d||this.flush()};
tl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Bl(this,c.aa).status&&!a)return;$f&&D.clearTimeout(c.a[0].timeoutId);break;case "set":Ja(c.a[0],function(l,m){G(Ya(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[Q.mc];delete d[Q.mc];var f=Bl(this,c.aa),g=vg(c.aa),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.a&&e||Dl(this,Q.H,d,c);f.a=!0;delete d[Q.xa];k?G(d,f.containerConfig):
G(d,f.targetConfig[c.aa]);break;case "event":Dl(this,c.a[1],c.a[0],c)}this.a.shift()}};var El=function(a,b){return!0};var Fl=function(a,b){var c;return c};var Gl=function(a){};var Hl=function(a){var b;return kb(b,this.m)};var Il=function(a,b){var c=null;return kb(c,this.m)};var Jl=function(a){var b;E(this.i.a,["path:!string"],arguments);Ae(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ba(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,this.m)};var Kl=function(a){var b;return b};var Ll=function(a,b){b=void 0===b?!0:b;var c;return c};var Ml=function(a,b){var c;return c};var Nl=function(a,b){var c;return c};var Ol=function(a){var b="";return b};var Pl=function(a){var b="";return b};var Ql=function(a,b){};var Rl={},Sl=function(a,b,c,d){E(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.m,f=function(){b instanceof $a&&b.Fa(e)},g=function(){c instanceof $a&&c.Fa(e)};if(!d){Qe(a,f,g);return}var k=d;Rl[k]?(Rl[k].onSuccess.push(f),Rl[k].onFailure.push(g)):(Rl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Rl[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},g=function(){for(var l=Rl[k].onFailure,m=0;m<l.length;m++)J(l[m]);Rl[k]=null},Qe(a,f,g));};var Tl=function(){return!1},Ul={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Vl=function(){};var Wl={},Xl={};Wl.getItem=function(a){var b=null;return b};Wl.setItem=function(a,b){};
Wl.removeItem=function(a){};Wl.clear=function(){};var Yl=function(a,b){var c=!1;return c};var Zl=function(a,b,c){};var $l=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var am=function(a,b,c){return!1};var bm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var cm=function(a,b,c){var d=this;};var dm=function(a){var b;return b};function em(a){}
function fm(a,b){var c;return kb(c,this.m)}function gm(){var a="";return a}
function hm(){var a="";return a}
var Dc=function(){var a=new Ke;yg()?(a.add("injectHiddenIframe",za),a.add("injectScript",za)):(a.add("injectHiddenIframe",Ql),a.add("injectScript",Sl));var b=Zl;a.add("addEventCallback",em);a.add("aliasInWindow",El);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",Fl);a.add("callLater",Gl);a.add("copyFromDataLayer",
fm);a.add("copyFromWindow",Hl);a.add("createQueue",Jl);a.add("createArgumentsQueue",Il);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",Ll);a.add("getQueryParameters",Ml);a.add("getReferrerQueryParameters",Nl);a.add("getReferrerUrl",Ol);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Pl);a.add("logToConsole",Vl);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Yl);a.add("readCharacterSet",gm);a.add("readTitle",hm);a.add("sendPixel",b);a.add("setCookie",$l);a.add("setInWindow",am);a.add("sha256",cm);a.add("TestHelper",Le());a.add("getContainerVersion",Be);a.add("toBase64",dm,!("btoa"in D)),a.add("fromBase64",
Kl,!("atob"in D));a.add("localStorage",Ul,!Tl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function im(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;jm();bd=function(e,f,g){km(f);var k=new db;Ja(f,function(p,t){k.set(p,kb(t))});Bc.a.a.o=xd();var l={bg:Ld(e),eventId:void 0!==g?g.id:void 0,Xb:e,log:function(){}};if(Jh()){var m=Kh(),n=void 0,r=void 0;l.ba={i:{},a:function(p,t,v){1===t&&(n=p);7===t&&(r=v);m(p,t,v)},m:Ie()};l.log=function(p,t){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var u=Cc(l,[e,k]);Bc.a.a.o=void 0;u instanceof qa&&
"return"===u.a&&(u=u.i);return lb(u)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Da(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Yb(d)}}function km(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ba(b)&&(a.gtmOnSuccess=function(){J(b)});Ba(c)&&(a.gtmOnFailure=function(){J(c)})}function jm(){var a=Bc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}
function lm(a){void 0!==a&&Ja(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ef[e]=Ef[e]||[];Ef[e].push(b)}})};var mm=["GP","G"],nm="G".split(/,/);nm.push("GF");nm.push("HA");nm.push("AW");var om=!1;om=!0;var pm=null,qm={},rm={},sm;function tm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[Q.Fc]&&(c.eventCallback=b[Q.Fc]),b[Q.Ib]&&(c.eventTimeout=b[Q.Ib]));return c}
var ym={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=tm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&jb(a[1])?
b=G(a[1]):3==a.length&&q(a[1])&&(b={},jb(a[2])||Da(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var zm={policy:!0};var Am=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Cm=function(a){var b=Bm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Dm=!1,Em=[];function Fm(){if(!Dm){Dm=!0;for(var a=0;a<Em.length;a++)J(Em[a])}}var Gm=function(a){Dm?J(a):Em.push(a)};var Xm=function(a){if(Wm(a))return a;this.a=a};Xm.prototype.Lg=function(){return this.a};var Wm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Xm.prototype.getUntrustedUpdateValue=Xm.prototype.Lg;var Ym=[],Zm=!1,$m=function(a){return D["dataLayer"].push(a)},an=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function bn(a){var b=a._clear;Ja(a,function(f,g){"_clear"!==f&&(b&&ng(f,void 0),ng(f,g))});zf||(zf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ff(),a["gtm.uniqueEventId"]=d,ng("gtm.uniqueEventId",d));Bf=c;var e=cn(a);Bf=null;switch(c){case "gtm.init":Hf("GTM",19),e&&Hf("GTM",20)}return e}
function cn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=O.zones;d=e?e.checkState(Fd.w,c):Ug;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function dn(){for(var a=!1;!Zm&&0<Ym.length;){Zm=!0;delete gg.eventModel;ig();var b=Ym.shift();if(null!=b){var c=Wm(b);if(c){var d=b;b=Wm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=jg(g,1);if(Da(k)||jb(k))k=G(k);hg[g]=k}}try{if(Ba(b))try{b.call(kg)}catch(t){}else if(Da(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=jg(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(t){}}}else{if(Ka(b)){a:{if(b.length&&q(b[0])){var p=ym[b[0]];if(p&&(!c||!zm[b[0]])){b=p(b);break a}}b=void 0}if(!b){Zm=!1;continue}}a=bn(b)||a}}finally{c&&ig(!0)}}Zm=!1}return!a}function en(){var a=dn();try{Am(D["dataLayer"],Fd.w)}catch(b){}return a}
var gn=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Gm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<O.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Xm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ym.push.apply(Ym,d);if(300<
this.length)for(Hf("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return dn()&&g};Ym.push.apply(Ym,a.slice(0));fn()&&J(en)},fn=function(){var a=!0;return a};var hn={};hn.Jb=new String("undefined");
var jn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hn.Jb?b:a[d]);return c.join("")}};jn.prototype.toString=function(){return this.a("undefined")};jn.prototype.valueOf=jn.prototype.toString;hn.Lf=jn;hn.Nc={};hn.sg=function(a){return new jn(a)};var kn={};hn.zh=function(a,b){var c=Ff();kn[c]=[a,b];return c};hn.ve=function(a){var b=a?0:1;return function(c){var d=kn[c];if(d&&"function"===typeof d[b])d[b]();kn[c]=void 0}};hn.Ug=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};hn.ph=function(a){if(a===hn.Jb)return a;var b=Ff();hn.Nc[b]=a;return'google_tag_manager["'+Fd.w+'"].macro('+b+")"};hn.fh=function(a,b,c){a instanceof hn.Lf&&(a=a.a(hn.zh(b,c)),b=za);return{Zc:a,D:b}};var ln=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mn=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},nn=function(a,b,c){mn(a)[b]=c},on=function(a,b,c,d){var e=mn(a),f=Sa(e,b,d);e[b]=c(f)},pn=function(a,b,c){var d=mn(a);return Sa(d,b,c)};var qn=["input","select","textarea"],rn=["button","hidden","image","reset","submit"],sn=function(a){var b=a.tagName.toLowerCase();return!Fa(qn,function(c){return c===b})||"input"===b&&Fa(rn,function(c){return c===a.type.toLowerCase()})?!1:!0},tn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):Ze(a,["form"],100)},un=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(sn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vn=!!D.MutationObserver,wn=void 0,xn=function(a){if(!wn){var b=function(){var c=I.body;if(c)if(vn)(new MutationObserver(function(){for(var e=0;e<wn.length;e++)J(wn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<wn.length;e++)J(wn[e])}))})}};wn=[];I.body?b():J(b)}wn.push(a)};
var In=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Hf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Jn=function(a){var b=In(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Kn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Ln=[],Mn=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Nn=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ln.length;f++)if(!Ln[f])return Ln[f]=d,f;return Ln.push(d)-1},On=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ra()};J(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Jn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Pn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Mn){var e=!1;J(function(){e||On(a,b,c)()});return Nn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)J(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return D.setInterval(On(a,b,c),1E3)},Qn=function(a){Mn?0<=a&&a<Ln.length&&Ln[a]&&(Ln[a].disconnect(),Ln[a]=void 0):D.clearInterval(a)};var Sn=D.clearTimeout,Tn=D.setTimeout,T=function(a,b,c){if(yg()){b&&J(b)}else return Qe(a,b,c)},Un=function(){return D.location.href},Vn=function(a){return Ch(Eh(a),"fragment")},Wn=function(a){return Dh(Eh(a))},Xn=function(a,b){return jg(a,b||2)},Yn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=$m(a)):d=$m(a);return d},Zn=function(a,b){D[a]=b},U=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},$n=function(a,b,c){return Di(a,b,void 0===c?!0:!!c)},ao=function(a,b){if(yg()){b&&J(b)}else Se(a,b)},bo=function(a){return!!pn(a,"init",!1)},co=function(a){nn(a,"init",!0)},eo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(R("https://","http://",c))},fo=function(a,b){var c=a[b];return c};
var go=hn.fh;var Do=new Ha;function Eo(a,b){function c(g){var k=Eh(g),l=Ch(k,"protocol"),m=Ch(k,"host",!0),n=Ch(k,"port"),r=Ch(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Fo(a){return Go(a)?1:0}
function Go(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Da(c)){for(var d=0;d<c.length;d++)if(Fo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Do.get(p);t||(t=new RegExp(c,u),Do.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Eo(b,
c)}return!1};var Ho=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Io={},Jo=encodeURI,Y=encodeURIComponent,Ko=Te;var Lo=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Mo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Io.Vg=function(){var a=!1;return a};var $p=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ga();return a.hid};var iq=window,jq=document,kq=function(a){var b=iq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===iq["ga-disable-"+a])return!0;try{var c=iq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=zi("AMP_TOKEN",String(jq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return jq.getElementById("__gaOptOutExtension")?!0:!1};
var nq=function(a){Ja(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[Q.la]||{};Ja(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var rq=function(a,b,c){vl(b,c,a)},sq=function(a,b,c){vl(b,c,a,!0)},uq=function(a,b){};
function tq(a,b){}var Z={b:{}};
Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"331"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],B=x.split(","),z=0;z<B.length;z++){var F=Number(B[z]);if(isNaN(F))return[];n.test(B[z])||A.push(F)}return A}function c(){var x=0,A=0;return function(){var B=In(),z=B.height;x=Math.max(v.scrollLeft+B.width,x);A=Math.max(v.scrollTop+z,A);return{wg:x,xg:A}}}function d(){p=U("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,A,B,z){var F=l(A),H={},L;for(L in F){H.Ja=L;if(F.hasOwnProperty(H.Ja)){var S=Number(H.Ja);x<S||(Yn({event:"gtm.scrollDepth","gtm.scrollThreshold":S,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":F[H.Ja].join(",")}),on("sdl",A,function(W){return function(ma){delete ma[W.Ja];return ma}}(H),{}))}H={Ja:H.Ja}}}function f(){var x=y(),A=x.wg,B=x.xg,z=A/v.scrollWidth*100,F=B/v.scrollHeight*100;e(A,"horiz.pix",
r.Lb,u.Ld);e(z,"horiz.pct",r.Kb,u.Ld);e(B,"vert.pix",r.Lb,u.fe);e(F,"vert.pct",r.Kb,u.fe);nn("sdl","pending",!1)}function g(){var x=250,A=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,A=!0);var B=0,z=!1,F=function(){z?B=Tn(F,x):(B=0,f(),bo("sdl")&&!a()&&(Ve(p,"scroll",H),Ve(p,"resize",H),nn("sdl","init",!1)));z=!1},H=function(){A&&y();B?z=!0:(B=Tn(F,x),nn("sdl","pending",!0))};return H}function k(x,A,B){if(A){var z=b(String(x));on("sdl",B,function(F){for(var H=0;H<z.length;H++){var L=
String(z[H]);F.hasOwnProperty(L)||(F[L]=[]);F[L].push(A)}return F},{})}}function l(x){return pn("sdl",x,{})}function m(x){J(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,F=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,L=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Lb:k(B,A,"horiz.pix");break;case r.Kb:k(z,A,"horiz.pct")}switch(F){case r.Lb:k(H,A,"vert.pix");break;case r.Kb:k(L,
A,"vert.pct")}bo("sdl")?pn("sdl","pending")||(w||(d(),w=!0),J(function(){return f()})):(d(),w=!0,v&&(co("sdl"),nn("sdl","pending",!0),J(function(){f();if(a()){var S=g();Ue(p,"scroll",S);Ue(p,"resize",S)}else nn("sdl","init",!1)})))}var n=/^\s*$/,r={Kb:"PERCENT",Lb:"PIXELS"},u={fe:"vertical",Ld:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Gm(function(){m(x)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=cf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=I.getElementById(a.vtp_elementId);b&&(d?c=We(b,d):c=Xe(b));return Qa(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(pg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Xn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Wn(String(b)):String(b)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return $n(a.vtp_name,Xn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,u){if(!q(u))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,u))return}else if("write"===r){if(-1<C(f,u))return}else if("readwrite"===r){if(-1<C(f,u)&&-1<C(e,u))return}else if("execute"===r){if(-1<C(g,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
u+".");},J:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ga(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Xn("gtm.url",1);c=c||Un();var d=b[a("vtp_component")];if(!d||"URL"==d)return Wn(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Da(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Xn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={};if(d.vtp_gaSettings){var m=d.vtp_gaSettings;G(Mo(m.vtp_fieldsToSet,"fieldName","value"),f);G(Mo(m.vtp_contentGroup,"index","group"),g);G(Mo(m.vtp_dimension,"index","dimension"),k);G(Mo(m.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=G(m);d=G(d,n)}G(Mo(d.vtp_fieldsToSet,"fieldName","value"),f);G(Mo(d.vtp_contentGroup,
"index","group"),g);G(Mo(d.vtp_dimension,"index","dimension"),k);G(Mo(d.vtp_metric,"index","metric"),l);var r=sh(d.vtp_functionName);if(Ba(r)){var u="",p="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(p=d.vtp_trackerName,u=p+"."):(p="gtm"+Ff(),u=p+".");var t={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
w=function(P){var M=[].slice.call(arguments,0);M[0]=u+M[0];r.apply(window,M)},y=function(P,M){return void 0===M?M:P(M)},x=function(P,M){if(M)for(var Oa in M)M.hasOwnProperty(Oa)&&w("set",P+Oa,M[Oa])},A=function(){var P=function(yq,xk,zq){if(!jb(xk))return!1;for(var Hd=Sa(Object(xk),zq,[]),fh=0;Hd&&fh<Hd.length;fh++)w(yq,Hd[fh]);return!!Hd&&0<Hd.length},M;if(d.vtp_useEcommerceDataLayer){var Oa=!1;Oa||(M=Xn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(M=d.vtp_ecommerceMacroData.ecommerce);if(!jb(M))return;M=Object(M);var bc=Sa(f,"currencyCode",M.currencyCode);void 0!==bc&&w("set","&cu",bc);P("ec:addImpression",M,"impressions");if(P("ec:addPromo",M[M.promoClick?"promoClick":"promoView"],"promotions")&&M.promoClick){w("ec:setAction","promo_click",M.promoClick.actionField);return}for(var La=
"detail checkout checkout_option click add remove purchase refund".split(" "),nb="refund purchase remove checkout checkout_option add click detail".split(" "),ob=0;ob<La.length;ob++){var zb=M[La[ob]];if(zb){P("ec:addProduct",zb,"products");w("ec:setAction",La[ob],zb.actionField);if($f)for(var Ob=0;Ob<nb.length;Ob++){var Uc=M[nb[Ob]];if(Uc){Uc!==zb&&Hf("GTM",13);break}}break}}},B=function(P,M,Oa){var bc=0;if(P)for(var La in P)if(P.hasOwnProperty(La)&&
(Oa&&t[La]||!Oa&&void 0===t[La])){var nb=v[La]?Na(P[La]):P[La];"anonymizeIp"!=La||nb||(nb=void 0);M[La]=nb;bc++}return bc},z={name:p};B(f,z,!0);r("create",d.vtp_trackingId||e.trackingId,z);w("set","&gtm",Zj(!0));d.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(P,M){void 0!==d[M]&&w("set",P,d[M])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",k);x("metric",l);var F={};B(f,F,!1)&&w("set",F);var H;d.vtp_enableLinkId&&w("require","linkid","linkid.js");
w("set","hitCallback",function(){var P=f&&f.hitCallback;Ba(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(w("require","ec","ec.js"),A());var L={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Ma,d.vtp_eventValue||e.value)};B(H,L,!1);w("send",L);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(w("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ha="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require",
"displayfeatures",void 0,{cookieName:ha})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:X})}H?w("send","pageview",H):w("send","pageview");}if(!a){var Aa=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var Ea=oi(f._x_19,"/analytics.js"),cc=R("https:","http:","//www.google-analytics.com/"+Aa,f&&f.forceSSL);T("analytics.js"===Aa&&Ea?Ea:cc,function(){var P=qh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.g="jel";Z.__jel.h=!0;Z.__jel.priorityOverride=0})(function(a){if(!bo("jel")){var b=U("self"),c=b.onerror;b.onerror=function(d,e,f,g,k){c&&c(d,e,f,g,k);Yn({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};co("jel")}J(a.vtp_gtmOnSuccess)})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(he(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;G(Mo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=G(e);c=G(c,f)||{}}G(Mo(c.vtp_fieldsToSet,"fieldName","value"),d);var g=sh(c.vtp_functionName);if(Ba(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ff(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(y,x,A){var B=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var F=n[z]?Na(y[z]):y[z];"anonymizeIp"!==z||F||(F=void 0);x[z]=F;B++}return B},u={name:l};r(d,u,!0);var p={"&gtm":Zj(!0)};r(d,p,!1);var t=encodeURI(R("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,u);g(k+"set",p);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,T(t,function(){return qh().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=U("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else J(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();
Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Fd.w})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){J(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var g={prefix:e,path:c,domain:d};b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||
(b.vtp_enableCrossDomain||xj())&&Mj(a,g));Jj(g);Qj(["aw","dc"],g);uk(f,g);var k=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var l=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),m=b.vtp_urlPosition,n=!!b.vtp_formDecoration;Oj(a,l,m,n,k);}Vj();})}();


Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=G(b),d=c;d[rd.ya]=null;d[rd.rf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Un()}function b(f,g){Ue(f,"hashchange",function(k){var l=a(k);g({source:"hashchange",state:null,url:Wn(l),O:Vn(l)})})}function c(f,g){Ue(f,"popstate",function(k){var l=a(k);g({source:"popstate",state:k.state,url:Wn(l),O:Vn(l)})})}function d(f,g,k){var l=g.history,m=l[f];if(Ba(m))try{l[f]=function(n,r,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:Wn(Un()),
O:Vn(Un())})}}catch(n){}}function e(){var f={source:null,state:U("history").state||null,url:Wn(Un()),O:Vn(Un())};return function(g){var k=f,l={};l[k.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||k.O!=g.O){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.O,"gtm.newUrlFragment":g.O,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=g.url;
f=g;Yn(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=0})(function(f){var g=U("self");if(!bo("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);co("hl")}J(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){lh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Zj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Xn(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?Xn(x):k[y];A(B)&&r(w,B)}};var p=oi(k.vtp_transportUrl,"/pagead/conversion_async.js");p||(p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=
!0;t&&b.push(l);a||(a=!0,T(p,f(),e(p)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Mo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();
Z.b.zone=[],function(){function a(r){for(var u=r.vtp_boundaries||[],p=0;p<u.length;p++)if(!u[p])return!1;return!0}function b(r){var u=Fd.w,p=u+":"+r.vtp_gtmTagId,t=Xn("gtm.uniqueEventId")||0,v=Vg(function(){return new g}),w=a(r),y=r.vtp_enableTypeRestrictions?r.vtp_whitelistedTypes.map(function(H){return H.typeId}):null;y=y&&Wa(y,f);if(v.registerZone(p,t,w,y))for(var x=r.vtp_childContainers.map(function(H){return H.publicId}),A=0;A<x.length;A++){var B=String(x[A]);if(v.registerChild(B,u,p)){var z=
0!==B.indexOf("GTM-");if(z){var F=function(H,L){Yn(arguments)};F("js",new Date);m?(F("config",B),l||eo(B,z)):wl({},B)}else eo(B,z)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.a={};this.i={}};g.prototype.checkState=function(r,u){var p=this.a[r];if(!p)return d;var t=this.checkState(p.Se,u);if(!t.active)return c;
for(var v=[],w=0;w<p.Cd.length;w++){var y=this.i[p.Cd[w]];y.vb(u)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,A){A=A||[];if(!t.isWhitelisted(x,A))return!1;for(var B=0;B<v.length;++B)if(v[B].isWhitelisted(x,A))return!0;return!1}}:c};g.prototype.unregisterChild=function(r){delete this.a[r]};g.prototype.registerZone=function(r,u,p,t){var v=this.i[r];if(v)return v.m(u,p),!1;if(!p)return!1;this.i[r]=new k(u,t);return!0};g.prototype.registerChild=function(r,u,p){var t=this.a[r];if(!t&&
O[r]||t&&t.Se!==u)return!1;if(t)return t.Cd.push(p),!1;this.a[r]={Se:u,Cd:[p]};return!0};var k=function(r,u){this.a=[{eventId:r,vb:!0}];this.i=null;if(u){this.i={};for(var p=0;p<u.length;p++)this.i[u[p]]=!0}};k.prototype.m=function(r,u){var p=this.a[this.a.length-1];r<=p.eventId||p.vb!=u&&this.a.push({eventId:r,vb:u})};k.prototype.vb=function(r){if(!this.a||0==this.a.length)return!1;for(var u=this.a.length-1;0<=u;u--)if(this.a[u].eventId<=r)return this.a[u].vb;return!1};k.prototype.isWhitelisted=
function(r,u){u=u||[];if(!this.i||e[r]||this.i[r])return!0;for(var p=0;p<u.length;++p)if(this.i[u[p]])return!0;return!1};var l=!1;var m=!0;var n=function(r){b(r);J(r.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.priorityOverride=0}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(u){J(g)}}}var b=function(d,e,f){bh(function(){var g,k=O;k.postscribe||(k.postscribe=je);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){J(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=go(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Zc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,Ye(g),k,e)()}else Tn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ye('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ko(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.evl=["google"],function(){function a(f,g){this.element=f;this.uid=g}function b(){var f=Number(Xn("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Kn(f.target)){g.has(e.Mb)||g.set(e.Mb,""+b());g.has(e.Ic)||g.set(e.Ic,""+b());var r=0;g.has(e.Ob)&&(r=Number(g.get(e.Ob)));r+=100;g.set(e.Ob,""+r);if(r>=k){var u=ln(f.target,"gtm.elementVisibility",[g.uid]),p=Jn(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(g.get(e.Ic));
u["gtm.visibleLastTime"]=Number(g.get(e.Mb));Yn(u);l()}}}if(!g.has(e.gb)&&(0==k&&m(),!g.has(e.Ka))){var n=U("self").setInterval(m,100);g.set(e.gb,n)}}function d(f){f.has(e.gb)&&(U("self").clearInterval(Number(f.get(e.gb))),f.a(e.gb))}var e={gb:"polling-id-",Ic:"first-on-screen-",Mb:"recent-on-screen-",Ob:"total-visible-time-",Ka:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.uid,g)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=cf(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new a(v[B],p);d(z)}v=[];for(var F=0;F<x.length;F++)v.push(x[F]);0<=w&&Qn(w);0<v.length&&(w=Pn(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ka)||c(y,x,r,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],p);B.set(e.Ka,"1");d(B)}Qn(w);if(n&&wn)for(var z=0;z<wn.length;z++)wn[z]===g&&wn.splice(z,1)}:function(){x.set(e.Ka,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Ka)&&(x.a(e.Ka),x.a(e.Ob)),x.a(e.Mb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();n&&xn(g);J(f.vtp_gtmOnSuccess)})}();



Z.b.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.g="csm";Z.__csm.h=!0;Z.__csm.priorityOverride=0})(function(a){var b=U("document");Ko(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+Y(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=new Date,g=(e||"").split("&");e="";for(var k=0;k<g.length;k++)if(g[k]){var l=g[k].match(/([^=]*)=?(.*)/);e+="&"+Y(l[1])+"="+Y(l[2])}return R("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
Y(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.ki||"")+"&c8="+Y(b.title||"")+e+"&c7="+Y(b.URL)+"&c9="+Y(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),g=0;g<f.length;g++){var k=f[g].indexOf("comScore");0<=k&&(d=unescape(f[g].substring(k+8)))}return d}())));var c=function(){var d=R("https://sb","http://b",".scorecardresearch.com/c2/"+Y(a.vtp_clientId)+"/cs.js");T(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():Ue(U("self"),"load",c)})}();var vq={};vq.macro=function(a){if(hn.Nc.hasOwnProperty(a))return hn.Nc[a]},vq.onHtmlSuccess=hn.ve(!0),vq.onHtmlFailure=hn.ve(!1);vq.dataLayer=kg;vq.callback=function(a){Df.hasOwnProperty(a)&&Ba(Df[a])&&Df[a]();delete Df[a]};function wq(){O[Fd.w]=vq;Ua(Ef,Z.b);jd=jd||hn;kd=Tg}
function xq(){Ai.gtm_3pds=!0;O=D.google_tag_manager=D.google_tag_manager||{};if(O[Fd.w]){var a=O.zones;a&&a.unregisterChild(Fd.w);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);dd.push(r)}hd=Z;id=Fo;var p=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;im();Kd=new Jd(p);if(void 0!==
t)for(var w=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");Ef[x]=w}lm(v);wq();gn();Xg=!1;Yg=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)$g();else{Ue(I,"DOMContentLoaded",$g);Ue(I,"readystatechange",$g);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!D.frameElement}catch(H){}A&&ah()}Ue(D,"load",$g)}Dm=!1;"complete"===I.readyState?Fm():Ue(D,"load",Fm);a:{if(!$f)break a;D.setInterval(ag,864E5);}
Af=(new Date).getTime();}}
(function(a){
a()})(xq);

})()
