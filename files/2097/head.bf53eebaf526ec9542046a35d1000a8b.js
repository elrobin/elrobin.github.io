jQuery.noConflict();

function showAttachmentsForm() {
	var canCopyAttachments = false;
	jQuery("#libraries input:checked").each(function(){
		var e = jQuery(this);
		if (e.attr("name") != "ignored") {
			if (e.data("grouptype") == "P") {
				canCopyAttachments = true;
			} else if (e.attr("name") == "to_own_library") {
				canCopyAttachments = true;
			}
		}
	});
	LOG("canCopyAttachments: "+canCopyAttachments);
	jQuery(".attachments_form").toggle(canCopyAttachments);
}


function show_search_help() {
	window.open("/search_help","search_help",config="height=650,width=550,toolbar=no,menubar=no,scrollbars=yes,resizable=yes");
}


function search_modal() {
	try {
		jQuery("#dialog").dialog('open');
		jQuery("#q").focus().select();
	} catch (err) {
		location.href="/search_all.adp";
	}
}


function submit_search() {
	var q = jQuery("#search_form").serialize();
	setUIOption("lastsearch", jQuery("#q").val());
	location.href="/search/all?"+q;
	return false;
}

function menu_on (item) {
	jQuery(item).css({ "background-image": "url('"+GLOBAL.imgRoot+"/menu/body-hi.png')"});
}

function menu_off (item) {
	jQuery(item).css({ "background-image": "url('"+GLOBAL.imgRoot+"/menu/body.png')"});
}

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser)
function getInternetExplorerVersion() {
	var rv = -1; // Return value assumes failure
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
		if (re.exec(ua) !== null) {
			rv = parseFloat( RegExp.$1 );
		}
	}
	return rv;
}

function IE6() {
	var ie = getInternetExplorerVersion();
	return (ie > 0 && ie <=6);
}

function IE() {
	var ie = getInternetExplorerVersion();
	return (ie > 0);
}


function modifyQS(key,val) {
	var params = getQueryStringParams();
	delete(params[key]);
	var s = "";
	for (var k in params) {
		if (k) {
			s+=k+"="+params[k]+"&";
		}
	}
	s += key+"="+val;
	return s;

}

function appendQS(s) {
	var h = location.href;
	if (h.indexOf("?") == -1) {
		return h + "?" + s;
	} else {
		return h + "&" + s;
	}
}


String.prototype.trim = function(){
	return (this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""));
};

String.prototype.startsWith = function(str) {
	return (this.match("^"+str)==str);
};

String.prototype.endsWith = function(str) {
	return (this.match(str+"$")==str);
};

function trim (s) {
    var a = s.replace(/^\s+/, '');
    return a.replace(/\s+$/, '');
}


function getSelText() {
	var txt = '';
	if (window.getSelection) {
		txt = window.getSelection();
	} else if (document.getSelection)  { // FireFox
		txt = document.getSelection();
	} else if (document.selection) { // IE 6/7
		txt = document.selection.createRange().text;
	}
	if (txt) {
		txt = txt.toString().toLowerCase();
		txt = txt.replace(/[^\w]+/g, " ");
		txt = txt.replace(/^\s+/, '');
		txt = txt.replace(/\s+$/, '');
		txt = txt.replace(/\s+/g,' ');
	}
	return txt; // trim(txt);
}

function goSearch() {
	var t = getSelText();
	if (!t || t === "") {
		// No "global" search page to go to :-(
		return false;
	}
	location.href = "/search/all?q="+encodeURIComponent(t);
	return true;
}


if (jQuery.contextMenu) {
	jQuery.contextMenu.defaults({
		menuStyle : {
			border: "1px solid #cccccc",
			padding: "5px",
			backgroundColor : "#e8f2ff"
		},
		itemStyle : {
			padding: "0px",
			border: "none",
			backgroundColor: "#e8f2ff",
			lineHeight: "2",
			textDecoration: 'none'
		},
		itemHoverStyle: {
			border: "none",
			backgroundColor: "#e8f2ff",
			textDecoration: 'underline'
		},
		shadow: true,
		onContextMenu: function(e) {
			return true;
		}

	});
} else {
	LOG("jQuery.contextMenu not loaded");
}

var UI_OPTIONS_COOKIE = 'ui_options';
var UI_OPTIONS_COOKIE_OPTS = { path: '/', expires: 365, domain: GLOBAL.cookieDomain};
var UI_OPTIONS = jQuery.cookie(UI_OPTIONS_COOKIE);
if (UI_OPTIONS) {
	UI_OPTIONS = jQuery.secureEvalJSON(UI_OPTIONS);
} else {
	UI_OPTIONS = { ignore : "me" };
}
var UI_OPTIONS_CHANGED = false;

