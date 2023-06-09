(function ($) {
  $.fn.highwireEqualHeights = function() {
    if (Drupal.behaviors.hasOwnProperty('omegaEqualHeights')) {
      $(window).trigger('resize.omegaequalheights');
    }
  };
})(jQuery);
;
/*
  By default Drupal only does a shallow merge of Drupal.settings, causing many settings in Drupal.settings.highwire to be overwriten
  when a panels-ajax-tab is loaded. This code does it's best to mitigate that by storing a copy of Drupal.settings.highwire just before
  a tab is loaded and then doing a shallow merge on Drupal.settings.highwire after the content is loaded but before events are triggered.
  See JCORE-1791
*/
(function($) {
  var hwsettings = {}; 
  $(document).on("panelsAjaxTabsPreLoad", function(e) {
  	if (typeof(Drupal.settings.highwire) != "undefined") {
  	  hwsettings = Drupal.settings.highwire;
  	}
  });
  $(document).on("panelsAjaxTabsPreBehavior", function(e) {
    $.extend(Drupal.settings.highwire, hwsettings, Drupal.settings.highwire);
  });
})(jQuery);;
(function ($) {
  Drupal.behaviors.jnl_sci_styles = {
    attach: function(context, settings) {
      $("ul.toc-section:contains('Content Does Not Exist in Drupal')").hide();
      $(".pane-science-home-page-archive-tab .issue-archive-date-browser ul.years li a").each(function(index) {
         var a_href = $(this).attr('href');
         $(this).attr('href', '/content/by/year' + a_href);
      });
    }
  }
})(jQuery);
;
