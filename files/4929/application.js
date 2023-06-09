// Generated by CoffeeScript 2.3.1
(function() {
  $(function() {
    var NoAutoOptions, NoAuto_slider, enableGATracking, ipad, screen_size, slider, target, targets, title, tooltip, verticalSliderOptions;
    $(document).on('click', '#text-smaller', function(e) {
      e.preventDefault();
      return $('.major-article-block').css('font-size', '-=1px');
    });
    $(document).on('click', '#text-larger', function(e) {
      e.preventDefault();
      return $('.major-article-block').css('font-size', '+=1px');
    });
    $("[data-link-title], h2:not(.featured-type)").each(function() {
      var content, slug;
      if ($(this).data("link-title")) {
        content = $(this).data("link-title");
      } else {
        content = $(this).html();
      }
      slug = content;
      slug = slug.replace(/[^a-zA-Z0-9\s]/g, "");
      slug = slug.toLowerCase();
      slug = slug.replace(/\s/g, "-");
      $(this).attr("id", slug);
      return $('#toc-list ul').append("<li><a class='scroll-link' href='#" + slug + "' data-scroll='#" + slug + "'>" + content + "</a></li>");
    });
    enableGATracking = function() {};
    $("[data-trackThis='downloads']").on('click', function() {
      return ga('send', 'event', $(this).data('category'), $(this).data('trackThis'), $(this).data('label'));
    });
    ipad = 991;
    screen_size = window.innerWidth;
    $(document).ready(function() {
      if (screen_size < ipad) {
        $('#toc').removeClass('active');
        $('#discussion').addClass('active');
        $('#toc-list').removeClass('visible');
        return $('#discussion-list').addClass('visible');
      }
    });
    if (screen_size < ipad) {
      $('.button-with-list').on('click', function(e) {
        e.preventDefault();
        return $('this').toggleClass('show-list');
      });
    }
    $('.scroll-link').on('click', function(e) {
        e.preventDefault();
        if ($(this).data('scroll') && $($(this).data('scroll')).length > 0) {
            var target = $($(this).data('scroll'));
            $('html, body').stop().animate(
                {
                    scrollTop: target.offset().top-100
                },
                1000
            );
        }
    });
    $('.scroll-top-waypoint').waypoint(function(direction) {
      var $parent;
      if (direction === 'down') {
        $('.article-top-nav').addClass('fixed');
        $('.app-container').addClass('no-jank-padding');
        $('.article-minor-block').addClass('fixed');
        return $parent = $("app-container").eq(0);
      } else {
        $('.article-top-nav').removeClass('fixed');
        $('.app-container').removeClass('no-jank-padding');
        return $('.article-minor-block').removeClass('fixed');
      }
    });
    $(document).on('click', '.sharing-link', function(e) {
      return e.preventDefault();
    });
    verticalSliderOptions = {
      adaptiveHeight: false,
      mode: 'vertical',
      easing: 'easeinQuart',
      speed: 1600,
      pause: 5000,
      infiniteloop: false,
      auto: true,
      autoHover: false,
      startSlide: 0,
      nextText: 'next >',
      prevText: '< previous',
      autoControls: false
    };
    NoAutoOptions = {
      adaptiveHeight: false,
      mode: 'vertical',
      easing: 'easeinQuart',
      speed: 1600,
      pause: 5000,
      infiniteloop: false,
      auto: false,
      autoHover: false,
      startSlide: 0,
      nextText: 'next >',
      prevText: '< previous',
      autoControls: false
    };
    slider = $('.conversation-slides').bxSlider(verticalSliderOptions);
    NoAuto_slider = $('article-conversation-slides').bxSlider(NoAutoOptions);
    $('.bx-controls-direction a').click(function(e) {
      var i, restart;
      i = $(this).attr('data-slide-index');
      slider.goToSlide(i);
      slider.stopAuto();
      restart = setTimeout(function() {
        slider.startAuto();
        slider.infiniteloop(false);
      }, 500);
      return false;
    });
    $(document).on('click', '#latest', function(e) {
      e.preventDefault();
      $('.tabs').removeClass('active');
      $(this).addClass('active');
      $('.toggle-lists').removeClass('visible');
      return $('#latest-block').addClass('visible');
    });
    $(document).on('click', '#popular', function(e) {
      e.preventDefault();
      $('.tabs').removeClass('active');
      $(this).addClass('active');
      $('.toggle-lists').removeClass('visible');
      return $('#popular-block').addClass('visible');
    });
    $(document).on('click', '#toc', function(e) {
      e.preventDefault();
      $('.tabs').removeClass('active');
      $(this).addClass('active');
      $('.toggle-lists').removeClass('visible');
      return $('#toc-list').addClass('visible');
    });
    $(document).on('click', '#discussion, #comment-link', function(e) {
      e.preventDefault();
      $('.tabs').removeClass('active');
      $('#discussion, #comment-link').addClass('active');
      $('.toggle-lists').removeClass('visible');
      return $('#discussion-list').addClass('visible');
    });
    $(document).on('click', '#trendmd', function(e) {
      e.preventDefault();
      $('.tabs').removeClass('active');
      $(this).addClass('active');
      $('.toggle-lists').removeClass('visible');
      return $('#trendmd-list').addClass('visible');
    });
    targets = $("[rel~=tooltip]");
    target = false;
    tooltip = false;
    title = false;
    targets.bind("mouseenter", function() {
      var init_tooltip, remove_tooltip, tip;
      target = $(this);
      tip = target.attr("title");
      tooltip = $("<div id=\"tooltip\"></div>");
      if (!tip || tip === "") {
        return false;
      }
      target.removeAttr("title");
      tooltip.css("opacity", 0).html(tip).appendTo("body");
      init_tooltip = function() {
        var pos_left, pos_top;
        if ($(window).width() < tooltip.outerWidth() * 1.5) {
          tooltip.css("max-width", $(window).width() / 2);
        } else {
          tooltip.css("max-width", 340);
        }
        pos_left = target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);
        pos_top = target.offset().top - tooltip.outerHeight() - 20;
        if (pos_left < 0) {
          pos_left = target.offset().left + target.outerWidth() / 2 - 20;
          tooltip.addClass("left");
        } else {
          tooltip.removeClass("left");
        }
        if (pos_left + tooltip.outerWidth() > $(window).width()) {
          pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
          tooltip.addClass("right");
        } else {
          tooltip.removeClass("right");
        }
        if (pos_top > 0) {
          pos_top = target.offset().top + target.outerHeight();
          tooltip.addClass("top");
        } else {
          tooltip.removeClass("top");
        }
        tooltip.css({
          left: pos_left,
          top: pos_top
        }).animate({
          top: "+=10",
          opacity: 1
        }, 50);
      };
      init_tooltip();
      $(window).resize(init_tooltip);
      remove_tooltip = function() {
        tooltip.animate({
          top: "-=10",
          opacity: 0
        }, 50, function() {
          $(this).remove();
        });
        target.attr("title", tip);
      };
      target.bind("mouseleave", remove_tooltip);
      tooltip.bind("click", remove_tooltip);
    });
  });

}).call(this);