function getUIOption(key, def) {
	if (typeof def === "undefined") {
		def = false;
	}
	var v = UI_OPTIONS[key];
	var ret = (typeof v === "undefined") ? def : v;
	return ret;
}

function setUIOption(key, val, save) {
	if (save===undefined) {
		save = true;
	}
	if (val) {
		UI_OPTIONS[key] = val;
	} else {
		delete UI_OPTIONS[key];
	}
	UI_OPTIONS_CHANGED = true;
	if (save) {
		saveUI(key +" => "+val);
	}
}

function purgeOldUIOptions(keys) {
	var save = false;
	jQuery.each(keys, function(i,key) {
		if (typeof UI_OPTIONS[key] != 'undefined') {
			delete UI_OPTIONS[key];
			LOG("Purging "+key);
			save = true;
		}
	});
	if (save) {
		UI_OPTIONS_CHANGED = true;
		saveUI();
	}
}

function saveUI(s) {
	// The UI_OPTIONS_CHANGED flag is a legacy from when this func was
	// call via the unload event (which turned out to be unreliable)
	// Keep for now - no harm
	if (s) {
		LOG("saveui: "+s);
	} else {
		LOG("saveui");
	}
	var json = jQuery.toJSON(UI_OPTIONS);
	jQuery.cookie(UI_OPTIONS_COOKIE, json, UI_OPTIONS_COOKIE_OPTS );
	jQuery("#ui_val").text(json);
	if (UI_OPTIONS_CHANGED) {
		UI_OPTIONS_CHANGED=false;
		// On home page (only?) this get's called twice - the ajax, not this func.
		jQuery.get("/saveui");
	}
}


function setSearchUnchecked() {
	if (jQuery("#srch_unch").is(":checked")) {
		setUIOption('srch_unch','yes');
	} else {
		setUIOption('srch_unch','no');
	}
}

function setPublicants(){
	jQuery("a.publicant")
		.attr("title", "This user is an author of the article.").tipsy({gravity:"s"});
		//.after("<span class='publicant'>&dagger;</span>");
}

/**
 * Manage expandable sections, via cookies
 */

