/*
 * Behavior for the automatic file upload
 */

(function ($) {
  Drupal.behaviors.autoUpload = {
    attach: function(context, settings) {
      $('.form-item .form-submit[value=' + Drupal.t('Upload') + ']', context).hide();
      $('.form-item .form-file', context).change(function() {
        $parent = $(this).closest('.form-item');

        //setTimeout to allow for validation
        //would prefer an event, but there isn't one
        setTimeout(function() {
          if(!$('.error', $parent).length) {
            $('.form-submit[value=' + Drupal.t('Upload') + ']', $parent).mousedown();
          }
        }, 100);
      });
    }
  };
})(jQuery);
;
