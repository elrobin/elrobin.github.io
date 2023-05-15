var priority_instance;
var priority_value;

// Add to init funcs (run in head-ads.js)
// This is a hook for future use of LabJS
if (typeof __init__ != 'undefined') __init__.push({
	name: "article.js",
	func: function(){
		jQuery("body").addClass("force-scrollbars");

		jQuery("#export-menu").click(
			function() {
				jQuery("#export").toggle();
			}
		);

		jQuery("#export div").addClass("export-item");
		jQuery("#export a").addClass("tipsy-hint-e");
		jQuery("#article-manage a").addClass("nohilight").tipsy({gravity:"s"});

		jQuery("#toread").stars({
			captionEl: jQuery("#toread_descr"),
			callback: function(ui, type, value){
				updatePriority(value);
			},
			cancelTitle: "I've already read it",
			cancelValue: 0,
			cancelShow: true,
			showTitles: false
		});
		priority_instance = jQuery("#toread").data("stars");
		priority_value = priority_instance ? priority_instance.options.value : null; // Get current Value
		init_clexpand();
		fixFileLinkouts();
		SPRINGER.load();
		DEEPDYVE.load();
		AQ.load();

		// code to select citation on click (for cut and paste);
		var e = jQuery("#citation dl:first");
		if (e.length) {
			e.wrap("<span id='the_citation' />");
		} else {
			jQuery("#citation-plain span:first").wrap("<span id='the_citation' />");
		}
		jQuery("#the_citation").click(function() {
			// TODO: test jQuery(this).selectText();
			selectText("the_citation");
		});


		jQuery("a.fancybox").click(function(){
			var e = jQuery(this);
			var m = e.metadata();
			var index = 0;
			if (m && m.idx) {
				index = m.idx;
			}
			fancyPreview(jQuery("#fancyBoxPreview"), index);
			return false;
		});

		setupArticleTags();
		setupTags();

		/****** CiTO ******/

		setupCito();

		jQuery(".cito").click(function(){
			// TODO: test jQuery(this).selectText();
			selectText(this);
		});

		var cito = getCitoCookie();
		if (cito) {
			jQuery("#citoTargetTitle").text(cito.title).attr("href",cito.href);

			if (cito.article_id == ARTICLE.article_id) {
				jQuery("#selectCitoDiv").hide();
				jQuery("#citoIsTarget").show();
			} else {
				jQuery("#selectCitoDiv").show();
				jQuery("#citoSetAsTarget").show();
			}
		} else {
			jQuery("#citoSetAsTarget").show();
		}

		jQuery(".edit").each(
			function() {
				var elem = jQuery(this);
				var data = elem.metadata();
				var submitData = {article_id : data.article_id, username: data.username, userfile_id: data.userfile_id};
				elem.editable("/personal_pdf_rename", {
						tooltip    : "Doubleclick to edit...",
						event      : "dblclick",
						style      : "inherit",
						method	   : "POST",
						submitdata : submitData,
						callback   : function(value) {
							var elem = jQuery(this);
							elem.closest("div").find("a")
								.attr("href","/pdf/user/"+data.username+"/article/"+data.article_id+"/"+value);
						}
				});
				elem.tipsy({gravity: 'n'});
			}
		);

		if (getUIOption('userfile_keep_name', false)) {
			jQuery("#keep_name").attr("checked",true);
		}
		jQuery("#keep_name").click(function() {
			setUIOption('userfile_keep_name', jQuery(this).is(":checked"));
		});

		/*jQuery("#citation-plain").hover(
			function() {jQuery("#show-citation").show()},
			function() {jQuery("#show-citation").hide()}
		);*/

		// Funny (jQuery?) Bug.   The buttons/selected aren't rendered
		// if the div is hidden

		var params = getQueryStringParams();
		jQuery("#citation-div").hide();

		if (params["skipurl"] && params["skipurl"][0] == "true") {
			jQuery("#citation-show-url").attr("checked",true);
		}


		if (params["citation_format"] || params["skipurl"]) {
			showCitation();
		}


		jQuery("#show-citation").click(function() {
			showCitation();
		});


		jQuery(".pdf-annotate").click(
			function() {
				ANNOTATOR.annotate(jQuery(this));
			}
		);

		/* now in the plain citation format directly
		if (ARTICLE && ARTICLE.doi) {
			jQuery("#citation-doi").text("doi:"+ARTICLE.doi).show();
		}
		*/

		if (ARTICLE.doi || ARTICLE.pmid) {
			openurlResolver(GLOBAL.openurl_location, GLOBAL.ipaddr, ARTICLE.doi, ARTICLE.pmid);
		}

		if (GLOBAL.is_superuser) {
			var keywordAdvertisers = [
				{ name : "BOB", adwords : ["dna","element","protein"]},
				{ name : "FRED", adwords : ["dna", "biologically active"]}
			];

			var text = jQuery("#yahooform input[name='context']").val();

			var f = new Adverts(text, keywordAdvertisers,[]);
			var a = f.getChoice();
			if (a) jQuery("#ad_top").text(a);
		}

		logPageView();

		// This causes an error in jq 1.9.1
		// "Uncaught Error: cannot call methods on button prior to initialization; attempted to call method 'widget'"
		// I (FGG) tried deferring with a setTimeout() but doesn't help.
		// Apart from that, the buttonset is still created and seems to work.
		try {
			jQuery(".buttonset").buttonset();
		} catch (e) {}

		jQuery("#attachment_public_dialog").dialog({
			bgiframe: true,
			autoOpen: false,
			modal: true,
			width: "450px",
			position: ["center", "center"],
			resizable: false,
			draggable: false,
			minHeight: 0,
			buttons: {
				'Close': function() {
					jQuery(this).dialog("close");
				},
				' OK  ': function() {
					var data = jQuery(this).data("data");
					LOG(data);

					jQuery.getJSON("/personal_pdf_set_attachment_public_json",
						{"userfile_id":data.userfile_id, "public": "true"},
						function(r){
							LOG(r);
							if (r && r.status && r.status == "ok") {
								data.which.text("[public]");
								data.which.data("state","public");
							}
						}
					);


					jQuery(this).dialog("close");
				}
			}
		});

		jQuery(".userfile").hoverIntent(
			{
				over: function() {
					jQuery(this).find(".userfile_action *").css("opacity","1.0");
				},
				out: function() {
					jQuery(this).find(".userfile_action *").css("opacity","0.0");
				},
				timeout:100
			}
		);

		var loadCitoDetails = _.once(function(){
			jQuery(".cito-link").each(function() {
				var $this = jQuery(this);
				var meta = $this.metadata();
				var article_id = meta["article_id"];
				var username = meta["username"];
				var details = $this.find(".cito-details");
				details.text("Loading "+article_id);
				details.load("/article-popup.adp?src_username="+username+"&article_id="+article_id+" .main", function() {
					details.find(".item-abstract").show();
					details.find(".item-icons").hide();
					details.find(".article-item-attachment-preview").hide();
				});
			});
		});


		var citoDetailsExpanded = false;

		jQuery("#expand-cito").toggle(
			function() {
				jQuery(this).text("[Collapse]");
				jQuery(".cito-details").show();
				jQuery(".mini-popup").hide();
				jQuery(".cito-link").css("display","block");
				loadCitoDetails();
				citoDetailsExpanded = true;
			},
			function() {
				jQuery(this).text("[Expand]");
				jQuery(".cito-details").hide();
				jQuery(".mini-popup").show();
				jQuery(".cito-link").css("display","inline");
				citoDetailsExpanded = false;
			}
		);

		var loadCitoGraph = _.once(function() {
			var params = {
				root         : ARTICLE.article_id,
				src_username : ARTICLE.username,
				direction    : jQuery("#citograph_direction").val(),
				depth        : jQuery("#citograph_depth").val()
			};
			var href = "/go_cito_graph?"+ jQuery.param(params);

			jQuery("#citograph")
				.prepend("<iframe  width='100%' height='400px' frameborder='0' style='border:none' src='"+href+"'></iframe>");
			jQuery("#citograph_new").attr("href",href);
		});

		jQuery("#expand-cito-graph").click(function() {
				var $this = jQuery(this);
				var state = $this.data("toggle");
				state = (typeof state === "undefined") ? true : state;
				if (state) {
					jQuery(this).text("[Hide Graph]");
					loadCitoGraph();
					jQuery("#citograph").show();
					if (citoDetailsExpanded) {
						var p = jQuery("#citograph").position();
						jQuery(window).scrollTop(p.top);
					}
				} else {
					jQuery(this).text("[Graph]");
					jQuery("#citograph").hide();
				}
				$this.data("toggle",!state);
		});

		var d = getUIOption('citograph_direction','both');

		jQuery("#citograph_depth option[value="+getUIOption('citograph_depth',10)+"]").attr("selected", true);
		jQuery("#citograph_direction option[value="+d+"]").attr("selected", true);

		if (d != "both") {
			jQuery("#citograph_direction_warning").show();
		}

		//jQuery("#showtex").effect("pulsate",{ times:2 }, 1000);
		setTimeout(function() {
			jQuery("#showtex button")
				.animate({ color: "red" }, 300)
				.animate({ color: "#555" }, 2000);
		}, 1000);

		// Dead?
		// initJournalFire();
	}
});

