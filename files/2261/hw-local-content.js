$(document).ready(function() {

// Modifications for the recommendation service
$("#bottom-topic-feed").remove();
$("#col-2 #topic-feed").remove();
$("#col-2 div#rec-srvc").remove();
$(".variant-indicator span").appendTo("li.current-variant");
$(".title-box").css("padding", "20");
$(".article-nav.article").css("padding-left", "8px");
$(".cb-section.cb-views").css("padding-left", "10px");
$("#article-cb-main").insertAfter("#rec-srvc.relmgr h3");
$("#article-links").insertAfter("#cb-art-pm");
$("#col-2 div .box-widget").insertBefore("#rec-srvc");
$("#rec-srvc").addClass("box-widget");
$("#article-cb-main .cb-contents").wrap("<div class='box-widget-footer'></div>");
$("<div class='content-padding'><div class='related-articles'><ul></ul></div>").insertBefore("#article-cb-main.box-widget-footer");
$("ul.subject-headings").prependTo(".title-box");
$("div#cb-art-svcs").remove();

$("#pageid-content div.title-box").each(function() {
        var OAHead = $(this).find('ul.subject-sub-headings li:first');
        var OASpan = $(this).find('div.open-access-note');
        OASpan.removeClass('open-access-note').addClass('cit-flags').css('display','inline');
        if(OAHead!='undefined' && OASpan!='undefined' )
            OAHead.append(OASpan);
});

$("#pageid-content .cit.openaccess").each(function() {
    var OASpanTitle = $(this).find('span.cit-title');
    var OAImgSpan = $(this).find('.open-access-note');
    if(OASpanTitle!='undefined' && OAImgSpan!='undefined' )
        OASpanTitle.append(OAImgSpan);
});

//author disclosures manipulation
if ($('div.author-disclosure').length) {
	$('ol.contributor-list li').each(function(index) {
		var authID = $(this).attr("id");

	if ($('div.author-disclosure').children().hasClass(authID) ){
       
       $('div.author-disclosure div').filter('.' + authID).wrapInner('<div class="disclosure"></div>').prepend('<p class="author-disclosure-reveal"><a class="view-more" href="#">+</a> Author Disclosures: </p>');
       $(this).children('.name').contents().clone().appendTo('div.author-disclosure div.' + authID +' p.author-disclosure-reveal');
       $(this).children('.contrib-degrees').contents().clone().appendTo('div.author-disclosure div.' + authID +' p.author-disclosure-reveal');
        $("div.author-disclosure .disclosure").hide(); 
   }
});

 $('div.contributors .affiliation-list-reveal').after('<p class="author-disclosure-reveal">| <a class="view-more-popup" href="#">+ Show Full Disclosures</a></p>');
    $('a.view-more-popup').click(function(){

        var baseTag = "";
        if ($("base").length > 0) {
                baseTag = $("base").get(0).outerHTML;
        }

        var authordisclosure =  window.open('','authdisWindow','scrollbars=yes,resize=yes,width=600,height=600');
        var html = '<html><head>' + baseTag + '<title>Author Disclosures</title><script type="text/javascript" src="/shared/js/jquery-min.js"></script><script type="text/javascript" src="/shared/js/hw-shared.js"></script><script type="text/javascript" src="/publisher/js/hw-publisher-content.js"></script><link rel="stylesheet" type="text/css" media="all" href="/shared/css/hw-global.css" /><link rel="stylesheet" type="text/css" media="print" href="/shared/css/hw-print.css" /><link rel="stylesheet" type="text/css" media="all" href="/shared/css/standard-designs/design2/main.css" /><link rel="stylesheet" type="text/css" media="all" href="/publisher/css/hw-publisher-global.css" /><link rel="stylesheet" type="text/css" media="all" href="/local/css/hw-local-global.css" /><link rel="stylesheet" type="text/css" media="all" href="/shared/css/hw-page-content.css" /><link rel="stylesheet" type="text/css" media="all" href="/publisher/css/hw-publisher-page-content.css" /></head><body><div id="author-disclosures-new-win">' + $('<div />').append($('div.author-comment.author-disclosure').clone().contents()).html() + '</div></body></html>';
        authordisclosure.document.open();
        authordisclosure.document.write(html);
        authordisclosure.document.close();

        return false;
});
}  

$(".author-disclosure-reveal").click(function(){
	$(this).toggleClass("active").next().toggle();
	var ViewMore = $(this).children('a.view-more');
        if (($(ViewMore).filter(':first')).text() == '-') {
	        /* hide the affil list */
	        ViewMore.empty().append('+');
        }
        else {
	        ViewMore.empty().append('-');
        }
    
    fixColHeights(1);
        return false;
    });

	// To add seconday view in Primary tabbed view
	$('.cb-views > .secondary-views.cit-views li').each(function(index) {
	    if ($(this).hasClass('label')){
	        $(this).remove();
	    }else if($(this).children('ul').children('li').size() > 0){
	        $(this).remove();
	    }else{
	        if($('.cb-views > .primary-views.cit-views'))
		$('.cb-views > .primary-views.cit-views').append($(this));
	    }
	});

	// To add Retraction and correction in Primary tabbed view
	 $('.title-box div.cb-section.cb-corr-slug li').each(function(index) {
	    var spanText = $(this).find('div span');
	    var anchorElement = $(this).find('div a');
	    if(anchorElement && spanText){
	        anchorElement.prepend((spanText.text() + " "));
	        spanText.remove();
	    }
	    if($('.cb-views > .primary-views.cit-views'))
	         $('.cb-views > .primary-views.cit-views').append($(this).addClass('correction-links'));
	 });

});

$(window).load(function() {
//remove the slug doi
    $('.slug-doi').each(function(){
    	var doi = $(this).attr('title');                       
    	$(this).replaceWith(doi);
    });
// Author Affiliation manipulation
    $(function(){
        $("p:contains('Author Affiliations')").html("<a href='#' class='view-more'>+</a><a href='#' class='text'>Show Affiliations</a>");
    });
    $("ol.affiliation-list").css('display','none').removeClass("hideaffil");
    $(".affiliation-list-reveal").click(function(){
    	$(this).toggleClass("active").siblings(".affiliation-list").toggle();
    	var ViewMore = $(this).children('a.view-more');
            if (($(ViewMore).filter(':first')).text() == '-') {
    	        /* hide the affil list */
    	        ViewMore.empty().append('+');
            }
            else {
    	        ViewMore.empty().append('-');
            }

        fixColHeights(1);
            return false;
        });

 

});
