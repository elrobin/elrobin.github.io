// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
          s.stickyElement.css('width', $(s.getWidthFrom).width());
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom,
            responsiveWidth: o.responsiveWidth
          });
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var unstickyElement = $(this);

          var removeIdx = -1;
          for (var i = 0; i < sticked.length; i++)
          {
            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
            {
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            sticked.splice(removeIdx,1);
            unstickyElement.unwrap();
            unstickyElement.removeAttr('style');
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
;/**/
(function($) {

  $.fn.stickyHeader = function( options ) {

    var settings = $.extend({
      triggerElement  : '.contentbody',
      hiddenClass     : 'is-hidden',
      scrollOffset    : null,
      scrollInterval  : 250
    }, options);

    var $this = $(this);

    return this.each( function() {

      var scrolled = false;

      function sciScrollEvents() {
        scrolled = true;
      }

      $this.addClass(settings.hiddenClass);

      window.onscroll = sciScrollEvents;

      setInterval(function() {

        var contentTop = $(settings.triggerElement).offset().top - settings.scrollOffset - $(document).scrollTop();

        if (scrolled && contentTop < 0) {
          scrolled = false;

          $this.removeClass(settings.hiddenClass);
      }

      else if (scrolled && contentTop >= 0) {
        $this.addClass(settings.hiddenClass);
      }
    }, settings.scrollInterval);

    });

  };

}(jQuery));
;/**/
(function($) {
  $('a[href*=#]:not([href=#], [href^=#tab])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var stickyHeight = $('.sticky-header').height();

      if (!stickyHeight) {
        stickyHeight = 70;
      }

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top - (stickyHeight + 15)}, 1000);
        return false;
      }
    }
  });
})(jQuery);
;/**/
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
;/**/
var keepTrying = function(wait, times, func) {

  var interv = function(w, t) {

    return function() {

      if (typeof t === "undefined" || t-- > 0) {
        setTimeout(interv, w);
        try {
          func.call(null);
        }
        catch(e) {
          t = 0;
          throw e.toString();
        }
      }

    };

  } (wait, times);
  
  setTimeout(interv, wait);
};
;/**/
/**
 * Responsive Tables (requires styles)
 *
 * @param {string} selector - Selector to locate tables (probably just `table`)
 */

var respondTable = function(selector) {

  var getLocalIndex = function(node) {
    var i = 1;
    while (node.previousElementSibling) {
      node = node.previousElementSibling;
      if (node.nodeType === 1) {
        i++;
      }
    }
    return i;
  }

  var tables = document.querySelectorAll(selector);

  for (var i = 0; i < tables.length; i++) {
    var currentTable = tables[i];
    var childCells = currentTable.querySelectorAll('td');

    Array.prototype.forEach.call(childCells, function(el, i) {
      var cellContent    = el.innerHTML;
      var contentWrapped = '<span class="cell-content">' + cellContent + '</span>';
      var columnHeader   = selector + ' thead th:nth-child(' + getLocalIndex(el) + ')';
      var headerContent  = currentTable.querySelectorAll(columnHeader)[0].innerHTML;
      var headerWrapped  = '<span class="cell-heading">' + headerContent + '</span>';
      el.innerHTML       = headerWrapped + contentWrapped;
    });
  }
};
;/**/
/**
 * Swaps SVG imgages for PNG with the same relative path. Probably want to detect IE before using
 *
 * @param {string} selector - Will swap images matching these selectors in a nodeList
 * @example  switchPng('.logo, .header img');
 */
var switchPng = function(selector) {
  var targets = document.querySelectorAll(selector),
      dotSVG  = /\.(svg)($|\?)/;

  for (var i = 0; i !== targets.length; i++) {
    targets[i].src = targets[i].src.replace(dotSVG, '.png$2');
  }
};
;/**/
/**
 * Insert analytics content into the page
 *
 * @param {string} source - Path to JSON
 * @param {string} target - Target element to insert the links
 */

(function () {
  'use strict';
}());