function updateCitoGraph() {
	var href;
	var params = {
		root         : ARTICLE.article_id,
		src_username : ARTICLE.username,
		direction    : jQuery("#citograph_direction").val(),
		depth        : jQuery("#citograph_depth").val()
	};

	setUIOption("citograph_depth", params.depth);
	setUIOption("citograph_direction", params.direction);

	href = "/go_cito_graph?"+ jQuery.param(params);
	LOG(href);
	jQuery("#citograph iframe").attr("src",href);
	jQuery("#citograph_new").attr("href",href);

	jQuery("#citograph_direction_warning").toggle(params.direction != "both");

}


function logPageView() {
	// Log all for testing/dev

	// not a user article - abort
	if (!ARTICLE.user_article_id) {
		return;
	}

	var upsert = 0;
	if (ARTICLE.user_article_id && !ARTICLE.is_owner) {
		upsert = 1;
	}

	LOG("logPageView:"+upsert);

	jQuery.getJSON("/logview::user_article?user_article_id="+
		ARTICLE.user_article_id+"&upsert="+upsert+"&callback=?", function(data){
			if (data && data.count) {
				LOG("Page View Count: "+data.count);
				jQuery("#pageviewscount").text(data.count);
				if (ARTICLE.is_owner) {
					jQuery("#pageviewsmine").show();
				}
				jQuery("#pageviews").show();
			}
		});
}


var citationLoaded = false;
function showCitation () {
	jQuery("#citation-div").toggle();
	if (citationLoaded) {
		return;
	}
	jQuery("#citation").text("Loading");

	var skipurl="false";
	if (jQuery("#citation-show-url:checked").length > 0) {
		skipurl="true";
	}

	jQuery("#citation").load("/go_citation?article_id="+
		ARTICLE.article_id+"&username="+
		ARTICLE.username+"&group_id="+
		ARTICLE.group_id+"&skipurl="+
		skipurl+" #citation span",
		function() {
			var h = jQuery("#citation span").html();
			var b = location.protocol+"//"+location.host+location.pathname;
			var t = "<div id='cul_citation_"+ARTICLE.article_id+"' class='cul_citation'>\n";
			t = t + "\t<a href='"+b+"'><img class='cul_citation_icon' src='http://"+location.host+"/static/img/cul_icon.gif' /></a>\n";
			t = t + "\t<span class='cul_citation_text'>"+h +"</span>\n";
			t = t + "</div>";
			jQuery("#html_citation").text(t);
		});

	jQuery("#show_cit_html").click(function() {
		jQuery("#html_citation").show();
		jQuery(this).hide();
		selectText("html_citation");
	});

	if (GLOBAL && GLOBAL.is_gold_user) {
		jQuery.getJSON("/pref_get.json",
			{name:'csl_citation_formats'},
			function(data){
				if (data && data.status && data.status == "ok") {
					data = eval(data.value);
					if (!jQuery.isArray(data)) {
						return;
					}
					var selection = jQuery("#citation_format");
					jQuery.each(data, function(i, val) {
						var d = jQuery("<option />");
						var optval = "cp_"+val.value;
						d.attr("value", optval);
						d.text("Gold: "+val.label);
						if (ARTICLE && ARTICLE.citation_format && ARTICLE.citation_format==optval) {
							d.attr("selected",true);
						}

						LOG(d);
						selection.append(d);
					});
					// re-render
					//selection.selectmenu({maxHeight: 150, style: 'popup'});
				}
			});

	}


	citationLoaded = true;
}


