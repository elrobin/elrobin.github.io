/**
 * "Sign up for the free [Alerts/TOC] email" Module Fix
 * v1.0.1
 * Temporary fix:
 * - z-index
 * - reponsive box
 */
(function() {
  var css = '<style>'+
  '  /* Fluid width & height */'+
  '  @media only screen and (min-width: 1024px) {'+
  '    .pb-house-message .bads_right-rail-alert {'+
  '      width: auto;'+
  '    }'+
  '  }'+
  ''+
  '  .pb-house-message .bads_right-rail-alert {'+
  '    height: auto;'+
  '  }'+
  ''+
  '  /* Remove z-index */'+
  '  .pb-house-message .bads_recent-publish-alert .bads_abs-img-link,'+
  '  .pb-house-message .bads_recent-publish-alert .bads_abs-img,'+
  '  .pb-house-message .bads_right-rail-alert .bads_btn-arrow,'+
  '  .pb-house-message .bads_right-rail-alert .bads_abs-img-link .bads_abs-img {'+
  '    z-index: auto;'+
  '  }'+
  '</style>';
  $(function() {
    $('body').append(css);
  });
})();