var analyticsContent = function(options, callback) {

  var source      = options.source,
      target      = options.target,
      parentElem  = options.parentElem,
      childElem   = options.childElem,
      elemClass   = options.elemClass,
      headerElem  = options.headerElem,
      headerClass = options.headerClass;

  if (typeof parentElem === 'undefined') {
    parentElem = 'ol';
  }

  if (typeof childElem === 'undefined') {
    childElem = 'li';
  }

  if (typeof elemClass === 'undefined') {
    elemClass = ['headline-list', 'headline-list--decimal'];
  }

  if (typeof headerElem === 'undefined') {
    headerElem = 'h2';
  }

  if (document.querySelector("body").contains(document.querySelector(target))) {

    var request  = new XMLHttpRequest(),
        acTarget = document.querySelector(target);

    request.open('GET', source, true);

    request.onload = function() {

      if (request.status >= 200 && request.status < 400 && request.readyState === 4 && acTarget) {

        var acData       = JSON.parse(request.responseText),
            acName       = acData.name,
            acItems      = acData.items,
            acHeader     = document.createElement(headerElem),
            acOutput     = document.createElement(parentElem);

        acHeader.innerText = acName;

        acOutput.setAttribute('id', target.replace(/#/, '') + '__acList');
        DOMTokenList.prototype.add.apply(acOutput.classList, elemClass);

        acTarget.appendChild(acHeader);
        acTarget.appendChild(acOutput);

        Array.prototype.forEach.call(acItems, function(item) {

          var acItem = document.createElement(childElem);

          if (item.url && item.title) {
            acItem.innerHTML = '<h2 class="media__headline media--priority-2"><a href="' + item.url + '">' + item.title + '</a></h2>';
            acOutput.appendChild(acItem);
          }
        });
      }
      else {
      }
    };

    if (callback) {
      callback();
    }

    request.send();
  }
};
;/**/
/**
 * Creates tabs from neighboring elements
 *
 * @param {string} targets - Create tabs from these elements
 * @param {string} groupId - Unique identifier for this group of tabs
 * @param {string} prefix [tabify] - Styling hook, to avoid styling Ids and style tabs differently
 */

(function() {
  'use strict';
}());

var tabify = function(options) {

  var targets = options.targets,
      groupId = options.groupId,
      prefix  = options.prefix;

  if (typeof(prefix) === 'undefined') {
    prefix = 'tabify';
  }

  if (document.querySelector('body').contains(document.querySelector(targets))) {

    var tabTargetsTemp          = document.querySelectorAll(targets),
        tabTargets              = [],
        parentIndex             = 0;
        firstBlock              = tabTargetsTemp[0];
        tabTargets[parentIndex] = [];

    for (var i = 0; i < tabTargetsTemp.length; i++) {

      var currentBlock = tabTargetsTemp[i],
          nextBlock    = tabTargetsTemp[i + 1];

      if (firstBlock.parentNode !== currentBlock.parentNode) {
        firstBlock = currentBlock;
        parentIndex = parentIndex + 1;
        tabTargets[parentIndex] = [];
      }

      tabTargets[parentIndex].push(currentBlock);
    }

    for (var p = 0; p <= parentIndex; p++) {
      if (tabTargets[p].length >= 2) {
        tabifyBuild(tabTargets[p], groupId + '-' + p, prefix);
      }
    }
  }
};

var getSiblings = function(elem) {
  var siblings = [];
  var sibling = elem.parentNode.children[0];
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType === 1 && sibling !== elem && sibling) {
      siblings.push(sibling);
    }
  }
  return siblings;
};

