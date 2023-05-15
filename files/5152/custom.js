// JavaScript Document
 $(document).ready(function() {
 
 $('table.data').each(function(index, value){
	$(this).children().children(':odd').addClass('odd');
})

$('.widget_mycategoryorder').prepend('<a name="issueList" id="issueList"></a><div id="IssuesTip">View Research Trends Previous Issues</div>')							

if(window.location == 'http://www.researchtrends.com/#issueList'){;
$.scrollTo("#issueList", 800, {onAfter:function(){
	$('#IssuesTip').fadeIn();
	} });

}

$('#dropdown_mycategoryorder-3 option:first').text('Select Issue');
							
$('.rss-box a').supersleight();

//$('.widget_mycategoryorder a').removeAttr("title");

							
function goToByScroll(id){
     	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
//$('#issueListLink').click(function() {
$('ul#menu-primary-navigation li.menu-item-1982 a').click(function() {
		if(window.location == 'http://www.researchtrends.com/events-calendar/'){;
		}else{;
	$.scrollTo("#issueList", 800, {onAfter:function(){
	$('#IssuesTip').fadeIn();
	} });
	return false;
	};
});
$('#mycategoryorder-3 select').click(function() {
	$('#IssuesTip').fadeOut();
})
$('#IssuesTip').live('click', function() {
	$('#IssuesTip').fadeOut();
})





$('#centercol .single-post table').each(function(index) {
	$(this).children('tbody').children('tr:even').addClass('odd');
})

$('.cat_desc p:first').addClass('h3');

$('.wpcf7-text').focus(function() {
  $(this).addClass('focus').fadeIn();
});
$('.wpcf7-text').blur(function() {
  $(this).removeClass('focus');
});
$('.wpcf7-form textarea').focus(function() {
  $(this).addClass('focus').fadeIn();
});
$('.wpcf7-form textarea').blur(function() {
  $(this).removeClass('focus');
});
/*$('#centercol .post-meta .post-meta-key').remove();
$('#centercol .post-meta li').each(function(index) {
		var testValue =  jQuery.trim($(this).text());
		if (testValue.length<4) {
			$(this).remove();
		} 
    //console.log(jQuery.trim($(this).text()));
  });*/

$('#rightcol .widget_mycategoryorder li.cat-item a').mouseover(function() {
  $(this).parent().addClass('active');
});
$('#rightcol .widget_mycategoryorder li.cat-item a').mouseout(function() {
  $(this).parent().removeClass('active');
});

$('#buttFriend').click(function() {
  $('#sendtofriendform').fadeIn();
  return false;
});
if($('#issuePDF').text()){;
var issuePDF = $('#issuePDF').text();
$('.textwidget a.pdfDownload').attr('href', issuePDF);
};

$('#polls-widget-3 h2').after('<p class="instructions">(1 = lowest interest and 5 = highest interest)</p>')

/**** Track case study document clicks ****/
$('a.pdfDownload').click(function() {
	var pdfhref = $(this).attr('href');
		//if(typeof pageTracker !== 'undefined') {
			_gaq.push(['_trackEvent', 'Downloads', 'PDF', pdfhref]);
	//}
});



$('#rightcol .event:first').addClass('current');

$('#flipCalendar .event:first').show();

$('#flipCalendarNext').click(function(){
	$('#flipCalendar .event:visible').hide().next().show();
	var index = $('#flipCalendar .event').index($('#flipCalendar .event:visible'));
	showButtons(index);
	$('#rightcol .event').removeClass('current');
	$('#rightcol .event:eq('+index+')').addClass('current');
	return false;
})



$('#flipCalendarPrevious').click(function(){
	$('#flipCalendar .event:visible').hide().prev().show();
	var index = $('#flipCalendar .event').index($('#flipCalendar .event:visible'));
	showButtons(index)
	$('#rightcol .event').removeClass('current');
	$('#rightcol .event:eq('+index+')').addClass('current');
	return false;
})




$('#rightcol .event').click(function(){
var index = $('#rightcol .event').index(this);
$('#flipCalendar .event:eq('+index+')').show();
$('#flipCalendar .event:not(:eq('+index+'))').hide();
$('#rightcol .event').removeClass('current');
$(this).addClass('current');
showButtons(index)
return false;
})



function showButtons(index){
	var eventsTotal = $('#rightcol .event').length -1;
	if(index == 0){
		$('#flipCalendarPrevious').hide();
	}else{;
		$('#flipCalendarPrevious').show();
	}
	if(index == eventsTotal){
		$('#flipCalendarNext').hide();
	}else{;
		$('#flipCalendarNext').show();
	}
	console.log(eventsTotal);
}





$('div.editorsMessage').each(function(index) {
	$(this).children('p:not(:first)').hide();
	$(this).children('p:first').append('<span class="readmore">Read more...</span>')
})


$('#centercol span.readmore').click(function(){
	$(this).parent('p').parent('div.editorsMessage').children('p').show();
	$(this).remove();
});

//ADD CLASS TO EMAIL LINKS
$('a:contains("@")').addClass('emailLink');

//OPEN EXTERNAL LINKS IN A NEW WINDOW
$('a:not(.emailLink, .subscribe)').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});

/*$('p.external a').click(function(event) {
	window.open(this.href, '_blank');
})*/


})