/**
 * @file
 * Highwire Log Javascript
 *
 * Copyright (c) HighWire Press, Inc.
 * This software is open-source licensed under the GNU Public License Version 2
 * or later. The full license is available in the LICENSE.TXT file at the root
 * of this repository.
 */


(function ($) {
  // Store our function as a property of Drupal.behaviors.
  Drupal.behaviors.highwire_log = { attach: function (context, settings) {
    $('.service-links a').each(function() {
      if(!$(this).is('#twitter_widget') && !$(this).is('#facebook_like') && !$(this).is('#google_plus_one')) {
        if (typeof $(this).attr('data-log-redirect-set') == 'undefined') {
          $(this).attr('href', '/highwire_log/share/' + $(this).attr('id') + '?link=' + encodeURIComponent($(this).attr('href')));
          $(this).attr('data-log-redirect-set', true);
        }
      }
    });

    // If advanced logging is enabled, we will have appended an object with appropriate
    // information to Drupal.settings.  It may also have authentication data, if
    // ac_override hasn't been triggered.
    if (typeof(Drupal.settings.highwire_log) != "undefined" && Drupal.settings.highwire_log !== null) {
      // Check for run flag, so we're not submitting the entry multiple times per page
      if (Drupal.settings.highwire_log.has_run != true) {
        requestData = {};
        // Initial logging settings are key => encrypted_value pairs in Drupal.settings
        $.each( Drupal.settings.highwire_log.userdata, function (param, value) {
          requestData[param] = value;
        });
        if (Drupal.settings.highwire_log.auth != null) {
           $.each( Drupal.settings.highwire_log.auth, function (param, value) {
            requestData[param] = value;
          });
        }

        if (requestData) {
          $.ajax({
              url: '/highwire_log/submit',
              type: 'POST',
              cache: false,
              data: requestData,
              dataType: 'json',
              success: function(msg){
                // debug line
                //console.log(msg);
              }
          });
        } else {
          //debug line
          //console.log('No logging request is attached');
        }
        // Add flag
        Drupal.settings.highwire_log.has_run = true;
      }
    }
  }};
}(jQuery));
;
/**
 * @file
 * Highwire User Meta Data Additions JS
 *
 * Copyright (c) HighWire Press, Inc.
 * This software is open-source licensed under the GNU Public License Version 2
 * or later. The full license is available in the LICENSE.TXT file at the root
 * of this repository.
 */

(function ($) {
  // Store our function as a property of Drupal.behaviors.
  Drupal.behaviors.highwire_user_meta_add = { attach: function (context, settings) {
    $.ajax({
      url: '/highwire/sub-data',
      type: 'POST',
      cache: false,
      dataType: 'json',
      success: function(msg){
        // Add the user subscription info.
        if ($('script[id="user"]').length == 0) {
          var s = document.createElement('script');
          s.type = 'application/json'
          s.id = 'user'
          s.text = JSON.stringify(msg)
          // Add user data at the end of the meta tags, so we keep page data tidy
          $(s).insertAfter($('meta').last())
        }
      }
    });
  }}
}(jQuery));
;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/**
 * Highwire Article References pop up
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.articleRefPopup = {
    attach: function(context, settings) {
      var instances = (settings.instances != undefined) ? $.parseJSON(settings.instances) : false;
      if (!instances) {
        return;
      }

      // JCORE-2366: Use event delegation wrapper around cluetip to speed up domready scripting time
      $("body", context).delegate("a.xref-bibr:not(.hasTooltip):not(.hw-no-refrence), a.xref-ref:not(.hasTooltip):not(.hw-no-refrence)", "mouseenter", function (event) {
        var elem = $(this);
        var parent = elem.parents('[data-highwire-cite-ref-tooltip-instance]');
        var instance = parent ? parent.data('highwire-cite-ref-tooltip-instance') : 'highwire_reflinks_tooltip';
        var tipSettings = (instances[instance] != undefined) ? instances[instance] : '';
        var target = 'a' + elem.attr('href') + '~.ref-cit';

        if (!tipSettings || !$(target).length) {
          elem.addClass('hw-no-refrence');
          return;
        }

        // Merge in additional settings to tooltip instance settings.
        var addSettings = {
          show: {
            // "Ready" makes qTip show as soon as it is bound.
            ready: true,
          },
          position: {
            viewport: $(window),
          },
          events: {
            show: function(event, api) {
              // Disable for mobile
              var activate = true;
              if (Drupal.highwireResponsive) {
                var currentLayout = Drupal.highwireResponsive.getCurrentLayout();
                activate = currentLayout !== 'mobile' ? true : false;
              }
              return activate;
            },
            render: function(event, api) {
              api.elements.content.addClass('highwire-markup');
            },
          },
          content: {
            // Add content but leave referenced element.
            text: $(target).clone(),
          }
        }
        $.extend(true, tipSettings, addSettings);

        // Initialize tooltip.
        elem.qtip(tipSettings, event).addClass("article-ref-popup hasTooltip");
        event.preventDefault();
      });
      
    }
  };
})(jQuery);
;
(function($) {
  // Check jQuery version for 1.6 or higher
  if ($().jquery.split(".")[0] == "1" && parseInt($().jquery.split(".")[1]) < 6) {
    if (typeof console == "object") {
      console.error('Panels Ajax Tab Error: jQuery 1.6 or higher required.');
    }
  }

  window.onpopstate = function(e) {
    if(e.state != null){
      $('a[data-panel-name="'+e.state.tab+'"]').panels_ajax_tabs_trigger();
    }
  };

  Drupal.behaviors.panels_ajax_tabs = {
    attach: function(context) {
      $('.panels-ajax-tab-tab', context).once('panels-ajax-tabs-once', function() {
        // We need to push the state when the page first loads, so we know what the first tab is
        if ($(this).parent().hasClass('active') && $(this).data('url-enabled') == 1) {
          if (typeof window.history.pushState != 'undefined') {
            window.history.replaceState({'tab':$(this).data('panel-name')}, $(this).html(), window.location.href);
          }
        }

        $(this).click(function(e) {
          e.preventDefault();

          // Push the history
          if (typeof window.history.pushState != 'undefined' && $(this).data('url-enabled') == 1) {
            var href = $(this).attr('href') ? $(this).attr('href') : location.pathname;
            window.history.pushState({'tab':$(this).data('panel-name')}, $(this).html(), href);
          }

          if (!$(this).parent().hasClass('active')) {
            $(this).panels_ajax_tabs_trigger();
          }

        })
        .css('cursor', 'pointer');
      });

      // Trigger a click event on the first tab to load it
      $('.pane-panels-ajax-tab-tabs', context).once('panels-ajax-tabs-once', function() {
        var tabs = $('.panels-ajax-tab-tab:not(.panels-ajax-tabs-first-loaded)', this);
        var firstTab = tabs.first();
        var target_id = firstTab.data('target-id');
        var preloaded = $('#panels-ajax-tab-container-' + target_id).data('panels-ajax-tab-preloaded');
        var currentTab;

        if (preloaded === '') {
          currentTab = firstTab;
          firstTab.trigger('click');
        }
        else {
          currentTab = tabs.filter('*[data-panel-name="' + preloaded + '"]');
        }

        currentTab.addClass('panels-ajax-tabs-first-loaded');
        currentTab.parent().addClass('active');
      });
    }
  }
})(jQuery);


/**
 * Panels-ajax-tabs-trigger is a jquery plugin that can be triggered.
 * A callback, to be called after content has been loaded, can optionally be passed
 */
