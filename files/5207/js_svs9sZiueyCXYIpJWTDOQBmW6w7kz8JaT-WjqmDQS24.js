/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);;
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(t){function e(t){return t&&t.constructor===Number?t+"px":t}t.fn.bgiframe=function(i){if(i=t.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:!0,src:"javascript:false;",conditional:/MSIE 6\.0/.test(navigator.userAgent)},i),!t.isFunction(i.conditional)){var o=i.conditional;i.conditional=function(){return o}}var n=t('<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+i.src+'"style="display:block;position:absolute;z-index:-1;"/>');return this.each(function(){var o=t(this);if(i.conditional(this)!==!1){var a=o.children("iframe.bgiframe"),r=0===a.length?n.clone():a;r.css({top:"auto"==i.top?(parseInt(o.css("borderTopWidth"),10)||0)*-1+"px":e(i.top),left:"auto"==i.left?(parseInt(o.css("borderLeftWidth"),10)||0)*-1+"px":e(i.left),width:"auto"==i.width?this.offsetWidth+"px":e(i.width),height:"auto"==i.height?this.offsetHeight+"px":e(i.height),opacity:i.opacity===!0?0:void 0}),0===a.length&&o.prepend(r)}})},t.fn.bgIframe=t.fn.bgiframe});
//# sourceMappingURL=jquery.bgiframe.min.js.map;
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
/*
 * This is not the original jQuery Superfish plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.superfish = function(op){
    var sf = $.fn.superfish,
      c = sf.c,
      $arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
      over = function(){
        var $$ = $(this), menu = getMenu($$);
        clearTimeout(menu.sfTimer);
        $$.showSuperfishUl().siblings().hideSuperfishUl();
      },
      out = function(){
        var $$ = $(this), menu = getMenu($$), o = sf.op;
        clearTimeout(menu.sfTimer);
        menu.sfTimer=setTimeout(function(){
          if ($$.children('.sf-clicked').length == 0){
            o.retainPath=($.inArray($$[0],o.$path)>-1);
            $$.hideSuperfishUl();
            if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
          }
        },o.delay);
      },
      getMenu = function($menu){
        var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
        sf.op = sf.o[menu.serial];
        return menu;
      },
      addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

    return this.each(function() {
      var s = this.serial = sf.o.length;
      var o = $.extend({},sf.defaults,op);
      o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels),
      p = o.$path;
      for (var l = 0; l < p.length; l++){
        p.eq(l).addClass([o.hoverClass,c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass);
      }
      sf.o[s] = sf.op = o;

      $('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
        if (o.autoArrows) addArrow( $(this).children('a:first-child, span.nolink:first-child') );
      })
      .not('.'+c.bcClass)
        .hideSuperfishUl();

      var $a = $('a, span.nolink',this);
      $a.each(function(i){
        var $li = $a.eq(i).parents('li');
        $a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
      });
      o.onInit.call(this);

    }).each(function() {
      var menuClasses = [c.menuClass];
      if (sf.op.dropShadows){
        menuClasses.push(c.shadowClass);
      }
      $(this).addClass(menuClasses.join(' '));
    });
  };

  var sf = $.fn.superfish;
  sf.o = [];
  sf.op = {};

  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator',
    shadowClass: 'sf-shadow'
  };
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: {opacity:'show'},
    speed: 'fast',
    autoArrows: true,
    dropShadows: true,
    disableHI: false, // true disables hoverIntent detection
    onInit: function(){}, // callback functions
    onBeforeShow: function(){},
    onShow: function(){},
    onHide: function(){}
  };
  $.fn.extend({
    hideSuperfishUl : function(){
      var o = sf.op,
        not = (o.retainPath===true) ? o.$path : '';
      o.retainPath = false;
      var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
          .children('ul').addClass('sf-hidden');
      o.onHide.call($ul);
      return this;
    },
    showSuperfishUl : function(){
      var o = sf.op,
        sh = sf.c.shadowClass+'-off',
        $ul = this.addClass(o.hoverClass)
          .children('ul.sf-hidden').hide().removeClass('sf-hidden');
      o.onBeforeShow.call($ul);
      $ul.animate(o.animation,o.speed,function(){ o.onShow.call($ul); });
      return this;
    }
  });
})(jQuery);;
/*
 * Supersubs v0.4b - jQuery plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){ // $ will refer to jQuery within this closure
  $.fn.supersubs = function(options){
    var opts = $.extend({}, $.fn.supersubs.defaults, options);
    // return original object to support chaining
    // Although this is unnecessary due to the way the module uses these plugins.
    for (var a = 0; a < this.length; a++) {
      // cache selections
      var $$ = $(this).eq(a),
      // support metadata
      o = $.meta ? $.extend({}, opts, $$.data()) : opts;
      // Jump one level if it's a "NavBar"
      if ($$.hasClass('sf-navbar')) {
        $$ = $$.children('li').children('ul');
      }
      // cache all ul elements
      var $ULs = $$.find('ul'),
      // get the font size of menu.
      // .css('fontSize') returns various results cross-browser, so measure an em dash instead
      fontsize = $('<li id="menu-fontsize">&#8212;</li>'),
      size = fontsize.attr('style','padding:0;position:absolute;top:-99999em;width:auto;')
      .appendTo($$)[0].clientWidth; //clientWidth is faster than width()
      // remove em dash
      fontsize.remove();

      // loop through each ul in menu
      for (var b = 0; b < $ULs.length; b++) {
        var
        // cache this ul
        $ul = $ULs.eq(b);
        // If a multi-column sub-menu, and only if correctly configured.
        if (o.multicolumn && $ul.hasClass('sf-multicolumn') && $ul.find('.sf-multicolumn-column').length > 0){
          // Look through each column.
          var $column = $ul.find('div.sf-multicolumn-column > ol'),
          // Overall width.
          mwWidth = 0;
          for (var d = 0; d < $column.length; d++){
            resize($column.eq(d));
            // New column width, in pixels.
            var colWidth = $column.width();
            // Just a trick to convert em unit to px.
            $column.css({width:colWidth})
            // Making column parents the same size.
            .parents('.sf-multicolumn-column').css({width:colWidth});
            // Overall width.
            mwWidth += parseInt(colWidth);
          }
          // Resizing the columns container too.
          $ul.add($ul.find('li.sf-multicolumn-wrapper, li.sf-multicolumn-wrapper > ol')).css({width:mwWidth});
        }
        else {
          resize($ul);
        }
      }
    }
    function resize($ul){
      var
      // get all (li) children of this ul
      $LIs = $ul.children(),
      // get all anchor grand-children
      $As = $LIs.children('a');
      // force content to one line and save current float property
      $LIs.css('white-space','nowrap');
      // remove width restrictions and floats so elements remain vertically stacked
      $ul.add($LIs).add($As).css({float:'none',width:'auto'});
      // this ul will now be shrink-wrapped to longest li due to position:absolute
      // so save its width as ems.
      var emWidth = $ul.get(0).clientWidth / size;
      // add more width to ensure lines don't turn over at certain sizes in various browsers
      emWidth += o.extraWidth;
      // restrict to at least minWidth and at most maxWidth
      if (emWidth > o.maxWidth) {emWidth = o.maxWidth;}
      else if (emWidth < o.minWidth) {emWidth = o.minWidth;}
      emWidth += 'em';
      // set ul to width in ems
      $ul.css({width:emWidth});
      // restore li floats to avoid IE bugs
      // set li width to full width of this ul
      // revert white-space to normal
      $LIs.add($As).css({float:'',width:'',whiteSpace:''});
      // update offset position of descendant ul to reflect new width of parent.
      // set it to 100% in case it isn't already set to this in the CSS
      for (var c = 0; c < $LIs.length; c++) {
        var $childUl = $LIs.eq(c).children('ul');
        var offsetDirection = $childUl.css('left') !== undefined ? 'left' : 'right';
        $childUl.css(offsetDirection,'100%');
      }
    }
    return this;
  };
  // expose defaults
  $.fn.supersubs.defaults = {
    multicolumn: true, // define width for multi-column sub-menus and their columns.
    minWidth: 12, // requires em unit.
    maxWidth: 27, // requires em unit.
    extraWidth: 1 // extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
  };
})(jQuery); // plugin code ends
;
/*
 * Supposition v0.2 - an optional enhancer for Superfish jQuery menu widget.
 *
 * Copyright (c) 2008 Joel Birch - based mostly on work by Jesse Klaasse and credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
/*
 * This is not the original jQuery Supposition plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.supposition = function(){
    var $w = $(window), /*do this once instead of every onBeforeShow call*/
    _offset = function(dir) {
      return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
      || document.documentElement && document.documentElement[dir=='y' ? 'scrollTop' : 'scrollLeft']
      || document.body[dir=='y' ? 'scrollTop' : 'scrollLeft'];
    },
    onHide = function(){
      this.css({bottom:''});
    },
    onBeforeShow = function(){
      this.each(function(){
        var $u = $(this);
        $u.css('display','block');
        var $mul = $u.closest('.sf-menu'),
        level = $u.parents('ul').length,
        menuWidth = $u.width(),
        menuParentWidth = $u.closest('li').outerWidth(true),
        menuParentLeft = $u.closest('li').offset().left,
        totalRight = $w.width() + _offset('x'),
        menuRight = $u.offset().left + menuWidth,
        exactMenuWidth = (menuRight > (menuParentWidth + menuParentLeft)) ? menuWidth - (menuRight - (menuParentWidth + menuParentLeft)) : menuWidth;
        if ($u.parents('.sf-js-enabled').hasClass('rtl')) {
          if (menuParentLeft < exactMenuWidth) {
            if (($mul.hasClass('sf-horizontal') && level == 1) || ($mul.hasClass('sf-navbar') && level == 2)){
              $u.css({left:0,right:'auto'});
            }
            else {
              $u.css({left:menuParentWidth + 'px',right:'auto'});
            }
          }
        }
        else {
          if (menuRight > totalRight && menuParentLeft > menuWidth) {
            if (($mul.hasClass('sf-horizontal') && level == 1) || ($mul.hasClass('sf-navbar') && level == 2)){
              $u.css({right:0,left:'auto'});
            }
            else {
              $u.css({right:menuParentWidth + 'px',left:'auto'});
            }
          }
        }
        var windowHeight = $w.height(),
        offsetTop = $u.offset().top,
        menuParentShadow = ($mul.hasClass('sf-shadow') && $u.css('padding-bottom').length > 0) ? parseInt($u.css('padding-bottom').slice(0,-2)) : 0,
        menuParentHeight = ($mul.hasClass('sf-vertical')) ? '-' + menuParentShadow : $u.parent().outerHeight(true) - menuParentShadow,
        menuHeight = $u.height(),
        baseline = windowHeight + _offset('y');
        var expandUp = ((offsetTop + menuHeight > baseline) && (offsetTop > menuHeight));
        if (expandUp) {
          $u.css({bottom:menuParentHeight + 'px',top:'auto'});
        }
        $u.css('display','none');
      });
    };

    return this.each(function() {
      var o = $.fn.superfish.o[this.serial]; /* get this menu's options */

      /* if callbacks already set, store them */
      var _onBeforeShow = o.onBeforeShow,
      _onHide = o.onHide;

      $.extend($.fn.superfish.o[this.serial],{
        onBeforeShow: function() {
          onBeforeShow.call(this); /* fire our Supposition callback */
          _onBeforeShow.call(this); /* fire stored callbacks */
        },
        onHide: function() {
          onHide.call(this); /* fire our Supposition callback */
          _onHide.call(this); /* fire stored callbacks */
        }
      });
    });
  };
})(jQuery);;
/*
 * sf-Touchscreen v1.3b - Provides touchscreen compatibility for the jQuery Superfish plugin.
 *
 * Developer's note:
 * Built as a part of the Superfish project for Drupal (http://drupal.org/project/superfish)
 * Found any bug? have any cool ideas? contact me right away! http://drupal.org/user/619294/contact
 *
 * jQuery version: 1.3.x or higher.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

(function($){
  $.fn.sftouchscreen = function(options){
    options = $.extend({
      mode: 'inactive',
      breakpoint: 768,
      breakpointUnit: 'px',
      useragent: '',
      behaviour: 2,
      disableHover: false
    }, options);

    function activate(menu){
      var eventHandler = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? ['click touchstart','mouseup touchend'] : ['click','mouseup'];
      // Select hyperlinks from parent menu items.
      menu.find('li:has(ul)').children('a,span.nolink').each(function(){
        var item = $(this),
        parent = item.closest('li');
        if (options.disableHover){
          parent.unbind('mouseenter mouseleave');
        }
        if (options.behaviour == 2){
          if (parent.children('a.menuparent,span.nolink.menuparent').length > 0 && parent.children('ul').children('.sf-clone-parent').length == 0){
            var
            // Cloning the hyperlink of the parent menu item.
            cloneLink = parent.children('a.menuparent,span.nolink.menuparent').clone(),
            // Wrapping the hyerplinks in <li>.
            cloneLink = $('<li class="sf-clone-parent" />').html(cloneLink);
            // Removing unnecessary stuff.
            cloneLink.find('.sf-sub-indicator').remove(),
            // Adding a helper class and attaching them to the sub-menus.
            parent.children('ul').addClass('sf-has-clone-parent').prepend(cloneLink);
          }
        }
        // No .toggle() here as it's not possible to reset it.
        item.bind(eventHandler[0], function(event){
          // Already clicked?
          if (item.hasClass('sf-clicked')){
            // Depending on the preferred behaviour, either proceed to the URL.
            if (options.behaviour == 0){
              url = item.attr('href');
              if (typeof(url) != 'undefined'){
                window.location = url;
              }
            }
            // or collapse the sub-menu.
            else if (options.behaviour == 1 || options.behaviour == 2){
              event.preventDefault();
              item.removeClass('sf-clicked');
              parent.hideSuperfishUl().find('a,span.nolink').removeClass('sf-clicked');
            }
          }
          // Prevent the default action otherwise.
          else {
            event.preventDefault();
            item.addClass('sf-clicked');
            parent.showSuperfishUl().siblings('li:has(ul)').hideSuperfishUl().find('.sf-clicked').removeClass('sf-clicked');
          }
        });
      });

      $(document).bind(eventHandler[1], function(event){
        if (menu.not(event.target) && menu.has(event.target).length === 0){
          menu.find('.sf-clicked').removeClass('sf-clicked');
          menu.find('li:has(ul)').hideSuperfishUl();
        }
      });
    }
    // Return original object to support chaining.
    // This is not necessary actually because of the way the module uses these plugins.
    for (var b = 0; b < this.length; b++) {
      var menu = $(this).eq(b),
      mode = options.mode;
      // The rest is crystal clear, isn't it? :)
      if (mode == 'always_active'){
        activate(menu);
      }
      else if (mode == 'window_width'){
        var breakpoint = (options.breakpointUnit == 'em') ? (options.breakpoint * parseFloat($('body').css('font-size'))) : options.breakpoint,
        windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        timer;
        if ((typeof Modernizr === 'undefined' || typeof Modernizr.mq !== 'function') && windowWidth < breakpoint){
          activate(menu);
        }
        else if (typeof Modernizr !== 'undefined' && typeof Modernizr.mq === 'function' && Modernizr.mq('(max-width:' + (breakpoint - 1) + 'px)')) {
          activate(menu);
        }
        $(window).resize(function(){
          clearTimeout(timer);
          timer = setTimeout(function(){
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if ((typeof Modernizr === 'undefined' || typeof Modernizr.mq !== 'function') && windowWidth < breakpoint){
              activate(menu);
            }
            else if (typeof Modernizr !== 'undefined' && typeof Modernizr.mq === 'function' && Modernizr.mq('(max-width:' + (breakpoint - 1) + 'px)')) {
              activate(menu);
            }
          }, 50);
        });
      }
      else if (mode == 'useragent_custom'){
        if (options.useragent != ''){
          var ua = RegExp(options.useragent, 'i');
          if (navigator.userAgent.match(ua)){
            activate(menu);
          }
        }
      }
      else if (mode == 'useragent_predefined' && navigator.userAgent.match(/(android|bb\d+|meego)|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i)){
        activate(menu);
      }
    }
    return this;
  }
})(jQuery);
;
