(function($) {
	$(document).ready(function () {
		$("body:not('.js-enabled')").addClass("js-enabled");
		$(".export a.citation").click(function() {
			$(this).next('.export-sub').toggle('slow');
			return false;
		});
		$(".export a.references").click(function() {
			$(this).next('.export-sub').toggle('slow');
			return false;
		});
	});
}) (jQuery);