function reloadCitation() {
	jQuery('#citation-form').submit();
}

function clearSelection (id) {
	var e = jQuery(id);
	var t = e.val();
	e.val("");
	e.val(t+ " ");
	e.focus();
}


/*******************************************************************************
 * CiTO
 */
function setCitoCookie() {
	var cito = {
		thatArticle: {
			article_id : ARTICLE.article_id,
			title: jQuery("#article_title").text(),
			href: location.pathname
		}
	};
	jQuery.cookie("cito", jQuery.toJSON(cito), { path: '/', domain: GLOBAL.cookieDomain} );
	jQuery("#selectCitoDiv").hide();
	jQuery("#citoSetAsTarget").hide();
	jQuery("#citoIsTarget").show();

}


function getCitoCookie() {
	var cookie = jQuery.cookie("cito");
	if (!cookie) {
		return null;
	}
	try {
		return jQuery.secureEvalJSON(cookie).thatArticle;
	} catch (err) {
		ERROR(err);
		return null;
	}
}


var citoTags = {
	"agreesWith":	"isAgreedWithBy",
	"cites":	"isCitedBy",
	"citesAsAuthority":	"isCitedAsAuthorityBy",
	"citesAsDataSource":	"isCitedByAsDataSource",
	"citesAsEvidence":	"isCitedByAsEvidence",
	"citesAsMetadataDocument":	"isCitedAsMetadataDocumentBy",
	"citesAsRelated":	"isCitedByAsRelated",
	"citesAsSourceDocument":	"isCitedAsSourceDocumentBy",
	"citesForInformation":	"isCitedForInformationBy",
	"confirms":	"isConfirmedBy",
	"corrects":	"isCorrectedBy",
	"credits":	"isCreditedBy",
	"critiques":	"isCritiquedBy",
	"definesMethodUsedBy":	"usesMethodIn",
	"describesDataUsedBy":	"usesDataFrom",
	"disagreesWith":	"isDisagreedWithBy",
	"discusses":	"isDiscussedBy",
	"disputes":	"isDisputedBy",
	"extends":	"isExtendedBy",
	"givesBackgroundTo":	"obtainsBackgroundFrom",
	"givesSupportTo":	"obtainsSupportFrom",
	"includesExcerptFrom":	"providesExcerptFor",
	"isAgreedWithBy":	"agreesWith",
	"isCitedAsAuthorityBy":	"citesAsAuthority",
	"isCitedAsMetadataDocumentBy":	"citesAsMetadataDocument",
	"isCitedAsSourceDocumentBy":	"citesAsSourceDocument",
	"isCitedBy":	"cites",
	"isCitedByAsDataSource":	"citesAsDataSource",
	"isCitedByAsEvidence":	"citesAsEvidence",
	"isCitedByAsRelated":	"citesAsRelated",
	"isCitedForInformationBy":	"citesForInformation",
	"isConfirmedBy":	"confirms",
	"isCorrectedBy":	"corrects",
	"isCreditedBy":	"credits",
	"isCritiquedBy":	"critiques",
	"isDisagreedWithBy":	"disagreesWith",
	"isDiscussedBy":	"discusses",
	"isDisputedBy":	"disputes",
	"isExtendedBy":	"extends",
	"isParodiedBy":	"parodies",
	"isPlagiarizedBy":	"plagiarizes",
	"isQualifiedBy":	"qualifies",
	"isRefutedBy":	"refutes",
	"isReviewedBy":	"reviews",
	"isRidiculedBy":	"ridicules",
	"isSupportedBy":	"supports",
	"isUpdatedBy":	"updates",
	"obtainsBackgroundFrom":	"givesBackgroundTo",
	"obtainsSupportFrom":	"givesSupportTo",
	"parodies":	"isParodiedBy",
	"plagiarizes":	"isPlagiarizedBy",
	"providesExcerptFor":	"includesExcerptFrom",
	"providesQuotationFor":	"quotesFrom",
	"qualifies":	"isQualifiedBy",
	"quotesFrom":	"providesQuotationFor",
	"refutes":	"isRefutedBy",
	"reviews":	"isReviewedBy",
	"ridicules":	"isRidiculedBy",
	"sharesAuthorsWith":	"sharesAuthorsWith",
	"supports":	"isSupportedBy",
	"updates":	"isUpdatedBy",
	"usesDataFrom":	"describesDataUsedBy",
	"usesMethodIn":	"definesMethodUsedBy"
};

function addCitoTag(doReverse) {
	var cito = getCitoCookie();
	if (!cito) {
		alert("Error - no CiTO target set");
		return;
	}

	var val = jQuery("#citoSelection").val();
	if (val=="--") {
		return;
	}

	var params = {
			"that_article_id":      cito.article_id,
			"this_article_id":      ARTICLE.article_id,
			"cito_code":            val,
			"from" :                location.pathname
	};

	//alert(jQuery.toJSON(params));
	//return;

	jQuery.post('/add_cito.json.do', params,
		function(data) {
			if (data && data.status && data.status=="ok") {
				jQuery("#cito-tag-updated").show().fadeOut(2000);
				location.reload();
			}
		}
	);
}