var tabifyBuild = function(tabTargets, groupId, prefix) {

  var outerWrapper   = document.createElement('div'),
      tabWrapper     = document.createElement('div'),
      tabControls    = document.createElement('ul'),
      parentElement  = tabTargets[0].parentNode;

  outerWrapper.appendChild(tabControls);
  outerWrapper.appendChild(tabWrapper, tabTargets[0]);
  outerWrapper.classList.add(prefix + '__outer-wrapper');

  tabWrapper.classList.add(prefix + '__panels');
  tabWrapper.setAttribute('id', prefix + '-' + groupId);

  tabControls.classList.add(prefix + '__controls');
  tabControls.setAttribute('id', prefix + '-controls-' + groupId);
  tabControls.setAttribute('aria-hidden', true);

  parentElement.insertBefore(outerWrapper, tabTargets[0]);

  Array.prototype.forEach.call(tabTargets, function(tab, index) {

    var tabHeading         = tab.querySelectorAll('h1,h2,h3,h4,h5,h6')[0],
        tabHeadingText,
        tabController      = document.createElement('li'),
        tabId              = prefix + '-' + groupId + '-tab-' + index,
        panelClassActive   = prefix + '__panel--active',
        controlClassActive = prefix + '__controller--active';

    if (tabHeading !== undefined) {
      tabHeadingText = tabHeading.innerText;
    } else {
      tabHeading = document.createElement('h2');
      tabHeadingText = tab.innerText.substring(0,20) + '…';
    }

    tab.setAttribute('id', tabId);
    tab.setAttribute('aria-hidden', false);
    tab.classList.add(prefix + '__panel');

    tabHeading.classList.add(prefix + '__heading');
    tabHeading.setAttribute('aria-hidden', false);

    document.getElementById(prefix + '-' + groupId).appendChild(tab);

    tabControls.appendChild(tabController);

    if (index === 0) {
      tabTargets[index].classList.add(panelClassActive);
      tabController.classList.add(controlClassActive);
    }

    tabController.classList.add(prefix + '__controller');
    tabController.innerHTML = '<a href="#' + tabId + '">' + tabHeadingText + '</a>';
    tabController.addEventListener('click', function(event) {

      var controlSiblings = getSiblings(this),
          panelSiblings   = getSiblings(document.getElementById(tabId));

      if (!this.classList.contains(controlClassActive)) {

        this.classList.add(controlClassActive);

        Array.prototype.forEach.call(controlSiblings, function(sibling) {
          sibling.classList.remove(controlClassActive);
        });

        Array.prototype.forEach.call(panelSiblings, function(sibling) {
          document.getElementById(tabId).classList.add(panelClassActive);
          sibling.classList.remove(panelClassActive);
        });

        event.preventDefault();
      }
    }, false);
  });
};
;/**/
/**
 * @file
 * script.js
 */


/**
 * Fix it!
 *
 * This javascript is pure garbage, and I know from garbage when it comes to  javascript.
 * Let's start to clean this up.
 */
(function($, Drupal) {
  Drupal.behaviors.force = {
    attach:function() {

/**
 * Total Hacks
 *
 * Terrible things to fix other terrible things. Let's try to find and fix
 * the root causes of these things one of these days.
 */

$('.collected__social .socialshares').css('margin-bottom', 0);
$('.primary .primary').removeClass('primary');


// Need to use this to keep the helper messages on /user pages.

if (document.location.pathname.indexOf("/user") > 0) {
  $('.not-logged-in .drupal-messages').remove();
}


/**
 * Slightly less gross hacks
 *
 * These things might just be facts of life. Sometimes we have to work
 * with what we've been given. Let's fix them if we can.
 */



/**
* Most Popular and Trending
*
* Get content from Analytics and create tabs from adjacent elements
*/

function acMakeTabs() {

  var acReady = false,
      acMostRead = document.getElementById('force_most_read').innerHTML.length,
      acTrending = document.getElementById('force_trending').innerHTML.length;

  if (acTrending > 0 && acMostRead > 0) {
    clearInterval(acTimer);
    acReady = true;
  }

  if (acReady === true) {
    tabify({
      targets: '.force_trending',
      groupId: 'popular-trending',
      prefix: 'tabify'
    });
  }
}

if (document.querySelector("body").contains(document.querySelector('#force_most_read') && document.querySelector('#force_trending'))) {

  analyticsContent({
    source: '/sites/default/files/science_services/trending_force_awakens/data/most_read.json',
    target: '#force_most_read'
  });

  analyticsContent({
    source: '/sites/default/files/science_services/trending_force_awakens/data/trending.json',
    target: '#force_trending'
  });

  var acTimer = setInterval(acMakeTabs, 250);

}



/**
 * Newsletter and Subscription forms
 *
 * Apply some crappy magic to these forms. A better solution would be to check
 * if they exist and then do this stuff. We're just going to do it on a timer
 * instead for the time being.
 */

 // Un-disables the newsletter submission form when a valid email address is
 // entered. Let's clean up this function to apply to other forms, including the
 // magazine subscribe form.
// var unDisable = function() {
//  var selected = $("#form-footer-newsletters input:checkbox:checked").length;
//  var emailPattern = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+\.*/;
//  var validEmail = emailPattern.test($("#form-footer-newsletters input[type='email']").val());
//
//   if (selected > 0 && validEmail) {
//     $("#form-footer-newsletters button").prop("disabled", false);
//   } else {
//     $("#form-footer-newsletters button").prop("disabled", true);
//   }
// };
//
// // Here's that gross timer. Absolutely vile.
// setTimeout(function() {
//   $("#form-footer-newsletters button").prop("disabled", true);
//
//   $("#form-footer-newsletters input:checkbox").on("change", function () {
//     unDisable();
//   });
//
//   $("#form-footer-newsletters input[type='email']").on("input change keyup", function () {
//     unDisable();
//   });
//  }, 3500);

/**
 * IE-specific
 *
 * Doing terrible things to detect IE.
 */

if (!!(window.navigator.userAgent).match(/MSIE|Trident/)) {
  // IE is predictably terrible at handling SVG images.
  // Give it PNGs instead.
  switchPng('.sticky-header__logo img, .journal-preview img, .footer__header img .logo--science');
}

    }
  };
} (jQuery, Drupal));


