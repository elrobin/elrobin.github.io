_satellite.pushBlockingScript(function(event, target, $variables){
  /**
 * Initialize ADTECH for NEJM.org
 * DTM Name:
 * AD 250: NEJM.org Init.js - Production
 * Version: 2.1.7
 *  Add hideContainer for Topbanner
**/
var _satellite = window._satellite,
    mmsAdtech = window.mmsAdtech;


// Intialize Ad Placements HTML before Adtech Init
mmsAdtech.initializeHtml = function(config) {
  var containerDiv = $('#' + config.adContainerId);
  var wrapperID = config.adContainerId + '_Wrap';

  switch (config.adContainerId) {
    case "DTM_Position_Topbanner":
      _satellite.notify('ADTECH: Initialize HTML: [DTM_Position_Topbanner]');
      (function() {
        var wrapperContainer = $('#' + wrapperID);
        if (wrapperContainer.length) {
          _satellite.notify('ADTECH: Topbanner Wrap exists');
        } else {
          containerDiv.wrap('<div id="' + wrapperID + '"><div id="' + wrapperID + 'Inner" class="ad-topbanner"></div></div>');
          _satellite.notify('ADTECH: Topbanner Wrap created');
        }
      })();
      break;
    case "DTM_Position_MedRectangle":
      _satellite.notify('ADTECH: Initialize HTML: [DTM_Position_MedRectangle]');
      (function() {
        var wrapperHTML = '<div class="a-banner-square" id="' + wrapperID + '"></div>';
        var wrapperContainer = $('#' + wrapperID);
        if (wrapperContainer.length) {
          _satellite.notify('ADTECH: MedRectangle Wrap exists');
        } else {
          containerDiv.wrap(wrapperHTML);
          _satellite.notify('ADTECH: MedRectangle Wrap created');
        }
      })();
      break;
    case "DTM_Position_MultipleOptions":
      _satellite.notify('ADTECH: Initialize HTML: [DTM_Position_MultipleOptions]');
      (function() {
        var wrapperHTML = '<div class="a-banner-square a-banner--multi-option" id="' + wrapperID + '"></div>';
        var wrapperContainer = $('#' + wrapperID);
        if (wrapperContainer.length) {
          _satellite.notify('ADTECH: MultipleOptions Wrap exists');
        } else {
          containerDiv.wrap(wrapperHTML);
          _satellite.notify('ADTECH: MultipleOptions Wrap created');
        }
      })();
      break;
    case "DTM_Position_Adhesive":
      _satellite.notify('ADTECH: Initialize HTML: [DTM_Position_Adhesive]');
      (function() {
        var wrapperContainer = $('#' + wrapperID);
        if (wrapperContainer.length) {
          _satellite.notify('ADTECH: AdtechAdhesiveWrap exists');
        } else {
          containerDiv.wrap('<div id="' + wrapperID + '" style="display: none;"></div>');
          _satellite.notify('ADTECH: Adhesive Wrap created');
        }
      })();
      break;
    case "DTM_Position_MicroIMG":
      _satellite.notify('ADTECH: Initialize HTML: [DTM_Position_MicroIMG]: no change needed');
      break;
  }
};


// Topbanner - On Complete - With Ad
mmsAdtech.onCompleteWithAdTopbanner = function(config) {
  var options = {
        displayCloseButton: false, // close button display
        timeoutSeconds: 6.2,
        timerId: null,
        timeStart: 0,
        timeEnd: 0,
        timeTotal: 0
      },
      containerDiv = $('#' + config.adContainerId),
      wrapperID = config.adContainerId + '_Wrap',
      containerWrap,
      wrapperInnerID = config.adContainerId + '_WrapInner',
      containerWrapInner,
      fn_closeStickyTopbanner,
      fn_fixTopbanner,
      fn_unstick;
  fn_unstick = function() {
    containerWrap = $('#' + wrapperID);
    containerWrap.removeClass('ad-fixed');
    options.timeEnd = new Date();
    options.timeTotal = options.timeEnd - options.timeStart;
    _satellite.notify('ADTECH: Topbanner Sticky Total Time: [' + options.timeTotal + ']');
  };
  fn_closeStickyTopbanner = function() {
    if (options.displayCloseButton) {
      var closeButton = $('<a href="#" class="close-ad" id="closeTopbannerFixed">Close X</a>');
      containerDiv.append(closeButton);
      closeButton.click(function(e) {
        e.preventDefault();
        clearTimeout(options.timerId);
        fn_unstick();
      });
    }
  };
  fn_fixTopbanner = function() {
    containerWrap = $('#' + wrapperID);
    containerWrapInner = $('#' + wrapperInnerID);
    if (containerWrap.length) {
      containerWrap.addClass('ad-topbanner-wrap ad-fixed');
      containerWrap.css('display', 'block');
    } else {
      _satellite.notify('ADTECH: onCompleteWithAdTopbanner: Wrapper NOT FOUND', 1);
    }
  };
  fn_init = function() {
    if (containerDiv.length) {
      fn_fixTopbanner();
      _satellite.notify('ADTECH: Topbanner Initialized');
      options.timeStart = new Date();
      options.timerId = setTimeout(fn_unstick, options.timeoutSeconds * 1000);
      fn_closeStickyTopbanner();
    }
  }();
};


// Adhesive - On Complete - With Ad
mmsAdtech.onCompleteWithAdAdhesive = function(config) {
  var options = {
        displayCloseButton: true, // close button display
        timeoutSeconds: 6.3,
        timerId: null,
        timeStart: 0,
        timeEnd: 0,
        timeTotal: 0
      },
      containerDiv = $('#' + config.adContainerId),
      wrapperID = config.adContainerId + '_Wrap',
      containerWrap,
      fn_closeStickyAd,
      fn_stick,
      fn_unstick;
  fn_unstick = function() {
    containerWrap = $('#' + wrapperID);
    containerWrap.hide();
    containerWrap.removeClass('ad-fixed');
    options.timeEnd = new Date();
    options.timeTotal = options.timeEnd - options.timeStart;
    _satellite.notify('ADTECH: Adhesive Sticky Total Time: [' + options.timeTotal + ']');
  };
  fn_closeStickyAd = function() {
    if (options.displayCloseButton) {
      containerWrap = $('#' + wrapperID);
      var closeButton = $('<a href="#" class="close-ad" id="closeAdhesiveFixed">Close<svg class="icon--close" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon--close"></use></svg></a>');
      containerWrap.append(closeButton);
      closeButton.click(function(e) {
        e.preventDefault();
        clearTimeout(options.timerId);
        fn_unstick();
      });
    }
  };
  fn_stick = function() {
    containerWrap = $('#' + wrapperID);
    if (containerWrap.length) {
      containerWrap.addClass('g-leaderboard ad-leaderboard--anchor ad-fixed');
      containerWrap.show();
      _satellite.notify('ADTECH: AdtechAdhesiveWrap exists');
    } else {
      _satellite.notify('ADTECH: onCompleteWithAdAdhesive: Wrapper NOT FOUND', 1);
    }
  };
  fn_init = function() {
    if (containerDiv.length) {
      fn_stick();
      _satellite.notify('ADTECH: Adhesive Initialized');
      options.timeStart = new Date();
      options.timerId = setTimeout(fn_unstick, options.timeoutSeconds * 1000);
      fn_closeStickyAd();
    }
  }();
};


// MedRectangle - On Complete - With Ad
mmsAdtech.onCompleteWithAdMedRectangle = function(config) {
  _satellite.notify('ADTECH: MedRectangle Completed with Ad', 1);
  var wrapperID = config.adContainerId + '_Wrap';
  var wrapperHTML = '<div id="' + wrapperID + '" class="a-banner-square"></div>';
  var wrapperContainer = $('#' + wrapperID);
  if (wrapperContainer.length) {
    wrapperContainer.show();
  } else {
    _satellite.notify('ADTECH: onCompleteWithAdMedRectangle: Wrapper NOT FOUND', 1);
  }
};


// MultipleOptions - On Complete - With Ad
mmsAdtech.onCompleteWithAdMultipleOptions = function(config) {
  _satellite.notify('ADTECH: MultipleOptions Completed with Ad', 1);
  var wrapperID = config.adContainerId + '_Wrap';
  var wrapperContainer = $('#' + wrapperID);
  if (wrapperContainer.length) {
    wrapperContainer.addClass('a-banner-square a-banner--multi-option');
    wrapperContainer.show();
  } else {
    _satellite.notify('ADTECH: onCompleteWithAdMultipleOptions: Wrapper NOT FOUND', 1);
  }
};


// MultipleOptions - On Complete - With NO Ad
mmsAdtech.onCompleteWithNoAdMultipleOptions = function(config) {
  _satellite.notify('ADTECH: MultipleOptions Completed with NO Ad', 1);
  var wrapperID = config.adContainerId + '_Wrap';
  var wrapperContainer = $('#' + wrapperID);
  if (wrapperContainer.length) {
    wrapperContainer.removeClass('a-banner-square a-banner--multi-option');
  } else {
    _satellite.notify('ADTECH: onCompleteWithAdMultipleOptions: Wrapper NOT FOUND', 1);
  }
};


// MicroIMG - On Complete with ad
mmsAdtech.onCompleteWithMicroIMG = function(config) {
  _satellite.notify('ADTECH: MicroIMG Completed with Ad', 1);
  var wrapperID = config.adContainerId + '_Wrap';
  var wrapperContainer = $('#' + wrapperID);
  var containerDiv = $('#' + config.adContainerId);
  if (wrapperContainer.length) {
    containerDiv.css('display', 'block');
    _satellite.notify('ADTECH: onCompleteWithMicroIMG: wrap found. display container', 1);
  } else {
    containerDiv
      .wrap('<div id="' + wrapperID + '" class="m-cta__sponsor"><div class="m-cta__sponsor-image"></div></div>')
      .parent('.m-cta__sponsor-image').before('<p class="m-cta__sponsor-label f-caps--sm">Sponsored by</p>');
    _satellite.notify('ADTECH: onCompleteWithMicroIMG: created wrapper containers', 1);
  }
};


/**
 * Key Value Modifiers
 */

// Map user specialty group code to new non-overlapping codes
mmsAdtech.getNoDupSpecialtyGroupCode = function (userSpecialtyGroupCode) {
  var specialty = userSpecialtyGroupCode,
      specialtyMap = {
      'd':   'drm',
      'em':  'erm',
      'ep':  'epd',
      'ge':  'gst',
      'hos': 'hpt',
      'n':   'neu',
      'nep': 'nph',
      'os':  'osp',
      'p':   'psy',
      'pd':  'pds',
      'plm': 'pll',
      'r':   'rd',
      'u':   'ur'
    };

  if (specialty && specialtyMap[specialty]) {
    specialty = specialtyMap[specialty];
  }
  return specialty;
};

// Specialty KV logic to handle signed in, AAM cookie, and JW URL cookie
mmsAdtech.getSpecialtyKV = function() {
  // 1. Get signed in user Specialty
  // 2. Or, get AAM specialty cookie
  // 3. Or, get JW URL specialty cookie
  var specialty = '',
      userSpecialty = _satellite.getVar('userSpecialtyGroupCode'),
      aamSpecialty = _satellite.getVar('aam_ad_demotarget'),
      jwSpecialty = _satellite.getVar('jwUserSpecialtyGroupCodeInCookie');

  if (userSpecialty) {
    _satellite.notify('ADTECH: KV - userSpecialtyGroupCode: [' + userSpecialty + ']', 1);
    specialty = mmsAdtech.getNoDupSpecialtyGroupCode(userSpecialty);
    _satellite.notify('ADTECH: KV - userSpecialtyGroupCode mapped: [' + specialty + ']', 1);
  } else if (aamSpecialty) {
    specialty = aamSpecialty;
    _satellite.notify('ADTECH: KV - aam_ad_demotarget: [' + specialty + ']', 1);
  } else if (jwSpecialty) {
    _satellite.notify('ADTECH: KV - jwUserSpecialtyGroupCodeInCookie: [' + jwSpecialty + ']', 1);
    specialty = mmsAdtech.getNoDupSpecialtyGroupCode(jwSpecialty);
    _satellite.notify('ADTECH: KV - jwUserSpecialtyGroupCodeInCookie mapped: [' + specialty + ']', 1);
  }
  return specialty;
};


/**
 * Initialization of ADTECH ASYNC DAC 2.0 - Page and Placement Configs
 * with all kv, params, etc.
 */
mmsAdtech.initialize({
  // Page Level Config
  page: {
    server: 'adserver.nejm.org',
    network: '5493.1',
    pageid: _satellite.getVar('adtechPageID')
  },
  placements: {
    // Global params
    params: {
      key: _satellite.getVar('searchQuery')
    },
    // Global kv fields
    kv : {
      articlecat:   _satellite.getVar('articleCategory'),
      articletype:  _satellite.getVar('articleType').substr(0, 48),
      'class':      _satellite.getVar('userSubType'),
      specialty:    mmsAdtech.getSpecialtyKV()
    },
    // List of Placements Queued and Executed in Order
    placements: mmsAdtech.shufflePlacements([
      {
        id: _satellite.getVar('adtechTopbannerID'),
        sizeid: 225,
        adContainerId: 'DTM_Position_Topbanner',
        hideContainer: '#DTM_Position_Topbanner',
        responsive: {
          useresponsive: true,
          bounds: [
            {
              id: 1,
              min: 0,
              max: 767,
            },
            {
              id: _satellite.getVar('adtechTopbannerID'),
              min: 768,
              max: 9999
            }
          ]
        },
        completeWithAd: mmsAdtech.onCompleteWithAdTopbanner,
        fif: {
          usefif: true
        }
      },
      {
        id: _satellite.getVar('adtechMedRectangleID'),
        sizeid: 170,
        adContainerId: 'DTM_Position_MedRectangle',
        hideContainer: '#DTM_Position_MedRectangle_Wrap',
        responsive: {
          useresponsive: true,
          bounds: [
            {
              id: 1,
              min: 0,
              max: 1023,
            },
            {
              id: _satellite.getVar('adtechMedRectangleID'),
              min: 1024,
              max: 9999
            }
          ]
        },
        completeWithAd: mmsAdtech.onCompleteWithAdMedRectangle,
        fif: {
          usefif: true
        }
      }
    ]).concat([
      {
        id: _satellite.getVar('adtechAdhesiveID'),
        sizeid: 225,
        adContainerId: 'DTM_Position_Adhesive',
        hideContainer: '#DTM_Position_Adhesive_Wrap',
        responsive: {
          useresponsive: true,
          bounds: [
            {
              id: 1,
              min: 0,
              max: 767,
            },
            {
              id: _satellite.getVar('adtechAdhesiveID'),
              min: 768,
              max: 9999
            }
          ]
        },
        completeWithAd: mmsAdtech.onCompleteWithAdAdhesive,
        fif: {
          usefif: true
        }
      },
      {
        id: _satellite.getVar('adtechMultiOptionsID'),
        sizeid: 0,
        adContainerId: 'DTM_Position_MultipleOptions',
        hideContainer: false,
        responsive: {
          useresponsive: true,
          bounds: [
            {
              id: 1,
              min: 0,
              max: 1023,
            },
            {
              id: _satellite.getVar('adtechMultiOptionsID'),
              min: 1024,
              max: 9999
            }
          ]
        },
        completeWithAd: mmsAdtech.onCompleteWithAdMultipleOptions,
        completeWithNoAd: mmsAdtech.onCompleteWithNoAdMultipleOptions,
        fif: {
          usefif: true
        }
      },
      {
        id: _satellite.getVar('adtechMicroIMGID'),
        sizeid: 13,
        adContainerId: 'DTM_Position_MicroIMG',
        completeWithAd: mmsAdtech.onCompleteWithMicroIMG,
        fif: {
          usefif: false
        }
      }
    ])
  }
});


/**
 * Interstitial
 * Initialization is called from Literatum mmsLayers.js logic
**/
mmsAdtech.showInterstitial = function (onCompleteWithAd, onCompleteWithNoAd) {
  _satellite.notify('ADTECH showInterstitial() Fired!', 1);

  mmsAdtech.initialize({
    placements: {
      // Global kv fields
      kv : {
        pageview:    _satellite.getVar('mmsLayersCounter'),
        referrer:    _satellite.getVar('headersReferrerDomain'),
        loginstatus: _satellite.getVar('userLoginStatus')
      },
      // List of Placements Queued and Executed in Order
      placements: [
        {
          id: _satellite.getVar('adtechInterstitialBannerID'),
          sizeid: 16,
          adContainerId: 'DTM_Position_InterstitialBanner',
          completeWithAd: onCompleteWithAd,
          completeWithNoAd: onCompleteWithNoAd
        }
      ]
    }
  });
};


/**
 * Conditions for Refreshing Ads
**/

// Search Page
(function() {
  if (_satellite.getVar('adCategory') === 'mms.nej.search') {
    _satellite.notify('ADTECH: Search Page - Bind mmsAdtech.refreshAds() to Hashchange', 1);
    $(window).bind('hashchange', function() {
      _satellite.notify('ADTECH: Search Page Filtered - REFRESH All Ads.', 1);
      mmsAdtech.refreshAds();
    });
  }
})();

// Image Challenge - Refresh Topbanner and MedRectangle on Poll Change
mmsAdtech.refreshAdsImageChallenge = function() {
  mmsAdtech.refreshAds();
};

});
