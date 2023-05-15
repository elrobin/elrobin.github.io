	var sectionName = $('meta[name=citation_section]').attr("content");
	var journalName = $('meta[name=citation_journal_title]').attr("content");
	var artID = $('meta[name=citation_mjid]').attr("content");
	gSiteOptions.suppressDockedNav=true; //it's cool, we're going to replace it


$(document).ready(function(){
	// get the rec service ball rolling if we're not on a login or ds page
	if (!$('#pageid-login').length && !$('#pageid-data-supp').length){
	RecService();
	}
	
	//wait for links to finish loading before bundling
	setTimeout("CitingBundle()", 3000);
	
	//backfilling some classes in case the base site-conf didn't get through
	if(!$("#col-2 .cb-views").length){
		$('div.cb-section ol li.notice').parents('div.cb-section').addClass('cb-views');
	}
	
	//clean up classing on service links
	if ($('#col-2 #cb-articleworks').length) {
		$('#col-2 #cb-articleworks li').addClass("icon-link articleworks-link");
	}
	//get rid of collapsibles
	$('#col-2 div.collapsed ol').css('display','block');
	$('#col-2 div.collapsed,#col-2 div.collapsible').removeClass('collapsible collapsed');
	$('#col-2 span.view-more').remove();
	$('#col-2 a.collapse-toggle span').unwrap();
	
	// assuming we have a content block (we're not in a frame)
	if ($('#content-block').length){

		if (!$('.hw-optimized-content').length){//this is native content
			if (!$('#content-block h1.expansion-article-title').length && !$('#pageid-login').length && !$('#pageid-data-supp').length) { //and we're not in an expansion view or a login page or ds)

				// mark end of contributors if it comes after the h1, move slug and views over there
				if ($('#content-block :header + .contributors').length) {
					$('.contributors:first').after('<div class="head-end"></div>');
				}else{//if there are no contributors, put end after h1)
					$('#content-block h1:first').after('<div class="head-end"></div>');
				}
				$('div.head-end').before($('#col-2 div.cb-slug'));
				if($('#col-2 .cb-corr-slug').length){
					$('div.cb-slug').before($('#col-2 .cb-corr-slug'));
				}
				$('div.head-end').after($('#col-2 div.cb-views'));
				//wrap everything at the top of the article in a div
				$('.highwire-journal-article-marker-start').each(function(index) { 
				$(this).nextUntil('.head-end').wrapAll('<div class="title-box"></div>');
				});
				
				// move slug and views and OA note below the new div		
				$('.title-box').after($('#content-block #article-cb-main'));
				$('#content-block .title-box').prepend($('div.open-access-note'));
				
				//match negative margin to page css
				var padding = $('#content-block').css("padding-left");
				$('#content-block  .article-nav,#content-block .title-box,#content-block .cb-views').css({'margin-left': '-' + padding,'padding-left':padding });
				//get rid of headers in col-2 (they're only there in case of optimized content)
				$('#col-2 .cb-section-header').remove();
			} 
			else{//expansion/login/ds cleanup for #col-2
				$('#col-2').prepend('<div class="title-box" />');
				$('#col-2 div.cb-slug').appendTo($('div.title-box'));
				$('div.title-box').before($('#col-2 div.cb-views'));
				$('#pageid-content #col-2').addClass('exp');
			}//end expansion/login/ds test
		}//end native content test
		else{//optimized content cleanup for #col-2
			$('#col-2').prepend('<div class="title-box" />');
			$('#col-2 div.cb-slug').appendTo($('div.title-box'));
			$('div.title-box').before($('#col-2 div.cb-views'));
			var padding = $('#content-block').css("padding-left");
			$('#content-block  .article-nav').css({'margin-left': '-' + padding,'padding-left':padding });
		}

		//move classification
		if ($('#col-2 ul.subject-headings').length) {
			var sectionTitle = $('#col-2 ul.subject-headings li:last-child a').html();
			$('.article-nav .toc-link').append(': ').append($('#col-2 ul.subject-headings li:last-child a'));
			$('.article-nav .toc-link a.tocsection-search').attr('title','search ' + sectionTitle).jTruncate({  
			   length: 20,  
				minTrail: 0,  
				moreText: "",  
			   lessText: "",  
			   ellipsisText: "...",  
				moreAni: "fast",  
				lessAni: 2000  
		});  
		}
		
		//custom version of dockblock, and if we're not putting author links in, make 'em prettier in col-2
		if ($('.hw-optimized-content').length){
		//this is optimized content		
			setupDockBlock(2, 'docked-nav', 'dockblock', OptDockedNavRules);
			DoAuthLinksSidebar();
		}
		else {//this is native content	
			if ($('#pageid-login').length){//if this is login, fix the author links
				DoAuthLinksSidebar();
				$('#col-2 #cb-entrez-links-placeholder').parent('li').addClass('nodata');//this doesn't run on the login page, so it will never resolve anyway.
			}
			else{//zomg we finally get to do it!	
				setupDockBlock(2, 'docked-nav', 'dockblock', customDockedNavRules);
			}
		}
		
		
		//add author links
		if ($('.article .contributors li span.name').length){	//make sure there is at least one name there - restricts to native content only
			$('.article .contributors ol.contributor-list li').each(function(index) {
				var name = $(this).find("span.name").filter(":first");
				var author = name.text();
				$(this).append('<ul class="contrib-related"></ul>');

				name.find("a")
					.appendTo( $(this).find("ul.contrib-related") )
						.text( 'More articles by ' + author)
						.wrap('<li class="contrib-related-highwire" />')
						.attr("target", "_blank")
					;
					
				name.text(author);
				
				$("<li><a></a></li>")
				.find("a")
					.attr("href", "http://scholar.google.com/scholar?q=" + encodeURI('"author:'+ format_author_name(author, 'google-scholar' ) + '"'))
					.addClass("contrib-related-google-scholar")
					.html(author + ' on Google Scholar')
					.attr("target", "_blank")
				.end()
				.appendTo( $(this).find("ul.contrib-related") );
				
				$("<li><a></a></li>")
				.find("a")
					.attr("href", "/external-ref?link_type=AUTHORSEARCH&access_num=" + encodeURI('"'+ format_author_name( author, 'pubmed' ) + '"'))
					.addClass("contrib-related-pubmed")
					.html(author + ' on PubMed')
					.attr("target", "_blank")
				.end()
				.appendTo( $(this).find("ul.contrib-related") );
				//if we have agricola links, make 'em
				if ($('#col-2 #cb-art-agr').length){
					$("<li><a></a></li>")
					.find("a")
						.attr("href", "/external-ref?link_type=AGRICOLA&access_num=" + encodeURI('"'+ format_author_name( author, 'agricola' ) + '"'))
						.addClass("contrib-related-agricola")
						.html(author + ' on Agricola')
						.attr("target", "_blank")
					.end()
					.appendTo( $(this).find("ul.contrib-related") );
					
				}
				
			}
			);
			$('#col-2 #cb-art-agr,.author-link').remove();
		}	
		
		var contributorName = $(".title-box .contributors ol.contributor-list li span.name");
	$("meta[name=citation_author]").each(function(){
        var citation_author = $(this).attr("content");
        var citation_author_orcid = $(this).next("meta[name=citation_author_orcid]").attr("content");
        $(contributorName).each(function(){
            if(($(this).text() == citation_author) && citation_author_orcid){
                if($(this).siblings('ul')){
                    $(this).siblings('ul').append('<li><span class="orcid-author"><a class="orcid-link" href="http://orcid.org/' + citation_author_orcid + '">' + citation_author + ' ORCID Profile</a></span></li>');
                }
            }
        });
    });
		//author name popups
		
		$('#content-block .contributors li span.name').each(function() {
		var contents = $(this).siblings('ul.contrib-related');
		   $(this).qtip({
			show: { delay: 1000,solo: true},
			content: {text:contents}, 
		   position: {
			  at: "top center",
			my: "bottom center", viewport: $(window)
		   },
		   hide: { when: 'inactive', delay: 1000,fixed: true,event: 'unfocus' },    
		   style: {tip: true,classes: "ui-tooltip-hwdkyellow qtip author-qtip" },
			prerender: true
		   });
		});	

	}//end of if content box exists
	
	else{ //we're in a frame
		$('#col-2').addClass('framed');
		$('#col-2 .sidebar-nav').after('<div class="title-box" />');
		$('#col-2 div.cb-slug').appendTo($('div.title-box'));
		$('div.title-box').before($('#col-2 div.cb-views'));
		$('.pdf-direct-link').parent('li').addClass('pdf-direct primary');
		DoAuthLinksSidebar();
		$('div.open-access-note').prependTo($('#col-2 .cb-views'));
		if ($('#col-2 ul.subject-headings').length) {
			var sectionTitle = $('#col-2 ul.subject-headings li:last-child a').html();
			$('.article-nav .toc-link').append(': ').append($('#col-2 ul.subject-headings li:last-child a'));
			$('.article-nav .toc-link a.tocsection-search').attr('title','search ' + sectionTitle).jTruncate({  
			   length: 20,  
				minTrail: 0,  
				moreText: "",  
			   lessText: "",  
			   ellipsisText: "...",  
				moreAni: "fast",  
				lessAni: 2000  
		});  
		}
	}//end of if frame

	// class variant and OA  parent 
	$('.variant-indicator').parent('li').addClass('current-variant primary');
	$('.oa-article').parent('li').addClass('oa-label primary');

	
	//move primary views to new ul
	$('.cb-views ol').each(function(){	
		$(this).addClass("secondary-views cit-views");
		$(this).before('<ul class="cit-views primary-views"></ul>');
		var primary = $(this).prev('ul.cit-views.primary-views');
		(primary).append($(this).children('li.primary'));
	});

	//handle secondary views
	$('.cb-views > .secondary-views').each(function(){
		if ($(this).children().length) {
		$("cb-views .secondary-views li:first-child").addClass("first");
		$(this).prepend('<li class="label">Also available:</li>');
		}
	});

	
	// fix slug doi		
	$('.slug-doi').prepend('http://dx.doi.org/').wrapInner('<a class="crossref-link" />');
	$('.slug-doi .crossref-link').each(function(){
		var doilink = $(this).html();                           
		$(this).attr('href',doilink);
		var breakdoi = makeWrappable(doilink);  
		$(this).html(breakdoi);
	});


	//make floating service bar 
	if (!$('#content-block h1.expansion-article-title').length && !$('#pageid-data-supp').length) { // we're not in an expansion view or ds)
		//make div for service bar
		$('.hw-gen-page').prepend('<div id="article-services-main"><ol class="icons"></ol></div>');
	
		//move links into  service bar
		$('#col-2 li.icon-link,#col-2 div.icon-link').prependTo('div#article-services-main ol.icons');	
		$('#col-2 #cb-articleworks').remove();
		$('#col-2 #cb-art-cat').hide();
		
		//remove any headers and toggles that shouldn't be there,
		$('.icon-link .cb-section-header,.icons .show-more').remove();
			
		//arrange alert links 
		if ($('#article-services-main li.alert-link').length) {
			$('#article-services-main li.alert-link:first').before('<li id="alert-srvc" class="sub-links"><ol></ol></li>');
			$('#article-services-main li.alert-link').each(function(){
				$(this).appendTo('#alert-srvc ol');
			});
			$('.icons #alert-srvc').qtip({content: {
			text: $('.icons #alert-srvc ol'),title: {text: "Alerts",button: "x"}
			},
			show: {delay: 1000,solo: true},
			position: {at: "right center",my: "left center", viewport: $(window)},
			hide: {delay: 10000,fixed: true,inactive: 10000,event: 'unfocus'},
			style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
			prerender: false
			}
			);
		}
		
		//arrange eletter links 
		if ($('#article-services-main #cb-letter-cit').length) {
			$('.eletters-no-responses-published').parent('li').remove();
			var n=$('#cb-letter-cit li').length;
			if (n>1){
			$('#article-services-main #cb-letter-cit').before('<li id="eletter-srvc" class="sub-links"><ol></ol></li>');
			$('#article-services-main #cb-letter-cit li.eletter-link').each(function(){
				$(this).appendTo('#eletter-srvc ol');
			});	
			}
			if (n==1) {
			$('#cb-letter-cit').before('<li id="eletter-srvc" class="icon-link"></li>');
			$('#cb-letter-cit li a').appendTo('#eletter-srvc');
			}
			$('#cb-letter-cit').remove();
		}
		
		//arrange articleworks links 
		if ($('#article-services-main li.articleworks-link').length) {
			$('#article-services-main li.articleworks-link:first').before('<li id="articleworks-srvc" class="sub-links"><ol></ol></li>');
			$('#article-services-main li.articleworks-link').each(function(){
				$(this).appendTo('#articleworks-srvc ol');
			});	
			//articleworks tooltip
			$('.icons #articleworks-srvc').qtip({
				content: {text: $('.icons #articleworks-srvc ol'),title: {text: "",button: "x"}},
				show: {delay: 1000,solo: true},
				position: {at: "right center",my: "left center", viewport: $(window)},
				hide: {delay: 10000,fixed: true,inactive: 10000,event: 'unfocus'},
				style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
				prerender: false
			}
			);
		}
		
		//arrange citation links 
		if ($('#article-services-main li.cite-link').length) {
			var linkCount = $('#col-2 li.cite-link').length;
			if (linkCount == 1) {//if there's only one, we don't need to bundle
				$('#article-services-main li.cite-link').attr('id','cite-srvc');
			}else{//bundle time!
				$('#article-services-main li.cite-link:first').before('<li id="cite-srvc" class="sub-links"><ol></ol></li>');
				$('#article-services-main li.cite-link a').each(function(){
					$(this).attr("target", "_blank");
				});	
				$('#article-services-main li.cite-link').each(function(){
					$(this).appendTo('#cite-srvc ol');
				});	
			//citation tooltip
			$('.icons #cite-srvc').qtip({
				content: {text: $('.icons #cite-srvc ol'),title: {text: "Citation",button: "x"}},
				show: {delay: 1000,solo: true},
				position: {at: "right center",my: "left center", viewport: $(window)},
				hide: {delay: 10000,fixed: true,inactive: 10000,event: 'unfocus'},
				style: {classes: "ui-tooltip-hwyellow qtip citation-qtip",tip: true},
				prerender: false
			}
			);
		}
		}
		
		
		// make titles for icon links
	$('.icons .icon-link a').each(function(){
		if ($(this).attr('title')){
		}else {
		var titleval = $(this).html();
		$(this).attr('title',titleval);
		}
	});	
		
	}//end of if-icon-links-exist
	
	//arrange 'find similar' links 
	if ($('#col-2 .similar-link').length) {
	var simi = ($('#col-2 .similar-link').length);
	if (simi > 1){
		if(!$('#col-2 a.similar-reveal-link').length){
			$('#cb-art-svcs ol:first').append('<li><a class="similar-reveal-link reveal" href="#">More articles like this</a></li>');
		}
		$('#cb-art-svcs').append('<ol id="cb-similar-links"></ol>');
		$('#col-2 .cb-section li.similar-link').each(function(){
			$(this).appendTo('#cb-similar-links');
		});	
		$('#col-2 .cb-section li.similar-link a').each(function(){
			$(this).attr("target", "_blank");
		});	
		if ($('#cb-similar-links .cb-art-gs-rel').length){
			$('.cb-art-gs-rel a').append(' via Google Scholar');
		}	

		//qtip
		$('#cb-art-svcs a.similar-reveal-link').qtip({
		content: {
		text: $('#cb-similar-links'),
		title: {text: "Similar Articles",button: "x"}
		},
		show: {delay: 200,solo: true,event: 'mouseenter click'},
		position: {at: "left center",my: "right center", viewport: $(window)},
		hide: {delay: 5000,fixed: true,inactive: 10000,event: 'unfocus'},
		style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
		prerender:true
		}
		);
	}
	}
	

	

	
		$("#article-links .column a.feed-link").jTruncate({  
		   length: 70,  
			minTrail: 0,  
			moreText: "",  
		   lessText: "",  
		   ellipsisText: "...",  
			moreAni: "fast",  
			lessAni: 2000  
	});  
 
	
// tooltips

	//social bookmarking links
	$('.icons .soc-links').qtip({
	   content: {text:$('.icons .social-bookmark-links'),title: {text: 'Share',button: 'x'}}, 
	   show: { delay: 1000,solo: true},
	   	position: {
			at: "bottom left",
			my: "top left", viewport: $(window)
	},
	  
		hide: { when: 'inactive', delay: 10000,fixed:true,event: 'unfocus' },   
		style: { classes: "ui-tooltip-hwyellow qtip",tip: true}
	});
	
	//service tooltips
	$('h3 a[title]').qtip({
	style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
	show: {delay: 0,solo: false
	},
	hide: {delay: 1000,inactive: 1000,event: 'unfocus'
	},
	position: {at: "top center",my: "bottom center", viewport: $(window)
	},
	prerender: false
}
);
	$('#col-2 h3 span[title]').qtip({
	style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
	show: {delay: 0,solo: false
	},
	hide: {delay: 3000,inactive: 3000,event: 'unfocus'
	},
	position: {
			at: "top center",
			my: "bottom center", viewport: $(window)
	},
	prerender: false
}
);

	$('.icons li.icon-link a').qtip({
	style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
	show: {delay: 1000,solo: true
	},
	hide: {delay: 3000,inactive: 3000,event: 'unfocus'
	},
	position: {
			at: "right center",
			my: "left center", viewport: $(window)
	},
	prerender: false
}
);
	



	//eletters
	$('.icons #eletter-srvc').qtip({
	content: {
		text: $('.icons #eletter-srvc ol'),
		title: {
			text: "",
			button: "x"
		}
	},
	show: {delay: 1000,solo: true
	},
	position: {
		at: "right center",
		my: "left center", viewport: $(window)
	},
	hide: {delay: 10000,fixed: true,inactive: 10000,event: 'unfocus'
	},
	style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
	prerender: false
}
);
	

	// only make toolbar draggable if we're not in a frame
	if ($('#content-block').length){
	//get cookie values for service bar
	var BarY=getCookie("serviceBarY");
	var BarX=getCookie("serviceBarX");
	//use cookies to position bar, make it draggable
	$('#article-services-main')
		 .css("top",BarY+'px')
		 .css("left",BarX+'px')
		 .draggable({ 
			 stop: function (event, ui) {
				 setCookie("serviceBarX", ui.position.left, 100);
				 setCookie("serviceBarY", ui.position.top, 100);
			 }, 
			 drag: function(event, ui) {
			 }
		 });
	}	
	
	//add default h3 that may be removed if we get some interesting content instead
	if ($('#content-block div.abstract-view').length && (!$('#rec-srvc').length)){
	$('#article-cb-main').prepend('<h3 class="cb-top">Related Content</h3>');
    // $('#article-cb-main h3.cb-top').css("background", "#3D54A0");
	}
	
// end document.ready ///////////////////////////////////////////////////////////////////////////////////////////////////////
	});


	//breaking doi text function 
	makeWrappable = function(str){
		if (!str)
			return '';
		return str
					.replace(makeWrappable.SPECIAL_CHARS_REGEX, '$1&#8203;'); // and one after special chars we want to allow breaking after
	};
	makeWrappable.SPECIAL_CHARS_REGEX = /([\.\/])/g; // period, forward slash

	//arrange citing articles
	function CitingBundle(){
		//remove nodatas, see what's left
		$('#col-2 #cb-art-cit li.nodata').remove();
		if ($('#col-2 #cb-art-cit').length) {
			var citecount = ($('#col-2 #cb-art-cit ol li').length);
			if (citecount > 1){
				$('#cb-art-cit ol').addClass("cb-cite-links");
				$('#cb-art-svcs ol:first').append('<li><a class="cite-reveal-link reveal" href="#">More citing articles</a></li>');
				$('#col-2 #cb-art-cit ol li a').each(function(){
					$(this).attr("target", "_blank");
				});	
				//qtip
				$('.cb-section a.cite-reveal-link').qtip({
				content: {
				text: $('.cb-cite-links'),
				title: {text: "Citing Articles",button: "x"}
				},
				show: {delay: 200,solo: true,event: 'mouseenter click'},
				position: {at: "left center",my: "right center", viewport: $(window)},
				hide: {delay: 5000,fixed: true,inactive: 10000,event: 'unfocus'},
				style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
				prerender: true
				}
				);
			}
			else {
			$('#col-2 #cb-art-cit').addClass("cb-cite-links-nobundle");
			}
		}
	}
	
	
		function DoPopAbs(){
		$('#col-2 .rec-srvc .rec-srvc-entry,#footer .rec-srvc .rec-srvc-entry').each(function (){
		var Resmjid=$('span:first',this).attr('title');
		if (! (typeof Resmjid === 'undefined')){//we are going through the proxy service
		var ajaxUrl = '/abstract-proxy/?mjid=' + Resmjid;
		$(this).qtip({
		position:{my: 'right middle',at: 'left middle',viewport: $(window)},
		show: {delay: 200,solo: true},
		hide: {delay: 5000,fixed: true,inactive: 10000,event: 'unfocus'},
		style: {tip: true,classes: "ui-tooltip-hw popabs qtip",width:500},
		content: {title: {text: 'Preview',button: 'x'},
		  text: 'Loading...', // The text to use whilst the AJAX request is loading
		  ajax: {
			 url: ajaxUrl, // URL to the local file
			 success: function(data, status) {
				this.set('content.text', data);
			 },
			 error: function(data, status) {this.set('content.text', '<h1>Sorry.</h1><p>This abstract is not available.</p>');}
		  }
		}
		});
			
		}
		else{//going at the abstract the other way
			var feedUrl=$('a.feed-link',this).attr('href');
			if (! (typeof feedUrl === 'undefined')){
			var feedPathNew=feedUrl.replace(/full/i, "short"); //fix for sites defaulting to full view
			var feedPath=feedPathNew.replace(/https?:\/\/[^\/]+/i, ""); //this may be disposable once we get to prod - it's making feed-links not be cross-domain on dev/beta
			var ajaxUrl=feedPath;
		   $(this).qtip({
			position:{my: 'right middle',at: 'left middle',viewport: $(window)},
			show: {delay: 200,solo: true},
			hide: {delay: 5000,fixed: true,inactive: 10000,event: 'unfocus'},
			style: {tip: true,classes: "ui-tooltip-hw popabs qtip",width:500},
			content: {title: {text: 'Preview',button: 'x'},
			  text: 'Loading...', // The text to use whilst the AJAX request is loading
			  ajax: {
				 url: ajaxUrl, // URL to the local file
				 success: function(data, status) {
 					var htmlFilteredFull = $(data).find('#content-block .article:not(.fulltext-view),#content-block .hw-optimized-content');
                     if (htmlFilteredFull.length){
 					    this.set('content.text', htmlFilteredFull.html());
 				    } else {
 				        this.set('content.text', '<h1>Sorry.</h1><p>This abstract is not available.</p>');
 				        }
 				 },
 				 error: function(data, status) {this.set('content.text', '<h1>Sorry.</h1><p>This abstract is not available.</p>');}
			  }
			}
		});
		}
		}
		});
	}



	
	//arrange author links
	function DoAuthLinksSidebar(){
	if ($('#col-2 .author-link').length) {
		
		$('#cb-art-svcs ol:first').append('<li><a class="auth-reveal-link reveal" href="#">Authors</a></li>');	
		$('#col-2').append('<div id="cb-auth-links"></div>');
		//google scholar
		if ($('#col-2 #cb-art-gs .author-link').length) {
			$('#cb-art-gs h4.cb-section-header span').appendTo($('div#cb-auth-links'));
			$('div#cb-auth-links').append('<ol class="gs-auth"></ol>');
			$('#cb-art-gs li.author-link').each(function(){
				$(this).appendTo('#cb-auth-links .gs-auth');
			});	
		}
		//pubmed
		if ($('#col-2 #cb-art-pm .author-link').length) {
			$('#cb-art-pm h4.cb-section-header span').appendTo($('div#cb-auth-links'));
			$('div#cb-auth-links').append('<ol class="pm-auth"></ol>');
			$('#cb-art-pm li.author-link').each(function(){
				$(this).appendTo('#cb-auth-links .pm-auth');
			});
		}
		//Agricola
		if ($('#col-2 #cb-art-agr').length) {
			$('#cb-art-agr h4.cb-section-header span').appendTo($('div#cb-auth-links'));
			$('#cb-art-agr ol').appendTo($('div#cb-auth-links'));
		}
		$('.cb-section h4.cb-section-header').remove();
		//qtip
		$('.cb-section a.auth-reveal-link').qtip({
		content: {
		text: $('#cb-auth-links'),
		title: {text: "Author Links",button: "x"}
		},
		show: {delay: 1000,solo: true},
		position: {at: "left center",my: "right center", viewport: $(window)},
		hide: {delay: 5000,fixed: true,inactive: 10000,event: 'unfocus'},
		style: {classes: "ui-tooltip-hwyellow qtip",tip: true},
		prerender: true
		}
		);
		}
	}
	
	function ajaxErr(){}
	function ajaxComplete(){}
	
	var customDockedNavRules = [
		'', '$(#article-dyn-nav)',
		'', '<div class="cb-contents"><div id="docked-nav-views"></div><div id="docked-slug"></div>',
		'$(#col-2 #docked-nav-views)', '$(#content-block .cb-views)',
		'$(#col-2 #docked-nav #docked-slug)', '$(#content-block .title-box .cb-slug)'
	];	

	var OptDockedNavRules = [
		'', '$(#article-dyn-nav)',
		'', '<div class="cb-contents"><div id="docked-nav-views"></div><div id="docked-slug"></div>',
		'$(#col-2 #docked-nav-views)', '$(#col-2 .cb-views)',
		'$(#col-2 #docked-nav #docked-slug)', '$(#col-2 .title-box .cb-slug)'
	];
	
	function format_author_name (name, type) {
	regex = /^(\w+)\b.*\b(\w+)$/;
	
	// This returns an array containing three entries:  the whole string, the first name, the last name


	try {
		matches = regex.exec(name);
		
		switch(matches.length) {
			case 0:
				last_name = '';
				first_name = '';
				break;
			case 1:
				last_name = matches[1];
				break;
			default:
				first_name = matches[1];
				last_name  = matches[2];
		}

		switch(type) {
			case 'agricola':
				ret = last_name;
				break;
			case 'google-scholar':
				ret = ( first_name.length ? first_name.slice(0,1) + ' ' : '') + last_name;
				break;
			case 'pubmed':
				ret = last_name + ( first_name.length ?  ' ' + first_name.slice(0,1) : '');
				break;
			default:
				ret = name;
		}
	} catch(err) {
		// if anything goes wrong, just return the name we got.
		ret = name;
	}
	
	return(ret);
	}
	

	//shorten links
	function FeedTruncate(){
	$(".more-topics a.feed-link").jTruncate({moreText: "",lessText: "", length: 50});  
	}
	
	
	//add more button
	function AddMoreButton(){
		var PopNum = $('#article-links .column').length;
		var PopUnit=210;
		var PopWidth = PopNum * PopUnit;
		if ($('#rec-srvc .more').length){
		}
		else{
			if ($('#content-block').length){//not in a frame
				if (PopNum >2) {//there's more than two kinds of content there, meaning that something isn't in a widget already
					$("#rec-srvc").append('<div class="more"><a  class="view-flyout">View More</a></div>');	
					$('#col-2 #rec-srvc .more').qtip({
						show: {solo: true,event: 'mousedown click'},
						content: {text: $('#col-2 #article-links'),title: {
								text: "Related Articles",button: "x"
							}
						},
						position: {at: "left top",my: "bottom right",viewport: $(window)},
						style: {tip: true,classes: "ui-tooltip-hw flyout qtip",width:PopWidth},
						hide: {fixed: true,delay: 3000,event: 'unfocus'},
						prerender: false
					});		
				}
			}
		}
		// set up collapse for related
		$('#rec-srvc h3 a.toggle-collapse').click(function(){
		$('#rec-srvc').toggleClass('inactive');
		$('#rec-srvc .rec-srvc').slideToggle('slow');
		return false; //Prevent the browser jump to the link anchor
		});
	}
	
	// give widget a target
	function AddWidgetTarget(){
			$('#col-2 #article-cb-main').before('<div id="rec-srvc" /><div id="article-links" />');	
			$('#col-2 #article-cb-main h3.cb-top').remove();
	}
	

	function RecGetCiting() {
	var citingA = $("#cb-hw-citing-articles");
	var RecSrvc = $("#rec-srvc");

		var host = document.location.protocol + "//" + document.location.host;
		var ajaxUrl = host + '/widget/public/recommendation-service.cited-by?res-id=' + artID;
		$.ajax({
			url: ajaxUrl,
			dataType: "html",
			type: "GET",
			error: ajaxErr,
			success: addRecCiting,
			complete: ajaxComplete
		});
		
	}


	
	function addRecCiting(xhtmlData) {
		if (xhtmlData) {
		
			var noclass = $(xhtmlData).hasClass('no-rec-srvc-results');
			var content = xhtmlData;
			var title = '<h3>Cited By<a title="Articles citing this article"><span class="iconhelp"></span></a><a href="#" class="toggle-collapse"></a></h3>';
			var hwCitingLabel = getSiteOption('hwCitingLabel', 'View citing article information');
			if (noclass==false){
				if ($('#rec-srvc').length){
					//already have content in main widget, make new widget.  if there isn't already a widget there.
					if (!$('#topic-feed').length){
						$('#col-2').append('<div id="topic-feed" class="more-topics cited-by" />');					
						$('#col-2 #topic-feed').prepend(title).append(xhtmlData).append('<div class="more"><a class="view" href="#cited-by">' + hwCitingLabel + '</a>');
						$('#col-2 #topic-feed div.rec-srvc').addClass("feed-entries");
						FeedTruncate();
						var n = $("#col-2 #topic-feed li.rec-srvc-entry").length;
						//put slider on if there are at least two entries.  Set to 0 for debugging.
						if (n > 1) {
							// set up slider
							$("#topic-feed .feed-entries").after('<button class="prev"></button><button class="next"></button>');
							$("#topic-feed .feed-entries").scrollable({ circular: true });
							$("#topic-feed button").click(function() { 
								$('#col-2 .rec-srvc-feed li a.feed-link').qtip('hide');
							});
						}
					}
				}
				else{//make the main widget
				AddWidgetTarget();
				$("#rec-srvc").append(xhtmlData).addClass("cited-by").prepend(title);
				}
		
			//add it to the popup
			$(content).addClass('column cited').prepend(title).appendTo($("#article-links"));
			$("#article-links").addClass("cited-by");
			AddMoreButton();
			AddCitedLinks();
			//add popup abs, which are different from the other popup.  
			DoPopAbs();
			}
		}
	}





	function AddCitedLinks() {
		var hwCitingLabel = getSiteOption('hwCitingLabel', 'View citing article information');
		if ($('#col-2 #rec-srvc.cited-by').length){	
			$('#col-2 #rec-srvc.cited-by div.rec-srvc').append('<a href="#cited-by" class="jump-link">' + hwCitingLabel + '</a>');
		}
		if ($('#col-2 #article-links.cited-by').length){	
			$('#col-2 #article-links .column.cited').append('<a href="#cited-by" class="jump-link">' + hwCitingLabel + '</a>');
		}	
	}


	function MoveRelated(){
		if ($('.related-list').length){
			var klone = $('.related-list').clone();
			//we only want three entries, max
			klone.find('.cit:gt(2)').remove();
			//move stuff around in the citation
			klone.find('.cit').each(function() {
				$(this).addClass('rec-srvc-entry');
				var link = $(this).find('.cit-extra li.first-item a').attr('href');
				if ($('.cit-title',this).length){
					var title = $('.cit-title',this);
				}
				else{
					var title = $('.cit-first-element.cit-section',this);
					$(title).removeClass('cit-section');
				}
				var date = $(this).find('.cit-print-date');
				var journal = $(this).find('.site-title');
				if ((title).length){
					$(title).wrapInner('<a href="'+link +'" class="feed-link"></a>');
					$(date).addClass('entry-date');
					$(title).before(date).after(journal);
					$(this).find('cite,.cit-auth-list,.cit-extra').remove();
				}			
			});

			if ($('#rec-srvc').length){}
			else{
				AddWidgetTarget()
				klone.appendTo($('#rec-srvc')).addClass('rec-srvc');
				$("#rec-srvc").addClass("relmgr");
				$('#col-2 div#rec-srvc.relmgr').prepend('<h3>Related Articles<a title="Editor\'s Picks"><span class="iconhelp"></span></a><a href="#" class="toggle-collapse"></a></h3>');
				AddMoreButton()
				//if this isn't in a frame, make a link to the list at the bottom of the article
				if ($('#content-block .related-list').length){
					var n = $("#content-block .related-list .cit").length;
						//put a link in if there are more than three entries.  Set to 0 for debugging.
						if (n > 3) {
							var hwRelatedLabel = getSiteOption('hwRelatedLabel', 'View related articles');
							$('#col-2 .related-list').after('<a class="jump-link" href="#related">' + hwRelatedLabel + '</a>');
						}
				}
			// if it's in a frame, get rid of the carcass of the relmgr box
			$('#col-2 #rel-related-article').remove();
			}
			//add to popup
			$(klone).clone().addClass('column related').prepend('<h3>Related To <a title="Related Articles"><span class="iconhelp"></span></a></h3>').appendTo($("#article-links"));
			$("#article-links").addClass('relmgr');
			//add popup abs, which are different from the other popup.  
			DoPopAbs();
		}
	}

	function RecGetSection() {
	if (!(sectionName == 'undefined')){
			var section = encodeURIComponent(sectionName);
			var host = document.location.protocol + "//" + document.location.host;
			var ajaxUrl = host + '/widget/public/recommendation-service.section?section=' + section;
			$.ajax({
				url: ajaxUrl,
				dataType: "html",
				type: "GET",
				error: ajaxErr,
				success: addRecSection,
				complete: ajaxComplete
				
			});	
	}
	}
			

	function addRecSection(xhtmlData) {
		if (xhtmlData) {
			var noclass = $(xhtmlData).hasClass('no-rec-srvc-results');
			var content = xhtmlData;
			var link = $('a.tocsection-search').attr('href');
			if (noclass==false){
				$('#col-2').append('<div id="section-hold" style="display:none;" />');
				$('#col-2 #section-hold').append(xhtmlData);
				$("#col-2 #section-hold .rec-srvc-entry").each(function(){
					var Resmjid=$('span:first',this).attr('title');
					if (! (typeof Resmjid === 'undefined')){//we have a mjid
						if(artID === Resmjid) {
						$(this).remove();
						}
					}
				});
			
				var sectCount = $('#col-2 #section-hold .rec-srvc-entry').length;
				if (sectCount > 0){//there are still entries after removing this article, if applicable
				var title = $('#col-2 #section-hold h3');
				var titleText = $('#col-2 #section-hold h3 span');
				$(titleText).text($(titleText).text().replace(RegExp(journalName,"i"), '').toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
}));


				$(title).prependTo($('#section-hold'));
				
				var sectContents = $('#section-hold').html();
					if($('#rec-srvc').length){
						//already have content in main widget, make new widget if there's nothing else there
						if (!$('#topic-feed').length){
							$('#article-cb-main').after('<div id="topic-feed" class="more-topics" />');
							$('#col-2 #topic-feed').append(sectContents).append('<div class="more"><a href="'+link+'" class="view">View More</a></div>');
							$('#col-2 #topic-feed div.rec-srvc').addClass("feed-entries");
							FeedTruncate();
							var n = $("#col-2 #topic-feed li.rec-srvc-entry").length;
							//put slider on if there are at least two entries.  Set to 0 for debugging.
							if (n > 1) {
								// set up slider
								$("#topic-feed .feed-entries").after('<button class="prev"></button><button class="next"></button>');
								$("#topic-feed .feed-entries").scrollable({ circular: true });
								$("#topic-feed button").click(function() { 
									$('#col-2 .rec-srvc-feed li a.feed-link').qtip('hide');
								});
							}
						}
					}
					else{
						AddWidgetTarget();
						var titleCollapse = '<a href="#" class="toggle-collapse"></a>';
						$("#rec-srvc").append(sectContents).addClass("section").append('<a href="'+link+'" class="jump-link">View More</a>');
						
						$('#col-2 #rec-srvc h3').append(titleCollapse);
						AddMoreButton();
					}
					

					
					$("li.rec-srvc-entry a.feed-link").each(function(){
						var rawtext = $(this).text();
						var linktext = $.trim(rawtext);
						var fixedtext = (linktext).replace(RegExp(/\[.+\]$/),'');
						$(this).text(fixedtext);
					});
					
					
					//add to popup
					$(content).addClass('column section').prepend(title).appendTo($("#article-links"));
					$("#article-links").addClass("section");
					//add popup abs, which are different from the other popup.  
					DoPopAbs();
					$('#section-hold').remove()
				}
			}
		}
	}
			
	function RecGetColl() {
	var collection
	var i = 0;
	var collCount = $('meta[name=citation_collection_id]').length;
	$('meta[name=citation_collection_id]').each(function(){	
		if (!($('meta[name=citation_collection_id]') == 'undefined')){
			var collId = $(this).attr("content");
			collection = encodeURIComponent(collId);
			var host = document.location.protocol + "//" + document.location.host;
			var ajaxUrl = host + '/widget/public/recommendation-service.collection?coll=' + collection;
			$.ajax({
				url: ajaxUrl,
				dataType: "html",
				type: "GET",
				error: ajaxErr,
				success: addRecColl,
				complete: ajaxComplete,
				async:  false				
			});	
			i++;
			if(i == collCount) {
			RecSetupColl();		
			}			
	}
	});
		
	}
	
	function addRecColl(xhtmlData, status, xhr) {
	if (xhtmlData) {
		var noclass = $(xhtmlData).hasClass('no-rec-srvc-results');
		if (noclass==false){
			if(!$('#bottom-topic-feed').length){
				$('#col-2').append('<div id="bottom-topic-feed" class="more-topics"><div class="feed-tabs panes"></div></div>');
				$('#bottom-topic-feed').hide()//give it some privacy while it gets ready
				}
			$(xhtmlData).addClass('feed-entries').appendTo('#bottom-topic-feed .feed-tabs');

						
		}
	}
	}
	

	function RecSetupColl(){
	
		//move tabbed collections display to bottom of page if this is abstract
		if ($('#content-block div.abstract-view').length){
		$('#bottom-topic-feed').prepend('<ul class="tabs"></ul>');
			$('#bottom-topic-feed a.tab').each(function(){
				$(this).appendTo('ul.tabs').wrap('<li/>');
				//fix titles - remove name of journal because DUH we're there right now
				$(this).text($(this).text().replace(RegExp(journalName,"i"), ''));
				$(this).text($(this).text().replace('Subject Collection:', '') );
			});
			$('<li><span class="topics-title">Topics:</span></li>').prependTo($('ul.tabs'));
			$("#bottom-topic-feed .panes").append('<button class="prev"></button><button class="next"></button>');
			$("#bottom-topic-feed .feed-entries").scrollable({ circular: true });
		$('#footer').prepend($('#bottom-topic-feed'));
		$('#bottom-topic-feed ul.tabs').tabs('div.panes > div.feed-entries');	
		}
		//if not, leave it in col-2
		else{
			
			$('<h2 class="topics-title">Topics:</h2>').prependTo('#col-2 #bottom-topic-feed');
			$('#bottom-topic-feed a.tab').each(function(){
					$(this).wrap('<h3 class="accordion-tab"></h3>');
					//fix titles - remove name of journal because DUH we're there right now
					$(this).text($(this).text().replace(RegExp(journalName,"i"), ''));
					$(this).text($(this).text().replace('Subject Collection:', '') );
				});
			$('#bottom-topic-feed .feed-entries').each(function(){
					var link = $(this).find('.accordion-tab');
					var mommy=$(this);
					$(link).insertBefore(mommy);
				});
			$("#bottom-topic-feed .panes" ).accordion();
			$("#bottom-topic-feed .panes h3" ).prepend('<button class="prev"></button><button class="next"></button>');
			$("#bottom-topic-feed .feed-entries").scrollable({ circular: true });
			$("#col-2 #bottom-topic-feed .feed-entries .more-results-entry.cloned").css("display", "none");			
		}
		$("#bottom-topic-feed .feed-link").each(function(){
					var rawtext = $(this).text();
					var linktext = $.trim(rawtext);
					var fixedtext = (linktext).replace(RegExp(/\[.+\]$/),'');
					$(this).text(fixedtext);
		});
		$('#bottom-topic-feed span.coll-name').each(function(){
				//fix titles - remove name of journal because DUH we're there right now
				$(this).text($(this).text().replace(RegExp(journalName,"i"), ''));
				$(this).text($(this).text().replace('Subject Collection:', '') );
			});
		$('#bottom-topic-feed a.feed-return-link').each(function(){

				$(this).attr('href','/cgi/collection');
			});
		$('#bottom-topic-feed').fadeIn("fast") //oh, right it should be visible, huh?
		fixColHeights(0);
		//add popup abs, which are different from the other popup.  
		DoPopAbs();
		} 
		
	
	
		function RecService(){
		
		MoveRelated();
		RecGetCiting();
		setTimeout("RecGetSection()", 25);
		RecGetColl();		
		fixColHeights(0);
	}