(function($) {

  jQuery('.search-toggler__trigger').click(function() {
    jQuery('.search-form-mobile').toggleClass('is-hidden');
  });

  //
  // Toggleable content — Just hide it visually, but keep it readable
  //
  jQuery('.toggleable:not(.is-revealed)').addClass('is-visually-hidden');

  jQuery('[data-click-to-toggle]').click(function(){
    var revealTarget = jQuery(this).data('click-to-toggle');
    jQuery(revealTarget).toggleClass('is-revealed is-visually-hidden');
    return false;
  });


  Drupal.behaviors.science = {
    attach: function(context, settings) {
      respondTable('.datatable');

      Drupal.behaviors.science.sticky(context, settings);
      Drupal.behaviors.science.tabs(context, settings);
      Drupal.behaviors.science.viewsLoadMore(context, settings);
      Drupal.behaviors.science.podcasts(context, settings);
    },
    sticky: function(context, settings) {

      if (window.matchMedia("(min-width: 1025px)").matches) {
        jQuery('.article__social').sticky({
          topSpacing: 0,
          getWidthFrom: '.tertiary'
        });
      }

      $('.sticky-header', context).stickyHeader({
        triggerElement: '.row:not(.row--header)',
        hiddenClass: 'sticky-header-is-hidden',
        scrollOffset: -75
      });
    },

    tabs: function(context, settings) {

      $('.tabbed__panel-wrapper:not(:first-child)', context).addClass('is-vishidden');

      $('.tabbed__list li:first-child', context).addClass('active');

      $('.tabbed__list a', context).click(function(event) {
          var $self = $(this);

          if ($self.parents('.tabbed--drupal, .tabbed--static').length) {
            return;
          }

          event.preventDefault();

          var $li = $(this).closest('li');
          var $tabTarget = $($self.attr('href'));
          var $allTabPanels = $self.closest('.tabbed').find('.tabbed__panel-wrapper');

          $li.addClass('active');
          $li.siblings().removeClass('active');

          $allTabPanels.addClass('is-vishidden');
          $tabTarget.removeClass('is-vishidden');
        });
    },

    viewsLoadMore: function(context, settings) {

      // To use this "load more" pager instead of the default Views output, do
      // this:
      //  * Add 'view-load-more' CSS class to the View display.
      //  * Add 'view-load-more-item' CSS class to the row output.
      //  * Use "More" link and set whatever label you want.
      //  * Set "Paged output, full pager".
      var $link_page = $('.view-load-more .pager li.pager-item a', context);
      var $link_more = $('.view-load-more .more-link a', context);
      if (!$link_page.length || !$link_more.length) {
        return;
      }

      // Set View wrapper selector string.
      var selector = '.' + $('.view-load-more', context)
        .attr('class')
        .split(' ')
        .join('.');

      // Collect all paged href values.
      var history = [];
      $link_page.each(function(ix, e) {
        history
          .push($(e).attr('href'));
      });

      // Remove default Views pager.
      var $pager = $(selector + ' .pager', context)
        .hide();

      // Bind click behavior to More button.
      $link_more
        .addClass('btn btn--block')
        .click(function(evt) {
          evt.preventDefault();

          var $self = $(this);
          var label = $self.html().trim();
          var page = history.shift();
          var $target = $(selector + ' .view-content > ul, ' + selector + ' .view-content > ol', context);
          if (!$target.length) {
            $target = $(selector + ' .view-content', context);
          }

          // AJAX in the next page of View items, store results to hidden pager
          // element, then append the View content.
          $self
            .html(Drupal.t('Loading...'));

          $pager
            .load(page + ' ' + selector + ' .view-content .view-load-more-item', null, function(response, status, xhr) {
              $self
                .html(label);
              $target
                .append($pager.html());
              $pager
                .empty();

              if (history.length === 0) {
                $link_more
                  .addClass('element-invisible');
              }
            });

        });

    },
    podcasts: function(context, settings) {
      // Front page podcast player
      $('.front .view-nodequeue-lists-feat-podcast .file-audio', context).addClass('align-right');
      $('.front .view-nodequeue-lists-feat-podcast .mediaelement-audio', context).addClass('audio').addClass('audio--podcast');
      $('.front .view-nodequeue-lists-feat-podcast', context).parent().css('width', '100%');
      // Mediaelement player embedded into articles or podcast full node view
      $('.article__content .mediaelement-audio', context).addClass('audio');
      // Podcast full node view
      $('.node-type-podcast .article__content .mediaelement-audio', context).addClass('audio--podcast');

      $('.mejs-playpause-button button', context).val("Play/Pause");

    }
  };
})(jQuery);

