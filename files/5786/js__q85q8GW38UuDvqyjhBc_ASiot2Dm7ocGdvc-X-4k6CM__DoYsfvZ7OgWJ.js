(function(window, $) {
  window.AAAS = window.AAAS || {};

  window.AAAS.social = {
    /**
     * Bootstrap AddThis functionality for custom social share icons.
     * @param context: jQuery selection of content to apply functionality.
     * @param settings: Unused. Only added to match pattern from Drupal.attachBehavior
     */
    attach: function(context, settings) {
      if (window.addthis) {
        window.addthis.user.ready(function(data) {
          setupAddThis(window.addthis, context);
        });
      }
    }
  };

  var supportedSocialNetworks = ['facebook', 'twitter', 'linkedin', 'reddit', 'googleplus', 'pinterest','mailto'];

  /**
   * Initialize AddThis social counts on page.
   * @param addthis - Addthis global object. See http://www.addthis.com/academy/addthis-data-api/
   * @param context - DOM element that setup is focused on in page. Useful for AJAX-d content.
   */
  function setupAddThis(addthis, context) {
    var userServices = addthis.user.services().keys(addthis.DESC);
    var displayedServices = ['facebook', 'twitter'];

    userServices.forEach(function(service) {
      if (supportedSocialNetworks.indexOf(service) !== -1
        && displayedServices.indexOf(service) === -1
        && displayedServices.length < 5) {
        displayedServices.push(service);
      }
    });

    if (displayedServices.length < 5) {
      var additionalServices = ['linkedin','reddit','mailto'];
      additionalServices.forEach(function(service) {
        if (displayedServices.length < 5 && displayedServices.indexOf(service) === -1) {
          displayedServices.push(service);
        }
      });
    }

    $('.socialshares', context).each(function(i) {
      var $el = $(this),
          socialUrl = $el.data('social-url'),
          socialTitle = $el.data('social-title'),
          socialDescription = $el.data('social-description'),
          socialPubId = $el.data('social-pub-id');

      displayedServices.forEach(function(service) {
        var shareUrl = 'http://api.addthis.com/oexchange/0.8/forward/' + service + '/offer?url=' + socialUrl + '&title=' + encodeURIComponent(socialTitle) + '&description=' + encodeURIComponent(socialDescription) + '&pubid=' + socialPubId;
        $el.append(getShareIconMarkup(service, shareUrl));
      });

      addthis.sharecounters.getShareCounts(
        {
          service: ['facebook', 'reddit', 'linkedin'],
          countUrl: socialUrl
        },
        function(data) {
          data.forEach(function(serviceInfo) {
            var service = serviceInfo.service,
              count = serviceInfo.count,
              $countTarget = $el.find('.social__icon--' + service + ' + .social__count');

            if ($.isNumeric(count) && count > 0) {
              $countTarget
                .removeClass('social__count--empty')
                .html(formatCount(count));
            }
          });
        }
      );
    });
  }

  /**
   * Generate an individual share icon based on the service tag and share url.
   * @param service
   * @param url
   * @returns {*|HTMLElement}
   */
  function getShareIconMarkup(service, url) {
    var shareUrl = url;
    var $wrapper = $('<li>');
    var $link = $('<a><i class="fa ' + getFontAwesomeClass(service) + ' fa-lg"></i></a>')
      .attr({
        'href': shareUrl,
        'rel': 'nofollow',
        'class': 'social__icon social__icon--' + service
      });

    $link.find('i').after('<span class="sr-only">Share on ' + service + '</span>');

    $link.click(function(e) {
      e.stopPropagation();
      window.open($(this).attr('href'), 'sharewindow', "width=420,height=350,resizable,scrollbars=yes,status=1");
      return false;
    });

    $wrapper.append($($link));
    $wrapper.append('<span class="social__count social__count--empty">&nbsp;</span>');

    return $wrapper;
  }

  /**
   * Translate Addthis Service tag to font-awesome class name.
   * @param service
   * @returns {string}
   */
  function getFontAwesomeClass(service) {
    if(service =='pinterest'){
      var otherSocialIcon='fa-pinterest-p';
    }else if(service=='mailto'){
      var otherSocialIcon='fa-envelope';
    }else{
      var otherSocialIcon='fa-' + service;
    }

    return otherSocialIcon;
  }

  /**
   * Returns a count as a shortened version (10253 -> 10K)
   * @param count - Input count
   * @returns {string} - Formatted count
   */
  function formatCount(count) {
    var formatted = '&nbsp;';

    if ($.isNumeric(count)) {
      formatted = count;

      if (count > 1000000000000) {
        formatted = Math.round(count / 1000000000000) + 'T';
      }
      else if (count > 1000000000) {
        formatted = Math.round(count / 1000000000) + 'B';
      }
      else if (count > 1000000) {
        formatted = Math.round(count / 1000000) + 'M';
      }
      else if (count > 1000) {
        formatted = Math.round(count / 1000) + 'K';
      }
      else if (count <= 0) {
        formatted = '&nbsp;';
      }
    }

    return formatted;
  }

})(window, jQuery);
;/**/
(function ($) {
  Drupal.behaviors.aaasSocial = {
    attach: function (context, settings) {
      AAAS.social.attach(context, settings);
    }
  };
}(jQuery));
;/**/
