
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"147",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector(\".optanon-alert-box-wrapper\");if(a)return\"block\"===window.getComputedStyle(a).getPropertyValue(\"display\")}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",12],8,16],"||(",["escape",["macro",13],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",16],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",21],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],",b=",["escape",["macro",22],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",24],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",26],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",28],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",36],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",40],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",43],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"||(",["escape",["macro",13],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",53],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",55],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",6],8,16],",a=",["escape",["macro",61],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",66],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",65],8,16],"||[],c=",["escape",["macro",67],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",67],8,16],",c=",["escape",["macro",69],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",58],8,16],",a=",["escape",["macro",17],8,16],",b=",["escape",["macro",46],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],".concat(",["escape",["macro",71],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",71],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",4]],["map","index","3","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",11]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",17]],["map","index","6","dimension",["macro",19]],["map","index","8","dimension",["macro",23]],["map","index","9","dimension",["macro",25]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",29]],["map","index","12","dimension",["macro",31]],["map","index","13","dimension",["macro",33]],["map","index","14","dimension",["macro",35]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",44]],["map","index","20","dimension",["macro",46]],["map","index","21","dimension",["macro",48]],["map","index","22","dimension",["macro",50]],["map","index","23","dimension",["macro",52]],["map","index","25","dimension",["macro",54]],["map","index","26","dimension",["macro",56]],["map","index","27","dimension",["macro",58]],["map","index","28","dimension",["macro",60]],["map","index","30","dimension",["macro",62]],["map","index","60","dimension",["macro",9]],["map","index","61","dimension",["macro",64]],["map","index","63","dimension",["macro",68]],["map","index","72","dimension",["macro",70]],["map","index","74","dimension",["macro",72]],["map","index","65","dimension",["macro",73]],["map","index","1","dimension",["macro",74]],["map","index","2","dimension",["macro",75]],["map","index","75","dimension",["macro",76]],["map","index","78","dimension",["macro",77]],["map","index","80","dimension",["macro",78]],["map","index","79","dimension",["macro",79]],["map","index","81","dimension",["macro",80]],["map","index","82","dimension",["macro",81]],["map","index","84","dimension",["macro",73]],["map","index","86","dimension",["macro",82]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.TARGETING)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.PERFORMANCE)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",97],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",97],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",97],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",78],8,16],",b=",["escape",["macro",80],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.FUNCTIONAL)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",106],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",65],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",113],8,16],"(\"ab_test_magazine_institution_survey\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_institution_survey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",113],8,16],"(\"ab_test_magazine_paywall\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_paywall"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"?",["escape",["macro",49],8,16],".split(\";\"):[\"(not set)\"]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",75],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",74],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=",["escape",["macro",114],8,16],"?\"ab_test_magazine_institution_survey\":\"ab_test_magazine_paywall\";window.Cookies.set(a,\"submitted\",{expires:31536E3,domain:\".nature.com\"})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){function e(c){var a=c.target;a=null!==a.getAttribute(\"href\")||null!==a.getAttribute(\"xlink:href\")||a.parentElement.classList.contains(\"paywall-box__button\");c.preventDefault();a\u0026\u0026(",["escape",["macro",126],8,16],"(),b.removeEventListener(\"click\",d,!1))}var b=document.querySelector(\"#usabilla-paywall-widget-container\");var d=e.bind(this);b\u0026\u0026b.addEventListener(\"click\",d,!1)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",129],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",66],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",130],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",57],8,16],";var a=",["escape",["macro",2],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",131],8,16],";a=parseInt(a.getAttribute(\"data-track-promotion\"),10);var b=",["escape",["macro",133],8,16],";if(!isNaN(a)\u0026\u0026c(b,\"array\")\u0026\u0026b.length\u003Ea)return b=b[a],{id:c(b.promotionInfo.promotionID,\"string\"),name:c(b.promotionInfo.promotionName,\"string\"),position:\"slot\"+a}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",135],8,16],";a=parseInt(a.getAttribute(\"data-track-product\"),10);return productAtIndex(b,a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){var b=",["escape",["macro",131],8,16],";if(!isNaN(c)\u0026\u0026b(a,\"array\")\u0026\u0026a.length\u003Ec)return a=a[c],{id:b(a.productInfo.sku,\"string\"),name:b(a.productInfo.productName,\"string\"),brand:b(a.productInfo.brand,\"string\"),variant:b(a.category.productType,\"string\"),price:b(a.price.basePrice,\"number\").toString(),position:\"slot\"+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",130],8,16],",d=",["escape",["macro",132],8,16],",e=",["escape",["macro",138],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__c",
      "vtp_value":"5dde6c3893906e530d7270d7"
    },{
      "function":"__c",
      "vtp_value":"5dde7c19658b762edd212ee4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",143],8,16],".indexOf(\",3,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",143],8,16],"\u0026\u00260\u003C",["escape",["macro",143],8,16],".length?-1!==",["escape",["macro",143],8,16],".indexOf(\",2,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",143],8,16],".indexOf(\",1,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",143],8,16],".indexOf(\",4,\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",148],8,16],";var a=0\u003Carg.length?arg.join(\";\"):null;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",150],8,16],";var a=0\u003Carg.length?arg.join(\"|\"):null;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);return function(a,b){for(console.log(a);a!==document.documentElement\u0026\u0026!a.matches(b);)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){a=a.map(function(a){return a[b]});return 0\u003Ca.length?a=a.join(\";\"):null}arr=",["escape",["macro",153],8,16],";arg=\"sectionName\";return b(arr,arg)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationIDString"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.entitled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-label"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,function(){window.event.target=window.event.srcElement;c.apply(a,[window.event])})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.template"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){function l(){var b=!0,a={\"page.category.pageType\":[",["escape",["macro",2],8,16],",\"string\"],\"content.attributes.template\":[",["escape",["macro",164],8,16],",\"string\"]},c;for(c in a){var d=a[c][0];var e=a[c][1];d=\"array\"===e\u0026\u0026!0===Array.isArray(d)?d:typeof d===e?d:null;d||(g(\"required\",c),b=!1);\"string\"==a[c][1]\u0026\u00261\u003Ea[c][0].length\u0026\u0026(g(\"empty\",c),b=!1)}return b}function g(a,b){var c;\"required\"==a\u0026\u0026(c=\"Required Field Misspecified\");\"empty\"==a\u0026\u0026(c=\"Missing Value\");a=\"dataLayerError: \"+c+\" (\"+\nb+\")\";console.error(a)}var e=b.getAttribute(\"data-track\"),h=",["escape",["macro",130],8,16],"(b,\"data-track-component\"),a={};if(!1===l())return null;if(\"click\"===e){var k=b.getAttribute(\"data-track-label\")||(b.href\u0026\u0026window.location.hostname!==b.hostname?b.href:null),m=b.getAttribute(\"data-track-category\")||",["escape",["macro",164],8,16],"+\":\"+",["escape",["macro",2],8,16],",f=b.getAttribute(\"data-track-action\");b.getAttribute(\"checked\");h\u0026\u0026!f\u0026\u0026(f=h.getAttribute(\"data-track-component\")+\":\"+e);if(k)return a.event=\"data-track\",a.eventAction=\nf,a.eventCategory=m,a.eventLabel=k,a;console.error(\"dataLayerError: More Arguments Needed (data-track-label)\");return null}if(\"download\"===e)return a.event=\"data-track\",a.eventAction=\"download\",a.category=",["escape",["macro",164],8,16],"+\":\"+",["escape",["macro",2],8,16],",a.eventLabel=b.getAttribute(\"href\"),a}})();"]
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.token"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.clientID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.substr(window.location.href.indexOf(\"mkt-key\\x3d\")+8)||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=\/10\\.1038\\\/nphys1404\/.test(a);return!0===a?\"usabilla survey VSNU DOI\":\"do not include\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "teardown_tags":["list",["tag",71,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Request=function(h,e){var f=function(){for(var a,b={},c=\/([^\u0026=]+)=?([^\u0026]*)\/g,d=h.location.search.substring(1);a=c.exec(d);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(),g=function(){for(var a=document.cookie.split(\/;\\s*\/),b,c=a.length,d={};c--;)b=a[c].split(\"\\x3d\"),d[b[0]]=b.slice(1).join(\"\\x3d\");return d}();return{get:function(a){return 1===arguments.length?f[a]||e:f},cookie:function(a){return 0===arguments.length?g:\n1===arguments.length?g[a]||e:this.setCookie.apply(this,[].slice.call(arguments,0))},deleteCookies:function(a,b){for(var c=0;c\u003Ca.length;++c)this.deleteCookie(a[c],b)},deleteCookie:function(a,b){b=b||{};b.days=-1;this.setCookie(a,\"\",b)},setCookie:function(a,b,c){a=[a+\"\\x3d\"+b];c=c||{};c.days\u0026\u0026(b=new Date,b.setTime(+b+864E5*c.days),a.push(\"expires\\x3d\"+b.toGMTString()));c.path\u0026\u0026a.push(\"path\\x3d\"+c.path);c.domain\u0026\u0026a.push(\"domain\\x3d\"+c.domain);document.cookie=a.join(\";\");return!0},deleteCookiesByPattern:function(a,\nb){for(var c=new RegExp(\"(?:^|;|\\\\s)(\"+a+\"[^\\x3d]*)\",\"g\"),d=[],e;null!==(e=c.exec(document.cookie));)d.push(e[1]);this.deleteCookies(d,b)}}}(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){b.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||b.location.hostname.match(\"natureindex.com\")||c.addEventListener(\"accessdetailsloaded\",function(a){if(a=a.detail)b._pageMetaData=b._pageMetaData||{},b._pageMetaData.site_id=a.site_id\u0026\u0026a.site_id.join?a.site_id.join(\";\"):\"\",b._pageMetaData.user_id=a.registrant_id||\"\",b._pageMetaData.business_partner_id=a.business_partner_id\u0026\u0026a.business_partner_id.join?a.business_partner_id.join(\";\"):\"\";a=c.createElement(\"script\");\na.className=\"kxct\";a.setAttribute(\"data-id\",\"Jn7TaPwq\");a.setAttribute(\"data-timing\",\"async\");a.setAttribute(\"data-version\",\"3.0\");a.appendChild(c.createTextNode('window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag?confid\\x3dJn7TaPwq\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());'));\nc.head.appendChild(a);a=Bootstrapper.npg.utils.Consent;a=a.allow(a.TARGETING);Krux(\"consent:set\",{dc:a,al:a,tg:a,cd:!1,sh:!1,re:!1},function(a,b){a\u0026\u0026console.error(a)})},!1)})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar script=document.createElement(\"script\");script.className=\"kxct\";script.dataset.id=\"KT36N7KK\";script.dataset.timing=\"async\";script.dataset.version=\"3.0\";script.type=\"text\/javascript\";script.innerHTML='window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/KT36N7KK.js\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());';\ndocument.head.appendChild(script);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",83],
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"Banner Display",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00170661",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":32
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",92],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",93],
      "vtp_eventCategory":["macro",94],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",99],
      "tag_id":48
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",19],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",99],
      "tag_id":49
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",102],
      "vtp_siteType":["macro",99],
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"learn about institutional subscriptions",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"log in",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"athens",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"shibboleth",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",107],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"magazine test paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"paywall box",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Nature Magazine Institution Survey",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"institution survey",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":318
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":319
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_150",
      "tag_id":320
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_151",
      "tag_id":321
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_152",
      "tag_id":322
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_153",
      "tag_id":323
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":324
    },{
      "function":"__evl",
      "vtp_elementId":"gtm-usabilla-survey-widget",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_289",
      "tag_id":325
    },{
      "function":"__evl",
      "vtp_elementId":"usabilla-paywall-widget-container",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_290",
      "tag_id":326
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":327
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":328
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":329
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":330
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",72,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.registrant_id||\"\",d=a.site_id\u0026\u0026a.site_id.join?a.site_id.join(\";\"):\"\",e=a.business_partner_id\u0026\u0026a.business_partner_id.join?a.business_partner_id.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={profileID:c||null,bpid:e||null};b.user.segment={registeredUser:!!c};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{};b.session.authentication.legacy.webtrendsSiteID=d||null}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(a){var d=[],c=\"\",f=[],h=a.split(\";\");for(a=0;a\u003Ch.length;++a){void 0!==k\u0026\u0026(c=k);var g=h[a].split(\"\\x3d\");var k=g[0];k!==c\u0026\u0026(0\u003Cc.length\u0026\u00260\u003Cd.length\u0026\u0026f.push([c,d]),d=[]);if(2===g.length\u0026\u0026\"\"!==g[0]\u0026\u0026\"\"!==g[1]){var b=g[1].split(\",\");for(g=0;g\u003Cb.length;++g)d.push(b[g])}}0\u003Ck.length\u0026\u00260\u003Cd.length\u0026\u0026f.push([k,d]);return f}\nfunction splitSizes(a){var d=[];if(null!==a){var c=-1!==a.indexOf(\"|\")?a.split(\"|\"):a.split(\",\");for(a=0;a\u003Cc.length;++a){var f=c[a].split(\"x\");var h=parseInt(f[0],10);var g=parseInt(f[1],10);2===f.length\u0026\u0026!isNaN(h)\u0026\u0026!isNaN(g)\u0026\u00260\u003C=h\u0026\u00260\u003C=g\u0026\u0026d.push([h,g])}}return d}function hasClass(a,d){var c,f=a.className.split(\/\\s+\/);var h=0;for(c=f.length;h\u003Cc;++h)if(f[h]===d)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var a,d=[],c=document.getElementsByTagName(\"div\");for(a=0;c[a];++a)hasClass(c[a],\"div-gpt-ad\")\u0026\u0026d.push(c[a]);return d}function debounce(a,d){var c=null,f=null;return function(){var h=this,g=+new Date,k=arguments;c\u0026\u0026g\u003Cc+d?(clearTimeout(f),f=setTimeout(function(){c=g;a.apply(h,k)},d)):(c=g,a.apply(h,k))}}\nfunction addResizeEvent(a){window.addEventListener?window.addEventListener(\"resize\",a,!1):window.attachEvent(\"resize\",a)}function addScrollEvent(a){window.addEventListener?window.addEventListener(\"scroll\",a,!1):window.attachEvent(\"onscroll\",a)}function removeScrollEvent(a){window.removeEventListener?window.removeEventListener(\"scroll\",a,!1):window.detachEvent(\"scroll\",a)}\n(function(a,d,c){var f=Bootstrapper.npg.utils,h=f.Consent;c=c||{};if(\"true\"!==f.Request.get(\"hide_ads\")){var g=\"true\"===f.Request.get(\"debug_collections\");$.getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){var f=c.dfppKeyValues\u0026\u0026h.allow(h.TARGETING)?\";\"+c.dfppKeyValues:\"\",b=[],p=getAdContainers(),l,x=function(e,a){for(var b=e.length,t=[];b--;)a(e[b],b)\u0026\u0026(t.push(e[b].slot),e.splice(b,1));t.length\u0026\u0026googletag.pubads().refresh(t);return e},y=function(e){var a=Bootstrapper.npg.utils.Request.get(\"test\");\na=a\u0026\u0026\"ads\"===a?\";adtyp\\x3dtest\":\"\";e=e.getAttribute(\"data-gpt-targeting\");a\u0026\u0026-1===e.indexOf(a)\u0026\u0026(e+=a);return e+f},z=function(e){a:{var b=a.location.pathname;for(var c=[\"d42473-018-00006-2\",\"d42473-018-00009-z\",\"d42473-018-00004-4\",\"d42473-018-00014-2\"],d=0;c[d];++d)if(-1!==b.indexOf(\"\/\"+c[d])){b=!0;break a}b=!1}return b?\"\/270604982\/Nature\/brandedcontent\":g?e.replace(\"\/nature.com\",\"\"):e};a.googletag=a.googletag||{};a.googletag.cmd=a.googletag.cmd||[];for(var u=0;p[u];++u){var m=p[u];-1!==m.className.indexOf(\"leaderboard\")\u0026\u0026\n729\u003Ewindow.innerWidth||b.push({divId:m.getAttribute(\"id\"),adUnitPath:z(m.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(m.getAttribute(\"data-gpt-sizes\")),targeting:splitKeys(y(m)),isOutOfPage:hasClass(m,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(h.allow(h.TARGETING)?0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();googletag.pubads().addEventListener(\"slotRenderEnded\",function(e){var a=\ne.slot.j?e.slot.j.m:e.slot.l?e.slot.l.m:null;console.log(a,e.isEmpty);if(\"div-gpt-ad-billboard-2\"===a\u0026\u0026!1===e.isEmpty){console.log(a,e.isEmpty);var b=document.getElementById(a);b.parentNode.parentNode.classList.add(\"pb40\");b.parentNode.parentNode.classList.remove(\"pb20\");b.parentNode.parentNode.classList.remove(\"hide\")}a\u0026\u0026e.isEmpty\u0026\u0026(b=document.getElementById(a),b.parentNode.parentNode.classList.remove(\"pb20\"),b.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=\n0;b[a];++a)try{b[a].slot=b[a].isOutOfPage?googletag.defineOutOfPageSlot(b[a].adUnitPath,b[a].divId).addService(googletag.pubads()):googletag.defineSlot(b[a].adUnitPath,b[a].sizeArray,b[a].divId).addService(googletag.pubads());for(var c=0,d=b[a].targeting.length;c\u003Cd;++c)if(2===b[a].targeting[c].length\u0026\u0026\"\"!==b[a].targeting[c][0]\u0026\u0026\"\"!==b[a].targeting[c][1]){if(\"pos\"===b[a].targeting[c][0]\u0026\u0026\"billboard\"===b[a].targeting[c][1][0]){l=b[a].slot;var f=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,\n100],[4,4]).addSize([0,0],[5,5]).build();l.defineSizeMapping(f);l.setCollapseEmptyDiv(!0,!0)}b[a].slot.setTargeting(b[a].targeting[c][0],b[a].targeting[c][1])}}catch(A){console.log(\"failed to create slot for\",b[a])}});googletag.cmd.push(function(){for(var a=0;b[a];++a)googletag.display(b[a].divId)});var v=function(b){var c=Math.max(d.clientHeight,a.innerHeight||0);return x(b,function(a){if(a.isOutOfPage||a.forceLoadOnInit)return!0;a=document.getElementById(a.divId);a=a.getBoundingClientRect();a=a.top-\n300;return c\u003Ea})};googletag.cmd.push(function(){b=v(b)});var n=969\u003Cwindow.innerWidth,q=769\u003Cwindow.innerWidth\u0026\u0026!n,r=770\u003Ewindow.innerWidth;p=debounce(function(){var a=window.innerWidth;970\u003C=a\u0026\u0026!n?(n=!0,r=q=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):770\u003Ea\u0026\u0026!r?(q=n=!1,r=!0,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):970\u003Ea\u0026\u0026769\u003Ca\u0026\u0026!q\u0026\u0026(n=!1,q=!0,r=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])}))},250);var w=debounce(function(){googletag.cmd.push(function(){b=\nv(b);b.length||removeScrollEvent(w)})},250);addResizeEvent(p);addScrollEvent(w)})}})(window,document.documentElement,window.Krux);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var f=[],e=\"\",h=[],k=b.split(\";\");for(b=0;b\u003Ck.length;++b){void 0!==l\u0026\u0026(e=l);var c=k[b].split(\"\\x3d\");var l=c[0];l!==e\u0026\u0026(0\u003Ce.length\u0026\u00260\u003Cf.length\u0026\u0026h.push([e,f]),f=[]);if(2===c.length\u0026\u0026\"\"!==c[0]\u0026\u0026\"\"!==c[1]){var n=c[1].split(\",\");for(c=0;c\u003Cn.length;++c)f.push(n[c])}}0\u003Cl.length\u0026\u00260\u003Cf.length\u0026\u0026h.push([l,f]);return h}\nfunction getScript(b,f){var e=document.createElement(\"script\"),h=document.getElementsByTagName(\"script\")[0];e.async=1;e.onload=e.onreadystatechange=function(b,c){if(c||!e.readyState||\/loaded|complete\/.test(e.readyState))e.onload=e.onreadystatechange=null,e=void 0,c||f\u0026\u0026f()};e.src=b;h.parentNode.insertBefore(e,h)}\nfunction splitSizes(b){var f=[];if(null!==b){var e=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Ce.length;++b){var h=e[b].split(\"x\");var k=parseInt(h[0],10);var c=parseInt(h[1],10);2===h.length\u0026\u0026!isNaN(k)\u0026\u0026!isNaN(c)\u0026\u00260\u003C=k\u0026\u00260\u003C=c\u0026\u0026f.push([k,c])}}return f}function hasClass(b,f){var e,h=b.className.split(\/\\s+\/);var k=0;for(e=h.length;k\u003Ce;++k)if(h[k]===f)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,f=[],e=document.getElementsByTagName(\"div\");for(b=0;e[b];++b)hasClass(e[b],\"div-gpt-ad\")\u0026\u0026f.push(e[b]);return f}function debounce(b,f){var e=null,h=null;return function(){var k=this,c=+new Date,l=arguments;e\u0026\u0026c\u003Ce+f?(clearTimeout(h),h=setTimeout(function(){e=c;b.apply(k,l)},f)):(e=c,b.apply(k,l))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,f,e,h){var k=Bootstrapper.npg.utils,c=[],l,n=null;if(\"true\"!==k.Request.get(\"hide_ads\")\u0026\u0026serveAdsFor(b.location.pathname)){var r=function(a){var c=Math.max(f.clientHeight,b.innerHeight||0);return x(a,function(a){if(a.isOutOfPage||a.forceLoadOnInit)return!0;var d=document.getElementById(a.divId),m=d.getBoundingClientRect();m=m.top-300;m=c\u003Em;var e=null!==d.offsetParent;a=a.sizeArray\u0026\u0026a.sizeArray.length\u0026\u0026a.sizeArray[0].length\u0026\u00262===a.sizeArray[0][0];d=d.getAttribute(\"data-ad-type\")?\n-1===d.getAttribute(\"data-ad-type\").indexOf(\"top\"):!1;var f=770\u003Eb.innerWidth;return m\u0026\u0026e\u0026\u0026!1===f||a||m\u0026\u0026e\u0026\u0026f\u0026\u0026d})},x=function(a,b){for(var d=a.length,c=[];d--;)b(a[d],d)\u0026\u0026(c.push(a[d].slot),a.splice(d,1));c.length\u0026\u0026googletag.pubads().refresh(c);return a},q={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},y=function(){var a=b.dataLayer?",["escape",["macro",109],8,16],":null;if(a)return a;\nif(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=b.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var c=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:c},z=function(a){var c=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,c+\"\/nature\/\"+y()));a=a.replace(\"\/nature\/laban\",\n\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");a=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026\n(a+=\"\/homepage\"));window.dataLayer\u0026\u0026q[",["escape",["macro",7],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var d=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(window.location.search)||[\"\",\"\"])[1];if(q[d.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){d=!0;break a}}d=!1}d\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(d=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===d.getAttribute(\"content\")\u0026\u0026(a=c+\"\/nature\/brandedcontent\");return a},\nA=function(a){for(var c={},d=0;a[d];++d){var g=a[d].size;var e=\"2x2\"===a[d].size?window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;c[g]={count:e,name:a[d].name}}return c}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),p=function(a,b,d,c){for(var g=!1,e=0;a[e];++e)a[e][0]===\nb\u0026\u0026null!==d\u0026\u0026(a[e][1]=c?a[e][1].concat(d):[d],g=!0);g||null===d||a.push([b,[d]]);return a},t=function(a,b,d){for(var c=0;a[c];++c)a[c][0]===b\u0026\u0026(a[c][0]=d);return a},B=function(a,c){var d=a;var g=e.dfppKeyValues\u0026\u0026k.Consent.allow(k.Consent.TARGETING)?\";\"+e.dfppKeyValues:\"\";var m=k.Request.get(\"test\");m=m\u0026\u0026\"ads\"===m?\";adtype\\x3dtest\":\"\";d=d.getAttribute(\"data-gpt-targeting\");m\u0026\u0026-1===d.indexOf(m)\u0026\u0026(d+=m);d+=h.registrant_id?\";logged\\x3dy\":\";logged\\x3dn\";h.business_partner_id\u0026\u0026(d+=\";bpid\\x3d\"+h.business_partner_id.join(\",\"));\n0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026(m=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(d+=\";sponsored\\x3d\"+m.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\"\"));g=d+g;g=t(splitKeys(g),\"artid\",\"articleid\");g=t(g,\"kw\",\"search\");d=a.getAttribute(\"data-gpt-sizes\");d=(d=A[d])?d.name+ ++d.count:null;g=p(g,\"pos\",d);g=p(g,\"tile\",c+1);d=b.location.pathname.split(\"\/\");d=3===d.length\u0026\u0026\"subjects\"===d[1]?d[2]:null;g=p(g,\"subject\",d);g=p(g,\"article\",window.dataLayer\u0026\u0026\nq[",["escape",["macro",7],8,16],"]?\"naturecareers\":null);d=window.dataLayer?",["escape",["macro",73],8,16],":null;g=p(g,\"collectionID\",d);return g=p(g,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"?\"fronthalf\":null,!0)},u=function(a){for(var c=[],d=0;a[d];++d){var b=a[d];c.push({divId:b.getAttribute(\"id\"),adUnitPath:z(b.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(b.getAttribute(\"data-gpt-sizes\")),targeting:B(b,d),isOutOfPage:hasClass(b,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return c},\nv=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(k.Consent.allow(k.Consent.TARGETING)?0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",function(b){var c=b.slot\u0026\u0026b.slot.getSlotElementId?b.slot.getSlotElementId():null,e;a[c]=!b.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(e=document.querySelector(\".c-paid-content\"))\u0026\u0026e.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===\nc\u0026\u0026!1===b.isEmpty\u0026\u0026(e=document.getElementById(c),e.parentNode.parentNode.classList.add(\"pb40\"),e.parentNode.parentNode.classList.remove(\"pb20\"),e.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026b.isEmpty\u0026\u0026(e=document.getElementById(c),e.parentNode.parentNode.classList.remove(\"pb20\"),e.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;c[a];++a)try{c[a].slot=c[a].isOutOfPage?googletag.defineOutOfPageSlot(c[a].adUnitPath,c[a].divId).addService(googletag.pubads()):\ngoogletag.defineSlot(c[a].adUnitPath,c[a].sizeArray,c[a].divId).addService(googletag.pubads());for(var b=0,d=c[a].targeting.length;b\u003Cd;++b)if(2===c[a].targeting[b].length\u0026\u0026\"\"!==c[a].targeting[b][0]\u0026\u0026\"\"!==c[a].targeting[b][1]){if(\"pos\"===c[a].targeting[b][0]\u0026\u00260===c[a].targeting[b][1][0].indexOf(\"BB\")){l=c[a].slot;var e=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();l.defineSizeMapping(e);l.setCollapseEmptyDiv(!0,!1)}c[a].slot.setTargeting(c[a].targeting[b][0],\nc[a].targeting[b][1])}}catch(C){console.log(\"failed to create slot for\",c[a])}});googletag.cmd.push(function(){for(var a=0;c[a];++a)googletag.display(c[a].divId)})},w=function(){n\u0026\u0026removeScrollEvent(n);googletag.cmd.push(function(){c=r(c)});n=debounce(function(){googletag.cmd.push(function(){c=r(c);c.length||(removeScrollEvent(n),n=null)})},250);addScrollEvent(n)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];c=u(getAdContainers());\nv();w();var a=969\u003Cb.innerWidth,e=769\u003Cb.innerWidth\u0026\u0026!a,d=770\u003Eb.innerWidth,f=debounce(function(){var c=b.innerWidth;970\u003C=c\u0026\u0026!a?(a=!0,d=e=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):770\u003Ec\u0026\u0026!d?(e=a=!1,d=!0,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):970\u003Ec\u0026\u0026769\u003Cc\u0026\u0026!e\u0026\u0026(a=!1,e=!0,d=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])}))},250);addResizeEvent(f);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();c=u(getAdContainers());\nv();w()},!1)})}}-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement,window.Krux||{},{}):document.addEventListener(\"load\",function(){initAds(window,document.documentElement,window.Krux||{},{})}));document.addEventListener(\"accessdetailsloaded\",function(b){initAds(window,document.documentElement,window.Krux||{},b.detail||{})},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||(window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]),function(){function c(a){a=\"kxmacmillan_\"+a;try{var b=window.localStorage}catch(e){b=null}return b?b[a]||\"\":navigator.cookieEnabled?(b=document.cookie.match(a+\"\\x3d([^;]*)\"))\u0026\u0026unescape(b[1])||\"\":\"\"}Krux.user=c(\"user\");Krux.segments=c(\"segs\")?c(\"segs\").split(\",\"):[];var a=[];Krux.user\u0026\u0026a.push(\"kuid\\x3d\"+Krux.user);for(var d=0;d\u003CKrux.segments.length;d++)a.push(\"ksg\\x3d\"+\nKrux.segments[d]);Krux.dfppKeyValues=a.length?a.join(\";\")+\";\":\"\"}());\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(b){for(var c=[],a=0;b[a];++a)b[a].name\u0026\u0026c.push(b[a]);return c},translateMeta=function(b){var c={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return c[b]||b},getMeta=function(b){var c=filterMeta(document.getElementsByTagName(\"meta\")||[]),a=document.getElementsByTagName(\"body\")||[],f=function(){for(var a=c.length,d={},e;a--;)if(e=translateMeta(c[a].name))d[e]?(\"string\"===typeof d[e]\u0026\u0026(d[e]=[d[e]]),d[e].push(c[a].content)):\nd[e]=c[a].content||\"\";d.keywords\u0026\u0026(d.keywords=d.keywords.replace(\/,\/g,\";\"));b(d)};a.length?f():c.length\u0026\u0026f()};getMeta(function(b){window._pageMetaData=b});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=function(d,f,g,h){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,d=b.length;c\u003Cd;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(g);if(a)a=a.split(\":\");else if(100!=d)\"v\"==f\u0026\u0026(d=Math.random()\u003E=\nd\/100?0:100),a=[f,d,0],this.set(g,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(g,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=h+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},f=document.createElement(\"div\");f.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(f);try{var k=new h(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));k.start()}catch(d){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",112],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1unr\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",75],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",73,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",73,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/4e21a51350b0.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",76,0]],
      "teardown_tags":["list",["tag",74,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"6fa646ed3ab3\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mainArticleBodyContainer=document.querySelector(\"#main-article-body\");mainArticleBodyContainer\u0026\u0026mainArticleBodyContainer.classList.remove(\"js-hide\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,a,c,d,e){if(!a)for(a=a||{},window.permutive=a,a.q=[],a.config=e||{},a.config.projectId=c,a.config.apiKey=d,a.config.environment=a.config.environment||\"production\",b=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Cb.length;c++)d=b[c],a[d]=function(b){return function(){var c=Array.prototype.slice.call(arguments,0);a.q.push({functionName:b,arguments:c})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var b=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",b?JSON.parse(b):[])}});permutive.addon(\"web\",{page:{legacy:{webtrendsPrimaryArticleType:",["escape",["macro",48],8,16],",webtrendsSubjectTerms:",["escape",["macro",118],8,16],",webtrendsContentGroup:",["escape",["macro",44],8,16],"},journal:{title:",["escape",["macro",17],8,16],"}}});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null},clientId=getClientId();if(clientId){var dlUpdate={event:\"ga-client-id-pushed-to-datalayer\",gaClientId:clientId};window.dataLayer.push(dlUpdate)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};Bootstrapper.npg.utils.Consent=function(){var d=unescape(Bootstrapper.npg.utils.Request.cookie(\"OptanonConsent\")||\"\"),b=(\/groups=([^\u0026]+)\/.exec(d)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(c){if(c===this.STRICTLY_NECESSARY)return!0;for(var a=0;b[a];++a)if(b[a]===c+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var b=function(b,c){c=c||{};var d=document.createEvent(\"CustomEvent\");d.initCustomEvent(b,c.bubbles||!1,c.cancelable||!1,c.detail||a);return d};b.prototype=window.Event.prototype;window.CustomEvent=b})();\nvar parse=function(a,b){try{return 200===a?JSON.parse(b):null}catch(e){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)},base=function(a){return-1===a.indexOf(\"www\")?\"https:\/\/www.nature.com\":\"\"};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",base(window.location.hostname)+\"\/platform\/login\/details\",!0);transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",74],8,16],",kruxSegment:",["escape",["macro",75],8,16],",journalTitle:",["escape",["macro",17],8,16],",pageType:",["escape",["macro",4],8,16],",template:",["escape",["macro",57],8,16],",contentType:",["escape",["macro",120],8,16],",doi:",["escape",["macro",18],8,16],",abTestValue:",["escape",["macro",68],8,16],",authorization:",["escape",["macro",121],8,16],",bpid:",["escape",["macro",64],8,16],",primaryArticleType:",["escape",["macro",48],8,16],",referrer:",["escape",["macro",122],8,16],",openAcces:",["escape",["macro",123],8,16],",GAclientId:",["escape",["macro",124],8,16],",usabillaSurvey:",["escape",["macro",125],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar widgetUsabillaSelector=document.getElementsByClassName(\"gtm-usabilla-in-page\")[0];\nwidgetUsabillaSelector\u0026\u0026(widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxUser\",",["escape",["macro",74],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxSegment\",",["escape",["macro",75],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-journalTitle\",",["escape",["macro",17],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-pageType\",",["escape",["macro",4],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-template\",",["escape",["macro",57],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-contentType\",",["escape",["macro",120],8,16],"),\nwidgetUsabillaSelector.setAttribute(\"ub-in-page-doi\",",["escape",["macro",18],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-abTestValue\",",["escape",["macro",68],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-authorization\",",["escape",["macro",121],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-bpid\",",["escape",["macro",64],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-primaryArticleType\",",["escape",["macro",48],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-referrer\",",["escape",["macro",122],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-openAcces\",\n",["escape",["macro",123],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-GAclientId\",",["escape",["macro",124],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-usabillaSurvey\",",["escape",["macro",125],8,16],"));",["escape",["macro",114],8,16],"\u0026\u0026window.usabilla(\"setEventCallback\",function(b,a,c,d,e){\"In-Page:Success\"===a\u0026\u0026",["escape",["macro",126],8,16],"()});",["escape",["macro",116],8,16],"\u0026\u0026",["escape",["macro",127],8,16],"();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",66],8,16],";var isObject=",["escape",["macro",128],8,16],";var map=",["escape",["macro",67],8,16],";var closestByAttribute=",["escape",["macro",130],8,16],";var closest=",["escape",["macro",129],8,16],";var enforceDataType=",["escape",["macro",131],8,16],";var normaliseAnd=",["escape",["macro",5],8,16],";var normaliseWhitespace=",["escape",["macro",6],8,16],";var formatDate=",["escape",["macro",20],8,16],";var createEventPayload=",["escape",["macro",132],8,16],";var createEcommercePromotionEvent=",["escape",["macro",134],8,16],";var createEcommerceProductEvent=\n",["escape",["macro",136],8,16],";var productAtIndex=",["escape",["macro",137],8,16],";var sendEvent=",["escape",["macro",138],8,16],";var eventHandler=",["escape",["macro",139],8,16],";(function(products){if(products\u0026\u0026products.length){for(var i=0;products[i];++i){var product=productAtIndex(products,i);product.list=\"Search Results\";win.ga(\"ec:addImpression\",product)}sendEvent({action:\"impression\",category:\"catalog\",nonInteraction:true})}})(",["escape",["macro",135],8,16],");var setupTracking=function(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);\nif(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=document.querySelectorAll('[data-track\\x3d\"in-view\"]');\nif(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var clickPromotions=document.querySelectorAll('[data-track\\x3d\"click-promotion\"]');\nif(clickPromotions.length)Array.prototype.slice.call(clickPromotions).forEach(function(promotion){promotion.addEventListener(\"click\",function(e){var target=closestByAttribute(e.target,\"data-track\",\"click-promotion\");var payload=null;if(target){payload=createEcommercePromotionEvent(target);if(payload){win.ga(\"ec:addPromo\",payload);win.ga(\"ec:setAction\",\"promo_click\");sendEvent({category:\"Internal Promotions\",action:\"click\",label:payload.name})}}})});var clickProducts=document.querySelectorAll('[data-track\\x3d\"click-product\"]');\nif(clickProducts.length)Array.prototype.slice.call(clickProducts).forEach(function(product){product.addEventListener(\"click\",function(e){var target=closestByAttribute(e.target,\"data-track\",\"click-product\");var payload=null;if(target){payload=createEcommerceProductEvent(target);if(payload){win.ga(\"ec:addProduct\",payload);win.ga(\"ec:setAction\",\"click\",{list:\"Search Results\"});sendEvent({category:\"UX\",action:\"click\",label:\"Results\",value:payload.name})}}})});var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar usabillaId=",["escape",["macro",114],8,16],"?",["escape",["macro",140],8,16],":",["escape",["macro",141],8,16],",containerId=",["escape",["macro",114],8,16],"?\"gtm-usabilla-survey-widget\":\"gtm-usabilla-paywall-widget\",container=document.createElement(\"div\"),parentContainerSelector=\"#gtm-usabilla-container\",parentContainer=document.querySelector(parentContainerSelector);\nparentContainer\u0026\u0026(container.setAttribute(\"id\",containerId),container.setAttribute(\"class\",\"gtm-usabilla-in-page\"),",["escape",["macro",116],8,16],"\u0026\u0026parentContainer.classList.add(\"js-hide\"),container.setAttribute(\"ub-in-page\",usabillaId),parentContainer.insertBefore(container,parentContainer.firstChild));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^((test-)?www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/ecommerce\/subscribe\\.action)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"nature"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^()$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\\\/(login|my-account|immersive|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\\\/news\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"test-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\\\/articles\/n-",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/nature\/journal\/v554\/n7690\/index\\.html\/?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"nature-js-bundle-loaded"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"bav"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",85],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",98],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",101],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",103],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"learn-subscription\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_150($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",103],
      "arg1":"[datatracking=\"data-test=\\\"subscribe-prompt-log-in\\\" data-track=\\\"click\\\" data-track-action=\\\"login\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_151($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",103],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"athens\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",103],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"shibboleth\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_153($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",105],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",106],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"\/srep\/"
    },{
      "function":"_cn",
      "arg0":["macro",85],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",85],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_290($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_289($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"mosaic"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/naturejobs\/?)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"press.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",110],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",111],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"magazine mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",85],
      "arg1":"\/articles\/"
    },{
      "function":"_eq",
      "arg0":["macro",115],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",116],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",119],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,1],["add",4]],
    [["if",2,3,4,5,6],["add",5]],
    [["if",6],["unless",7,8],["add",6]],
    [["if",6,11,12],["add",7]],
    [["if",6,12,13],["add",7]],
    [["if",6,12,14],["add",7]],
    [["if",6,14,15],["add",7]],
    [["if",6,16,17],["add",7]],
    [["if",18,19],["add",8,51]],
    [["if",19,20],["add",8,51]],
    [["if",6,14],["add",9,57]],
    [["if",21],["add",10]],
    [["if",19],["add",11,12,13,49,54,0,36,38,39,40,41,43,44,46,47,48]],
    [["if",6],["unless",22,23,24],["add",14]],
    [["if",25],["add",15]],
    [["if",6,26],["add",15]],
    [["if",28,29,30,31],["add",16]],
    [["if",1],["add",17,60,61,42,45]],
    [["if",32],["add",18]],
    [["if",6,33],["add",19]],
    [["if",6,34],["add",20]],
    [["if",6,35],["add",21]],
    [["if",36,37],["add",22]],
    [["if",30,38,39],["add",23]],
    [["if",30,40,41],["add",24]],
    [["if",30,42,43],["add",25]],
    [["if",30,44,45],["add",26]],
    [["if",10,46],["add",27]],
    [["if",19,47,48],["add",3]],
    [["if",19,49],["add",3]],
    [["if",50,51,52],["add",28]],
    [["if",51,53,54],["add",28]],
    [["if",6],["add",29]],
    [["if",55,56],["add",30]],
    [["if",55,57],["add",31]],
    [["if",19],["unless",22,23],["add",32,1,52,59,68]],
    [["if",30,59,60],["add",33]],
    [["if",30,61,62],["add",34]],
    [["if",30,63,64],["add",35]],
    [["if",19,66],["unless",65],["add",37]],
    [["if",6,17,67],["add",50]],
    [["if",19,68],["add",51]],
    [["if",19,69],["add",51]],
    [["if",19,70],["add",51]],
    [["if",19,71],["add",51]],
    [["if",19,72],["add",51]],
    [["if",19,73],["add",51]],
    [["if",19,74],["add",51]],
    [["if",11,19],["add",51]],
    [["if",19,75],["add",51]],
    [["if",13,19],["add",51]],
    [["if",14,19],["add",51]],
    [["if",6,70],["add",2]],
    [["if",6,76],["add",53]],
    [["if",6,17,77],["add",55]],
    [["if",6,17,78],["add",55]],
    [["if",6,17,79,80],["add",56]],
    [["if",6,72],["add",57]],
    [["if",6,81],["unless",82],["add",58]],
    [["if",6,77],["add",62]],
    [["if",6,78],["add",62]],
    [["if",6,84],["add",62]],
    [["if",6,85],["unless",22,86],["add",63]],
    [["if",1],["unless",22,23,24],["add",64]],
    [["if",6,24],["add",65]],
    [["if",6,87,88,89,90],["add",66]],
    [["if",6,87,89,91,92],["add",66]],
    [["if",6,9,87,89,91,92],["add",67]],
    [["if",19,66],["unless",65,93],["add",69]],
    [["if",9,10],["block",6,9,14,19,20,21,29,52,2,57,60,61,63,64,65,66]],
    [["if",10,27],["block",15,22,28]],
    [["if",19,58],["block",32,1,68]],
    [["if",10,83],["block",58]]]
},
"runtime":[[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__cegg","__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Mf:!0},fa={};try{fa.__proto__=ea;da=fa.Mf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null,ma=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa=function(a,b){this.a=a;this.i=b};var pa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},qa=function(){this.m={};this.i=!1;this.s={}};qa.prototype.get=function(a){return this.m["dust."+a]};qa.prototype.set=function(a,b){this.i||(a="dust."+a,this.s.hasOwnProperty(a)||(this.m[a]=b))};qa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ra=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new qa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(pa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!pa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else pa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():pa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ra(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ta=function(a,b){if(pa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.s.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return pa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ua=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={fh:function(f){c=f},qe:function(){c&&a(c,1)},hh:function(f){d=f},Ca:function(f){d&&a(d,f)},Fh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Eg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},kg:a};e.onFnConsume=e.fh;e.consumeFn=e.qe;e.onStorageConsume=e.hh;e.consumeStorage=e.Ca;e.setMax=e.Fh;e.getConsumed=e.Eg;e.reset=e.reset;e.consume=e.kg;return e};var va=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new qa;this.a=this.s=void 0};va.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.s["dust."+b]=!0}else a.i.set(b,c)};
va.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};va.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};va.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var ya=function(a){var b=new va(a.F,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var za=function(){},Ca=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Da=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Fa=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ga=function(a,b){if(!Da(a)||
!Da(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ia=function(a,b){for(var c=new Ha,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ka=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Na=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Oa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Pa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Qa=function(){return(new Date).getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ha.prototype.get=function(a){return this.values[this.prefix+a]};
var Ra=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Sa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ta=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ua=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Va=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Wa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Xa=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ya=function(a){var b=[];Ja(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var Za=function(a,b){qa.call(this);this.F=a;this.M=b};ma(Za,qa);var ab=function(a,b){for(var c,d=0;d<b.length&&!(c=$a(a,b[d]),c instanceof oa);d++);return c},$a=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Za))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Za.prototype.toString=function(){return this.F};Za.prototype.getName=function(){return this.F};
Za.prototype.$b=function(){return new h(ra(this))};Za.prototype.a=function(a,b){a.F.qe();return this.M.apply(bb(this,a),Array.prototype.slice.call(arguments,1))};var bb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ea(d)?$a(e,d):d};c.prototype.s=function(d){return ab(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
Za.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var cb=function(){qa.call(this)};ma(cb,qa);cb.prototype.$b=function(){return new h(ra(this))};var db=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,eb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=db.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof Za?n="Fn":l instanceof h?n="List":l instanceof cb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(eb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var fb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,gb=function(a){if(null==a)return String(a);var b=fb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},hb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ib=function(a){if(!a||"object"!=gb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!hb(a,"constructor")&&!hb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||hb(a,b)},G=function(a,b){var c=b||("array"==gb(a)?[]:{}),d;for(d in a)if(hb(a,d)){var e=a[d];"array"==gb(e)?("array"!=gb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):ib(e)?(ib(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ra(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof cb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof Za){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=jb(p[u],b);var v=b?b.F:ua(),w=new va(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},jb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ea(g)||Ka(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(ib(g)){var n=
new cb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new Za("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=kb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var lb={control:function(a,b){return new oa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new Za(a,function(){return function(g){var k=ya(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof oa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=ab(k,f);if(t instanceof oa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new cb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function pb(a,b){var c=$a(a,b);if(c instanceof oa||c instanceof Za||c instanceof h||c instanceof cb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var qb=function(){this.m=ua();this.a=new va(this.m)},rb=function(a,b,c){var d=new Za(b,c);d.i=!0;a.a.set(b,d)};qb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};qb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.a,arguments[c]);return b};
qb.prototype.s=function(a,b){var c=ya(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=pb(c,arguments[e]);return d};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new oa("break"),wb=new oa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},Ab=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(ub,b))return jb(a[b].apply(a,sb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof Za){var e=sb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(tb.supportedMethods,b)){var f=sb(c);f.unshift(this.i);
return tb[b].apply(a,f)}}if(a instanceof Za||a instanceof cb){if(a.has(b)){var g=a.get(b);if(g instanceof Za){var k=sb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof Za?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=ya(this.i),c=ab(b,Array.prototype.slice.apply(arguments));if(c instanceof oa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof oa)return d}},Fb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Gb=function(){return wb},
Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){return this.a(a)==this.a(b)},Kb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=ab(e,c);if(f instanceof oa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof cb||b instanceof h||b instanceof Za)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=ab(m,c);if(n instanceof oa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){var f=ya(d);xa(f,a,e,!0);return f},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){var f=ya(d);f.add(a,e);return f},b,c)},Qb=function(a){return this.i.get(this.a(a))},Rb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof cb||a instanceof h||a instanceof Za?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:pa(b)&&(c=a[b]));return c},Sb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){return this.a(a)===this.a(b)},Vb=function(a,b){return this.a(a)!==this.a(b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.s(d);if(e instanceof oa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=
this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},bc=function(a){return!this.a(a)},dc=function(a,b){return this.a(a)!=this.a(b)},ec=function(){return null},fc=function(a,b){return this.a(a)||this.a(b)},gc=function(a,b){var c=this.a(a);this.a(b);return c},hc=function(a){return this.a(a)},ic=function(a){return Array.prototype.slice.apply(arguments)},jc=function(a){return new oa("return",this.a(a))},kc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof Za||a instanceof h||a instanceof cb)&&a.set(b,c);return c},lc=function(a,b){return this.a(a)-this.a(b)},mc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof oa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof oa&&("return"==f.a||"continue"==f.a)))return f},nc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},oc=function(a){a=this.a(a);return a instanceof Za?"function":typeof a},pc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},qc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.s(f),e instanceof oa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.s(f);if(e instanceof oa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},rc=function(a){return~Number(this.a(a))},sc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},tc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))&Number(this.a(b))},wc=function(a,b){return Number(this.a(a))^Number(this.a(b))},xc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var zc=function(){this.a=new qb;yc(this)};zc.prototype.Xb=function(a){return this.a.i(a)};
var Bc=function(a,b){return Ac.a.s(a,b)},yc=function(a){function b(e,f){var g=d.a,k=String(f);lb.hasOwnProperty(e)&&rb(g,k||e,lb[e])}function c(e,f){rb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,xb);c(1,yb);c(2,Ab);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Pb);c(15,Qb);c(16,Rb);c(17,Rb);c(18,Sb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);c(27,
ac);c(28,bc);c(29,dc);c(45,ec);c(30,fc);c(32,gc);c(33,gc);c(34,hc);c(35,hc);c(46,ic);c(36,jc);c(43,kc);c(37,lc);c(38,mc);c(39,nc);c(40,oc);c(41,pc);c(42,qc);c(58,rc);c(57,sc);c(60,tc);c(61,uc);c(56,vc);c(62,wc);c(59,xc)},Dc=function(){var a=Ac,b=Cc();rb(a.a,"require",b)},Ec=function(a,b){a.a.a.M=b};
var Fc=[],Gc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Hc=function(a){return Gc[a]},Ic=/[\x00\x22\x26\x27\x3c\x3e]/g;var Mc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Nc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Oc=function(a){return Nc[a]};
Fc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Mc,Oc)+"'"}};var Xc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Yc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Zc=function(a){return Yc[a]};Fc[16]=function(a){return a};var ad;
var bd=[],cd=[],dd=[],ed=[],fd=[],gd={},hd,id,jd,kd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ld=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=gd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ad(c,e,b)},nd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=md(a[e],b,c));
return d},od=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=gd[b];return c?c.priorityOverride||0:0},md=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(md(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=bd[f];if(!g||b.ad(g))return;c[f]=!0;try{var k=nd(g,b,c);k.vtp_gtmEventId=b.id;d=ld(k,b);jd&&(d=jd.mg(d,k))}catch(y){b.Je&&b.Je(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[md(a[l],b,c)]=md(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=md(a[n],b,c);id&&(m=m||r===id.Jb);d.push(r)}return id&&m?id.pg(d):d.join("");case "escape":d=md(a[1],b,c);if(id&&Ea(a[1])&&"macro"===a[1][0]&&id.Rg(a))return id.mh(d);d=String(d);for(var t=2;t<a.length;t++)Fc[a[t]]&&(d=Fc[a[t]](d));return d;case "tag":var p=a[1];if(!ed[p])throw Error("Unable to resolve tag reference "+p+".");return d={we:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=pd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},pd=function(a,b,c){try{return hd(nd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),xa:a("function"),nf:a("instance_name"),sf:a("live_only"),uf:a("malware_disabled"),vf:a("metadata"),$h:a("original_vendor_template_id"),zf:a("once_per_event"),Pd:a("once_per_load"),Xd:a("setup_tags"),Zd:a("tag_id"),$d:a("teardown_tags")}}();var rd=function(a,b,c){this.i=a;this.a=c};ma(rd,Error);function sd(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)sd(a[c],b[c])}};var td=function(a,b){this.m=a;this.i=b;this.a=[]};ma(td,Error);var ud=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var wd=function(){return function(a,b){a instanceof td||(a=new td(a,vd));b&&a.a.push(b);throw a;}};function vd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Da(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var xd=null,Ad=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];xd=yd(a);for(var e=0;e<cd.length;e++){var f=cd[e],g=zd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<ed.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},zd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=xd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=xd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},yd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=pd(dd[c],a));return b[c]}};var Bd=function(){this.a={}};function Cd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new rd(c,d,g);}}function Dd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Cd(e,b,d,g);Cd(f,b,d,g)}}}};var Hd=function(a){var b=Ed.B,c=this;this.i=new Bd;this.a={};var d={},e=Dd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ja(a,function(f,g){var k={};Ja(g,function(l,m){var n=Fd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Gd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Kd=function(a){return Jd.a[a]||
function(){}};function Fd(a,b){var c=kd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Gd;try{return ld(c)}catch(d){return{assert:function(e){throw new rd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Gd(a,b,c){return new rd(a,b,c)};var Ld=!1;var Md={};Md.Oh=Na('');Md.xg=Na('');var Nd=Ld,Od=Md.xg,Pd=Md.Oh;
var ce=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},de=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ce(b,"/*")&&(b=b.slice(0,-2));ce(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ee=/^[a-z0-9-]+$/i,fe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ge=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ee.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!fe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=de(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var he,ie=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.$f&&(l["fix_"+m]=!0),l.ye=l.ye||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var u=k.slice(p.length);if(u.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,S:p.S,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var u={};p[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;u[w]=z.textContent||z.innerText||B});return{tagName:p[1],S:u,Cb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var u=r[p]();return u?(u.type=u.type||p,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.ye&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.He=function(){return this[this.length-1]};v.cd=function(z){var E=this.He();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.lg=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Cb=p.test(z.tagName)||z.Cb);return z},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.cd("TABLE")?(k="<TBODY>"+k,B()):l.ji&&u.test(E)&&v.lg(E)?v.cd(E)?x():(k="</"+z.tagName+">"+k,B()):z.Cb||v.push(z)},endTag:function(z){v.He()?l.zg&&!v.cd(z.tagName)?x():v.pop():l.zg&&(y(),B())}},B=function(){var z=k,E=w(y());k=z;if(E&&
A[E.type])A[E.type](E)};t=function(){B();return w(y())}}();return{append:function(p){k+=p},uh:t,ri:function(p){for(var u;(u=t())&&(!p[u.type]||!1!==p[u.type](u)););},clear:function(){var p=k;k="";return p},si:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.vi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ui=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.o=b;a.J=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.S){var t=m.S[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Cb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;he=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,p){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(p,r[u],u)}function d(r,t,p){for(var u in r)r.hasOwnProperty(u)&&t.call(p,u,r[u])}function e(r,
t){d(t,function(p,u){r[p]=u});return r}function f(r,t){r=r||{};d(t,function(p,u){b(r[p])||(r[p]=u)});return r}function g(r){try{return m.call(r)}catch(p){var t=[];c(r,function(u){t.push(u)});return t}}var k={Qf:a,Rf:a,Sf:a,Tf:a,ag:a,bg:function(r){return r},done:a,error:function(r){throw r;},xh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,u){var v=p.ownerDocument;e(this,{root:p,options:u,Db:v.defaultView||v.parentWindow,Sa:v,nc:he("",{$f:!0}),Pc:[p],nd:"",od:v.createElement(p.nodeName),zb:[],Ia:[]});r(this.od,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var p;!this.Tb&&this.Ia.length;)p=this.Ia.shift(),"function"===typeof p?this.gg(p):this.xd(p)};t.prototype.gg=function(p){var u={type:"function",value:p.name||p.toString()};this.jd(u);p.call(this.Db,this.Sa);this.Oe(u)};
t.prototype.xd=function(p){this.nc.append(p);for(var u,v=[],w,y;(u=this.nc.uh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Uh(v);w&&this.Jg(u);y&&this.Kg(u)};t.prototype.Uh=function(p){var u=this.dg(p);u.me&&(u.Zc=this.nd+u.me,this.nd+=u.qh,this.od.innerHTML=u.Zc,this.Rh())};t.prototype.dg=function(p){var u=this.Pc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.S){if(!/^noscript$/i.test(x.tagName)){var A=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.S.id&&"ps-style"!==x.S.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Cb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{wi:p,raw:v.join(""),me:w.join(""),qh:y.join("")}};t.prototype.Rh=function(){for(var p,u=[this.od];b(p=u.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Pc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Pc[w].appendChild(p)}u.unshift.apply(u,g(p.childNodes))}};t.prototype.Jg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.src=p.S.src||p.S.ai;p.src&&this.zb.length?this.Tb=p:this.jd(p);var v=this;this.Th(p,function(){v.Oe(p)})};t.prototype.Kg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.type=p.S.type||p.S.bi||"text/css";this.Vh(p);u&&this.write()};t.prototype.Vh=function(p){var u=this.fg(p);this.Og(u);p.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=p.content:
u.appendChild(this.Sa.createTextNode(p.content)))};t.prototype.fg=function(p){var u=this.Sa.createElement(p.tagName);u.setAttribute("type",p.type);d(p.S,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Og=function(p){this.xd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(p,u)};t.prototype.jd=function(p){p.ih=this.Ia;this.Ia=[];this.zb.unshift(p)};t.prototype.Oe=function(p){p!==this.zb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.zb.shift(),this.write.apply(this,p.ih),!this.zb.length&&this.Tb&&(this.jd(this.Tb),this.Tb=null))};t.prototype.Th=function(p,u){var v=this.eg(p),w=this.Hh(v),y=this.options.Qf;p.src&&(v.src=p.src,this.Ch(v,w?y:function(){u();y()}));try{this.Ng(v),p.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.eg=function(p){var u=this.Sa.createElement(p.tagName);d(p.S,function(v,w){u.setAttribute(v,w)});p.content&&(u.text=p.content);return u};t.prototype.Ng=function(p){this.xd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(p,u)};t.prototype.Ch=function(p,u){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);u()}})};t.prototype.Hh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.xh&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),y;w&&(y=w[w.length-1],y.Rf(),w.stream=t.apply(null,w),y.Sf())}function t(w,y,x){function A(H){H=x.bg(H);v.write(H);x.Tf(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var E=v.Db.onerror||a;v.Db.onerror=function(H,K,T){x.error({mi:H+
" - "+K+":"+T});E.apply(v.Db,arguments)};v.write(y,function(){e(B,z);v.Db.onerror=E;x.done();v=null;r()});return v}var p=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.li?w[0]:w;var A=[w,y,x];w.lh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.ag(A);u.push(A);v||r();return w.lh},{streams:{},oi:u,ei:n})}();ie=l.postscribe}})();function je(a){return""+a}
function ke(a,b){var c=[];return c};var le=function(a,b){var c=new Za(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},me=function(a,b){var c=new cb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ca(e)?c.set(d,le(a+"_"+d,e)):(Da(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var ne=function(a,b){F(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new cb;return d=me("AssertApiSubject",c)};var oe=function(a,b){F(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new cb;return d=me("AssertThatSubject",c)};function pe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(kb(arguments[d],c));return jb(a.apply(null,b))}}var re=function(){for(var a=Math,b=qe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=pe(a[e].bind(a)))}return c};var se=function(a){var b;return b};var te=function(a){var b;return b};var ue=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var ve=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var we=function(a){F(this.getName(),["message:?string"],arguments);};var xe=function(a,b){F(this.getName(),["min:!number","max:!number"],arguments);return Ga(a,b)};var ye=function(){return(new Date).getTime()};var ze=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Zf.apply(null,Array.prototype.slice.call(arguments,1))};var Ae=function(){ze(this,"read_container_data");var a=new cb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'147');a.set("environmentName",'');a.set("debugMode",Nd);a.set("previewMode",Pd);a.set("environmentMode",Od);a.i=!0;return a};var Be=function(a){return null===a?"null":a instanceof h?"array":a instanceof Za?"function":typeof a};var Ce=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Nd||Pd)&&a.call(this,e.message)}}}return{parse:b(function(c){return jb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(kb(c))})}};var De=function(a){return Ma(kb(a,this.i))};var Ee=function(a){return Number(kb(a,this.i))};var Fe=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ge=function(a,b,c){var d=null,e=!1;return e?d:null};var qe="floor ceil round max min abs pow sqrt".split(" ");var He=function(){var a={};return{Fg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Gh:function(b,c){a[b]=c},reset:function(){a={}}}},Ie=function(a,b){F(this.getName(),["apiName:!string","mock:?*"],arguments);};var Je=function(){this.a={}};Je.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Je.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ca(b)?le(a,b):me(a,b)};function Ke(){var a={};return a};var D=window,I=document,Le=navigator,Me=I.currentScript&&I.currentScript.src,Ne=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Oe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pe=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oe(d,b);c&&(d.onerror=c);var e;if(null===ka)b:{var f=ia.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&ja.test(k)){ka=k;break b}}ka=""}e=ka;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Qe=function(){if(Me){var a=Me.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Re=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Oe(c,b);void 0!==a&&(c.src=a);return c},Se=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Te=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ue=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){D.setTimeout(a,0)},Ve=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},We=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xe=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ye=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Ze=function(a){Le.sendBeacon&&Le.sendBeacon(a)||Se(a)},$e=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var bf=function(a){return af?I.querySelectorAll(a):null},cf=function(a,b){if(!af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},df=!1;if(I.querySelectorAll)try{var ef=I.querySelectorAll(":root");ef&&1==ef.length&&ef[0]==I.documentElement&&(df=!0)}catch(a){}var af=df;var O={wa:"_ee",ci:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};O.Ee=[O.fa,O.cb,O.Hb];O.Ge=[O.ia,O.Ib,O.eb];var wf=/[A-Z]+/,xf=/\s/,yf=function(a){if(q(a)&&(a=Pa(a),!xf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(wf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},Af=function(a){for(var b={},c=0;c<a.length;++c){var d=yf(a[c]);d&&(b[d.id]=d)}zf(b);var e=[];Ja(b,function(f,g){e.push(g)});return e};
function zf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ed={},Bf=null,Cf=Math.random();Ed.B="GTM-NWDMT9Q";Ed.Nb="432";var Df={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Ef="www.googletagmanager.com/gtm.js";var Ff=Ef,Gf=null,Hf=null,If=null,Jf="//www.googletagmanager.com/a?id="+Ed.B+"&cv=147",Kf={},Lf={},Mf=function(){var a=Bf.sequence||0;Bf.sequence=a+1;return a};var Nf={},Of=function(a,b){Nf[a]=Nf[a]||[];Nf[a][b]=!0},Pf=function(a){for(var b=[],c=Nf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Qf=function(){return"&tc="+ed.filter(function(a){return a}).length},Tf=function(){Rf||(Rf=D.setTimeout(Sf,500))},Sf=function(){Rf&&(D.clearTimeout(Rf),Rf=void 0);void 0===Uf||Vf[Uf]&&!Wf&&!Xf||(Yf[Uf]||Zf.Tg()||0>=$f--?(Of("GTM",1),Yf[Uf]=!0):(Zf.vh(),Se(ag()),Vf[Uf]=!0,bg=cg=Xf=Wf=""))},ag=function(){var a=Uf;if(void 0===a)return"";var b=Pf("GTM"),c=Pf("TAGGING");return[dg,Vf[a]?"":"&es=1",eg[a],b?"&u="+b:"",c?"&ut="+c:"",Qf(),Wf,Xf,cg,bg,"&z=0"].join("")},fg=function(){return[Jf,"&v=3&t=t",
"&pid="+Ga(),"&rv="+Ed.Nb].join("")},gg="0.005000">Math.random(),dg=fg(),hg=function(){dg=fg()},Vf={},Wf="",Xf="",bg="",cg="",Uf=void 0,eg={},Yf={},Rf=void 0,Zf=function(a,b){var c=0,d=0;return{Tg:function(){if(c<a)return!1;Qa()-d>=b&&(c=0);return c>=a},vh:function(){Qa()-d>=b&&(c=0);c++;d=Qa()}}}(2,1E3),$f=1E3,ig=function(a,b){if(gg&&!Yf[a]&&Uf!==a){Sf();Uf=a;bg=Wf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";eg[a]="&e="+c+"&eid="+a;Tf()}},jg=function(a,b,c){if(gg&&
!Yf[a]&&b){a!==Uf&&(Sf(),Uf=a);var d,e=String(b[qd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Wf=Wf?Wf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(gd[g]?"1":"2")+d;bg=bg?bg+"."+k:"&ti="+k;Tf();2022<=ag().length&&Sf()}},kg=function(a,b,c){if(gg&&!Yf[a]){a!==Uf&&(Sf(),Uf=a);var d=c+b;Xf=
Xf?Xf+"."+d:"&epr="+d;Tf();2022<=ag().length&&Sf()}};var lg={},mg=new Ha,ng={},og={},rg={name:"dataLayer",set:function(a,b){G(Xa(a,b),ng);pg()},get:function(a){return qg(a,2)},reset:function(){mg=new Ha;ng={};pg()}},qg=function(a,b){if(2!=b){var c=mg.get(a);if(gg){var d=sg(a);c!==d&&Of("GTM",5)}return c}return sg(a)},sg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:ug(d)},ug=function(a){for(var b=ng,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var wg=function(a,b){og.hasOwnProperty(a)||(mg.set(a,b),G(Xa(a,b),ng),pg())},pg=function(a){Ja(og,function(b,c){mg.set(b,c);G(Xa(b,void 0),ng);G(Xa(b,c),ng);a&&delete og[b]})},xg=function(a,b,c){lg[a]=lg[a]||{};var d=1!==c?sg(b):mg.get(b);"array"===gb(d)||"object"===gb(d)?lg[a][b]=G(d):lg[a][b]=d},yg=function(a,b){if(lg[a])return lg[a][b]},zg=function(a,b){lg[a]&&delete lg[a][b]};var Ag=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Bg()||d||"http:"!=D.location.protocol?a:b)+c},Bg=function(){var a=Qe(),b;if(1===a)a:{var c=Ff;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Vg=function(a){var b=qg("gtm.whitelist");b&&Of("GTM",9);var c=b&&Va(Oa(b),Rg),d=qg("gtm.blacklist");d||(d=qg("tagTypeBlacklist"))&&Of("GTM",3);
d?Of("GTM",8):d=[];Ug()&&(d=Oa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Oa(d),"google")&&Of("GTM",2);var e=d&&Va(Oa(d),Sg),f={};return function(g){var k=g&&g[qd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Lf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Of("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ia(e,l||[]);u&&Of("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ia(e,Tg));return f[k]=v}},Ug=function(){return Qg.test(D.location&&D.location.hostname)};var Wg={mg:function(a,b){b[qd.Ed]&&"string"===typeof a&&(a=1==b[qd.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Gd)&&null===a&&(a=b[qd.Gd]);b.hasOwnProperty(qd.Id)&&void 0===a&&(a=b[qd.Id]);b.hasOwnProperty(qd.Hd)&&!0===a&&(a=b[qd.Hd]);b.hasOwnProperty(qd.Fd)&&!1===a&&(a=b[qd.Fd]);return a}};var Xg={active:!0,isWhitelisted:function(){return!0}},Yg=function(a){var b=Bf.zones;!b&&a&&(b=Bf.zones=a());return b};var Zg=function(){};var $g=!1,ah=0,bh=[];function ch(a){if(!$g){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$g=!0;for(var e=0;e<bh.length;e++)J(bh[e])}bh.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function dh(){if(!$g&&140>ah){ah++;try{I.documentElement.doScroll("left"),ch()}catch(a){D.setTimeout(dh,50)}}}var eh=function(a){$g?a():bh.push(a)};var gh={},hh={},ih=function(a,b,c,d){if(!hh[a]||Df[b]||"__zone"===b)return-1;var e={};ib(d)&&(e=G(d,e));e.id=c;e.status="timeout";return hh[a].tags.push(e)-1},jh=function(a,b,c,d){if(hh[a]){var e=hh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function kh(a){for(var b=gh[a]||[],c=0;c<b.length;c++)b[c]();gh[a]={push:function(d){d(Ed.B,hh[a])}}}
var nh=function(a,b,c){hh[a]={tags:[]};Ca(b)&&lh(a,b);c&&D.setTimeout(function(){return kh(a)},Number(c));return mh(a)},lh=function(a,b){gh[a]=gh[a]||[];gh[a].push(Sa(function(){return J(function(){b(Ed.B,hh[a])})}))};function mh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Sa(function(){b++;d&&b>=c&&kh(a)})},Xf:function(){d=!0;b>=c&&kh(a)}}};var oh=function(){function a(d){return!Da(d)||0>d?0:d}if(!Bf._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Da(rg.get("gtm.start"))?rg.get("gtm.start"):0;Bf._li={cst:a(c-b),cbt:a(Hf-b)}}};var sh={},th=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},uh=!1;
var vh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Of("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}oh();return D[b]},wh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=th();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var yh=function(a){},xh=function(){return D.GoogleAnalyticsObject||"ga"};var Ah=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Bh=/:[0-9]+$/,Ch=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Fh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Dh(a.protocol)||Dh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(Bh,"").toLowerCase());return Eh(a,b,c,d,e)},Eh=function(a,b,c,d,e){var f,g=Dh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Gh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Bh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Of("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ch(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Dh=function(a){return a?a.replace(":",
"").toLowerCase():""},Gh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Hh=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Of("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Mh=function(){return!1},Nh=function(){var a={};return function(b,c,d){}};function Oh(a,b,c,d){var e=ed[a],f=Ph(a,b,c,d);if(!f)return null;var g=md(e[qd.Xd],c,[]);if(g&&g.length){var k=g[0];f=Oh(k.index,{D:f,C:1===k.we?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Ph(a,b,c,d){function e(){if(f[qd.uf])k();else{var w=nd(f,c,[]),y=ih(c.id,String(f[qd.xa]),Number(f[qd.Zd]),w[qd.vf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Qa()-B;jg(c.id,ed[a],"5");jh(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Qa()-B;jg(c.id,ed[a],"6");jh(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;jg(c.id,f,"1");var A=function(){var z=Qa()-B;jg(c.id,f,"7");jh(c.id,y,"exception",z);x||(x=!0,k())};var B=Qa();try{ld(w,c)}catch(z){A(z)}}}var f=ed[a],g=b.D,k=b.C,l=b.terminate;if(c.ad(f))return null;var m=md(f[qd.$d],c,[]);if(m&&m.length){var n=m[0],r=Oh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.we?l:r}if(f[qd.Pd]||f[qd.zf]){var t=f[qd.Pd]?fd:c.Ih,p=g,u=k;if(!t[a]){e=Sa(e);var v=Qh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Qh(a,b,c){var d=[],e=[];b[a]=Rh(d,e,c);return{D:function(){b[a]=Sh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Th;for(var f=0;f<e.length;f++)e[f]()}}}function Rh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Sh(a){a()}function Th(a,b){b()};var Wh=function(a,b){for(var c=[],d=0;d<ed.length;d++)if(a.xb[d]){var e=ed[d];var f=b.add();try{var g=Oh(d,{D:f,C:f,terminate:f},a,d);g?c.push({Ye:d,Te:od(e),Xb:g}):(Uh(d,a),f())}catch(l){f()}}b.Xf();c.sort(Vh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Vh(a,b){var c,d=b.Te,e=a.Te;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ye,k=b.Ye;f=g>k?1:g<k?-1:0}return f}
function Uh(a,b){if(!gg)return;var c=function(d){var e=b.ad(ed[d])?"3":"4",f=md(ed[d][qd.Xd],b,[]);f&&f.length&&c(f[0].index);jg(b.id,ed[d],e);var g=md(ed[d][qd.$d],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Xh=!1,Yh=function(a,b,c,d,e){if("gtm.js"==b){if(Xh)return!1;Xh=!0}ig(a,b);var f=nh(a,d,e);xg(a,"event",1);xg(a,"ecommerce",1);xg(a,"gtm");var g={id:a,name:b,ad:Vg(c),xb:[],Ih:[],Je:function(){Of("GTM",6)}};g.xb=Ad(g);var k=Wh(g,f);"gtm.js"!==b&&"gtm.sync"!==b||yh(Ed.B);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=ed[l];if(m&&!Df[String(m[qd.xa])])return!0}return!1};var Zh=[];function $h(){var a=Ne("google_tag_data",{});a.ics||(a.ics={entries:{},set:ai,update:bi,addListener:ci,notifyListeners:di,active:!1});return a.ics}function ai(a,b,c,d,e){var f=$h();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function bi(a,b){var c=$h();c.active=!0;if(void 0!=b){var d=ei(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(ei(a)!==d)for(var f=0;f<Zh.length;++f){var g=Zh[f];Ea(g.pe)&&-1!==g.pe.indexOf(a)&&(g.Se=!0)}}}function ci(a,b){Zh.push({pe:a,Ag:b})}function di(){for(var a=0;a<Zh.length;++a){var b=Zh[a];if(b.Se){b.Se=!1;try{b.Ag.call()}catch(c){}}}}
var ei=function(a){var b=$h().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},fi=function(){return $h().active},gi=function(a,b){$h().addListener(a,b)},hi=function(a,b){if(!1===ei(b)){var c=!1;gi([b],function(){!c&&ei(b)&&(a(),c=!0)})}};var ii=[O.o,O.N],ji=function(a){var b=ei(a);return void 0!=b?b:!0},ki=function(){for(var a=[],b=0;b<ii.length;b++){var c=ei(ii[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},li=function(a,b){gi(a,b)};var ni=/^https?:\/\/www\.googletagmanager\.com/;function oi(){var a;return a}function qi(a,b){}
function pi(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function ri(){var a=!1;return a};var si=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){}},ti=function(a){var b=new si;b.eventModel=a;return b},ui=function(a,b){a.targetConfig=b;return a},vi=function(a,b){a.containerConfig=b;return a},wi=function(a,b){a.a=b;return a},xi=function(a,b){a.globalConfig=b;return a},yi=function(a,b){a.D=b;return a},zi=function(a,b){a.C=b;return a};
si.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ai=function(a){function b(e){Ja(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ja(c,function(e){d.push(e)});return d};function Bi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ci={},Di=function(a){return void 0==Ci[a]?!1:Ci[a]};var Fi=function(a,b,c,d){return Ei(d)?Bi(a,String(b||document.cookie),c):[]},Ii=function(a,b,c,d,e){if(Ei(e)){var f=Gi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Hi(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Hi(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Ji(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Fi(b,f,!1,d).indexOf(c)}
var Ni=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Ei(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ki(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ah);g=e(g,"samesite",
c.zh);c.Dh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Li(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Mi(u,c.path)&&Ji(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Mi(m,c.path)?!1:Ji(g,a,b,c.Ea)},Oi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ni(a,b,c)};
function Hi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Gi(a,b,c){for(var d=[],e=Fi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ki=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Pi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Qi=/(^|\.)doubleclick\.net$/i,Mi=function(a,b){return Qi.test(document.location.hostname)||"/"===b&&Pi.test(a)},Li=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Qi.test(e)||Pi.test(e)||a.push("none");
return a},Ei=function(a){if(!Di("gtag_cs_api")||!a||!fi())return!0;var b=ei(a);return null==b?!0:!!b};var Ri=function(){for(var a=Le.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Qa()/1E3)].join(".")},Ui=function(a,b,c,d,e){var f=Si(b);return Ii(a,f,Ti(c),d,e)},Vi=function(a,b,c,d){var e=""+Si(c),f=Ti(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Si=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ti=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wi(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Qa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Xi(){for(var a=Yi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Zi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Yi,$i;function aj(a){Yi=Yi||Zi();$i=$i||Xi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Yi[l],Yi[m],Yi[n],Yi[r])}return b.join("")}
function bj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=$i[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Yi=Yi||Zi();$i=$i||Xi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var cj;var gj=function(){var a=dj,b=ej,c=fj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Te(I,"mousedown",d);Te(I,"keyup",d);Te(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},hj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};fj().decorators.push(f)},ij=function(a,b,c){for(var d=fj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ta(e,g.callback())}}return e},fj=function(){var a=Ne("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var jj=/(.*?)\*(.*?)\*(.*)/,kj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,lj=/^(?:www\.|m\.|amp\.)+/,mj=/([^?#]+)(\?[^#]*)?(#.*)?/;function nj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var pj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(aj(String(d))))}var e=b.join("*");return["1",oj(e),e].join("*")},oj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=cj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}cj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^cj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},rj=function(){return function(a){var b=Hh(D.location.href),c=b.search.replace("?",""),d=Ch(c,"_gl",!1,!0)||"";a.query=qj(d)||{};var e=Fh(b,"fragment").match(nj("_gl"));a.fragment=qj(e&&e[3]||"")||{}}},sj=function(){var a=rj(),b=fj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ta(c,d.query),Ta(c,d.fragment));return c},qj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=jj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===oj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=bj(t[p+1]);return r}}}}catch(u){}};
function tj(a,b,c,d){function e(n){var r=n,t=nj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=mj.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function uj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ij(b,1,c),e=ij(b,2,c),f=ij(b,3,c);if(Ua(d)){var g=pj(d);c?vj("_gl",g,a):wj("_gl",g,a,!1)}if(!c&&Ua(e)){var k=pj(e);wj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){wj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){vj(m,n,r);break a}}"string"==typeof r&&tj(m,n,r,void 0)}}
function wj(a,b,c,d){if(c.href){var e=tj(a,b,c.href,void 0===d?!1:d);Ah.test(e)&&(c.href=e)}}
function vj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=tj(a,b,c.action);Ah.test(m)&&(c.action=m)}}}
var dj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||uj(e,e.hostname)}}catch(g){}},ej=function(a){try{if(a.action){var b=Fh(Hh(a.action),"host");uj(a,b)}}catch(c){}},xj=function(a,b,c,d){gj();hj(a,b,"fragment"===c?2:1,!!d,!1)},yj=function(a){gj();hj(a,[D.location.hostname],3,!0,!0)},zj=function(){var a=I.location.hostname,b=kj.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(lj,""),l=e.replace(lj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Aj=function(a,b){return!1===a?!1:a||b||zj()};var Bj=/^\w+$/,Cj=/^[\w-]+$/,Dj=/^~?[\w-]+$/,Ej={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Fj=function(a){var b;if(Di("gtag_cs_api")&&fi()){var c=ei("ad_storage");b=null==c?!0:!!c}else b=!0;b?a():hi(a,"ad_storage")};function Gj(a){return a&&"string"==typeof a&&a.match(Bj)?a:"_gcl"}
var Ij=function(){var a=Hh(D.location.href),b=Fh(a,"query",!1,void 0,"gclid"),c=Fh(a,"query",!1,void 0,"gclsrc"),d=Fh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ch(e,"gclid",!1,void 0);c=c||Ch(e,"gclsrc",!1,void 0)}return Hj(b,c,d)},Hj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Cj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Di("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Kj=function(a){var b=Ij();Fj(function(){return Jj(b,a)})};
function Jj(a,b,c){function d(m,n){var r=Lj(m,e);r&&(Oi(r,n,f),g=!0)}b=b||{};var e=Gj(b.prefix);c=c||Qa();var f=Wi(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.xi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Nj=function(a,b){var c=sj();Fj(function(){for(var d=Gj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Ej[f]){var g=Lj(f,d),k=c[g];if(k){var l=Math.min(Mj(k),Qa()),m;b:{for(var n=l,r=Fi(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Wi(b,l,!0);p.Ea="ad_storage";Oi(g,k,p)}}}}Jj(Hj(c.gclid,c.gclsrc),b)})},Lj=function(a,b){var c=Ej[a];if(void 0!==c)return b+c},Mj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Oj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Pj=function(a,b,c,d,e){if(Ea(b)){var f=Gj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Lj(a[l],f);if(m){var n=Fi(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Fj(function(){xj(g,b,c,d)})}},Qj=function(a){return a.filter(function(b){return Dj.test(b)})},Rj=function(a,b){for(var c=Gj(b.prefix),d={},e=0;e<a.length;e++)Ej[a[e]]&&(d[a[e]]=Ej[a[e]]);Fj(function(){Ja(d,function(f,g){var k=Fi(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Mj(l),
n={};n[f]=[Oj(l)];Jj(n,b,m)}})})},Sj=function(){var a=["","aw.ds"],b=Ij(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&yj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Tj(){var a=!1;return a}
function Uj(a){function b(l){var m;Bf.reported_gclid||(Bf.reported_gclid={});m=Bf.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(u,v){v&&r.push(u+"="+encodeURIComponent(v))},p=d;t("gclid",p);t("gclsrc",e);Ze("https://www.google.com/pagead/landing?"+r.join("&"))}}var c=Ij(),d=c.gclid||"",e=c.gclsrc,f=!a&&
(!d||e&&"aw.ds"!==e?!1:!0),g=Tj();if(f||g){var k=""+Ri();b();}};var Vj;if(3===Ed.Nb.length)Vj="g";else{var Wj="G";Vj=Wj}
var Xj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vj,OPT:"o"},Yj=function(a){var b=Ed.B.split("-"),c=b[0].toUpperCase(),d=Xj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Ed.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Ed.Nb+e};var ik=["1"],jk={},nk=function(a){var b=kk(a.prefix);jk[b]||lk(b,a.path,a.domain)||(mk(b,Ri(),a),lk(b,a.path,a.domain))};function mk(a,b,c){var d=Vi(b,"1",c.domain,c.path),e=Wi(c);e.Ea="ad_storage";Oi(a,d,e)}function lk(a,b,c){var d=Ui(a,b,c,ik,"ad_storage");d&&(jk[a]=d);return d}function kk(a){return(a||"_gcl")+"_au"};var ok=function(){for(var a=[],b=I.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({td:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var g=0;g<a.length;g++){var k=a[g].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[g].td]||(f[a[g].td]=[]),f[a[g].td].push({timestamp:k[1],Cg:k[2]}))}return f};var pk=/^\d+\.fls\.doubleclick\.net$/;function qk(a){ji("ad_storage")?a():hi(a,"ad_storage")}function rk(a){var b=Hh(D.location.href),c=Fh(b,"host",!1);if(c&&c.match(pk)){var d=Fh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function sk(a,b){if("aw"==a||"dc"==a){var c=rk("gcl"+a);if(c)return c.split(".")}var d=Gj(b);if("_gcl"==d){var e;e=Ij()[a]||[];if(0<e.length)return e}var f=Lj(a,d),g;if(f){var k=[];if(I.cookie){var l=Fi(f,I.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Oj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Qj(k)}else g=k}else g=k}else g=[];return g}
var tk=function(){var a=rk("gac");if(a)return decodeURIComponent(a);var b=ok(),c=[];Ja(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Cg);f=Qj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},uk=function(a,b){var c=Ij().dc||[];qk(function(){nk(b);var d=jk[kk(b.prefix)],e=!1;if(d&&0<c.length){var f=Bf.joined_au=Bf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Ze(l);e=f[g]=!0}}null==a&&
(a=e);if(a&&d){var m=kk(b.prefix),n=jk[m];n&&mk(m,n,b)}})};var pl={},ql=["G","GP"];pl.$e="";var rl=pl.$e.split(",");function sl(){var a=Bf;return a.gcq=a.gcq||new tl}
var ul=function(a,b,c){sl().register(a,b,c)},vl=function(a,b,c,d){sl().push("event",[b,a],c,d)},wl=function(a,b){sl().push("config",[a],b)},xl={},yl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},zl=function(a,b,c,d,e){this.type=a;this.m=b;this.W=c||"";this.a=d;this.i=e},tl=function(){this.i={};this.m={};this.a=[]},Al=function(a,b){var c=yf(b);return a.i[c.containerId]=a.i[c.containerId]||new yl},Bl=function(a,b,c,d){if(d.W){var e=Al(a,d.W),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.W]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),r=qg("gtm.uniqueEventId"),t=yf(d.W).prefix,p=zi(yi(xi(wi(vi(ui(ti(g),k),l),m),n),function(){kg(r,t,"2");}),function(){kg(r,t,"3");});try{kg(r,t,"1");f(d.W,b,d.m,p)}catch(u){
kg(r,t,"4");}}}};
tl.prototype.register=function(a,b,c){if(3!==Al(this,a).status){Al(this,a).m=b;Al(this,a).status=3;c&&(Al(this,a).i=c);var d=yf(a),e=xl[d.containerId];if(void 0!==e){var f=Bf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Bf[d.containerId]._spx&&(g=g.toLowerCase());var k=qg("gtm.uniqueEventId"),l=g,m=Qa()-f;if(gg&&!Yf[k]){k!==Uf&&(Sf(),Uf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);cg=cg?cg+","+n:"&cl="+n}delete xl[d.containerId]}this.flush()}};
tl.prototype.push=function(a,b,c,d){var e=Math.floor(Qa()/1E3);a:if(c){var f=yf(c),g;if(g=f){var k;if(k=1===Al(this,c).status)b:{var l=f.prefix;k=!0}g=k}if(g)if(Al(this,c).status=2,this.push("require",[],f.containerId),xl[f.containerId]=Qa(),Ag()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Pe(r+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new zl(a,e,c,b,d));d||this.flush()};
tl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Al(this,c.W).status&&!a)return;break;case "set":Ja(c.a[0],function(l,m){G(Xa(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[O.oc];delete d[O.oc];var f=Al(this,c.W),g=yf(c.W),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.W]={});f.a&&e||Bl(this,O.H,d,c);f.a=!0;delete d[O.wa];k?G(d,f.containerConfig):G(d,f.targetConfig[c.W]);break;
case "event":Bl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Cl=function(a,b){return!0};var Dl=function(a,b){var c;return c};var El=function(a){};var Fl=function(a){var b;return jb(b,this.i)};var Gl=function(a,b){var c=null;return jb(c,this.i)};var Hl=function(a){var b;F(this.getName(),["path:!string"],arguments);ze(this,"access_globals","readwrite",a);var c=a.split("."),d=Wa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ca(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return jb(b,
this.i)};var Il=function(a){var b;return b};var Jl=function(a,b){b=void 0===b?!0:b;var c;return c};var Kl=function(a,b){var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a){var b="";return b};var Nl=function(a){var b="";return b};var Ol=function(a,b){};var Pl={},Ql=function(a,b,c,d){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);ze(this,"inject_script",a);var e=this.i,f=function(){b instanceof Za&&b.Fa(e)},g=function(){c instanceof Za&&c.Fa(e)};if(!d){Pe(a,f,g);return}var k=d;Pl[k]?(Pl[k].onSuccess.push(f),Pl[k].onFailure.push(g)):(Pl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pl[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},g=function(){for(var l=Pl[k].onFailure,m=0;m<l.length;m++)J(l[m]);Pl[k]=null},Pe(a,f,g));};var Rl=function(){return!1},Sl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tl=function(){};var Ul={},Vl={};Ul.getItem=function(a){var b=null;return b};Ul.setItem=function(a,b){};
Ul.removeItem=function(a){};Ul.clear=function(){};var Wl=function(a,b){var c=!1;return c};var Xl=function(a,b,c){};var Yl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zl=function(a,b,c){F(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);ze(this,"access_globals","readwrite",a);var d=a.split("."),e=D,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=kb(b,this.i),!0;return!1};var $l=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var am=function(a,b,c){var d=this;};var bm=function(a){var b;return b};function cm(a){}
function dm(a,b){var c;return jb(c,this.i)}function em(){var a="";return a}
function fm(){var a="";return a}
var Cc=function(){var a=new Je;Ag()?(a.add("injectHiddenIframe",za),a.add("injectScript",za)):(a.add("injectHiddenIframe",Ol),a.add("injectScript",Ql));var b=Xl;a.add("addEventCallback",cm);a.add("aliasInWindow",Cl);a.add("assertThat",oe);a.add("assertApi",ne);a.add("callInWindow",Dl);a.add("callLater",El);a.add("copyFromDataLayer",
dm);a.add("copyFromWindow",Fl);a.add("createQueue",Hl);a.add("createArgumentsQueue",Gl);a.add("decodeUri",se);a.add("decodeUriComponent",te);a.add("encodeUri",ue);a.add("encodeUriComponent",ve);a.add("fail",we);a.add("generateRandom",xe);a.add("getCookieValues",Jl);a.add("getQueryParameters",Kl);a.add("getReferrerQueryParameters",Ll);a.add("getReferrerUrl",Ml);a.add("getTimestamp",ye);a.add("getType",Be);a.add("getUrl",Nl);a.add("logToConsole",Tl);a.add("makeInteger",De);a.add("makeNumber",Ee);a.add("makeString",
Fe);a.add("makeTableMap",Ge);a.add("Math",re());a.add("mock",Ie);a.add("queryPermission",Wl);a.add("readCharacterSet",em);a.add("readTitle",fm);a.add("sendPixel",b);a.add("setCookie",Yl);a.add("setInWindow",Zl);a.add("sha256",am);a.add("TestHelper",Ke());a.add("toBase64",bm,!("btoa"in D)),a.add("fromBase64",
Il,!("atob"in D));a.add("localStorage",Sl,!Rl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Ac,Jd;
function gm(){var a=data.runtime||[],b=data.runtime_lines;Ac=new zc;hm();ad=function(e,f,g){im(f);var k=new cb;Ja(f,function(p,u){k.set(p,jb(u))});Ac.a.a.s=wd();var l={Zf:Kd(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Mh()){var m=Nh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:He()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Bc(l,[e,k]);Ac.a.a.s=void 0;t instanceof oa&&
"return"===t.a&&(t=t.i);return kb(t)};Dc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&sd(d,b[c]);Ac.Xb(d)}}function im(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ca(b)&&(a.gtmOnSuccess=function(){J(b)});Ca(c)&&(a.gtmOnFailure=function(){J(c)})}
function hm(){var a=Ac;Bf.SANDBOXED_JS_SEMAPHORE=Bf.SANDBOXED_JS_SEMAPHORE||0;Ec(a,function(b,c,d){Bf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Bf.SANDBOXED_JS_SEMAPHORE--}})}function jm(a){void 0!==a&&Ja(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Lf[e]=Lf[e]||[];Lf[e].push(b)}})};var km=["GP","G"],lm="G".split(/,/);lm.push("GF");lm.push("HA");var mm=!1;mm=!0;var nm=null,om={},pm={},qm;function rm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[O.Fc]&&(c.eventCallback=b[O.Fc]),b[O.Ib]&&(c.eventTimeout=b[O.Ib]));return c}
var xm={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!ib(a[2])&&void 0!=a[2])return;c=a[2]}var d=rm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Jd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&ib(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},ib(a[2])||Ea(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var ym={policy:!0};var zm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Bm=function(a){var b=Am(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Cm=!1,Dm=[];function Em(){if(!Cm){Cm=!0;for(var a=0;a<Dm.length;a++)J(Dm[a])}}var Fm=function(a){Cm?J(a):Dm.push(a)};var Wm=function(a){if(Vm(a))return a;this.a=a};Wm.prototype.Ig=function(){return this.a};var Vm=function(a){return!a||"object"!==gb(a)||ib(a)?!1:"getUntrustedUpdateValue"in a};Wm.prototype.getUntrustedUpdateValue=Wm.prototype.Ig;var Xm=[],Ym=!1,Zm=function(a){return D["dataLayer"].push(a)},$m=function(a){var b=Bf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function an(a){var b=a._clear;Ja(a,function(f,g){"_clear"!==f&&(b&&wg(f,void 0),wg(f,g))});Gf||(Gf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Mf(),a["gtm.uniqueEventId"]=d,wg("gtm.uniqueEventId",d));If=c;var e=bn(a);If=null;switch(c){case "gtm.init":Of("GTM",19),e&&Of("GTM",20)}return e}
function bn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Bf.zones;d=e?e.checkState(Ed.B,c):Xg;return d.active?Yh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function cn(){for(var a=!1;!Ym&&0<Xm.length;){Ym=!0;delete ng.eventModel;pg();var b=Xm.shift();if(null!=b){var c=Vm(b);if(c){var d=b;b=Vm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=qg(g,1);if(Ea(k)||ib(k))k=G(k);og[g]=k}}try{if(Ca(b))try{b.call(rg)}catch(u){}else if(Ea(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=qg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Ka(b)){a:{if(b.length&&q(b[0])){var p=xm[b[0]];if(p&&(!c||!ym[b[0]])){b=p(b);break a}}b=void 0}if(!b){Ym=!1;continue}}a=an(b)||a}}finally{c&&pg(!0)}}Ym=!1}return!a}function dn(){var a=cn();try{zm(D["dataLayer"],Ed.B)}catch(b){}return a}
var fn=function(){var a=Ne("dataLayer",[]),b=Ne("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};eh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Bf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Wm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Xm.push.apply(Xm,d);if(300<
this.length)for(Of("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return cn()&&g};Xm.push.apply(Xm,a.slice(0));en()&&J(dn)},en=function(){var a=!0;return a};var gn={};gn.Jb=new String("undefined");
var hn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gn.Jb?b:a[d]);return c.join("")}};hn.prototype.toString=function(){return this.a("undefined")};hn.prototype.valueOf=hn.prototype.toString;gn.If=hn;gn.Nc={};gn.pg=function(a){return new hn(a)};var jn={};gn.wh=function(a,b){var c=Mf();jn[c]=[a,b];return c};gn.se=function(a){var b=a?0:1;return function(c){var d=jn[c];if(d&&"function"===typeof d[b])d[b]();jn[c]=void 0}};gn.Rg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};gn.mh=function(a){if(a===gn.Jb)return a;var b=Mf();gn.Nc[b]=a;return'google_tag_manager["'+Ed.B+'"].macro('+b+")"};gn.bh=function(a,b,c){a instanceof gn.If&&(a=a.a(gn.wh(b,c)),b=za);return{Zc:a,D:b}};var kn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ve(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ln=function(a){Bf.hasOwnProperty("autoEventsSettings")||(Bf.autoEventsSettings={});var b=Bf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mn=function(a,b,c){ln(a)[b]=c},nn=function(a,b,c,d){var e=ln(a),f=Ra(e,b,d);e[b]=c(f)},on=function(a,b,c){var d=ln(a);return Ra(d,b,c)};var pn=["input","select","textarea"],qn=["button","hidden","image","reset","submit"],rn=function(a){var b=a.tagName.toLowerCase();return!Fa(pn,function(c){return c===b})||"input"===b&&Fa(qn,function(c){return c===a.type.toLowerCase()})?!1:!0},sn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):Ye(a,["form"],100)},tn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(rn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var un=!!D.MutationObserver,vn=void 0,wn=function(a){if(!vn){var b=function(){var c=I.body;if(c)if(un)(new MutationObserver(function(){for(var e=0;e<vn.length;e++)J(vn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Te(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<vn.length;e++)J(vn[e])}))})}};vn=[];I.body?b():J(b)}vn.push(a)};
var Hn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Of("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},In=function(a){var b=Hn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Jn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Kn=[],Ln=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Mn=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Kn.length;f++)if(!Kn[f])return Kn[f]=d,f;return Kn.push(d)-1},Nn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Qa()};J(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=In(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},On=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ln){var e=!1;J(function(){e||Nn(a,b,c)()});return Mn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)J(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return D.setInterval(Nn(a,b,c),1E3)},Pn=function(a){Ln?0<=a&&a<Kn.length&&Kn[a]&&(Kn[a].disconnect(),Kn[a]=void 0):D.clearInterval(a)};var Rn=D.clearTimeout,Sn=D.setTimeout,S=function(a,b,c){if(Ag()){b&&J(b)}else return Pe(a,b,c)},Tn=function(){return D.location.href},Un=function(a){return Fh(Hh(a),"fragment")},Vn=function(a){return Gh(Hh(a))},Wn=function(a,b){return qg(a,b||2)},Xn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Zm(a)):d=Zm(a);return d},Yn=function(a,b){D[a]=b},U=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Zn=function(a,b,c){return Fi(a,b,void 0===c?!0:!!c)},$n=function(a,b){if(Ag()){b&&J(b)}else Re(a,b)},ao=function(a){return!!on(a,"init",!1)},bo=function(a){mn(a,"init",!0)},co=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ff;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(R("https://","http://",c))},eo=function(a,b){var c=a[b];return c};
var fo=gn.bh;var Co=new Ha;function Do(a,b){function c(g){var k=Hh(g),l=Fh(k,"protocol"),m=Fh(k,"host",!0),n=Fh(k,"port"),r=Fh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Eo(a){return Fo(a)?1:0}
function Fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Eo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Co.get(p);u||(u=new RegExp(c,t),Co.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Do(b,
c)}return!1};var Go=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ho={},Io=encodeURI,V=encodeURIComponent,Jo=Se;var Ko=function(a,b){if(!a)return!1;var c=Fh(Hh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Lo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ho.Sg=function(){var a=!1;return a};var Yp=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ga();return a.hid};var iq=window,jq=document,kq=function(a){var b=iq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===iq["ga-disable-"+a])return!0;try{var c=iq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Bi("AMP_TOKEN",String(jq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return jq.getElementById("__gaOptOutExtension")?!0:!1};
var nq=function(a){Ja(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[O.ma]||{};Ja(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var rq=function(a,b,c){vl(b,c,a)},sq=function(a,b,c){vl(b,c,a,!0)},uq=function(a,b){};
function tq(a,b){}var Z={b:{}};

Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],B=x.split(","),z=0;z<B.length;z++){var E=Number(B[z]);if(isNaN(E))return[];n.test(B[z])||A.push(E)}return A}function c(){var x=0,A=0;return function(){var B=Hn(),z=B.height;x=Math.max(v.scrollLeft+B.width,x);A=Math.max(v.scrollTop+z,A);return{sg:x,ug:A}}}function d(){p=U("self");
u=p.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,A,B,z){var E=l(A),H={},K;for(K in E){H.Ja=K;if(E.hasOwnProperty(H.Ja)){var T=Number(H.Ja);x<T||(Xn({event:"gtm.scrollDepth","gtm.scrollThreshold":T,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":E[H.Ja].join(",")}),nn("sdl",A,function(Y){return function(la){delete la[Y.Ja];return la}}(H),{}))}H={Ja:H.Ja}}}function f(){var x=y(),A=x.sg,B=x.ug,z=A/v.scrollWidth*100,E=B/v.scrollHeight*100;e(A,"horiz.pix",
r.Lb,t.Kd);e(z,"horiz.pct",r.Kb,t.Kd);e(B,"vert.pix",r.Lb,t.de);e(E,"vert.pct",r.Kb,t.de);mn("sdl","pending",!1)}function g(){var x=250,A=!1;u.scrollingElement&&u.documentElement&&p.addEventListener&&(x=50,A=!0);var B=0,z=!1,E=function(){z?B=Sn(E,x):(B=0,f(),ao("sdl")&&!a()&&(Ue(p,"scroll",H),Ue(p,"resize",H),mn("sdl","init",!1)));z=!1},H=function(){A&&y();B?z=!0:(B=Sn(E,x),mn("sdl","pending",!0))};return H}function k(x,A,B){if(A){var z=b(String(x));nn("sdl",B,function(E){for(var H=0;H<z.length;H++){var K=
String(z[H]);E.hasOwnProperty(K)||(E[K]=[]);E[K].push(A)}return E},{})}}function l(x){return on("sdl",x,{})}function m(x){J(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,K=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Lb:k(B,A,"horiz.pix");break;case r.Kb:k(z,A,"horiz.pct")}switch(E){case r.Lb:k(H,A,"vert.pix");break;case r.Kb:k(K,
A,"vert.pct")}ao("sdl")?on("sdl","pending")||(w||(d(),w=!0),J(function(){return f()})):(d(),w=!0,v&&(bo("sdl"),mn("sdl","pending",!0),J(function(){f();if(a()){var T=g();Te(p,"scroll",T);Te(p,"resize",T)}else mn("sdl","init",!1)})))}var n=/^\s*$/,r={Kb:"PERCENT",Lb:"PIXELS"},t={de:"vertical",Kd:"horizontal"},p,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Fm(function(){m(x)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(yg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Wn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fh(Hh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vn(String(b)):String(b)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Zn(a.vtp_name,Wn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Wn("gtm.url",1);c=c||Tn();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vn(String(c));var e=Hh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ea(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Fh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Fh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.dd&&b.fd>=b.dd)b.$c&&U("self").clearInterval(b.$c);else{b.fd++;var c=(new Date).getTime();Xn({event:b.ja,"gtm.timerId":b.$c,"gtm.timerEventNumber":b.fd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.dd,"gtm.timerStartTime":b.Xe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Xe,"gtm.triggers":b.Mh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){J(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ja:b.vtp_eventName,fd:0,interval:Number(b.vtp_interval),dd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Mh:String(b.vtp_uniqueTriggerId||"0"),Xe:(new Date).getTime()};c.$c=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(Lo(n.vtp_fieldsToSet,"fieldName","value"),f);G(Lo(n.vtp_contentGroup,"index","group"),g);G(Lo(n.vtp_dimension,"index","dimension"),k);G(Lo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=G(n);d=G(d,r)}G(Lo(d.vtp_fieldsToSet,"fieldName","value"),f);G(Lo(d.vtp_contentGroup,
"index","group"),g);G(Lo(d.vtp_dimension,"index","dimension"),k);G(Lo(d.vtp_metric,"index","metric"),l);var t=vh(d.vtp_functionName);if(Ca(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Mf(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
y=function(P){var M=[].slice.call(arguments,0);M[0]=p+M[0];t.apply(window,M)},x=function(P,M){return void 0===M?M:P(M)},A=function(P,M){if(M)for(var Aa in M)M.hasOwnProperty(Aa)&&y("set",P+Aa,M[Aa])},B=function(){},z=function(P,M,Aa){var cc=0;if(P)for(var La in P)if(P.hasOwnProperty(La)&&
(Aa&&v[La]||!Aa&&void 0===v[La])){var mb=w[La]?Na(P[La]):P[La];"anonymizeIp"!=La||mb||(mb=void 0);M[La]=mb;cc++}return cc},E={name:u};z(f,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Yj(!0));
d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,M){void 0!==d[M]&&y("set",P,d[M])})("nonInteraction","vtp_nonInteraction");A("contentGroup",g);A("dimension",k);A("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=
f&&f.hitCallback;Ca(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ma,d.vtp_eventValue||e.value)};z(K,T,!1);y("send",T);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require",
"displayfeatures",void 0,{cookieName:wa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var na="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:na})}K?y("send","pageview",K):y("send","pageview");}if(!a){var Ba=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var ob=R("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);S(ob,function(){var P=th();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(ge(Hh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;G(Lo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=G(e);c=G(c,f)||{}}G(Lo(c.vtp_fieldsToSet,"fieldName","value"),d);var g=vh(c.vtp_functionName);if(Ca(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Mf(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(y,x,A){var B=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var E=n[z]?Na(y[z]):y[z];"anonymizeIp"!==z||E||(E=void 0);x[z]=E;B++}return B},t={name:l};r(d,t,!0);var p={"&gtm":Yj(!0)};r(d,p,!1);var u=encodeURI(R("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,t);g(k+"set",p);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,S(u,function(){return th().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=U("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else J(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();



Z.b.aev=["google"],function(){function a(p,u){var v=yg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(p,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Tn());Ea(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Ko(p,w)}function e(p){m.test(p)||(p="http://"+p);return Fh(Hh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return Ve(p,"value");case "button":return We(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)rn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&Ve(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,We)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=Hh(A),z=String(p.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,p.vtp_affiliatedDomains);break a;default:x=Fh(B,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(u,w,v);else{var H=p.vtp_attribute,K=a(u,"element");E=K&&Ve(K,H)||v||""}return E;case "MD":var T=p.vtp_mdValue,Y=b(u,"MD",Dn);return T&&Y?Gn(Y,T)||
v:Y||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[qd.xa]=null;c[qd.nf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",
function(){var k=Go(U("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){J(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Oe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){J(g)}}}var b=function(d,e,f){eh(function(){var g,k=Bf;k.postscribe||(k.postscribe=ie);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){J(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=fo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Zc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,Xe(g),k,e)()}else Sn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Qg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ye(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=on("lcl",k?"nv.mwt":"mwt",0),m;m=k?on("lcl","nv.ids",[]):on("lcl","ids",[]);if(m.length){var n=kn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(eo(g,"rel")||""),t=!!Fa(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Of("GTM",36);var p=U((eo(g,"target")||"_self").substring(1)),u=!0;if(Xn(n,$m(function(){var v;if(v=u&&p){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Qg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=eo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Xn(n,function(){},l||2E3);return!0}}};Te(c,"click",e,!1);Te(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=eo(d,"href"),g=f.indexOf("#"),k=eo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Vn(f),m=Vn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};nn("lcl","mwt",k,0);e||nn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};nn("lcl","ids",l,[]);e||nn("lcl","nv.ids",l,[]);ao("lcl")||(a(),bo("lcl"));J(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(f,g){this.element=f;this.uid=g}function b(){var f=Number(Wn("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Jn(f.target)){g.has(e.Mb)||g.set(e.Mb,""+b());g.has(e.Ic)||g.set(e.Ic,""+b());var r=0;g.has(e.Ob)&&(r=Number(g.get(e.Ob)));r+=100;g.set(e.Ob,""+r);if(r>=k){var t=kn(f.target,"gtm.elementVisibility",[g.uid]),p=In(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(e.Ic));
t["gtm.visibleLastTime"]=Number(g.get(e.Mb));Xn(t);l()}}}if(!g.has(e.gb)&&(0==k&&m(),!g.has(e.Ka))){var n=U("self").setInterval(m,100);g.set(e.gb,n)}}function d(f){f.has(e.gb)&&(U("self").clearInterval(Number(f.get(e.gb))),f.a(e.gb))}var e={gb:"polling-id-",Ic:"first-on-screen-",Mb:"recent-on-screen-",Ob:"total-visible-time-",Ka:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.uid,g)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=bf(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new a(v[B],p);d(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Pn(w);0<v.length&&(w=On(k,v,[t]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=t?x.has(e.Ka)||c(y,x,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],p);B.set(e.Ka,"1");d(B)}Pn(w);if(n&&vn)for(var z=0;z<vn.length;z++)vn[z]===g&&vn.splice(z,1)}:function(){x.set(e.Ka,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===u&&x.has(e.Ka)&&(x.a(e.Ka),x.a(e.Ob)),x.a(e.Mb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&wn(g);J(f.vtp_gtmOnSuccess)})}();


var vq={};vq.macro=function(a){if(gn.Nc.hasOwnProperty(a))return gn.Nc[a]},vq.onHtmlSuccess=gn.se(!0),vq.onHtmlFailure=gn.se(!1);vq.dataLayer=rg;vq.callback=function(a){Kf.hasOwnProperty(a)&&Ca(Kf[a])&&Kf[a]();delete Kf[a]};function wq(){Bf[Ed.B]=vq;Ta(Lf,Z.b);id=id||gn;jd=Wg}
function xq(){Ci.gtm_3pds=!0;Bf=D.google_tag_manager=D.google_tag_manager||{};if(Bf[Ed.B]){var a=Bf.zones;a&&a.unregisterChild(Ed.B)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)bd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ed.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)dd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);cd.push(r)}gd=Z;hd=Eo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;gm();Jd=new Hd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Lf[x]=w}jm(v);wq();
fn();$g=!1;ah=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)ch();else{Te(I,"DOMContentLoaded",ch);Te(I,"readystatechange",ch);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!D.frameElement}catch(H){}A&&dh()}Te(D,"load",ch)}Cm=!1;"complete"===I.readyState?Em():Te(D,"load",Em);
a:{if(!gg)break a;D.setInterval(hg,864E5);}Hf=(new Date).getTime();}}xq();

})()