function setupCito() {

	var qTipOpts = {
		content: {
			text: null
		},
		show: {
			event: "mouseover"
		},
		hide: {
			fixed: true,
			delay: 150,
			event: "mouseout"
		},
		position: {
			adjust: {
				y: 4
			},
			at: "bottom left",
			my: "top left",
			viewport: jQuery(window)
		},
		style: {
			classes: 'ui-tooltip-blue'
		}
	};


	jQuery("#citesList a").each(function() {
		var $this = jQuery(this);
		var m = $this.metadata();
		$this.after("<a class='plain mini-popup {article_id:"+m.article_id+" }'>"+
			"<img style='padding-left:2px; ' src='"+GLOBAL.imgRoot+"/arrow-collapsed.gif' /></a>"+
			"<span class='cito-delete {article_id:"+m.article_id+", cito:\""+m.cito+"\"}'>[x]</span>&nbsp;");
	});

	jQuery(document).on('click', ".cito-delete", function()  {
		var $this = jQuery(this);
		var m = $this.metadata();
		//alert("this="+ARTICLE.article_id+" that="+m.article_id+" cito="+m.cito);
		jQuery.post("/delete_cito.do",
			{
				this_article_id : ARTICLE.article_id,
				that_article_id : m.article_id,
				cito_code	: m.cito,
				from		: location.href
			}
		).complete(
			function() {
				location.reload();
			}
		);
	});


	jQuery(document).on('mouseover', ".mini-popup", function()  {
		var e = jQuery(this);
		if (!e.data('init'))  {
			e.data('init', true);
			var m = e.metadata();
			var absDiv = jQuery("<div>Please Wait...</div>");
			qTipOpts.content = absDiv;
			absDiv.load("/article-popup.adp?article_id="+m.article_id+"&src_username="+ARTICLE.username+" .main", function() {
				absDiv.find(".item-abstract").show();
				absDiv.find(".posted-by").hide();
				absDiv.find(".item-icons").hide();
				qTipOpts.content.text = absDiv;
				e.qtip(qTipOpts);
				e.trigger('mouseover');
			});
		}
	});
}

function updatePriority(value) {
	jQuery("#to_read_load").show();
	var img = GLOBAL.imgRoot;
	if (value == 0) {
		img = img+"/tick.png";
	} else {
		img = img + "/star"+value+".png";
	}
	jQuery.getJSON("/editpriority.json?user_article_id="+ARTICLE.user_article_id+"&article_id="+ARTICLE.article_id+"&to_read="+value+"&callback=?",
		function(data) {
			jQuery("#to_read_load").hide();
			if (data && data.status && data.status=="ok") {
				var e = jQuery("#to_read_stars");
				e.attr("src",img);
				e.removeAttr("title");
				e.unbind("hover mouseover mouseout");
				priority_value = value;
				clexpand_collapse("priority");
			} else {
				priority_instance.select(priority_value);
			}
		}
	);
}


function updatePrivacy() {
	var privacy = jQuery("#privacy-body input:checked").val();
	jQuery("#privacy-load").show();
	jQuery.getJSON("/editprivacy.json?user_article_id="+ARTICLE.user_article_id+"&privacy="+privacy+"&callback=?",
		function(data) {
			jQuery("#privacy-load").hide();
			if (data && data.status && data.status=="ok") {
				var e = jQuery("#privacy-status");
				if (privacy == "G") {
					e.text("public");
				} else {
					e.text("private");
				}
				clexpand_collapse("privacy");
			}
		}
	);
}


function updateOwnpub() {
	var is_own_pub = jQuery("#is_own_pub:checked").val();
	jQuery("#ownpub-load").show();
	jQuery.getJSON("/editownpub.json?user_article_id="+ARTICLE.user_article_id+"&is_own_pub="+is_own_pub+"&callback=?",
		function(data) {
			jQuery("#ownpub-load").hide();
			if (data && data.status && data.status=="ok") {
				var e = jQuery("#ownpub-status");
				e.text("This is "+ ((is_own_pub == "true") ? "" : "not ")+"one of your publications");
				clexpand_collapse("ownpub");
			}
		}
	);
}


/**
 * BibTeX/RIS
 */
function getBibtex(username,group_id,article_id,change) {

	var link = jQuery("#bibtex_link");

	if (!change && link.data("loaded")) {
		clexpand('combo');
		return;
	}

	//incl_amazon 1 clean_urls 1 skip_urls 0 smart_wrap 2

	var opt_p = {
		username:username,
		group_id:group_id,
		article_id:article_id,
		smart_wrap:2,
		clean_urls:1,
		incl_amazon:1
	};

	var opts = jQuery("#bibtex_opts");


	if (opts.length) {
		var e = opts.find("input[name='clean_urls']:checked");
		if (!e.length) {
			opt_p["clean_urls"]=0;
		}
		var e = opts.find("input[name='incl_amazon']:checked");
		if (!e.length) {
			opt_p["incl_amazon"]=0;
		}
		opt_p["smart_wrap"] = opts.find("select[name='smart_wrap']").val();
	}

	link.data("loaded",true);

	jQuery("#combo-body").load("/combo_rec.adp?"+jQuery.param(opt_p),
		function (responseText, textStatus, XMLHttpRequest) {
			var title = "Click to select the Record - press ctrl-C to copy to clipboard";
			jQuery("#bibtex span:first").click(
				function () {
					selectText("bibtex_rec");
				}
			).attr("title", title)
				.tipsy({gravity:"s"});

			jQuery("#ris span:first").click(
				function () {
					selectText("ris_rec");
				}
			).attr("title", title)
				.tipsy({gravity:"s"});

			jQuery("#bibtex_opts > *").change(
				function(){getBibtex(username,group_id,article_id,true)}
			);
			if (!change) {
				clexpand('combo');
			}
		}
	);
}


/**
 * Restore expandable sections to last view (via cookies)
 */
function init_clexpand() {
	clexpand_to_cookie("vnotes");
	clexpand_to_cookie("posters");
	clexpand_to_cookie("tags");
}

function toggleInlineLayer(whichLayer) {
	jQuery("#"+whichLayer).toggle();
}

/**
 * History (article-posts)
 */

var history_is_loaded = false;
var history_open = false;

function toggle_history() {
	if (!history_is_loaded) {
		history_is_loaded = true;
		jQuery("#history").html("<img src='"+GLOBAL.staticRoot+"/img/ajax-loader-white.gif' />");
		jQuery("#history").load("/article-posts/" + ARTICLE.article_id +" #post_history",
			function(t) {
				var s = jQuery("#history").text();
				s=s.replace(/\s+/g,"");
				if (s.length == 0) {
					jQuery("#history").html("<p><b>This article hasn't been bookmarked yet.</b></p>");
				}
				jQuery("#history .tipsy-hint-s").tipsy({gravity:"s"});
			});
	}
	history_open = !history_open;
	var state = (history_open) ? "open" : "collapsed";
	jQuery('#history-arrow').attr("src", GLOBAL.staticRoot+"/img/arrow-"+state+".gif");
	jQuery("#history").toggle(history_open);
}