function createCookie(name,value,days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

function clexpand(basename) {
	var d = document.getElementById(basename+"-body");
	if (d.style.display=="none") {
		clexpand_open(basename);
	} else {
		clexpand_collapse(basename);
	}
}

function clexpand_open(basename, save) {
	var d = document.getElementById(basename+"-body");
	if (d) {
		d.style.display = 'block';
		if (jQuery(d).hasClass("store-state")) {
			if (typeof save == "undefined" || save) {
				setUIOption("clexpand-article-"+basename, "open");
			}
		}
	}
	var i = document.getElementById(basename+"-arrow");
	if (i) {
		i.src = GLOBAL.staticRoot+"/img/arrow-open.gif";
	}
}

function clexpand_collapse(basename, save) {
	var d = document.getElementById(basename+"-body");
	if (d) {
		d.style.display = 'none';
		if (jQuery(d).hasClass("store-state")) {
			if (typeof save == "undefined" || save) {
				setUIOption("clexpand-article-"+basename, "collapsed");
			}
		}
	}
	var i = document.getElementById(basename+"-arrow");
	if (i) {
		i.src = GLOBAL.staticRoot+"/img/arrow-collapsed.gif";
	}
}


function clexpand_to_cookie(basename) {
	var d = document.getElementById(basename+"-body");
	if (d===null) {
		return;
	}
	if (!jQuery(d).hasClass("store-state")) {
		return;
	}
	var c = getUIOption("clexpand-article-"+basename);
	if (!c) {
		c = "collapsed";
	}
	if (c=="open") {
		clexpand_open(basename,false);
	} else if (c=="collapsed") {
		clexpand_collapse(basename,false);
	}
}


// this could be a function, defined elsewhere.
// It's called in the jQuery init code if it exists.
var init_tags;

// there's a different function showTags used elsewhere!
function displayTags() {
	jQuery("#tagsbox").show();
	jQuery("#tagsbox").css("display","block");
	populateTagsTable();
	jQuery(".contentonly").mouseenter(function() {
		undisplayTags();
	});

	fixTagsBoxPos(true);
}

function undisplayTags() {
	jQuery("#tagsbox").hide();
	jQuery("#tagsbox").css("display","none");
	jQuery(".contentonly").unbind("mouseenter");
}

function tag_search_key_up() {
	var f = document.right_tag_search.q.value;
	filter_tags(f);
	return true;
}

//direct clone of misc_make_match_str (misc.tcl)

function fix_regexp(m) {
	LOG("fix_regexp:pre :"+m);
	var anchor_0 = false;
	var anchor_1= false;
	m = trim(m);
	if (m.charAt(0) == "^") {
		anchor_0=true;
	}
	if (m.charAt(m.length-1) == "$") {
		anchor_1=true;
	}
	m  = m.replace(/[^?%*:a-zA-Z0-9_\-]/g, "");
	m  = m.replace(/[*]/g, "[*]");
	m  = m.replace(/[%]+/g, ".*");
	m  = m.replace(/[?]/g, ".");

	if (anchor_0) {
		m = "^"+m;
	}
	if (anchor_1) {
		m = m +"$";
	}
	LOG("fix_regexp:post:"+m);
	return m;
}


function filter_tags(search) {
	if (!search || search==="") {
		search = "^";
	}

	search = fix_regexp(search);

	var re = new RegExp(search);
	jQuery("#navright .tag, #navright .ptag").each(function() {
		var e = jQuery(this);
		var t = e.text();
		var f = re.test(t);
		var tr = e.closest("tr");
		if (tr.length) {
			tr.toggle(f);
		} else {
			e.toggle(f);
		}
	});
	return;
}


function fancyPreview(which, index) {

	if (typeof index == "undefined") {
		index = 0;
	}

	LOG("fancyPreview:start:"+(typeof index)+":"+index);


	var meta = which.metadata();
	var arr = meta.userfiles;

	var tFancy = arr.length;
	var fancyTitle;
	if (tFancy==1) {
		fancyTitle = "Esc to Exit";
	} else {
		fancyTitle = "Esc to Exit. Navigate using &larr; &rarr; keys or click on frame border.";
	}

	var fb = [];
	for (var i=0; i<tFancy; i++) {
		var e = arr[i];
		var type = e.type;
		var link = e.link;

		if (type == "pdf") {
			var params = {
				Scale : 0.6,
				ZoomTransition : "easeOut",
				ZoomTime : 0.5,
				ZoomInterval : 0.1,
				FitPageOnLoad : false,
				FitWidthOnLoad : true,
				PrintEnabled : true,
				SwfFile : e.swfurl,
				ViewModeToolsVisible : true,
				ZoomToolsVisible : true,
				NavToolsVisible : true,
				CursorToolsVisible : true,
				SearchToolsVisible : true
			};

			if (GLOBAL.flexpaper_key) {
				params.key = GLOBAL.flexpaper_key;
			}


			var w = Math.round(jQuery(window).width()*0.8);
			var h = Math.round(jQuery(window).height()*0.8);


			LOG("DIMS: "+w+"x"+h);
			fb.push({
				'height'	: h,
				'width'		: w,
				'href'		: GLOBAL.jsRoot+'/FlexPaperViewer.swf',
				'swf'		: {flashvars: jQuery.param(params), allowfullscreen:true}
			});
		} else {
			fb.push({'href'          : link});
		}
	}

	jQuery.fancybox(fb,
		{
			'speedIn'	: 100,
			'speedOut'	: 100,
			'overlayShow'	: true,
			'cyclic'	: true,
			'modal'		: false,
			'padding'       : 20,
			'titlePosition' : "outside",
			'title'         : fancyTitle,
			'hideOnOverlayClick' : true,
			'index'		: index
		}
	);

}


function tagsBoxResize(save) {
	var tagsBoxWidth = jQuery("#navright").width();
	jQuery(".contentonly").css("margin-right",(tagsBoxWidth+30)+"px");
	if (save) {
		setUIOption("tagsBoxWidth",tagsBoxWidth);
	}
	adjustTagsDims();
}

function adjustTagsDims() {
	var tagsBoxWidth = jQuery("#navright").width();
	jQuery("#taglist .tag_l").css("width",(tagsBoxWidth-40)+"px");
	jQuery("#navright").css("height",null);
}


GLOBAL.showTagsState = getUIOption("showTagsState", false);

function toggleShowTagsState() {
	GLOBAL.showTagsState = !GLOBAL.showTagsState;
	jQuery("#tags-pins-on").toggle(GLOBAL.showTagsState);
	jQuery("#tags-pins-off").toggle(!GLOBAL.showTagsState);
	setUIOption("showTagsState",GLOBAL.showTagsState);
}


function ptq(q) {
/* parse the query */
/* semicolons are nonstandard but we accept them */
	var x = q.replace(/;/g, '&').split('&'), i, name, t;
	/* q changes from string version of query to object */
	for (q={}, i=0; i<x.length; i++) {
		t = x[i].split('=', 2);
		name = unescape(t[0]);
		if (!q[name]) {
			q[name] = [];
		}
		if (t.length > 1) {
			q[name][q[name].length] = unescape(t[1]);
		} else {
			q[name][q[name].length] = true;
		}
	}
	return q;
}

function qs_param() {
	return ptq(location.search.substring(1).replace(/\+/g, ' '));
}

var getQueryStringParams = qs_param;

function facebook_login(response) {
	if (!response.session) {
		return;
	}
	var p = qs_param();
	var from = "";
	if (p.from) {
		from = p.from[0];
		window.location.href=from;
	} else if (window.location.pathname=="/login") {
		window.location.href = "/";
	} else {
		window.location.reload();
	}
}

/*
	This loads the "old style" ads, not the banners/skyscrapers.
*/
function load_ads() {
	for (i=0; i<ADVERTS.length;i++) {
		var ad = ADVERTS[i];
		var campaign = ad.name;
		var ext =ad.ext;
		var height = ad.height+"px";

		var a = jQuery("<a>").attr("href","/adclick?campaign="+campaign+
			"&url="+encodeURIComponent(document.location.pathname));
		var img = jQuery("<img>")
			.attr("src",GLOBAL.staticRoot+"/campaigns/"+campaign+"-160."+ext)
			.css({"cursor":"pointer", "width":"160px", "height":height});
		a.append(img);
		a.data("clickable",true);

		var div = jQuery("#campaigns_div");
		div.append(a).append(jQuery('<p style="text-align: right" class="vague"></p>'));
		a.click(function(e) {
			e.preventDefault();
			var $this = jQuery(this);
			if (!$this.data("clickable")) return;
			// stop multi-clicks
			$this.data("clickable",false);
			LOG("CLICK disabled");
			$this.find("img")
				.css("cursor","wait")
				.fadeTo(100,0.25)
				.fadeTo(1800,0.25)
				.fadeTo(100,1.0,function() {
					$this.data("clickable",true);
					$this.find("img").css("opacity","1.0").css("cursor","pointer");
					LOG("CLICK enabled");
				});
			googleTracker('/adclick'+campaign, this.href);

		});
	}
}

function googleTracker(s, href) {
	try {
		if (typeof urchinTracker != "undefined") {
			if (s) {
				urchinTracker(s);
			} else {
				urchinTracker();
			}
		} else if (typeof _gat != "undefined") {
			/* according to
				http://www.google.com/support/googleanalytics/bin/answer.py?answer=55527
			should be using
				pageTracker._trackEvent(category, action);
			*/
			var pageTracker = _gat._getTracker(GOOGLE_AC);
			if (s) {
				pageTracker._trackPageview(s);
			} else {
				pageTracker._trackPageview();
			}
		}
	} catch (err) {
	}
	if (href) {
		setTimeout('document.location = "' + href + '"', 100);
	}
}


function track_click(x) {
	var e = jQuery(x);
	var href = e.attr("href");
	var target = e.attr("target");
	var data = e.metadata();
	if (data && data.track_type) {
		googleTracker('/linkout/'+data.track_type);
	}

	// no need at the moment as we've got urchin tracking this
	if (false) {
		href = "/click?url="+encodeURIComponent(href);
		if (data) {
			if (data.type) {
				href = href + "&type="+encodeURIComponent(data.type);
			}
			if (data.track_type) {
				href = href + "&track_type="+encodeURIComponent(data.track_type);
			}
		}
	}

	// give the GA code time to run.
	var f = function() {
		if (target) {
			window.open(href,target);
		} else {
			document.location=href;
		}
	};
	setTimeout(f, 100);

}


function trackView(paths) {
	if (!paths) {
		paths = { "paths": [location.pathname]};
	} else if (typeof paths == "string") {
		paths = { "paths" : [paths]};
	} else {
		// assume array
		paths = { "paths" : paths};
	}
	var p = jQuery.param(paths,true);
	jQuery.getJSON("/track_view?"+p+"&callback=?", function(){
		LOG("trackView "+p);
	});

}


function fixTagsBoxPos(isLeft) {
	var mainbody = jQuery("#mainbody");
	if (!mainbody.length) {
		mainbody = jQuery("#maindiv");
	}
	if (!mainbody.length) {
		ERROR("No #mainbody/#maindiv DIV");
		return;
	}

	var navright = jQuery("#navright");
	if (!navright.length) {
		LOG("No #navright DIV");
		return;
	}

	var adj = 10;
	if (isLeft) {
		adj = -navright.outerWidth();
	}

	var x = mainbody.offset().left+mainbody.outerWidth()+adj;
	var y = mainbody.offset().top;
	navright.offset({top:  y, left:x});
}


function getPref(name, json) {
	var v = GLOBAL.prefs && GLOBAL.prefs[name];
	if (!v) return null;
	if (typeof json != 'undefined' && json) {
		try {
			return eval(v);
		} catch (err) {
			ERROR(e);
			return null;
		}
	} else {
		return v;
	}
}

function getJsonPref(name) {
	return getPref(name, true);
}


var QUICKLINKS = {
	init: function() {
		var quickLinks;
		if (!GLOBAL.username) {
			return;
		}
		jQuery(".ql").remove();
		if (GLOBAL.quickLinks) {
			var dud = false;
			quickLinks = [];
			jQuery.each(GLOBAL.quickLinks,function(i, val){
				if (val && val.href && val.label) {
					QUICKLINKS.addLink(val.href,val.label);
					quickLinks.push(val);
				} else {
					dud = true;
				}
			});
			// An old bug populated the quicklinks with "undefined"
			// values.  If we've found any, purge them.
			if (dud) {
				jQuery.getJSON("/pref_set.json",
					{"name": "quick_links", "value": jQuery.toJSON(quickLinks)}
				).complete(function() {
					LOG("Updated dud quicklinks");
				});
			}
		} else if (1) {
			var cookie = jQuery.cookie("context_menu_opts");
			var parts = cookie.split("+");
			LOG(parts);
			var links = {};
			jQuery.each(parts,function(i, val){
				if (!val.startsWith("cm_quick")) return;
				var p = val.split("=");
				links[p[0]] = unescape(p[1]);
				//QUICKLINKS.addLink();
			});
			LOG(links);

			quickLinks = [];

			var order = 1;
			jQuery.each([1,2,3],function(i,val){
				var label = links["cm_quick_n"+val];
				var href = links["cm_quick_v"+val];
				if (href && label) {
					QUICKLINKS.addLink(href,label);
					var ql = {};
					ql.href  = href;
					ql.label = label;
					ql.order = order;
					quickLinks.push(ql);
					order ++;
				}
			});
			jQuery.getJSON("/pref_set.json",
				{"name": "quick_links", "value": jQuery.toJSON(quickLinks)}
			).complete(function() {
				LOG("Updated quicklinks");
			});



		}

	},
	addLink : function(href,label) {
		if (!(href && label)) {
			return;
		}
		var ql = jQuery("#quicklinks");
		var td = jQuery("<td>").addClass("ql");
		var img = jQuery("<img>").attr("src", GLOBAL.imgRoot+"/menu/bar.png");
		td.append(img);
		ql.before(td);

		td =jQuery("<td>").addClass("item").addClass("ql");
		var a = jQuery("<a>").attr("href",href).css("font-style","italic").text(label);
		td.append(a);
		ql.before(td);
	}
};


function checkBibTexKey(which, ok_id, dup_id) {
	which = which || "#bibtex_import_cite_id";
	ok_id = ok_id || "#bibtex_import_cite_ok";
	dup_id = dup_id || "#bibtex_import_cite_dup";
	var key = jQuery(which).val();
	if (key === "") {
		jQuery(ok_id).hide();
		jQuery(dup_id).hide();
		return;
	}
	var url = "/own_metadata::check_bibtex_key_json?"+
		jQuery.param({"key":key})+"&callback=?";
	jQuery.getJSON(url, function(data) {
		LOG(data);
		if (data && data.status && data.status == "ok") {
			jQuery(ok_id).show();
			jQuery(dup_id).hide();
		} else {
			jQuery(ok_id).hide();
			jQuery(dup_id).show();
		}
	} );
}

/*<Annotations>****************************************************************/

var ANNOTATOR = {

	annotations: null,

	getAnnotator: function () {
		//var base = jQuery("#fancybox-outer");
		var base = jQuery("#annotate");
		return this._getAnnotator(base);
	},

	_getAnnotator: function(base) {
		var e =  base.find("object").get(0);
		if (!(e && e.getMarkList)) {
			e = base.find("embed").get(0);
		}

		return (e && e.getMarkList) ? e : null;
	},

	syncAnnotations: function(userfile_id) {
		var annotator = this.getAnnotator();
		if (!annotator) {
			alert("No marks");
			return;
		}
		this.annotations = annotator.getMarkList();

		var x = [];
		for (var i=0; i<this.annotations.length; i++) {
			if (this.annotations[i]) {
				x.push(this.annotations[i]);
			}
		}

		var text = jQuery.toJSON(x);

		LOG(text);

		jQuery.ajax({
			url: "/pdf_annotate_save",
			data: {userfile_id : userfile_id, annotations: text},
			dataType: 'json',
			type: "POST",
			success: function(data) {
				if (data && data.status && data.status=="ok") {
					// alert("SYNC OK");
				} else {
					alert("Unable to save annotations (data error)");
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert("Unable to save annotations (error)");
				LOG("Unable to save annotations (error) "+textStatus);
				LOG(errorThrown);
			}

		});

		this.annotations = null;
	},

	annotate: function(which) {
		this.annotations = null;
		var meta = which.metadata();
		jQuery.ajax({
			url: "/pdf_annotate_load?userfile_id="+meta.userfile_id+"&callback=?",
			dataType: 'json',
			success: function(data) {
				if (data && data.status && data.status=="ok") {
					ANNOTATOR.annotations = data.annotations;
					ANNOTATOR._annotate(which);
				} else {
					alert("Unable to load annotations (data error) "+jQuery.toJSON(data));
				}
			},
			error: function() {
				alert("Unable to load annotations (error)");
			}

		});
	},

	_annotate: function(which) {

		var meta = which.metadata();
		var userfile_id = meta.userfile_id;
		var swfurl = "/pdf_annotate_loadswf/"+meta.url;

		var params = {
			Scale			: 0.6,
			ZoomTransition		: "easeOut",
			ZoomTime		: 0.5,
			ZoomInterval		: 0.1,
			FitPageOnLoad		: false,
			FitWidthOnLoad		: true,
			PrintEnabled		: true,
			AnnotationsAuthorVisible: true,
			AnnotationsAuthor	: "Erik",
			AnnotationsCategories	: "Internal;External;Other",
			AnnotationsCheckBoxLabel: "Post to CMS",
			localeChain		: "en_US",
			SwfFile			: swfurl
		};

		if (GLOBAL.flexpaper_key) {
			params.key = GLOBAL.flexpaper_key;
			FlexPaperSWF = "/FlexPaperViewer_Annotations.swf";
		} else {
			FlexPaperSWF = "/FlexPaperViewer_Annotations_Preview.swf";
		}


		var w = Math.round(jQuery(window).width()*0.95);
		var h = Math.round(jQuery(window).height()*0.95);
		var voffset = Math.round(jQuery(window).height()*0.0);


		LOG("DIMS: "+w+"x"+h);

		var fb = [];
		fb.push({
			'height'	: h,
			'width'		: w,
			'href'		: GLOBAL.staticRoot+FlexPaperSWF,
			'swf'		: {flashvars: jQuery.param(params), allowfullscreen:true}
		});

		// legacy from old (fancybox) code.
		fb = fb[0];

		var swfVersionStr = "10.0.0";
		var xiSwfUrlStr = "playerProductInstall.swf";

		var flashvars = {
			SwfFile : escape(swfurl),
			Scale : 0.8,
			ZoomTransition : "easeOut",
			ZoomTime : 0.5,
			ZoomInterval : 0.1,
			FitPageOnLoad : false,
			FitWidthOnLoad : true,
			PrintEnabled : true,
			FullScreenAsMaxWindow : false,
			ProgressiveLoading : true,

			PrintToolsVisible : true,
			ViewModeToolsVisible : true,
			ZoomToolsVisible : true,
			FullScreenVisible : true,
			NavToolsVisible : true,
			CursorToolsVisible : true,
			SearchToolsVisible : true,

			localeChain: "en_US"
		};

		if (GLOBAL.flexpaper_key) {
			flashvars.key = GLOBAL.flexpaper_key;
		}

		params = {};
		params.quality = "high";
		params.bgcolor = "#ffffff";
		params.allowscriptaccess = "sameDomain";
		params.allowfullscreen = "true";

		var attributes = {};
		attributes.id = "FlexPaperViewer_Annotations";
		attributes.name = "FlexPaperViewer_Annotations";

		swfobject.embedSWF(
			fb.href, "annotate_content",
			fb.width, fb.height,
			swfVersionStr, xiSwfUrlStr,
			flashvars, params, attributes);

		jQuery("#annotate").dialog({
				bgiframe: true,
				autoOpen: true,
				modal: true,
				width: fb.width+40,
				position: ["center", voffset],
				resizable: false,
				draggable: false,
				minHeight: 0,
				beforeClose: function() {
					ANNOTATOR.syncAnnotations(userfile_id);
				}
			});


	},

	loadAnnotations: function () {
		//annotations = [{"selection_text": "Shiek bin Baz and his like refuse to accept the radio","has_selection": true,"color": "#fffc15","selection_info": "1;3771;3824"}];
		//annotations = [{has_selection: false,color: '#fffc15',selection_info:"1;128;174"}];
		//return;
		if (!this.annotations || this.annotations.length===0) {
			return;
		}
		var a = this.getAnnotator();
		if (a) {
			a.addMarks(this.annotations);
			//alert(JSON.stringify(annotations));
		} else {
			alert("Unable to set marks");
		}
	},

	onDocumentLoaded: function(totalPages){
		// alert("Loaded " + totalPages + " " + annotations);
		if (ANNOTATOR.annotations) {
			//setTimeout("loadAnnotations()",2000);
			ANNOTATOR.loadAnnotations();
		}
	}

};

function accept_eu_cookie_terms() {
	jQuery.getJSON("/eu_cookie::accept_terms_json",
		{"accept_cookie_terms": "yes"}
	).success(function(data) {
		if (data && data.status && data.status=="ok") {
			jQuery("#cookie_terms").hide();
		}
	});

}
function clear_accept_eu_cookie_terms() {
	jQuery("#cookie_terms").show();
}


var onDocumentLoaded = ANNOTATOR.onDocumentLoaded;

function defineMenu(target, menu) {
	jQuery(target).qtip({
		content: {
			text: jQuery(menu)
		},
		show: {
			event: "mouseover",
			delay: 50
		},
		hide: {
			fixed: true,
			delay: 150,
			event: "mouseout"
		},
		position: {
			adjust: {
				y: 0,
				x: -1
			},
			at: "bottom left",
			my: "top left",
			viewport: jQuery(window)
		},
		style: {
			classes: 'ui-tooltip-blue ui-megamenu'
		},
		events: {
			show: function() {
				menu_on(target);
			},
			hide: function() {
				menu_off(target);
			}
		}
	});
}



/******************************************************************************/

jQuery(function() {
	jQuery("#ui_val").html("<pre>"+jQuery.toJSON(UI_OPTIONS)+"</pre><br /><pre>"+jQuery.cookie("context_menu_opts"));
	jQuery("#logout_button").click(saveUI);
	setPublicants();

	jQuery("body").addClass("force-scrollbars");

	try {
		jQuery("#dialog").dialog({
			bgiframe: true,
			autoOpen: false,
			modal: true,
			width: "600px",
			position: ["right", "top"],
			resizable: false,
			draggable: false,
			minHeight: 0,
			buttons: {
				'Search': submit_search,
				'  Help  ': function() {
					show_search_help();
				}
			}
		});
	} catch (err) {
		ERROR(err);
	}

	var q = jQuery("#q").val();
	if (!q) {
		q = getUIOption("lastsearch");
		if (q) {
			jQuery("#q").val(q);
		}
	}
	if (getUIOption("srch_unch") == "yes") {
		jQuery("#srch_unch").attr("checked",true);
	}


	jQuery(".tipsy-hint").tipsy({gravity:"s"});
	jQuery(".tipsy-hint-s").tipsy({gravity:"s"});
	jQuery(".tipsy-hint-n").tipsy({gravity:"n"});
	jQuery(".tipsy-hint-e").tipsy({gravity:"e"});
	jQuery(".tipsy-hint-w").tipsy({gravity:"w"});

	jQuery(".support-email").text("support13"+"@"+"citeulike"+".org");
	jQuery(".privacy-email").text("privacy"+"@"+"citeulike"+".org");

	// a bit more generic: <... class="email" data-address="support">
	jQuery(".email").each(function(){
		var $this = jQuery(this);
		var address = $this.data("address");
		if (!address) return;
		$this.text(address+"@"+"citeulike"+".org");
	});

	var hideLeftAd = (window.name == "citeulike_popup_post");
	if (hideLeftAd) {
		jQuery(".leftindent").css("margin-left", "0px");
		jQuery(".contentmain").css("margin-left", "0px");
		jQuery(".contentonly").css("margin-left", "0px");
		jQuery("#navleft, .menu").hide();
	}

	if (typeof JQHOTKEYS != "undefined") {
		jQuery(document).bind('keydown', 'Ctrl+s', function(){
			if (goSearch()) {
				return false;
			} else {
				// legacy for blog-save page
				jQuery('#button_update').click();
			}
			return false;
		});
	}

	var noTags = !GLOBAL.show_tags_nav;

	if (noTags) {
		//
	} else if (!GLOBAL.showTagsState && jQuery("#navright").length !== 0) {
		if (jQuery("#tagsbox").length === 0){
			jQuery("#navright").wrap("<div id='tagsbox' style='display:none'></div>");
		}
		if (jQuery(".contentmain").length !== 0) {
			jQuery(".contentmain").removeClass("contentmain").addClass("contentonly");
		}
	}

	if (!GLOBAL.is_gold_user) {
		load_ads();
	}

	if (!noTags && init_tags) {
		init_tags();
	}


	if (noTags) {
		//
	} else if (GLOBAL.showTagsState && jQuery("#navright").length !== 0) {
		var tagsBoxWidth = getUIOption("tagsBoxWidth",250);
		jQuery("#tagsbox").show();
		jQuery("#tagsbox").css("display","block");
		jQuery("#tagbutton").hide();
		jQuery("#navright").css("width",tagsBoxWidth+"px");
		populateTagsTable();
		var realWidth= jQuery("#navright").width();
		jQuery(".contentonly").css("margin-right",(realWidth+30)+"px");
		jQuery("#taglist .tag_l").css("width",(tagsBoxWidth-40)+"px");
		jQuery("#navright").resizable({
			ghost: true,
			handles: 'w',
			stop : function(event, ui) {
				tagsBoxResize(true);
			},
			maxWidth: 600,
			minWidth: 180
		});
		fixTagsBoxPos(false);
		jQuery(window).bind("resize", function() {
			fixTagsBoxPos(false);
		});
	} else {
		jQuery("#tagbutton").mouseenter(displayTags);
		jQuery("#tagbutton").click(displayTags);
	}

	jQuery("#tags-pins").qtip({
		content: {
			text: jQuery("#always_show_tags_help")
		},
		show: {
			event: "mouseover"
		},
		hide: {
			event: "mouseout"
		},
		position: {
			adjust: {
				y: 4
			},
			at: "bottom right",
			my: "top right",
			viewport: jQuery(window)
		}
	});

	jQuery("#tags-pins").click(toggleShowTagsState);
	jQuery("#tags-pins-on").toggle(GLOBAL.showTagsState);
	jQuery("#tags-pins-off").toggle(!GLOBAL.showTagsState);

	jQuery("input:submit, input:button, input:file, button").button();
	jQuery("button.likes").find(".ui-button-text").css(
		{'background-image':'url('+GLOBAL.imgRoot+'/likes-icon.png)',
		'background-repeat':'no-repeat','padding-left':'32px',
		'background-position':'10px 1px '
		});
	jQuery("button.searchbtn").button("destroy").button({icons: {primary:'ui-icon-search'}});

	if (!IE()) {
		if (jQuery().selectmenu) {
			// Broken
			//jQuery("select.uiwidget").selectmenu({maxHeight: 150, style: 'popup'});
		} else {
			LOG("jquery.selectmenu not loaded");
		}
	}

	QUICKLINKS.init();

	if (GLOBAL.is_gold_user) {
		jQuery(".if_gold_user").show();
	} else {
		jQuery(".if_not_gold_user").show();
	}

	LOG("OK - logging started");

	jQuery("#accept_cookie_terms").click(accept_eu_cookie_terms);

});

/******************************************************************************/
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 * http://ejohn.org/blog/simple-javascript-inheritance/
 */
// Inspired by base2 and Prototype
(function(){
	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	// The base Class implementation (does nothing)
	this.Class = function(){};

	// Create a new Class that inherits from this class
	Class.extend = function(prop) {
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && fnTest.test(prop[name]) ?
			(function(name, fn){
				return function() {
					var tmp = this._super;

					// Add a new ._super() method that is the same method
					// but on the super-class
					this._super = _super[name];

					// The method only need to be bound temporarily, so we
					// remove it when we're done executing
					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			})(name, prop[name]) :
			prop[name];
		}

		// The dummy class constructor
		function Class() {
		// All construction is actually done in the init method
			if ( !initializing && this.init )
				this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		return Class;
	};
})();

/*
 * SelectText (ala mouse)
 * via:
 * http://stackoverflow.com/questions/985272/jquery-selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
 * http://jsfiddle.net/edelman/KcX6A/1506/
 */

 function selectText(element) {
    var range, selection, text;
	if (typeof element === 'string') {
		text = document.getElementById(element);
	} else {
		text = element;
	}
    if (document.body.createTextRange) { //ms
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

jQuery.fn.selectText = function(){
    selectText(this[0]);
};
