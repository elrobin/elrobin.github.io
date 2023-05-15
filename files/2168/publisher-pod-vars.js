// Sheridan POD config
//var POD_server = "https://staging.www.cp.sheridan.com";
var POD_server = "https://www.cp.sheridan.com";
var POD_publisher_code = "duke";
var POD_provider_code = "HWP";

gSiteOptions.SheridanPoDCBText = "<span class='print-on-demand-link'>Purchase Copy of Issue</span>";
gSiteOptions.SheridanPoDIssueText = "<span class='print-on-demand-link'>Purchase Copy of Issue</span>";

$(document).ready(function() {
	setTimeout("suppressPoDLinks()", 200);
});

function suppressPoDLinks() {
	var issueDateString = $('#pageid-toc #toc-header cite .toc-top-pub-date').text();
	if (issueDateString) {
		var issuePubDate = Number(issueDateString.replace(/[^\d]/g, ''));
		if (issuePubDate < 2010 && $('#pageid-toc .pod-link')) {
			$('#pageid-toc .pod-link').hide();
		}
	}
	
	var citationDateString = $('meta[name="citation_date"]').attr("content");
	if (citationDateString) {
		var citationPubDate = Number(citationDateString.substr(6, 4));
		if (citationPubDate < 2010 && $('#pageid-content .pod-link')) {
			$('#pageid-content .pod-link').hide();
		}
	}
}