(function($){
  $.fn.extend({
    panels_ajax_tabs_trigger: function(callback) {
      return this.each(function() {
        var $tab = $(this);
        var container = $tab.parents('.panels-ajax-tab:first');

        // If it's already in the process of loading, don't do anything
        if ($(container).data('loading') === true) {
          return true;
        }
        $(container).data('loading', true);

        var target_id = $tab.data('target-id');
        var panel_name = $tab.data('panel-name');
        var entity_context = $tab.data('entity-context');
        var url_enabled = $tab.data('url-enabled');
        var trigger = $tab.data('trigger');

        // Create a few jQuery.Event events for a panel being loaded so that other code may hook into it
        var eventData = {
          tab: this,
          tabObject: $tab,
          containerId: '#panels-ajax-tab-container-' + target_id,
          callback: callback,
          cache: false,
        }
        var preLoadEvent     = $.Event("panelsAjaxTabsPreLoad", eventData);      // We are about to do an ajax request. Will have data.cache = true if cache was used.
        var preBehaviorEvent = $.Event("panelsAjaxTabsPreBehavior", eventData);  // Content is loaded but behaviors have not fired. Not triggered when using cache.
        var loadedEvent      = $.Event("panelsAjaxTabsLoaded", eventData);       // Everything is done. Will have data.cache = true if cache was used.

        // If we have it cached we don't need to do AJAX
        if ($('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-wrap-' + panel_name).length) {
          preLoadEvent.cached = true;
          $(document).trigger(preLoadEvent, preLoadEvent.data);

          $('#panels-ajax-tab-container-' + target_id).children().hide();
          $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-wrap-' + panel_name).show();

          $(container).data('loading', false);

          // Trigger optional callback
          if (callback) {
            callback.call(this, $tab);
          }

          // Trigger jQuery Event
          loadedEvent.cached = true;
          $(document).trigger(loadedEvent);
        }
        else {
          // Do AJAX request.
          $.ajax({
            url: Drupal.settings.basePath + 'panels_ajax_tab/' + panel_name + '/' + entity_context + '/' + url_enabled + '?panels_ajax_tab_trigger=' + trigger + '&panels_ajax_tab_tab=' + panel_name,
            datatype: 'html',
            headers: {"X-Request-Path": document.location.pathname},
            cache: false,
            beforeSend: function(xhr) {
              // Trigger jQuery Event
              $(document).trigger(preLoadEvent);

              // Hide content and show the spinning loading wheel
              $('#panels-ajax-tab-container-' + target_id).children().hide();
              $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-loading').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
              if (typeof console == "object") {
                console.error('Panels Ajax Tab Error: ' + errorThrown);
              }
              $(container).data('loading', false);
            }
          }).done(function(data) {
            $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-loading').hide();
            $('#panels-ajax-tab-container-' + target_id).append('<div class="panels-ajax-tab-wrap-' + panel_name +'">' + data['markup'] + '</div>')

            // Trigger jQuery Event
            $(document).trigger(preBehaviorEvent, preBehaviorEvent.data);

            // Attach drupal behaviors
            Drupal.attachBehaviors($('#panels-ajax-tab-container-' + target_id + ' .panels-ajax-tab-wrap-' + panel_name)[0]);
            $(container).data('loading', false);

            // Trigger optional callback
            if (callback) {
              callback.call(this, $tab);
            }
            // Trigger jQuery Event
            $(document).trigger(loadedEvent);
          })
        }
        $tab.parent().siblings().removeClass('active');
        $tab.parent().addClass('active');
      });
    }
  });
})(jQuery);
;