/**
 * Autoplay detection script for background videos.
 */
(function($) {
  Modernizr.on('videoautoplay', function(result) {
    if (!result) {
      $('.background-video').each(function() {
        addImageFallback(this);
      });
    }
  });

  function addImageFallback(item) {
    // Clear out video tag altogether, add image tag
    var imageUrl = $('img', item).attr('src');

    if (imageUrl) {
      var $img = $('<img>').attr('src', imageUrl);
      var $pict = $('<picture>').append($img);
      $parent = $(item).parent();
      $(item).remove();
      $parent.prepend($pict);
    }
  }
})(jQuery);
;/**/
// JavaScript Document
window.onload =  function() {

	var firstEntity = document.querySelector('.primary > .article__body > .entity');
	var firstEntityIsFullWidth = isFullWidth(firstEntity);
		/* if first image has class for full width do this */
	if (firstEntityIsFullWidth) {
		var windowWidth = getWindowWidth();
	var headlineImage = document.querySelector('.paragraphs-item-image.full--width .figure');
	
	var tertiaryArray = [];
	tertiaryArray = document.querySelectorAll('.container--content .tertiary');
	
	var headlineImageHeight = getHeaderImageHeight();
	var mainImageMarginBottom = getFiguresMarginBottom();
	

	setTertiaryProperties();
	} else {
		getWindowWidth();
			windowWidth = getWindowWidth();
			setTertiaryProperties();
	}
	window.onresize = function() {
		firstEntityIsFullWidth = isFullWidth(firstEntity);
		if (firstEntityIsFullWidth) {
			getWindowWidth();
		getHeaderImageHeight();
		getFiguresMarginBottom();
		
		windowWidth = getWindowWidth();
		headlineImageHeight = getHeaderImageHeight();
		mainImageMarginBottom = getFiguresMarginBottom();
		
	
		setTertiaryProperties();
		} else {
			getWindowWidth();
			windowWidth = getWindowWidth();
			setTertiaryProperties();
		}
		
	}
	
	
	/* functions start */
	// take the height and set the margintop of the tertiary to be that value.
	function setTertiaryProperties() {
		var tertiaryMarginTop = headlineImageHeight;
		var firstFigureImageMarginBottom = mainImageMarginBottom;
		
		var i;
		for (i = 0; i < tertiaryArray.length; i++) {
			/* 48 rem is 768 pixels */
			if ((windowWidth >= 768) && firstEntityIsFullWidth) { 
				 tertiaryArray[i].style.marginTop = tertiaryMarginTop + firstFigureImageMarginBottom + 'px';
			} else {
				 tertiaryArray[i].style.marginTop = 0;
			}
		}
	}
	
	function getHeaderImageHeight() {
		var height = headlineImage.offsetHeight;
		return height;
	}
	
	function getFiguresMarginBottom() {
		var figure = document.querySelector('.paragraphs-item-image.full--width .figure');
		var thisStyle = figure.currentStyle || window.getComputedStyle(figure);
		var figureMarginBottom = thisStyle.marginBottom;
		figureMarginBottom = parseInt(figureMarginBottom, 10);
		return figureMarginBottom;
	}
	
	function getWindowWidth() {
		var w = window.innerWidth;
		return w;
	}
	
	
	function isFullWidth(a) {
		var thisClassListAray = [];
		var thisClassList = a.getAttribute('class');
		thisClassListAray = thisClassListAray.concat(thisClassList.split(' '));
	
		var fullWidth = false;
		if (thisClassListAray.indexOf('full--width') !== -1) {
			fullWidth = true;
		} 
	
		return fullWidth;
	}
	
}   /* close window onload function*/
	
;/**/
