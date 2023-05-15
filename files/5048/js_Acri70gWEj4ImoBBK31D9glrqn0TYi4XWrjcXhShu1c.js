/**
 * @file
 * HW PDF tab treatment.
 *
 * Copyright (c) HighWire Press, Inc.
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.highwire_panels_ajax_tab = {
    attach: function (context, settings) {
      $('a.panels-ajax-tab-tab', context, settings).once('hw-panels-ajax-tabs-once', function() {
        if (typeof(settings.highwire_panel_tabs) != "undefined") {
          for (var i = settings.highwire_panel_tabs.length -1; i >= 0; i--) {
            var panel_name = settings.highwire_panel_tabs[i].panel_name;
            if ($(this).data('panel-name') == panel_name) {
              $(this).unbind('click').attr('target', '_blank');
            }
          }
        }
      });
      $('a.highwire-article-nav-jumplink', context, settings).once('hw-panels-ajax-tabs-once', function() {
        if (typeof(settings.highwire_panel_tabs) != "undefined") {
          var panel_ajax_tab = settings.highwire_panel_tabs.panel_ajax_tab;
          if ($(this).data('panel-ajax-tab') == panel_ajax_tab) {
            $(this).unbind('click').attr('target', '_blank');
          }
        }
      });
    }
  };
})(jQuery);
;
/**
 * Highwire OpenURL
 *
 * Copyright (c) HighWire Press, Inc
 * This software is open-source licensed under the GNU Public License Version 2
 * or later. The full license is available in the LICENSE.TXT file at the root
 * of this repository.
 */

(function ($) {
  Drupal.behaviors.highwire_openurl = { attach: function (context, settings) {
    if ($('.cit-ref-sprinkles-open-url').length > 0) {
      // Get the insitutional OpenURL branding data
      var id = '';
      if ("apath" in Drupal.settings.highwire) {
        id = '?apath=' + encodeURIComponent(Drupal.settings.highwire.apath);
      }
      $.getJSON(

        Drupal.settings.basePath + 'highwire/openurl_branding' + id,
        function(data){
          if(data){
            // Add to Drupal.settings in case we have another use for it
            Drupal.settings.highwireOpenurl = data;

            // Not all journals have OpenURL implementations
            if (data.base_url === null) {
              $('.cit-ref-sprinkles-open-url').hide();
            }
            else {
              // Update each link to show institutional branding
              $('.cit-ref-sprinkles-open-url').each(function(){
                var $link = $(this);
                $link.once('insertImage', function(){
                  var branding = Drupal.settings.highwireOpenurl;
                  var href = $link.attr('href');
                  var placeholder = '';
                  var queryKey = '';

                  // Check if this is content from old markup server.
                  if (href.indexOf('{openurl}') != -1) {
                    // Set placeholder accordingly.
                    placeholder = '{openurl}';
                    // The href from the old markup server is encoded twice, so decode twice.
                    href = decodeURIComponent(href);
                    try {
                      href = decodeURIComponent(href);   
                    } catch(e) {
                      // debug if needed 
                    }
                  }
                  // Check if this is content from the new markup server.
                  // @see JIRA ticket: GP-86
                  else if (href.indexOf('urn:openurl:') != -1) {
                    // Set placeholdet text and query key accordingly.
                    placeholder = 'urn:openurl:';
                    queryKey = '?';
                  }
                  // Update openURL link with new href and text.
                  href = href.replace('?query=','?');
                  href = href.replace(placeholder, Drupal.settings.basePath + 'highwire/openurl' + queryKey);
                  var openurl_link = href + '&redirect_url=' + branding.base_url;
                  $link.attr('href', openurl_link.replace(/\+/g,  " "));
                  $link.text(branding.link_text);
                  if(branding.image){
                    $link.prepend('<img src="' + branding.image + '"/>');
                  }
                });
              });
            }
          }
        }
      );
    }
  }}
})(jQuery);
;
/**
 * @file
 * Highwire Google Scholar citation sprinkle links
 *
 * Copyright (c) HighWire Press, Inc
 * This software is open-source licensed under the GNU Public License Version 2
 * or later. The full license is available in the LICENSE.TXT file at the root
 * of this repository.
 */