/**
 * DeepDyve
 */
var DEEPDYVE = {
	load: function (doi) {
		if (!doi) {
			doi = ARTICLE.doi;
		}
		if (doi != "") {
			var doi = doi.replace(/^http:\/\/[^\/]+\//, "");
			var url = "http://www.deepdyve.com/rental-link?docId="+encodeURIComponent(doi)+
				"&fieldName=journal_doi&format=jsonp&key=citeulike&callback=?";
			jQuery.getJSON(url,
				function(data) {
					if (data && data.status && data.status == 'ok') {
						jQuery("#deepdyve").show();
						var e = jQuery("#dd_href");
						//e.attr("href","/click?cat=DEEPDYVE&url="+encodeURIComponent(data.url));
						e.attr("href",data.url);
						if (data.free=="yes") {
							e.attr("title","View this article for free at DeepDyve");
							e.html("<b>View at DeepDyve</b>");
						}
					}
				}
			);
		}
	}
};

/*******************************************************************************
 * SpringerImages
 */

var SPRINGER = {
	imagePreview : function () {
		var width = 300;
		xOffset = -Math.floor(width/3);
		yOffset = -30;

		jQuery("a.preview").hover(
			function(e){
				this.t = this.title;
				this.title = "";
				var width = "300px";
				var xpos = (e.pageX + xOffset);
				var c = (this.t != "") ? "<br/>" + this.t : "";
				var s = "<p id='preview'><span class='img'><img src='"+ this.rel +"' alt='Image preview' /></span>"+ c +"</p>";
				jQuery("body").append(s);
				// alert(s + " " + jQuery("#preview").length);
				jQuery("#preview img")
					.css("width", width+"px")
					.css("height", "120px");

				jQuery("#preview")
					.css("top", (e.pageY - yOffset) + "px")
					.css("left", xpos + "px")
					.css("z-index","1000")
					.css("width", width)
					.fadeIn("fast");
			},
			function(){
				this.title = this.t;
				jQuery("#preview").remove();
			}
		);
		jQuery("a.preview").mousemove(function(e){
			var xpos = (e.pageX + xOffset);
			jQuery("#preview")
				.css("top", (e.pageY - yOffset) + "px")
				.css("left", xpos + "px");
		});
	},
	load: function () {
		if (ARTICLE.is_springerimages != "1" || ARTICLE.doi == "") {
			return;
		}

		var url = "http://www.springerimages.com/getimages.json?doi="+ARTICLE.doi+"&callback=?";
		jQuery.getJSON(url,
			function(data) {
				var target = jQuery("#springerimages");
				if (data.length) {
					target.show();
					target.html("");
					jQuery("#springerimages_header").show();
				}
				for (i=0; i<data.length; i++) {
					var clone = jQuery("#springerimages_dummy > div").clone(true);
					if (!clone.length) {
						// alert("Oops - no clone");
						break;
					}
					//clone.find("a").attr("href",data[i].uri);
					clone.find("a").attr("href",data[i].uri);
					clone.find(".thumb-img").attr("src",data[i].thumb);
					clone.find("a.preview").attr("title",data[i].caption);
					clone.find("a.preview").attr("rel",data[i].thumb);
					clone.find(".thumbbot a").text(data[i].caption);
					//clone.find("img").attr("title", data[i].caption);

					target.append(clone);
				}
				SPRINGER.imagePreview();
			}
		);
	}
}

/**
 * Disable "file:" links - not launchable anyway
 */
function fixFileLinkouts() {
	jQuery(".linkout").each(
		function() {
			var e = jQuery(this);
			var href = e.attr("href");
			if (/^file:/.exec(href)) {
				e.after("<span>"+href+"</span>").css("color","red");
				e.remove();
			}
			e.click(function() {
				track_click(this);
				return false;
			});
		}
	);
}


/*******************************************************************************
 * find similar: extract "terms" using Yahoo API and pump those back into our search.
 */

//
// Convert search string so it's safe for lucene, i.e., convert all special
// chars to space
//
function _luceneSafe(s) {
	if (s) {
		return s.replace(/[\+\-\&\|\!\(\)\{\}\[\]\^\"\~\*\?\:\\]/ig, " ");
	} else {
		return "";
	}

}

function genSimilarSearch() {
	var data = jQuery("#yahooform").serialize();
	jQuery.getJSON("http://search.yahooapis.com/ContentAnalysisService/V1/termExtraction?"+data+"&callback=?",
		function(res) {
			doSimilarSearch(res)
		}
	);
}

//
// Find similar articles.
// res is the object returned by Yahoo, containg all the "terms"
// extracted from the title + abstract
// (Not quite sure why the article title is passed in explicitly again)
//
function doSimilarSearch(res) {
	if (res && res.ResultSet && res.ResultSet.Result) {
		var m = res.ResultSet.Result;
		var s = "";
		for (i=0; i<m.length; i++) {
			s = s + "\""+_luceneSafe(m[i])+"\" ";
		}
		var title = jQuery("#article_title").text()
		var text = _luceneSafe(title)+" "+s;
		jQuery("#search_text").text(text);
		jQuery("#find-similar-form").submit();
	}
}


/*******************************************************************************
 * TAGS
 */


// Tag suggestion using Yahoo API, based on title + abstract
function suggestTags() {
	var data = jQuery("#yahooform").serialize();
	jQuery.getJSON("http://search.yahooapis.com/ContentAnalysisService/V1/termExtraction?"+data+"&callback=?",
		function(res) {
			showTags(res)
		}
	);
}


function showTags(res) {
	var tags = [];
	if (res && res.ResultSet && res.ResultSet.Result) {
		var m = res.ResultSet.Result;
		for (i=0; i<m.length; i++) {
			var t = m[i].toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_-]/g, "");
			tags.push({tag:t, count:0, suggested: 1});
		}
	}
	jQuery("#suggestTagsButton").remove();
	setupTags(tags);
}


function setupArticleTags() {
	var e = jQuery("#articleTagList");
	if (ARTICLE_TAGS) {
		for (var i=0; i<ARTICLE_TAGS.length; i++) {
			var t =ARTICLE_TAGS[i];
			var s=jQuery("<a>"+t+"</a>");

			s.attr("href",ARTICLE.url_stem+"/tag/"+t).addClass(t.charAt(0)=='*'?"ptag":"tag");
			//  hide CiTO tags
			/*
			if (t.match(/^cito--/)) {
				s.addClass("citotag");
			}
			*/

			e.append(s).append(" ");
		}
	}
}



function setupTags(extraTags) {
		var theTags = GLOBAL.tags;

		if (!theTags) {
			return;
		}

		var hideTags = false
		if (theTags.length > 1000) {
			hideTags = true;
			jQuery("#toomanytags").show();
		}

		if (extraTags) {
			for (var i=0; i<extraTags.length; i++) {
				theTags.push(extraTags[i]);
			}
		}

		theTags.sort(function(a,b) {
			var x = a.tag, y=b.tag;
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});

		var tagsList = jQuery("#tagList");

		tagsList.empty();

		var suggestedTags = null;
		if (hideTags && extraTags) {
			suggestedTags = extraTags;
		} else {
			suggestedTags = theTags;
		}

		jQuery("#tags_id").unbind().tagInput({
			tags:theTags,
			sortBy:"frequency",
			suggestedTags:suggestedTags,
			tagSeparator:" ",
			autoFilter:true,
			autoStart:false,
			suggestedTagsPlaceHolder:tagsList,
			boldify:true,
			freqKey:"count"

		});
		if (!hideTags) {
			jQuery(".tagInputSuggestedTags").css("width","80%");
		}
}

function addtag() {
	var text= jQuery(this).text();
	var old = jQuery("#tags_id").val();
	jQuery("#tags_id").val(old+" "+text);
}

/*******************************************************************************
 * PDFs
 */

function deletepdf(username,article_id,userfile_id) {
	if (confirm("Sure you want to delete your copy of the PDF?")) {
		document.location.href = "/personal_pdf_delete?username=" + username +
			"&article_id=" + article_id +
			"&userfile_id=" + userfile_id;
	}
}


function delete_review(review_id) {
	if (confirm("Sure you want to delete this review?")) {
		document.getElementById("hidden_review_id").value=""+review_id;
		document.getElementById("delete_review").submit();
	}
}


function deletenote(note_id) {
	if (confirm("Sure you want to delete this note?")) {
		document.location.href="/deletenote?note_id="+note_id+"&from="+ARTICLE.url_stem+"/article/"+ARTICLE.article_id;
	}
}


function deletearticle(user_article_id) {
	if (confirm("Sure you want to delete this article and all the notes associated with it from this library?")) {
		document.location.href="/delete?user_article_id="+user_article_id+"&from="+encodeURIComponent(ARTICLE.url_stem);
	}
	return false;
}


function jsmath_popup() {
	var win = window.open('','jsmath_popup','width=600, height=400, toolbar=no, location=no');
	var form = document.getElementById("showtexform");
	win.focus();
	form.submit();
}


function blog_this() {
	jQuery("#blog_form").submit();
	return true;
}

// Check for any "for:xxx" tags and flag that they cannotbe used in groups.
function check_for_tags() {
	if (ARTICLE.group_id == "") {
		return true;
	}
	var tags = jQuery("#tags_id").val();
	if (/for:/i.exec(tags)) {
		jQuery("#no_for_tags").show();
		return false;
	}
	return true;
}


/*<SHARING>********************************************************************/

var shareInit = false;
function toggleShare() {
	jQuery('#share').toggle();
	if (shareInit) {
		return;
	}
	initTwitter();
}

function send_msg() {
	var data = jQuery("#conns_frm").serialize();
	jQuery.getJSON("/conn::send_article_notification?"+data,
		function(json){
			jQuery('#status').text("Messages sent");
			jQuery('#share').slideUp(3000,
				function() {
					jQuery('#status').text("");
					jQuery('#article_connections input:checked').attr('disabled', true);
				}
			);
		}
	);
}

/* Twitter */
var twitterInited = false;
function initTwitter() {
	if (twitterInited) {
		return;
	}
	twitterInited = true;

	var s=document.createElement("script");
	s.src=document.location.protocol + '//platform.twitter.com/widgets.js';
	document.body.appendChild(s);
	// wait for widget.js to load
	(function a(){
		if(typeof twttr=='undefined'){
			window.setTimeout(a,200);
		} else {
			jQuery("#tweetulike").show();
		}
	})();
}

/*<END SHARING>*****************************************************************/

function toggleLikes() {
	jQuery('#likes-div').toggle();
}


function setLikes(adj) {

	if (adj) {
		likesCount += adj;
	}

	if (likesCount < 0) {
		likeCount =0;
	}

	var t = "";
	if (likesCount == 0) {
		t = "This copy of the article hasn't been liked by anyone yet";
	} else if (likesCount == 1) {
		t = "This copy of the article has been liked by 1 user";
	} else {
		t = "This copy of the article has been liked by "+likesCount+" users";
	}
	jQuery("#likes_count").text(likesCount);
	jQuery("#likes_text").text(t);
	jQuery("#likes_button").attr("title", t);

}


function article_like(img) {
	var src=img.src;
	var state = false;
	if (src.match(/unlike.png/)) {
		state = false;
		img.src = GLOBAL.imgRoot+"/like.png";
		img.title="Like this article";
		setLikes(-1);
	} else {
		state = true;
		img.src = GLOBAL.imgRoot+"/unlike.png";
		img.title="Remove your like";
		setLikes(+1);
	}

	var params = {
		state : state,
		owner_user_id : ARTICLE.user_id,
		article_id : ARTICLE.article_id
	};

	jQuery.getJSON(	"/article_like", params);

}

/*******************************************************************************
*	openurl.ac.uk return XML only, but we need JSONP.  Yahoo have a service
*	to do the translation.
*/

function openurlResolverYQL(openurl_ip, ip,doi,pmid) {
	//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fopenurl.ac.uk%2Flookup%2Fip%3A129.215.233.64%22%3B&format=json&callback=cbfunc

	//var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fopenurl.ac.uk%2Flookup%2Fip%3A"+ip+%22%3B&format=json&callback=?"

	var p = jQuery.param({
		q : 'select * from xml where url="http://openurl.ac.uk/lookup/ip:'+ip+'";',
		format: "json"
	});

	//alert("http://query.yahooapis.com/v1/public/yql?"+p);

	var rft_id;
	if (doi && doi != "") {
		rft_id = "info:doi/"+doi;
	} else if (pmid && pmid != "") {
		rft_id = "info:pmid/"+pmid;
	} else {
		return;
	}
	var url = "http://query.yahooapis.com/v1/public/yql?"+p +"&callback=?";
	try {
		jQuery.getJSON(url)
			.success(function(data) {
				if (data && data.query && data.query.count && data.query.count == 1) {
					var d = data.query.results.lookup;
					if (d["success"]=="true") {
						var rname = d["name"];
						var resolver = d["resolver"];
						var button = d["button"];
						//alert(rname + "; "+resolver+"; "+button);
						jQuery("#openurlResolverName").text(rname);
						jQuery("#openurlResolverImage").attr("src",button);
						jQuery("#openurlResolverLink").attr("href",resolver+"?"+jQuery.param({"rft_id":rft_id, "rft.genre":"article"}));
						jQuery("#openurlResolver").show();
					}
				}
			})
			.error(function(x, type, ex) {
				LOG("Error contacting "+url+"; "+x.status+" "+x.statusText+"; "+type);
			});

	} catch (err) {
			LOG("Error contacting "+url+"; "+err);
	}


}

/*******************************************************************************
*
*/
function saveOpenurlChoice(ip) {
	jQuery.getJSON("/pref_set.json",{name:'openurl_location',value:ip});

	jQuery("#openurlchoice").hide("slow");
}

/*******************************************************************************
*
*/
function getOpenurlShortcut(ip) {
	if (ip == "cam") {
		return "131.111.8.46";
	} else if (ip == "ed") {
		return "129.215.233.64";
	}
	return ip;
}

/*******************************************************************************
* Proxy the request via CiteULike to get over SOP restrictions.
* On live this is handled directly by nginx, though there's a fallback
* handler in nsd.
*/
function openurlResolverProxy(openurl_ip, ip,doi,pmid) {

	var rft_id;
	if (doi && doi != "") {
		rft_id = "info:doi/"+doi;
	} else if (pmid && pmid != "") {
		rft_id = "info:pmid/"+pmid;
	}

	var q = qs_param();
	// ip is ignored in nginx /openurl (it determines it itself)
	// the "testing" /xopenurl uses the passed through value
	var url = "/openurl/lookup/ip:"+ip;
	if (q["openurl"]) {
		url = "/xopenurl/lookup/ip:"+getOpenurlShortcut(q["openurl"]);
	} else {
		if (openurl_ip) {
			url = "/xopenurl/lookup/ip:"+getOpenurlShortcut(openurl_ip);
		}
	}


	try {
		jQuery.get(url,"xml")
			.success(function(data) {
				var xml = jQuery(data);
				if (xml.find("success").text() != "true") {
					return;
				}
				jQuery("#openurlResolverName").text(xml.find("name").text());
				jQuery("#openurlResolverImage").attr("src",xml.find("button").text());
				jQuery("#openurlResolverLink").attr("href",xml.find("resolver").text()+"?"+jQuery.param({"rft_id":rft_id, "rft.genre":"article"}));
				jQuery("#openurlResolver").show();
			})
			.error(function(x, type, ex) {
				LOG("Error contacting "+url+"; "+x.status+" "+x.statusText+"; "+type);
			})
			.complete(function() {
				LOG("COMPLETE: "+url);
			});

	} catch (err) {
			LOG("Error contacting "+url+"; "+err);
	}


}

var openurlResolver = openurlResolverProxy;

/*=<ADVERTS>==================================================================*/

/* expects
	var keywordAdvertisers = [
		{ name : "BOB", adwords : {"lorem":1, "tempus":1, "nunc":1}},
		{ name : "FRED", adwords : {"Morbi auctor":1, "tempus":1}}
	];
*/

function Adverts(text,keywordAdvertisers, staticAdvertisers) {

	this.text = text.toLowerCase().replace(/^[a-z0-9\- ]/g," ");

	this.keywordAdvertisers = keywordAdvertisers;
	this.staticAdvertisers = staticAdvertisers;

	this.getRandomChoice = function () {
		var totalWeight = 0;
		for (var i in keywordAdvertisers) {
			var c = this.keywordAdvertisers[i].count;
			if (c) totalWeight += c
		}
		for (var i in staticAdvertisers) {
			var c = this.staticAdvertisers[i].count;
			if (c) totalWeight += c
		}

		if (totalWeight==0) return null;

		var weightArray = new Array();

		LOG(keywordAdvertisers);
		LOG(staticAdvertisers);

		for (var current = 0; current<keywordAdvertisers.length; current++){
			for (i=0; i<this.keywordAdvertisers[current].count; i++) {
				weightArray[weightArray.length]=this.keywordAdvertisers[current].name;
			}
		}

		for (var current = 0; current<staticAdvertisers.length; current++){
			for (i=0; i<this.staticAdvertisers[current].count; i++) {
				weightArray[weightArray.length]=this.staticAdvertisers[current].name;
			}
		}

		return weightArray[Math.floor(Math.random()*totalWeight)];
	};

	this.getChoice = function() {
		for (var i in this.keywordAdvertisers) {
			var advertiser = this.keywordAdvertisers[i];
			advertiser.count=0;
			for (var i in advertiser.adwords) {
				var w = advertiser.adwords[i].toLowerCase();
				var r = new RegExp("\\b"+w+"\\b");
				if (this.text.search(r) >= 0) {
					advertiser.count++;
				}
			}
		}
		return this.getRandomChoice();
	}
}

/*******************************************************************************
*
*/
function makeAttachmentPublic(elem, article_id,userfile_id) {
	var $this = jQuery(elem);
	var state = ($this.data("state") == "public");
	var el = jQuery('#attachment_public_dialog');
	state = !state;
	if (state) {
		el.data("data",{which:$this, article_id:article_id,userfile_id:userfile_id, state:state});
		el.dialog('open');
	} else {
		jQuery.getJSON("/personal_pdf_set_attachment_public_json",
			{"userfile_id":userfile_id, "public": "false"},
			function(r){
				LOG(r);
				if (r && r.status && r.status == "ok") {
					$this.text("[private]");
					$this.data("state","private");
				}
			}
		);
	}
	return false;
}

/*******************************************************************************
*
*/
function siggSearch() {
	var title = jQuery("#article_title").text();

	jQuery("#siggBox").show();
	jQuery("#siggResult").html(
		'<img src="'+GLOBAL.imgRoot+'/ajax-loader-white.gif" />'
	);

	jQuery.getJSON("/sigg?callback=?",
		{"expression":title})
		.success(function(data) {
			if (!(data && data.status)) {
				return;
			}
			if (data.status != 200) {
				jQuery("#siggResult").text("Error searching for Title: ("+data.status+") "+data.message);
				return;
			}
			var siggData = data.matches;
			if ( siggData.length > 0 ) {
				var html = "";
				for ( var i = 0, l = siggData.length; i < l; i++ ) {
					var sigg = siggData[i];
					html += "<p class=\"siggSuccess\">";
					html +=  "<img src='"+GLOBAL.staticRoot+"/img/siggAdd.png' title='"+sigg.doi+"' onclick='siggUpdateDOI(\""+sigg.doi+"\")'/>&nbsp;" + sigg.fullCitation +"</p>";
				}
			}
			else {
				html = "<p class=\"siggSuccess\">Nothing found. Try broadening your query.</p>";
			}
			jQuery("#siggResult").html( html );

		})
		.error(function(err) {
			jQuery("#siggResult").text("Error searching for Title: "+err.statusText);
			LOG(err);
		 });
}

/*******************************************************************************
*
*/
function siggUpdateDOI(doi) {
	jQuery("#siggForm input[name=ckey]").val(doi)
	jQuery("#siggForm").submit();
}

/* JournalFire *****************************************************************/

function initJournalFire() {
	var params = {};
	var ok = false;

	// Supply at least one of DOI, PMID
	if (ARTICLE.doi) {
		params["doi"] = ARTICLE.doi;
		ok = true;
	}
	if (ARTICLE.pmid) {
		params["pmid"] = ARTICLE.pmid;
		ok = true;
	}
	if (!ok) {
		return;
	}

	jQuery.getJSON("http://journalfire.com/cul-api/discussions?callback=?",
		params,
		function(data) {
			if (!data) {
				return;
			}
			jQuery("#journalfire").show();
			if (!data.exists) {
				jQuery("#jf_href").attr("href", data.link);
				jQuery("#jf_href").attr("title", "Start a discussion");
				return;
			}

			if (data.discussions == 0) {
				jQuery("#jf_href").attr("title", "Start a discussion");
			} else if (data.discussions == 1) {
				jQuery("#jf_href").attr("title", "Join the discussion");
				jQuery("#jf_href").text("JournalFire (1)");
			} else {
				jQuery("#jf_href").attr("title", "Join the "+data.discussions+" discussions");
				jQuery("#jf_href").text("JournalFire ("+data.discussions+")");
			}

			jQuery("#jf_href").attr("href", data.link);

		}
	);
}

var AQ = {
	load: function() {
		// check the target element exists
		if (!jQuery("#aqnowledge_main").length) {
			return;
		}

		var doi = ARTICLE.doi;
		LOG("AQ.init "+doi)
		if (!doi) {
			return;
		}
		var doi = doi.replace(/^http:\/\/[^\/]+\//, "");
		// this should end in '&'
		var url = ARTICLE.aq_base_url+"callback=?&";

		var title = jQuery("#article_title").text();
		// text() returns "" if no such element
		var abstract = jQuery("#abstract-body").text();
		var params = {
			"text" : title+" "+abstract,
			"doi" : doi
		};

		url = url + jQuery.param(params);

		jQuery.getJSON(url,
			function(data) {
				LOG(data);
				if (data && data.success && data.success == 'true') {
					var aqmain = jQuery("#aqnowledge_main");
					var aqdata= jQuery("#aqnowledge_data");
					// This is wierd, "...>div" on its own returns two identical elements, even
					// though the DOM only has one.   jQuery bug?
					var stub = jQuery("#aq_stub > div:eq(0)");

					/*  Structure somewhat counter-intuitive:
					 *   data.products.product is an array of objects
					 *   [ {...}, {...}, ...]
					 *   but there's a quirk when there's only a single entry, when there's
					 *   no wrapping array: data.products.product = {...}
					 */
					var products = data.products.product;
					if (jQuery.isArray(products)) {
						// OK, we have an array
					} else if (jQuery.isPlainObject(products)) {
						// Force to an array.
						products = [products];
					} else {
						ERROR("Unknown structure " + products);
						return;
					}

					// max products to show. (Can also hard limit with ?limit=N in the req.)
					// Perhaps should do what we do with author lists to prevent the
					// "show just 1 more" problem.  e.g., if N>15, show 10 + "more"
					var maxProducts = 10;
					for (var i=0; i<products.length; i++) {
						var e = products[i];
						var n = stub.clone();
						var dst = "/adclick?"+jQuery.param({
							"campaign" : "aqnowledge",
							"url" : e.uri
						});
						var a = n.find("a");
						a.text(e.name)
							.attr("href", "#")
							.attr("title", e.description || "No description available")
							.on("click",function() {
									googleTracker('/adclick/aqnowledge', dst);
									return false;
							})
							.qtip({
									style : {
										classes: "aq-tip"
									}
							});
						if (i >= maxProducts) {
							n.addClass("aq-extra");
						}
						aqdata.append(n);
					}

					aqmain.show();

					// If we have more than 10 (say), show a "more..." link
					// to show the extras.
					if (products.length > maxProducts) {
						jQuery("#aq-more").show().on("click", function() {
							jQuery("#aq-more").hide();
							jQuery(".aq-extra").show();
							return false;
						});
					}

					stub.hide();
				}
			}
		);
	}
};