(function ($) {
  Drupal.behaviors.highwire_google_scholar = { attach: function (context, settings) {
    if($('.cit-extra').length > 0) {
      $('.cit-list .ref-cit').once('google_scholar_link',function() {
        $(this).each(function() {

          // Pull the set of authors to submit as an array.
          var authorList = '';
          var c = 0;
          $(this).find('.cit-auth').each(function () {

            var given = $(this).find('.cit-name-given-names') !== 'undefined' ? $(this).find('.cit-name-given-names').html() : '';
            var surname = $(this).find('.cit-name-surname') !== 'undefined' ? $(this).find('.cit-name-surname').html() : '';
            if(given || surname) {
              authorList += '&author[' + c + ']=' + (given ? given : '') + (surname ? '+' + surname : '');
            } else if ($(this).hasClass('cit-collab')) {
              authorList += '&author[' + c + ']=' + $(this).text();
            }
            c++;
          });

          var articleTitle = $(this).find('.cit-article-title').length > 0 ? $(this).find('.cit-article-title').text() : false;

          var articlePub = $(this).find('.cit-pub-date').length > 0 ? $(this).find('.cit-pub-date').html() : false;

          var gs_link_suffix = ''
          // We need all three values to submit a lookup.
          if (articleTitle !== false
            && articlePub !== false
            && authorList !== '') {
            // Regex used to strip inlne html tags from article title.
            var gs = {
              gsAuthor: authorList,
              gsTitle: articleTitle.replace(/< *img[^>]*src *= *["\']?([^"\']*)"\/>/gi, '').replace(/\ /g, '+'),
              publicationYear: articlePub
            };
            // Additional, non-required fields that are available in various
            // citation formats.
            extraFields = {
              journal: $(this).find('.cit-jnl-abbrev').length > 0 ? $(this).find('.cit-jnl-abbrev').html() : false,
              volume: $(this).find('.cit-vol').length > 0 ? $(this).find('.cit-vol').html() : false,
              issn: $(this).find('.cit-issn').length > 0 ? $(this).find('.cit-issn').html() : false,
              isbn: $(this).find('.cit-isbn').length > 0 ? $(this).find('.cit-isbn').html() : false,
              doi: $(this).find('.cit-doi').length > 0 ? $(this).find('.cit-doi').html() : false,
              pages: ($(this).find('.cit-fpage').length > 0 && $(this).find('.cit-lpage').length > 0)? $(this).find('.cit-fpage').html() + '-' +  $(this).find('.cit-lpage').html() : false
            };

            extraFieldString = '';
            $.each(extraFields, function (idx, val){
              if (val !== false) {
                extraFieldString += '&' + idx + '=' + val.replace(/\ /g, '+');
              }
            });
            gs_link_suffix = authorList + '&title=' + gs.gsTitle + '&publication_year=' + gs.publicationYear + extraFieldString;
          }
          else {
            var q_text = $(this).find('cite').clone().remove().end().text();
            if (q_text.length) {
              q_text = q_text.replace(/< *img[^>]*src *= *["\']?([^"\']*)"\/>/i, '');
              var q_split = q_text.split(' ');
              var q_temp = [];
              $.each(q_split, function (idx, val) {
                if (val !== '') {
                  q_temp.push(encodeURIComponent(val));
                }
              });
              q_text = q_temp.join('+');
              gs_link_suffix = '&q_txt=' + q_text;
            }
          }

          var gs_link = '<a href="/lookup/google-scholar?link_type=googlescholar&gs_type=article' + gs_link_suffix + '" target="_blank" class="cit-ref-sprinkles cit-ref-sprinkles-google-scholar cit-ref-sprinkles-google-scholar"><span>Google Scholar</span></a>';

          $(this, context).once('custom-js', function(){
            $(this).find('.cit-extra').append(gs_link);
          });
        });
      });
    }
  }}
})(jQuery);
;
/*! lazysizes - v1.1.3 -  Licensed MIT */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=a.setTimeout,g=a.requestAnimationFrame||f,h=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],j=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},k=function(a,b){j(a,b)||(a.className+=" "+b)},l=function(a,b){var c;(c=j(a,b))&&(a.className=a.className.replace(c," "))},m=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&m(a,b),i.forEach(function(c){a[d](c,b)})},n=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),g.details=g.detail,a.dispatchEvent(g),g},o=function(b,d){var e;a.HTMLPictureElement||((e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src))},p=function(a,b){return getComputedStyle(a,null)[b]},q=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},r=function(b){var d,e=0,h=a.Date,i=function(){d=!1,e=h.now(),b()},j=function(){f(i)},k=function(){g(j)};return function(){if(!d){var a=c.throttle-(h.now()-e);d=!0,9>a&&(a=9),f(k,a)}}},s=function(){var i,q,s,u,v,w,x,y,z,A,B,C,D,E=/^img$/i,F=/^iframe$/i,G="onscroll"in a&&!/glebot/.test(navigator.userAgent),H=0,I=0,J=0,K=1,L=function(a){J--,a&&a.target&&m(a.target,L),(!a||0>J||!a.target)&&(J=0)},M=function(a,b){var c,d=a,e="hidden"!=p(a,"visibility");for(y-=b,B+=b,z-=b,A+=b;e&&(d=d.offsetParent);)e=(p(d,"opacity")||1)>0,e&&"visible"!=p(d,"overflow")&&(c=d.getBoundingClientRect(),e=A>c.left&&z<c.right&&B>c.top-1&&y<c.bottom+1);return e},N=function(){var a,b,d,e,f,g,h,j,k;if((v=c.loadMode)&&8>J&&(a=i.length)){for(b=0,K++,D>I&&1>J&&K>3&&v>2?(I=D,K=0):I=I!=C&&v>1&&K>2&&6>J?C:H;a>b;b++)i[b]&&!i[b]._lazyRace&&(G?((j=i[b].getAttribute("data-expand"))&&(g=1*j)||(g=I),k!==g&&(w=innerWidth+g,x=innerHeight+g,h=-1*g,k=g),d=i[b].getBoundingClientRect(),(B=d.bottom)>=h&&(y=d.top)<=x&&(A=d.right)>=h&&(z=d.left)<=w&&(B||A||z||y)&&(s&&3>J&&!j&&(3>v||4>K)||M(i[b],g))?(S(i[b],d.width),f=!0):!f&&s&&!e&&3>J&&4>K&&v>2&&(q[0]||c.preloadAfterLoad)&&(q[0]||!j&&(B||A||z||y||"auto"!=i[b].getAttribute(c.sizesAttr)))&&(e=q[0]||i[b])):S(i[b]));e&&!f&&S(e)}},O=r(N),P=function(a){k(a.target,c.loadedClass),l(a.target,c.loadingClass),m(a.target,P)},Q=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},R=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,g(c))}}(),S=function(a,b){var d,e,g,i,p,q,r,v,w,x,y,z=E.test(a.nodeName),A=a.getAttribute(c.sizesAttr)||a.getAttribute("sizes"),B="auto"==A;(!B&&s||!z||!a.src&&!a.srcset||a.complete||j(a,c.errorClass))&&(a._lazyRace=!0,J++,R(function(){if(a._lazyRace&&delete a._lazyRace,l(a,c.lazyClass),!(w=n(a,"lazybeforeunveil")).defaultPrevented){if(A&&(B?(t.updateElem(a,!0,b),k(a,c.autosizesClass)):a.setAttribute("sizes",A)),q=a.getAttribute(c.srcsetAttr),p=a.getAttribute(c.srcAttr),z&&(r=a.parentNode,v=r&&h.test(r.nodeName||"")),x=w.detail.firesLoad||"src"in a&&(q||p||v),w={target:a},x&&(m(a,L,!0),clearTimeout(u),u=f(L,2500),k(a,c.loadingClass),m(a,P,!0)),v)for(d=r.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)(y=c.customMedia[d[e].getAttribute("data-media")||d[e].getAttribute("media")])&&d[e].setAttribute("media",y),i=d[e].getAttribute(c.srcsetAttr),i&&d[e].setAttribute("srcset",i);q?a.setAttribute("srcset",q):p&&(F.test(a.nodeName)?Q(a,p):a.setAttribute("src",p)),(q||v)&&o(a,{src:p})}(!x||a.complete)&&(x?L(w):J--,P(w))}))},T=function(){var a,b=function(){c.loadMode=3,O()};s=!0,K+=8,c.loadMode=3,e("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=f(b,99)},!0)};return{_:function(){i=b.getElementsByClassName(c.lazyClass),q=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),C=c.expand,D=Math.round(C*c.expFactor),e("scroll",O,!0),e("resize",O,!0),a.MutationObserver?new MutationObserver(O).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",O,!0),d.addEventListener("DOMAttrModified",O,!0),setInterval(O,999)),e("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b.addEventListener(a,O,!0)}),(s=/d$|^c/.test(b.readyState))?T():(e("load",T),b.addEventListener("DOMContentLoaded",O)),O()},checkElems:O,unveil:S}}(),t=function(){var a,d=function(a,b,c){var d,e,f,g,i=a.parentNode;if(i&&(c=q(a,i,c),g=n(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),h.test(i.nodeName||""))for(d=i.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||o(a,g.detail)}},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},g=r(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",g)},checkElems:g,updateElem:d}}(),u=function(){u.i||(u.i=!0,t._(),s._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:2,expand:359,loadMode:2,throttle:125};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,f(function(){c.init&&u()})}(),{cfg:c,autoSizer:t,loader:s,init:u,uP:o,aC:k,rC:l,hC:j,fire:n,gW:q}}});;
/**
 * Highwire Figure
 *
 * Copyright (c) HighWire Press, Inc.
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.highwireFiguresMarkupProcessor = {
    attach: function(context, settings) {
      /**
       * Force hide captions for mobile. Can't do this directly with CSS only since ColorboxJS controls visibility.
       */
      $('body').bind('highwireResponsiveLayoutTransition', function(e, d) {
        var mobileLayouts = Drupal.highwireResponsive.getMobileLayouts();
        if(d.from != d.to) {
          // Check if we transitioned into one of the mobile breakpoints.
          if (mobileLayouts.indexOf(d.to) != -1) {
            // .force-hide is display:none !important. See jcore_1/css/global.css
            $('#cboxTitle').addClass('force-hide');
          }
          else {
            $('#cboxTitle').removeClass('force-hide');          
          }
        }
        // Check if we're in one of the mobile breakpoints.
        else if (mobileLayouts.indexOf(d.to) != -1) {
          $('#cboxTitle').addClass('force-hide'); 
        }
      });

      $('a.fragment-images.colorbox-load', context).once('highwireFiguresMarkupProcessor', function() {
        $(this, context).each(function() {
          var $this = $(this);
          var figTitle = false;
          // This check will ensure for table fragment will not cause
          // any data attribute error.
          if ($this.is('[data-figure-caption]')) {
            figTitle = $this.data('figure-caption');
          }
          // Disable image preloading - this messes with our logging.
          cbsettings = $.extend(settings.colorbox, {'preloading': false, title: figTitle});

          $this.colorbox(cbsettings);
        });
      });
      
      //SUPPALLPLA-134: Hide cboxTitle fig pop-up if div.highwire-markup has no content
      $('.highwire-markup:empty').closest('#cboxTitle').addClass('force-hide');
    }
  };
})(jQuery);
;
/**
 * Highwire AT Symbol
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.scienceTablesMarkupProcessor = {
    attach: function(context, settings) {
      $('a.table-expand-inline', context).once('scienceTablesMarkupProcessor', function() {
        $(this, context).each(function() {
          var $caption, captionHTML;
          var $wrapper, $expansion;
          var self = this;
          var toggle = false;
          var load = false;

          $(self).click(function(event) {
            event.preventDefault();
            $wrapper = $(self).closest('.table');

            // Check if we have the element already. 
            // If we don't, load the table expansion data.
            if ($wrapper.find('.table-expansion-inline').length == 0) {
              $wrapper.append('<div class="table-expansion-inline"></div>');
              load = true;
            }
            // If the element exists already, just toggle it.
            else {
              toggle = true;
            }
            
            $expansion = $wrapper.find('.table-expansion-inline');

            // Load table expansion.
            if (load) {
              $expansion.load($(this).data('table-url'), function () {
                load = false;
                // Hide table caption because it's already displayed 
                // above table callout links.
                $expansion.find('.table-caption').hide();
                $(self).html('Collapse inline');
                Drupal.attachBehaviors($expansion[0]);
              });
            }
 
            // Toggle display.
            if (toggle) {
              $wrapper.toggleClass('table-expand-inline');
              $expansion.toggle();
              if ($(self).html() == 'View inline') {
                $(self).html('Collapse inline');
              }
              else {
                $(self).html('View inline');
              }
            }
          });
        });
        /**
         * Added this colorbox calling function as AJAX tabs naigation holds
         * poping up data into model
         */
        $('a.table-expand-popup', context).each(function() {
          cbsettings = $.extend(settings.colorbox, {title: false});
          $(this).colorbox(cbsettings);
        });
      });
    }
  };

  // Attach drupal behaviors to colorbox loading
  $(document).bind('cbox_complete', function() {
    if (colorbox) {
      Drupal.attachBehaviors($(colorbox)[0]);
    }
  });
})(jQuery);
;
var bodyTags = document.getElementsByTagName('body');
var body = bodyTags[0];
var trendmd_instances  = Drupal.settings.highwire.trendmd;

for (var id in trendmd_instances){
  if (trendmd_instances.hasOwnProperty(id)) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "//js.trendmd.com/trendmd.min.js";
    s.defer = 'defer';
    s.setAttribute('data-trendmdconfig', trendmd_instances[id]);
    body.insertBefore(s, body.lastChild.nextSibling);
  }
}
;
