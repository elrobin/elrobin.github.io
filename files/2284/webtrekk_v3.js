/**
 * webtrekkConfig 
 * 
 * globale webtrekk konfiguration global webtrekk config
 * 
 * WITH prod id!
 * 
 * @type Object
 */

var webtrekkConfig = {
		trackId : "196033507532344",
		trackDomain : "springergmbh01.webtrekk.net",
		domain : "www.springer.com",
		cookie : "1",
		contentId : "springer_com.other",
		executePluginFunction : "wt_socialMedia"			
	};

/*
 * ******************** Ab hier nichts �ndern ********************
 * ******************** Don't change anything beyond this line
 * ********************
 */
var webtrekkUnloadObjects = [];
var webtrekkLinktrackObjects = [];
var webtrekkHeatmapObjects = [];
function webtrekkUnload($b, $c) {
	var w;
	for (i = 0; i < webtrekkUnloadObjects.length; i++) {
		w = webtrekkUnloadObjects[i];
		if (w.cookie == "1" && !w.optOut && !w.deactivatePixel) {
			w.firstParty();
		}
		;
		var $d = ($c) ? $c : (w.formObject && $b != "noForm") ? "form" : "link";
		if (w.beforeUnloadPixel != false) {
			w.beforeUnloadPixel();
		} else if ($d == "form") {
			w.executePlugin(w.getPluginConfig("form", "before"));
		}
		;
		var p = "";
		if (w.config.linkId) {
			p += "&ct=" + w.wtEscape(w.maxlen(w.config.linkId, 255));
			if (p) {
				if (w.linktrackOut) {
					p += "&ctx=1";
				}
				;
				var $e = w.ccParams;
				if (typeof ($e) == 'string' && $e != '') {
					p += $e;
				}
			}
		}
		;
		if (w.wtEp) {
			if (w.wtEpEncoded) {
				p += w.wtEp;
			} else {
				var $f = w.wtEp;
				if (typeof ($f) == 'string' && $f != '') {
					$f = $f.split(/;/);
					for ( var z = 0; z < $f.length; z++) {
						if (w.wtTypeof($f[z])) {
							var $g = $f[z].split(/=/);
							if (w.checkSC('custom')) {
								$g[1] = w.decrypt($g[1]);
							}
							;
							$g[1] = w.wtEscape($g[1]);
							p += '&' + $g[0] + '=' + $g[1];
						}
					}
				}
			}
		}
		;
		if (w.formObject && $b != "noForm") {
			var gatherFormsP = w.gatherForm();
			if (gatherFormsP) {
				p += "&fn="
						+ (w.formName ? w.formName : w.contentId.split(";")[0])
						+ '|' + (w.formSubmit ? "1" : "0");
				p += "&ft=" + w.wtEscape(gatherFormsP);
			}
		}
		;
		if (p != "" || w.config.sendOnUnload) {
			if (w.isChrome && $d != "click") {
				w.quicksend(w.wtEscape(w.contentId.split(";")[0]) + ",1,"
						+ w.baseparams(), p, false, "saveRequest");
			} else {
				w.quicksend(w.wtEscape(w.contentId.split(";")[0]) + ",1,"
						+ w.baseparams(), p, false, "sendRequest");
			}
			;
			w.config.linkId = "";
			w.ccParams = "";
			w.wtEp = "";
		}
		;
		if (w.afterUnloadPixel != false) {
			w.afterUnloadPixel();
		} else if ($d == "form") {
			w.executePlugin(w.getPluginConfig("form", "after"));
		}
	}
};
function webtrekkLinktrack(e) {
	var w;
	for (z = 0; z < webtrekkLinktrackObjects.length; z++) {
		w = webtrekkLinktrackObjects[z];
		if ((e.which && e.which == 1) || (e.button && e.button == 1)) {
			var a = document.all ? window.event.srcElement : this;
			for ( var i = 0; i < 4; i++) {
				if (a.tagName && a.tagName.toLowerCase() != "a"
						&& a.tagName.toLowerCase() != "area") {
					a = a.parentElement;
				}
			}
			;
			w.config = w.getConfig();
			a.lname = w.getAttribute(a, w.linkTrackAttribute);
			a.lpos = 0;
			w.getCCParams(a);
			if (!w.wtLength(a.lpos) && a.tagName) {
				c = document.links;
				for (d = 0; d < w.wtLength(c); d++) {
					if (a == c[d]) {
						a.lpos = d + 1;
						break;
					}
				}
			}
			;
			if (a.lpos) {
				if (w.getJSON(a.lname) != null) {
					w.parseJSON(w.getJSON(a.lname));
					a.lname = w.config.linkId;
				}
				;
				if (w.linkTrack == "link") {
					var y = a.href.indexOf("//");
					y = (y >= 0 ? a.href.substr(y + 2) : a.href);
					if (w.linkTrackPattern) {
						if (!w.linkTrackReplace) {
							w.linkTrackReplace = "";
						}
						;
						y = y.replace(w.linkTrackPattern, w.linkTrackReplace);
					}
					;
					w.config.linkId = (a.lname ? (a.lname + ".") : "")
							+ y.split("?")[0].replace(/\//g, ".");
					var p = "";
					if (w.linkTrackParams) {
						p = w.linkTrackParams.replace(/;/g, ",").split(",");
					}
					;
					for ( var i = 0; i < p.length; i++) {
						var v = w.urlParam(y, p[i], "");
						if (v) {
							w.config.linkId += "." + p[i] + "." + v;
						}
					}
				} else if (w.linkTrack == "standard" && a.lname) {
					w.config.linkId = a.lname;
				}
				;
				w.isDownloadFile = false;
				if (w.linkTrackDownloads) {
					var $h = a.href.split(".");
					$h = $h.pop();
					var $i = w.linkTrackDownloads.split(";");
					for (i = 0; i < $i.length; i++) {
						if ($i[i] == $h) {
							w.isDownloadFile = true;
							break;
						}
					}
				}
				;
				if (w.config.linkId) {
					if (w.domain && !w.isOwnDomain(a.href)) {
						w.linktrackOut = true;
					}
				}
				;
				if (w.isDownloadFile
						|| (w.config.linkId && a.target != "" && a.target != "_self")) {
					w.sendinfo(w.config, w.config.linkId, "click");
					continue;
				}
				;
				w.sendinfo(w.config, w.config.linkId, "link");
			}
		}
	}
};
function webtrekkHeatmapClick(e) {
	var isOpera = (navigator.userAgent.indexOf('Opera') != -1);
	var isIE = (!isOpera && navigator.userAgent.indexOf('MSIE') != -1);
	var h;
	for (z = 0; z < webtrekkHeatmapObjects.length; z++) {
		h = webtrekkHeatmapObjects[z];
		var $j = {
			left : -1,
			top : -1
		};
		if (document.getElementById(h.heatmapRefpoint)) {
			var $k = document.getElementById(h.heatmapRefpoint);
			if (h.wtTypeof($k.offsetLeft)) {
				while ($k) {
					$j.left += $k.offsetLeft;
					$j.top += $k.offsetTop;
					$k = $k.offsetParent;
				}
			}
		}
		;
		var $l = 0;
		var $m = 0;
		if (!e) {
			var e = window.event;
		}
		;
		if (e.pageX || e.pageY) {
			$l = e.pageX;
			$m = e.pageY;
		} else {
			if (e.clientX || e.clientY) {
				$l = e.clientX;
				$m = e.clientY;
				if (isIE) {
					if (document.body.scrollLeft > 0
							|| document.body.scrollTop > 0) {
						$l += document.body.scrollLeft;
						$m += document.body.scrollTop;
					} else {
						if (document.documentElement.scrollLeft > 0
								|| document.documentElement.scrollTop > 0) {
							$l += document.documentElement.scrollLeft;
							$m += document.documentElement.scrollTop;
						}
					}
				}
			}
		}
		;
		var $n = 0;
		if (isIE) {
			$n = document.body.clientWidth;
		} else {
			$n = self.innerWidth - 16;
		}
		;
		var $o = true;
		if ($l >= $n || !h.sentFullPixel) {
			$o = false;
		}
		;
		if (($j.top >= 0 || $j.left >= 0) && $l > $j.left && $m > $j.top) {
			$l = '-' + ($l - $j.left);
			$m = '-' + ($m - $j.top);
		}
		;
		if ($o && h.heatmap == "1") {
			h.executePlugin(h.getPluginConfig("heatmap", "before"));
			h.quicksend(h.wtEscape(h.contentId.split(";")[0]) + "," + $l + ","
					+ $m, '', "hm", "sendRequest");
			h.executePlugin(h.getPluginConfig("heatmap", "after"));
		}
	}
};
function webtrekkStartHeatmap() {
	if (typeof (wt_heatmap) != "undefined") {
		window.setTimeout("wt_heatmap()", 1000);
	} else {
		if (typeof ($p) == "undefined")
			$p = 0;
		$p++;
		if ($p < 60)
			window.setTimeout("webtrekkStartHeatmap()", 1000);
	}
};
function webtrekkStartOverlay() {
	if (typeof (wt_overlay) != "undefined") {
		wt_overlay();
	} else {
		if (typeof ($q) == "undefined")
			$q = 0;
		$q++;
		if ($q < 60)
			window.setTimeout("webtrekkStartOverlay()", 1000);
	}
};
function webtrekkFormTrackInstall() {
	var w;
	for (i = 0; i < webtrekkUnloadObjects.length; i++) {
		w = webtrekkUnloadObjects[i];
		w.findForm();
		if (!w.formObject) {
			continue;
		}
		;
		for ( var j = 0; j < w.formObject.elements.length; j++) {
			var e = w.formObject.elements[j];
			w.formObject.elements[j].formIndex = i;
			w.registerEvent(e, "focus", webtrekkFormFocus);
		}
		;
		w.registerEvent(w.formObject, "submit", webtrekkFormSubmit);
		w
				.registerEvent(window,
						(w.wtTypeof(window.onbeforeunload)) ? "beforeunload"
								: "unload", webtrekkUnload);
	}
};
function webtrekkFormSubmit(e) {
	var w;
	for (i = 0; i < webtrekkUnloadObjects.length; i++) {
		w = webtrekkUnloadObjects[i];
		if (!w.form) {
			continue;
		}
		;
		if (e.target == w.formObject || e.srcElement == w.formObject) {
			w.formSubmit = true;
		}
	}
};
function webtrekkFormFocus(e) {
	var a = document.all ? window.event.srcElement : e.target;
	if (!a.name || a.type == "submit" || a.type == "image") {
		return;
	}
	;
	var w;
	if (webtrekkUnloadObjects[a.formIndex]) {
		var i = a.formIndex;
		w = webtrekkUnloadObjects[i];
		if (w.formObject) {
			var f = w.getAttribute(w.formObject, w.formAttribute) ? w
					.getAttribute(w.formObject, w.formAttribute) : w.contentId
					.split(";")[0];
		} else {
			return;
		}
		;
		w.formFocus = a.name;
	}
};
function webtrekkV3($r) {
	var c = webtrekkConfig;
	if (!$r) {
		var $r = c;
	}
	;
	this.trackId = ($r.trackId) ? $r.trackId : (c.trackId) ? c.trackId : false;
	this.trackDomain = ($r.trackDomain) ? $r.trackDomain
			: (c.trackDomain) ? c.trackDomain : false;
	this.domain = ($r.domain) ? $r.domain : (c.domain) ? c.domain : false;
	this.linkTrack = ($r.linkTrack) ? $r.linkTrack
			: (c.linkTrack) ? c.linkTrack : false;
	this.linkTrackAttribute = ($r.linkTrackAttribute) ? $r.linkTrackAttribute
			: (c.linkTrackAttribute) ? c.linkTrackAttribute : "name";
	this.linkTrackParams = ($r.linkTrackParams) ? $r.linkTrackParams
			: (c.linkTrackParams) ? c.linkTrackParams : false;
	this.linkTrackPattern = ($r.linkTrackPattern) ? $r.linkTrackPattern
			: (c.linkTrackPattern) ? c.linkTrackPattern : false;
	this.linkTrackReplace = ($r.linkTrackReplace) ? $r.linkTrackReplace
			: (c.linkTrackReplace) ? c.linkTrackReplace : false;
	this.linkTrackDownloads = ($r.linkTrackDownloads) ? $r.linkTrackDownloads
			: (c.linkTrackDownloads) ? c.linkTrackDownloads : false;
	this.customParameter = ($r.customParameter) ? $r.customParameter
			: (c.customParameter) ? c.customParameter : false;
	this.customClickParameter = ($r.customClickParameter) ? $r.customClickParameter
			: (c.customClickParameter) ? c.customClickParameter : false;
	this.customSessionParameter = ($r.customSessionParameter) ? $r.customSessionParameter
			: (c.customSessionParameter) ? c.customSessionParameter : false;
	this.customTimeParameter = ($r.customTimeParameter) ? $r.customTimeParameter
			: (c.customTimeParameter) ? c.customTimeParameter : false;
	this.customCampaignParameter = ($r.customCampaignParameter) ? $r.customCampaignParameter
			: (c.customCampaignParameter) ? c.customCampaignParameter : false;
	this.customEcommerceParameter = ($r.customEcommerceParameter) ? $r.customEcommerceParameter
			: (c.customEcommerceParameter) ? c.customEcommerceParameter : false;
	this.orderValue = ($r.orderValue) ? $r.orderValue
			: (c.orderValue) ? c.orderValue : false;
	this.orderCurrency = ($r.orderCurrency) ? $r.orderCurrency
			: (c.orderCurrency) ? c.orderCurrency : false;
	this.orderId = ($r.orderId) ? $r.orderId : (c.orderId) ? c.orderId : false;
	this.product = ($r.product) ? $r.product : (c.product) ? c.product : false;
	this.productCost = ($r.productCost) ? $r.productCost
			: (c.productCost) ? c.productCost : false;
	this.productQuantity = ($r.productQuantity) ? $r.productQuantity
			: (c.productQuantity) ? c.productQuantity : false;
	this.productCategory = ($r.productCategory) ? $r.productCategory
			: (c.productCategory) ? c.productCategory : false;
	this.productStatus = ($r.productStatus) ? $r.productStatus
			: (c.productStatus) ? c.productStatus : false;
	this.customerId = ($r.customerId) ? $r.customerId
			: (c.customerId) ? c.customerId : false;
	this.crmCategory = ($r.crmCategory) ? $r.crmCategory
			: (c.crmCategory) ? c.crmCategory : false;
	this.contentGroup = ($r.contentGroup) ? $r.contentGroup
			: (c.contentGroup) ? c.contentGroup : false;
	this.mediaCode = ($r.mediaCode) ? $r.mediaCode
			: (c.mediaCode) ? c.mediaCode : false;
	this.mediaCodeValue = ($r.mediaCodeValue) ? $r.mediaCodeValue
			: (c.mediaCodeValue) ? c.mediaCodeValue : false;
	this.mediaCodeCookie = ($r.mediaCodeCookie) ? $r.mediaCodeCookie
			: (c.mediaCodeCookie) ? c.mediaCodeCookie : false;
	this.campaignId = ($r.campaignId) ? $r.campaignId
			: (c.campaignId) ? c.campaignId : false;
	this.campaignAction = ($r.campaignAction) ? $r.campaignAction
			: (c.campaignAction) ? c.campaignAction : "click";
	this.internalSearch = ($r.internalSearch) ? $r.internalSearch
			: (c.internalSearch) ? c.internalSearch : false;
	this.customSid = ($r.customSid) ? $r.customSid
			: (c.customSid) ? c.customSid : false;
	this.customEid = ($r.customEid) ? $r.customEid
			: (c.customEid) ? c.customEid : false;
	this.cookie = ($r.cookie) ? $r.cookie : (c.cookie) ? c.cookie : "3";
	this.cookieDomain = ($r.cookieDomain) ? $r.cookieDomain
			: (c.cookieDomain) ? c.cookieDomain : false;
	this.cookieEidTimeout = ($r.cookieEidTimeout) ? $r.cookieEidTimeout
			: (c.cookieEidTimeout) ? c.cookieEidTimeout : false;
	this.cookieSidTimeout = ($r.cookieSidTimeout) ? $r.cookieSidTimeout
			: (c.cookieSidTimeout) ? c.cookieSidTimeout : false;
	this.forceNewSession = ($r.forceNewSession) ? $r.forceNewSession
			: (c.forceNewSession) ? c.forceNewSession : false;
	this.xwtip = ($r.xwtip) ? $r.xwtip : (c.xwtip) ? c.xwtip : false;
	this.xwtua = ($r.xwtua) ? $r.xwtua : (c.xwtua) ? c.xwtua : false;
	this.xwtrq = ($r.xwtrq) ? $r.xwtrq : (c.xwtrq) ? c.xwtrq : false;
	this.mediaCodeFrames = ($r.mediaCodeFrames) ? $r.mediaCodeFrames
			: (c.mediaCodeFrames) ? c.mediaCodeFrames : false;
	this.framesetReferrer = ($r.framesetReferrer) ? $r.framesetReferrer
			: (c.framesetReferrer) ? c.framesetReferrer : false;
	this.plugins = ($r.plugins && $r.plugins != '') ? $r.plugins
			: (c.plugins && c.plugins != '') ? c.plugins : [ 'Adobe Acrobat',
					'Windows Media Player', 'Shockwave Flash', 'RealPlayer',
					'QuickTime', 'Java', 'Silverlight' ];
	if (typeof (this.plugins) == "string") {
		this.plugins = this.plugins.split(";");
	}
	;
	this.forceHTTPS = ($r.forceHTTPS) ? $r.forceHTTPS
			: (c.forceHTTPS) ? c.forceHTTPS : false;
	this.secureConfig = ($r.secureConfig) ? $r.secureConfig
			: (c.secureConfig) ? c.secureConfig : false;
	this.heatmap = ($r.heatmap) ? $r.heatmap : (c.heatmap) ? c.heatmap : false;
	this.heatmapRefpoint = ($r.heatmapRefpoint) ? $r.heatmapRefpoint
			: (c.heatmapRefpoint) ? c.heatmapRefpoint : "wt_refpoint";
	this.pixelSampling = ($r.pixelSampling) ? $r.pixelSampling
			: (c.pixelSampling) ? c.pixelSampling : false;
	this.form = ($r.form) ? $r.form : (c.form) ? c.form : false;
	this.formAttribute = ($r.formAttribute) ? $r.formAttribute
			: (c.formAttribute) ? c.formAttribute : "name";
	this.formFieldAttribute = ($r.formFieldAttribute) ? $r.formFieldAttribute
			: (c.formFieldAttribute) ? c.formFieldAttribute : "name";
	this.formValueAttribute = ($r.formValueAttribute) ? $r.formValueAttribute
			: (c.formValueAttribute) ? c.formValueAttribute : "value";
	this.formFullContent = ($r.formFullContent) ? $r.formFullContent
			: (c.formFullContent) ? c.formFullContent : false;
	this.formAnonymous = ($r.formAnonymous) ? $r.formAnonymous
			: (c.formAnonymous) ? c.formAnonymous : false;
	this.reporturl = ($r.reporturl) ? $r.reporturl
			: (c.reporturl) ? c.reporturl : 'report2.webtrekk.de/cgi-bin/wt';
	this.disableOverlayView = ($r.disableOverlayView) ? $r.disableOverlayView
			: (c.disableOverlayView) ? c.disableOverlayView : false;
	this.version = 322;
	this.beforeSendinfoPixel = ($r.beforeSendinfoPixel) ? $r.beforeSendinfoPixel
			: (c.beforeSendinfoPixel) ? c.beforeSendinfoPixel : false;
	this.afterSendinfoPixel = ($r.afterSendinfoPixel) ? $r.afterSendinfoPixel
			: (c.afterSendinfoPixel) ? c.afterSendinfoPixel : false;
	this.beforeUnloadPixel = ($r.beforeUnloadPixel) ? $r.beforeUnloadPixel
			: (c.beforeUnloadPixel) ? c.beforeUnloadPixel : false;
	this.afterUnloadPixel = ($r.afterUnloadPixel) ? $r.afterUnloadPixel
			: (c.afterUnloadPixel) ? c.afterUnloadPixel : false;
	this.executePluginFunction = ($r.executePluginFunction) ? $r.executePluginFunction
			: (c.executePluginFunction) ? c.executePluginFunction : false;
	this.paramFirst = ($r.paramFirst) ? $r.paramFirst
			: (c.paramFirst) ? c.paramFirst : false;
	this.paramMapping = {
		"ov" : "orderValue",
		"oi" : "orderId",
		"st" : "productStatus",
		"co" : "productCost",
		"qn" : "productQuantity",
		"cb" : "customEcommerceParameter",
		"ba" : "product",
		"cp" : "customParameter",
		"cd" : "customerId",
		"cs" : "customSessionParameter",
		"ck" : "customClickParameter",
		"ce" : "customTimeParameter",
		"vc" : "crmCategory",
		"ca" : "productCategory",
		"cc" : "customCampaignParameter",
		"ct" : "linkId",
		"cr" : "orderCurrency",
		"cg" : "contentGroup",
		"is" : "internalSearch",
		"mc" : "campaignId",
		"mca" : "campaignAction"
	};
	this.deactivatePixel = false;
	this.deactivateRequest = false;
	this.optOut = false;
	this.eid = false;
	this.sampleCookieString = false;
	this.cookieOne = false;
	this.linkId = false;
	this.linktrackOut = false;
	this.linktrackNamedlinksOnly = true;
	this.ccParams = false;
	this.sentFullPixel = false;
	this.sentCampaignIds = {};
	this.wtEp = false;
	this.wtEpEncoded = false;
	this.trackingSwitchMediaCode = false;
	this.trackingSwitchMediaCodeValue = false;
	this.trackingSwitchMediaCodeTimestamp = false;
	this.heatmapOn = false;
	this.overlayOn = false;
	this.gatherFormsP = false;
	this.formObject = false;
	this.formName = false;
	this.formFocus = false;
	this.formSubmit = false;
	this.browserLang = false;
	this.config = false;
	this.unloadInstance = webtrekkUnloadObjects.length;
	this.xlc = false;
	this.xlct = false;
	this.xlcv = false;
	this.plugin = {};
	this.pageCounter = 0;
	this.clickCounter = 0;
	this.linkCounter = 0;
	this.formCounter = 0;
	this.heatmapCounter = 0;
	if (typeof (navigator.language) == "string") {
		this.browserLang = navigator.language.substring(0, 2);
	} else if (typeof (navigator.userLanguage) == "string") {
		this.browserLang = navigator.userLanguage.substring(0, 2);
	}
	;
	this.jsonPara = {
		"ck" : [ "customClickParameter", {} ],
		"cp" : [ "customParameter", {} ],
		"cs" : [ "customSessionParameter", {} ],
		"ce" : [ "customTimeParameter", {} ],
		"cb" : [ "customEcommerceParameter", {} ],
		"vc" : [ "crmCategory", {} ],
		"ca" : [ "productCategory", {} ],
		"cc" : [ "customCampaignParameter", {} ],
		"ct" : [ "linkId", "" ],
		"ov" : [ "orderValue", "" ],
		"cr" : [ "orderCurrency", "" ],
		"oi" : [ "orderId", "" ],
		"ba" : [ "product", "" ],
		"co" : [ "productCost", "" ],
		"qn" : [ "productQuantity", "" ],
		"st" : [ "productStatus", "" ],
		"cd" : [ "customerId", "" ],
		"sou" : [ "sendOnUnload", false ]
	};
	this.getJSON = function(s) {
		if (s && s[0] == "{" && s[s.length - 1] == "};") {
			try {
				return eval("(" + s + ")");
			} catch (e) {
				return null;
			}
		}
		;
		return null;
	};
	this.parseJSON = function(o, n) {
		for ( var $s in o) {
			if (typeof (o[$s]) == "object") {
				if (typeof (this.jsonPara[$s]) != "undefined"
						&& typeof (this.config[this.jsonPara[$s][0]]) != "object") {
					this.config[this.jsonPara[$s][0]] = this.jsonPara[$s][1];
				}
				;
				this.parseJSON(o[$s], $s);
				continue;
			}
			;
			if (n) {
				if (isNaN(parseInt($s)) || parseInt($s) < 500) {
					this.config[this.jsonPara[n][0]][$s] = o[$s];
				}
			} else {
				if (typeof (this.jsonPara[$s]) != "undefined") {
					this.config[this.jsonPara[$s][0]] = o[$s];
				}
			}
		}
	};
	this.getMappingParam = function(np) {
		var p = np.split("");
		var i, $t, $u, $v;
		for (i = 0; i < p.length; i++) {
			if (!isNaN(parseInt(p[i]))) {
				$t = i;
				break;
			}
		}
		;
		if ($t) {
			$u = np.substr(0, $t);
			$v = np.substr($t, np.length - 1);
		} else {
			$u = np;
		}
		;
		return {
			"mapping" : (typeof (this.paramMapping[$u]) != "undefined") ? this.paramMapping[$u]
					: false,
			"index" : ($v) ? $v : false
		};
	};
	this.getConfig = function() {
		var c = {
			"contentId" : this.contentId,
			"linkId" : this.linkId,
			"sendOnUnload" : false,
			"customParameter" : this.customParameter,
			"customClickParameter" : this.customClickParameter,
			"customSessionParameter" : this.customSessionParameter,
			"customTimeParameter" : this.customTimeParameter,
			"customCampaignParameter" : this.customCampaignParameter,
			"customEcommerceParameter" : this.customEcommerceParameter,
			"orderValue" : this.orderValue,
			"orderCurrency" : this.orderCurrency,
			"orderId" : this.orderId,
			"product" : this.product,
			"productCost" : this.productCost,
			"productQuantity" : this.productQuantity,
			"productCategory" : this.productCategory,
			"productStatus" : this.productStatus,
			"customerId" : this.customerId,
			"crmCategory" : this.crmCategory,
			"contentGroup" : this.contentGroup,
			"campaignId" : this.campaignId,
			"campaignAction" : this.campaignAction,
			"internalSearch" : this.internalSearch,
			"customSid" : this.customSid,
			"customEid" : this.customEid,
			"forceNewSession" : this.forceNewSession,
			"xwtip" : this.xwtip,
			"xwtua" : this.xwtua,
			"xwtrq" : this.xwtrq,
			"framesetReferrer" : this.framesetReferrer,
			"forceHTTPS" : this.forceHTTPS,
			"beforeSendinfoPixel" : this.beforeSendinfoPixel,
			"afterSendinfoPixel" : this.afterSendinfoPixel,
			"beforeUnloadPixel" : this.beforeUnloadPixel,
			"afterUnloadPixel" : this.afterUnloadPixel,
			"xlc" : this.xlc,
			"xlct" : this.xlct,
			"xlcv" : this.xlcv
		};
		return c;
	};
	this.getRequestCounter = function($c, $x) {
		var c = 0;
		if ($x == "before") {
			c++;
		}
		;
		if ($c == "link") {
			this.linkCounter += c;
			return this.linkCounter;
		} else if ($c == "click") {
			this.clickCounter += c;
			return this.clickCounter;
		} else if ($c == "page") {
			this.pageCounter += c;
			return this.pageCounter;
		} else if ($c == "heatmap") {
			this.heatmapCounter += c;
			return this.heatmapCounter;
		} else if ($c == "form") {
			this.formCounter += c;
			return this.formCounter;
		}
	};
	this.getPluginConfig = function($c, $x) {
		return {
			"instance" : this,
			"mode" : $c,
			"type" : $x,
			"requestCounter" : this.getRequestCounter($c, $x)
		};
	};
	this.checkAsynchron = function($y, $z, $A, $B) {
		if (typeof (window[$y]) != "undefined") {
			if ($z) {
				$z(true, $A);
			}
			;
			return;
		} else if ($B <= 0) {
			if ($z) {
				$z(false, $A);
			}
			;
			return;
		}
		;
		window.setTimeout(function() {
			$A.checkAsynchron($y, $z, $A, ($B - 100));
		}, 100);
	};
	this.loadAsynchron = function($C, $y, $z, $B) {
		if (this.include($C)) {
			$z = ($z) ? $z : false;
			$B = ($B) ? $B : 2000;
			this.checkAsynchron($y, $z, this, $B);
		}
	};
	this.include = function(s) {
		if (!document.createElement) {
			return false;
		}
		;
		var $D = document.getElementsByTagName('head').item(0);
		var js = document.createElement('script');
		js.setAttribute('language', 'javascript');
		js.setAttribute('type', 'text/javascript');
		js.setAttribute('src', s);
		$D.appendChild(js);
		return true;
	};
	this.executePlugin = function($E) {
		if (!this.executePluginFunction
				|| typeof (this.executePluginFunction) != "string") {
			return;
		}
		;
		this.epf = false;
		var $F = this.executePluginFunction.split(";");
		for ( var z = 0; z < $F.length; z++) {
			if (typeof (window[$F[z]]) == "function") {
				this.epf = window[$F[z]];
				this.epf($E);
			}
		}
	};
	this.indexOf = function(a, b, c) {
		return a.indexOf(b, c ? c : 0);
	};
	this.wtTypeof = function(v) {
		return (typeof v != "undefined") ? 1 : 0;
	};
	this.wtLength = function(a) {
		return a != "undefined" ? a.length : 0;
	};
	this.getAttribute = function(o, a) {
		if (typeof (o.getAttribute(a)) == "string") {
			return o.getAttribute(a);
		}
		;
		if (typeof (o.getAttribute(a)) == "object"
				&& typeof (o.attributes[a]) == "object") {
			if (o.attributes[a] != null) {
				return o.attributes[a].nodeValue;
			}
		}
		;
		return "";
	};
	this.getTimezone = function() {
		return Math.round((new Date().getTimezoneOffset() / 60) * (-1));
	};
	this.wtHref = function() {
		return this.wtLocation().href;
	};
	this.wtLocation = function() {
		var r = document.location;
		if (!document.layers && document.getElementById) {
			eval("try {r=top.document.location;}catch(e){r=document.location;};");
		} else {
			r = top.document.location;
		}
		;
		return r;
	};
	this.getWebtrekkPath = function() {
		if (!document.layers && document.getElementById) {
			var $G = document.getElementsByTagName('script');
			for ( var i = 0; i < $G.length; i++) {
				if ($G[i].src.match(/webtrekk[a-z|A-Z|0-9|_]*\.js/g)) {
					return $G[i].src.replace(/webtrekk[a-z|A-Z|0-9|_]*\.js/g,
							'');
				}
			}
		}
		;
		return '';
	};
	this.isIE = this.indexOf(navigator.appName, "Microsoft") ? false : true;
	if (!this.isIE) {
		this.isOpera = this.indexOf(navigator.appName, "Opera") ? false : true;
		if (!this.isOpera) {
			this.isSafari = (navigator.vendor.toLowerCase().indexOf("apple") != -1) ? true
					: false;
			this.isChrome = (navigator.vendor.toLowerCase().indexOf("google") != -1) ? true
					: false;
		}
	}
	;
	this.url2contentId = function($H) {
		if (!$H) {
			return "no_content";
		}
		;
		var tmp = new RegExp("//(.*)").exec($H);
		if (tmp.length < 1) {
			return "no_content";
		}
		;
		var $a = tmp[1].split("?")[0].replace(/\./g, "_").replace(/\//g, ".")
				.replace(/\.{2,};/g, ".").toLowerCase();
		return $a.split(";")[0];
	};
	this.contentId = ($r.contentId) ? $r.contentId : this
			.url2contentId(document.location.href);
	this.registerEvent = function($k, e, f) {
		if ($k.addEventListener) {
			if (e == "webkitvisibilitychange") {
				this.unregisterEvent($k, e, f);
			}
			;
			$k.addEventListener(e, f, false);
		} else {
			if ($k.attachEvent) {
				if (e == "beforeunload" || e == "webkitvisibilitychange") {
					this.unregisterEvent($k, e, f);
				}
				;
				$k.attachEvent("on" + e, f);
			}
		}
	};
	this.unregisterEvent = function($k, e, f) {
		if ($k.removeEventListener) {
			$k.removeEventListener(e, f, false);
		} else {
			if ($k.detachEvent) {
				$k.detachEvent("on" + e, f);
			}
		}
	};
	this.maxlen = function(v, l) {
		if (v && v.length > l) {
			return v.substring(0, l - 1);
		}
		;
		return v;
	};
	this.wtEscape = function(u) {
		if (typeof (encodeURIComponent) == 'function') {
			return encodeURIComponent(u);
		}
		;
		return escape(u);
	};
	this.wtUnescape = function(u) {
		if (typeof (decodeURIComponent) == 'function') {
			return decodeURIComponent(u);
		}
		;
		return unescape(u);
	};
	this.decrypt = function(x) {
		if (x) {
			return eval("try {this.wtUnescape(x.replace(/([0-9a-fA-F][0-9a-fA-F])/g,'%$1'));}catch(e){''};");
		}
	};
	this.checkSC = function(x) {
		if (typeof (this.secureConfig) != 'string') {
			return false;
		}
		;
		var sc = this.secureConfig.split(';');
		for ( var i = 0; i < sc.length; i++) {
			if (sc[i] == x) {
				return true;
			}
		}
		;
		return false;
	};
	this.zeroPad = function(n, $I) {
		var $J = "000000000000" + n;
		return $J.substring(($J.length - $I), $J.length);
	};
	this.generateEid = function() {
		return '2' + this.zeroPad(Math.floor(new Date().getTime() / 1000), 10)
				+ this.zeroPad(Math.floor(Math.random() * 1000000), 8);
	};
	this.getexpirydate = function($K) {
		var $L;
		var $M = new Date();
		var $N = Date.parse($M);
		$M.setTime($N + $K * 60 * 1000);
		$L = $M.toUTCString();
		return $L;
	};
	this.setCookie = function(name, $O, $P) {
		var d = location.hostname;
		var $Q = "^[0-9]{1,3" + String.fromCharCode(125) + "\.[0-9]{1,3"
				+ String.fromCharCode(125) + "\.[0-9]{1,3"
				+ String.fromCharCode(125) + "\.[0-9]{1,3"
				+ String.fromCharCode(125) + "$";
		if (d.search($Q) == -1) {
			d = location.hostname.split(".");
			d = d[d.length - 2] + "." + d[d.length - 1];
		}
		;
		var c, f = false;
		if (this.cookieDomain) {
			var cd = this.cookieDomain.split(";");
			for ( var i = 0; i < cd.length; i++) {
				if (location.hostname.indexOf(cd[i]) != -1) {
					d = cd[i];
					f = true;
					break;
				}
			}
		}
		;
		if (f && typeof ($P) != "undefined") {
			c = name + "=" + escape($O) + ";domain=" + d + ";path=/;expires="
					+ this.getexpirydate($P);
		} else if (f) {
			c = name + "=" + escape($O) + ";path=/;domain=" + d;
		} else if (d.split('.')[0].length < 3 && typeof ($P) != "undefined") {
			c = name + "=" + escape($O) + ";path=/;expires="
					+ this.getexpirydate($P);
		} else if (d.split('.')[0].length < 3) {
			c = name + "=" + escape($O) + ";path=/";
		} else if (typeof ($P) != "undefined") {
			c = name + "=" + escape($O) + ";domain=" + d + ";path=/;expires="
					+ this.getexpirydate($P);
		} else {
			c = name + "=" + escape($O) + ";path=/;domain=" + d;
		}
		;
		document.cookie = c;
	};
	this.getCookie = function($R) {
		var $S = "" + document.cookie;
		var $T = $S.indexOf($R);
		if ($T == -1 || $R == "") {
			return "";
		}
		;
		var $U = $S.indexOf(';', $T);
		if ($U == -1) {
			$U = $S.length;
		}
		;
		return unescape($S.substring($T + $R.length + 1, $U));
	};
	this.optOut = (this.getCookie("webtrekkOptOut")) ? true : false;
	if (this.optOut) {
		this.deactivatePixel = true;
	}
	;
	this.urlParam = function($H, $V, $W) {
		var p = new Array();
		if ($H.indexOf("?") > 0) {
			p = $H.substring($H.indexOf("?") + 1).replace(/&amp;/g, "&").split(
					"&");
		}
		;
		for ( var i = 0; i < p.length; i++) {
			if (p[i].indexOf($V + "=") == 0) {
				return this.wtUnescape(p[i].substring($V.length + 1).replace(
						/\+/g, "%20"));
			}
		}
		;
		return $W;
	};
	this.allUrlParam = function($V, $W) {
		if (this.mediaCodeFrames && this.mediaCodeFrames != '') {
			var lf = this.mediaCodeFrames.split(";");
			for ( var i = 0; i < lf.length; i++) {
				var $X = false;
				eval("try { lFrame = eval(lf[i]) }catch(e){};");
				if ($X && $X != top && $X.location) {
					var $Y = this.urlParam($X.location.href, $V, $W);
					if ($Y != $W) {
						return $Y;
					}
				}
			}
			;
			return $W;
		} else {
			var topLocation = "";
			eval("try {topLocation = top.location.href;}catch(e){topLocation=document.location.href;};");
			return this.urlParam(topLocation, $V, $W);
		}
	};
	this.linkTrackInit = function() {
		for (i = 0; i < webtrekkLinktrackObjects.length; i++) {
			if (this == webtrekkLinktrackObjects[i]) {
				return;
			}
		}
		;
		webtrekkLinktrackObjects.push(this);
		if (this.linkTrack && this.linkTrack == "link") {
			this.linktrackNamedlinksOnly = false;
		}
		;
		for (c = 0; c < document.links.length; c++) {
			var name = this.getAttribute(document.links[c],
					this.linkTrackAttribute);
			if (name || !this.linktrackNamedlinksOnly) {
				this.registerEvent(document.links[c], 'mousedown',
						webtrekkLinktrack);
			}
		}
	};
	if (this.linkTrack) {
		this.linkTrackInit();
	}
	;
	this.getCCParams = function(a) {
		var p = '';
		if (this.config.customClickParameter) {
			var $Z = (this.config.customClickParameter[this.getAttribute(a,
					"name")]) ? this.config.customClickParameter[this
					.getAttribute(a, "name")]
					: this.config.customClickParameter[a.id];
			if (!$Z) {
				$Z = this.config.customClickParameter;
			}
			;
			for ( var z in $Z) {
				if (!isNaN(z) && this.wtTypeof($Z[z])
						&& typeof ($Z[z]) == 'string' && $Z[z] != '') {
					if (this.checkSC('custom')) {
						$Z[z] = this.decrypt($Z[z]);
					}
					;
					p += '&ck' + z + '=' + this.wtEscape($Z[z]);
				}
			}
		}
		;
		this.ccParams = p;
		return;
	};
	this.plugInArray = function($00, $01) {
		if (typeof ($00) != 'object') {
			return false;
		}
		;
		for ( var i = 0; i < $00.length; i++) {
			var $02 = new RegExp($00[i].toLowerCase(), 'g');
			if ($01.toLowerCase().search($02) != -1) {
				return $00[i];
			}
		}
		;
		return false;
	};
	this.quicksend = function($03, $04, $05, $06) {
		if (!this.trackDomain || !this.trackId || this.deactivatePixel
				|| this.deactivateRequest) {
			this.deactivateRequest = false;
			return;
		}
		;
		if (!$05) {
			$05 = "wt";
		}
		;
		if (typeof (this.requestTimeout) == "undefined") {
			this.requestTimeout = 5;
		}
		;
		if (this.cookie == "1") {
			$04 = "&eid=" + this.eid + "&one=" + (this.cookieOne ? "1" : "0")
					+ "&fns=" + (this.forceNewSession ? "1" : "0") + $04;
		}
		;
		if (this.cookie != "1"
				&& (this.wtTypeof(this.cookieEidTimeout) || this
						.wtTypeof(this.cookieSidTimeout))) {
			if (this.wtTypeof(this.cookieEidTimeout)
					&& this.cookieEidTimeout != '') {
				$04 = "&cet=" + this.cookieEidTimeout + $04;
			}
			;
			if (this.wtTypeof(this.cookieSidTimeout)
					&& this.cookieSidTimeout != '') {
				$04 = "&cst=" + this.cookieSidTimeout + $04;
			}
		}
		;
		if (this.pixelSampling > 0) {
			$04 += "&ps=" + this.pixelSampling;
		}
		;
		$04 = "&tz=" + this.getTimezone() + $04;
		var $07 = (location.protocol == "https:" ? "https:" : "http:");
		if (this.forceHTTPS) {
			$07 = "https:";
		}
		;
		var $08 = $07 + "//" + this.trackDomain + "/" + this.trackId + "/"
				+ $05 + "?p=" + this.version + "," + $03 + $04 + "&eor=1";
		if (this.isChrome && typeof (document.webkitHidden) != "undefined") {
			if (typeof (this.prerendering) != "object") {
				this.prerendering = new Array();
			}
			;
			if (document.webkitHidden) {
				this.prerendering.push($08);
				var pi = this;
				this.registerEvent(document, "webkitvisibilitychange",
						function() {
							pi.sendPrerendering();
						});
				return;
			}
		}
		;
		if ($06 == "saveRequest" && this.cookie == "3") {
			if (this.getCookie("saveRequestV3")) {
				this.setCookie("saveRequestV3", this.getCookie("saveRequestV3")
						+ "<<>>" + $08, this.requestTimeout);
			} else {
				this.setCookie("saveRequestV3", $08, this.requestTimeout);
			}
		} else {
			this.sendPixel($08, $05);
		}
		;
		if ($05 != 'hm') {
			this.cookieOne = false;
			this.forceNewSession = false;
			this.sentFullPixel = 1;
		}
	};
	this.sendPrerendering = function() {
		if (!document.webkitHidden) {
			for ( var i = 0; i < this.prerendering.length; i++) {
				this.sendPixel(this.prerendering[i]);
			}
			;
			this.prerendering = new Array();
		}
	};
	this.sendPixel = function($H, $05) {
		if (document.images) {
			if (!this.wtTypeof($09)) {
				var $09 = new Array();
			}
			;
			var ii = $09.length;
			$09[ii] = new Image();
			if ($05 == 'hm') {
				$09[ii].src = $H + "&hm_ts=" + new Date().getTime();
			} else {
				$09[ii].src = $H;
			}
			;
			$09[ii].onload = function() {
			};
		} else {
			document.write("<img src='" + $H + "' height='1' width='1'>");
		}
	};
	this.send = function(p, $c, ep) {
		if ($c == "link" || $c == "click") {
			this.config.linkId = p;
		}
		;
		this.config.contentId = (this.config.contentId) ? this.config.contentId
				: this.contentId;
		var $0a = ($c && ($c == "link" || $c == "click")) ? this.config.contentId
				: (p) ? p : this.config.contentId;
		if (!$0a) {
			$0a = "no_content";
		}
		;
		var $0b = "";
		var $0c = this.wtEscape($0a) + ",1,";
		$0c += this.baseparams();
		var $0d = navigator.plugins.length;
		var $0e = "";
		if ($0d > 0) {
			var $0f = Array();
			for ( var i = 0; i < $0d; i++) {
				if (navigator.plugins
						&& navigator.appName != 'Microsoft Internet Explorer') {
					if (navigator.plugins[i].name == "Shockwave Flash") {
						$0e = navigator.plugins[i].description;
					} else {
						$0e = navigator.plugins[i].name;
					}
					;
					var $0g = this.plugInArray(this.plugins, $0e);
					if ($0g && !this.plugInArray($0f, $0g)) {
						$0f.push($0g);
					}
				}
			}
			;
			$0e = $0f.join("|");
		}
		;
		if (this.paramFirst) {
			$0h = this.paramFirst.split(";");
			for ( var i = 0; i < $0h.length; i++) {
				var $V = this.getMappingParam($0h[i]);
				var $0i = $V.mapping;
				var $v = $V.index;
				if ($0i) {
					if ($v) {
						if (this.config[$0i]
								&& typeof (this.config[$0i][$v]) != "undefined"
								&& this.config[$0i][$v]) {
							$0b += "&" + $0h[i] + "="
									+ this.wtEscape(this.config[$0i][$v]);
							this.config[$0i][$v] = false;
						}
					} else if (this.config[$0i]) {
						$0b += "&" + $0h[i] + "="
								+ this.wtEscape(this.config[$0i]);
						this.config[$0i] = false;
					}
				}
			}
		}
		;
		if (typeof (ep) == "string" && ep != "") {
			ep = ep.split(/;/);
			for ( var z = 0; z < ep.length; z++) {
				if (this.wtTypeof(ep[z])) {
					$g = ep[z].split(/=/);
					if (this.checkSC('custom')) {
						$g[1] = this.decrypt($g[1]);
					}
					;
					$g[1] = this.wtEscape($g[1]);
					$0b += '&' + $g[0] + '=' + $g[1];
				}
			}
		} else {
			this.wtEpEncoded = false;
			var $0j = '';
			if (typeof (this.config.customParameter) == 'object') {
				for ( var z in this.config.customParameter) {
					if (!isNaN(z)
							&& this.wtTypeof(this.config.customParameter[z])
							&& typeof (this.config.customParameter[z]) == 'string'
							&& this.config.customParameter[z] != '') {
						if (this.checkSC('custom')) {
							this.config.customParameter[z] = this
									.decrypt(this.config.customParameter[z]);
						}
						;
						$0j += '&cp' + z + '='
								+ this.wtEscape(this.config.customParameter[z]);
					}
				}
			}
			;
			var $0k = '';
			if (typeof (this.config.customSessionParameter) == 'object') {
				for ( var z in this.config.customSessionParameter) {
					if (!isNaN(z)
							&& this
									.wtTypeof(this.config.customSessionParameter[z])
							&& typeof (this.config.customSessionParameter[z]) == 'string'
							&& this.config.customSessionParameter[z] != '') {
						if (this.checkSC('custom')) {
							this.config.customSessionParameter[z] = this
									.decrypt(this.config.customSessionParameter[z]);
						}
						;
						$0k += '&cs'
								+ z
								+ '='
								+ this
										.wtEscape(this.config.customSessionParameter[z]);
					}
				}
			}
			;
			var $0l = '';
			if (typeof (this.config.customTimeParameter) == 'object') {
				for ( var z in this.config.customTimeParameter) {
					if (!isNaN(z)
							&& this
									.wtTypeof(this.config.customTimeParameter[z])
							&& typeof (this.config.customTimeParameter[z]) == 'string'
							&& this.config.customTimeParameter[z] != '') {
						if (this.checkSC('custom')) {
							this.config.customTimeParameter[z] = this
									.decrypt(this.config.customTimeParameter[z]);
						}
						;
						$0l += '&ce'
								+ z
								+ '='
								+ this
										.wtEscape(this.config.customTimeParameter[z]);
					}
				}
			}
			;
			var $0m = '';
			if (typeof (this.config.customEcommerceParameter) == 'object') {
				for ( var z in this.config.customEcommerceParameter) {
					if (!isNaN(z)
							&& this
									.wtTypeof(this.config.customEcommerceParameter[z])
							&& typeof (this.config.customEcommerceParameter[z]) == 'string'
							&& this.config.customEcommerceParameter[z] != '') {
						if (this.checkSC('custom')) {
							this.config.customEcommerceParameter[z] = this
									.decrypt(this.config.customEcommerceParameter[z]);
						}
						;
						$0m += '&cb'
								+ z
								+ '='
								+ this
										.wtEscape(this.config.customEcommerceParameter[z]);
					}
				}
			}
			;
			if (this.config.orderValue) {
				if (this.checkSC('order')) {
					$0b += "&ov="
							+ this.wtEscape(this
									.decrypt(this.config.orderValue));
				} else {
					$0b += "&ov=" + this.wtEscape(this.config.orderValue);
				}
			}
			;
			if (this.config.orderCurrency) {
				if (this.checkSC('order')) {
					$0b += "&cr="
							+ this.wtEscape(this
									.decrypt(this.config.orderCurrency));
				} else {
					$0b += "&cr=" + this.wtEscape(this.config.orderCurrency);
				}
			}
			;
			if (this.config.orderId) {
				$0b += "&oi=" + this.wtEscape(this.config.orderId);
			}
			;
			if (this.config.product) {
				$0b += "&ba=" + this.wtEscape(this.config.product);
				if (this.config.productCost) {
					$0b += "&co=" + this.wtEscape(this.config.productCost);
				}
				;
				if (this.config.productQuantity) {
					$0b += "&qn=" + this.wtEscape(this.config.productQuantity);
				}
				;
				if (typeof (this.config.productCategory) == 'object') {
					for ( var z in this.config.productCategory) {
						if (!isNaN(z)
								&& typeof (this.config.productCategory[z]) == 'string'
								&& this.config.productCategory[z] != '') {
							$0b += "&ca"
									+ z
									+ "="
									+ this
											.wtEscape(this.config.productCategory[z]);
						}
					}
				}
				;
				if (this.config.productStatus) {
					$0b += "&st=" + this.wtEscape(this.config.productStatus);
				}
			}
			;
			if (this.config.customerId) {
				$0b += "&cd=" + this.wtEscape(this.config.customerId);
			}
			;
			if (typeof (this.config.crmCategory) == 'object') {
				for ( var z in this.config.crmCategory) {
					if (!isNaN(z)
							&& typeof (this.config.crmCategory[z]) == 'string'
							&& this.config.crmCategory[z] != '') {
						$0b += "&vc" + z + "="
								+ this.wtEscape(this.config.crmCategory[z]);
					}
				}
			}
			;
			if (this.browserLang) {
				$0b += "&la=" + this.wtEscape(this.browserLang);
			}
			;
			if (typeof (this.config.contentGroup) == 'object') {
				for ( var z in this.config.contentGroup) {
					if (!isNaN(z)
							&& typeof (this.config.contentGroup[z]) == 'string'
							&& this.config.contentGroup[z] != '') {
						$0b += "&cg" + z + "="
								+ this.wtEscape(this.config.contentGroup[z]);
					}
				}
			}
			;
			var $0n = '';
			if (this.config.campaignId
					&& !(this.config.campaignId in this.sentCampaignIds)) {
				$0b += "&mc=" + this.wtEscape(this.config.campaignId);
				$0b += "&mca=" + this.config.campaignAction.substring(0, 1);
				this.sentCampaignIds[this.config.campaignId] = true;
				if (typeof (this.config.customCampaignParameter) == 'object') {
					for ( var z in this.config.customCampaignParameter) {
						if (!isNaN(z)
								&& this
										.wtTypeof(this.config.customCampaignParameter[z])
								&& typeof (this.config.customCampaignParameter[z]) == 'string'
								&& this.config.customCampaignParameter[z] != '') {
							if (this.checkSC('custom')) {
								this.config.customCampaignParameter[z] = this
										.decrypt(this.config.customCampaignParameter[z]);
							}
							;
							$0n += '&cc'
									+ z
									+ '='
									+ this
											.wtEscape(this.config.customCampaignParameter[z]);
						}
					}
				}
			}
			;
			if (this.trackingSwitchMediaCode) {
				$0b += "&tmc=" + this.wtEscape(this.trackingSwitchMediaCode);
			}
			;
			if (this.trackingSwitchMediaCodeValue) {
				$0b += "&tmcv="
						+ this.wtEscape(this.trackingSwitchMediaCodeValue);
			}
			;
			if (this.trackingSwitchMediaCodeTimestamp) {
				$0b += "&tmct="
						+ this.wtEscape(this.trackingSwitchMediaCodeTimestamp);
			}
			;
			if (typeof ($0o) == "object"
					&& typeof ($0o.trackingSwitchMediaCode) != "undefined") {
				$0b += "&tmc=" + this.wtEscape($0o.trackingSwitchMediaCode);
			}
			;
			if (typeof ($0o) == "object"
					&& typeof ($0o.trackingSwitchMediaCodeValue) != "undefined") {
				$0b += "&tmcv="
						+ this.wtEscape($0o.trackingSwitchMediaCodeValue);
			}
			;
			if (typeof ($0o) == "object"
					&& typeof ($0o.trackingSwitchMediaCodeTimestamp) != "undefined") {
				$0b += "&tmct="
						+ this.wtEscape($0o.trackingSwitchMediaCodeTimestamp);
			}
			;
			var $0p = "";
			var $0q;
			if (typeof (wt_vt) != "undefined") {
				$0q = wt_vt;
			}
			;
			if (!this.wtTypeof($0q)) {
				$0q = this.urlParam(location.href, 'wt_vt', false);
			}
			;
			if ($0q) {
				var $0r = this.getCookie('wt_vt').split(";");
				for ( var i = 0; i < $0r.length; i++) {
					if ($0r[i].indexOf($0q + 'v') != -1) {
						$0p = '&wt_vt=' + $0r[i].split('t')[0].split('v')[1];
					}
				}
			}
			;
			if ($0p) {
				$0b += $0p;
			}
			;
			if (this.config.internalSearch) {
				$0b += "&is="
						+ this.wtEscape(this.maxlen(this.config.internalSearch,
								255));
			}
			;
			if ($0j) {
				$0b += $0j;
			}
			;
			if ($0n) {
				$0b += $0n;
			}
			;
			if ($0l) {
				$0b += $0l;
			}
			;
			if ($0m) {
				$0b += $0m;
			}
			;
			if ($0k) {
				$0b += $0k;
			}
			;
			if (this.wtTypeof(this.config.customSid)
					&& this.config.customSid != '') {
				$0b += "&csid=" + this.config.customSid;
			}
			;
			if (this.wtTypeof(this.config.customEid)
					&& this.config.customEid != '') {
				$0b += "&ceid=" + this.config.customEid;
			}
			;
			if (this.wtTypeof(this.config.xwtip) && this.config.xwtip != '') {
				$0b += "&X-WT-IP=" + this.wtEscape(this.config.xwtip);
			}
			;
			if (this.wtTypeof(this.config.xwtua) && this.config.xwtua != '') {
				$0b += "&X-WT-UA=" + this.wtEscape(this.config.xwtua);
			}
			;
			if (this.wtTypeof(this.config.xwtrq) && this.config.xwtrq != '') {
				$0b += "&X-WT-RQ=" + this.wtEscape(this.config.xwtrq);
			}
		}
		;
		if (this.config.linkId && this.config.customClickParameter) {
			var $Z = (this.config.customClickParameter[this.config.linkId]) ? this.config.customClickParameter[this.config.linkId]
					: this.config.customClickParameter;
			for ( var z in $Z) {
				if (!isNaN(z) && this.wtTypeof($Z[z])
						&& typeof ($Z[z]) == 'string' && $Z[z] != '') {
					if (this.checkSC('custom')) {
						$Z[z] = this.decrypt($Z[z]);
					}
					;
					$0b += '&ck' + z + '=' + this.wtEscape($Z[z]);
				}
			}
			;
			this.ccParams = false;
		}
		;
		if (this.config.xlc && this.config.xlct) {
			if (this.config.xlc != "" || this.config.xlct != "") {
				if (this.config.xlcv) {
					var $0s = this.getExtLifeCycles(this.config.xlc,
							this.config.xlct, this.config.xlcv);
				} else {
					var $0s = this.getExtLifeCycles(this.config.xlc,
							this.config.xlct);
				}
				;
				$0b += $0s;
			}
		}
		;
		if (this.config.linkId && this.config.sendOnUnload) {
			this.linkTrack = "manual";
			this.wtEp = $0b;
			this.wtEpEncoded = true;
			if (this.isChrome || this.isOpera || this.isSafari) {
				webtrekkUnload('noForm', "link");
			} else {
				this.registerEvent(window, (this.isIE && this
						.wtTypeof(window.onbeforeunload)) ? "beforeunload"
						: "unload", webtrekkUnload);
			}
			;
			return;
		} else if (this.config.linkId) {
			this.wtEp = $0b;
			this.wtEpEncoded = true;
			webtrekkUnload('noForm', "click");
			return;
		} else if (!this.config.contentId && !this.config.linkId) {
			this.config.contentId = this.contentId;
			this.config.linkId = "wt_ignore";
			this.wtEp = $0b;
			this.wtEpEncoded = true;
			webtrekkUnload('noForm', "click");
			return;
		} else if (this.config.sendOnUnload) {
			this.wtEp = $0b;
			this.wtEpEncoded = true;
			if (this.isChrome || this.isOpera || this.isSafari) {
				webtrekkUnload('noForm', "link");
			} else {
				this.registerEvent(window, (this.isIE && this
						.wtTypeof(window.onbeforeunload)) ? "beforeunload"
						: "unload", webtrekkUnload);
			}
			;
			return;
		}
		;
		if (this.cookie == "1") {
			if (this.cookieOne) {
				$0b += "&np=" + this.wtEscape($0e);
			}
		} else {
			$0b += "&np=" + this.wtEscape($0e);
		}
		;
		this.quicksend($0c, $0b, false, "sendRequest");
	};
	this.sendinfo = function(c, p, $c, ep) {
		if (this.cookie == "1" && !this.optOut && !this.deactivatePixel) {
			this.firstParty();
		}
		;
		if (location.href.indexOf('fb_xd_fragment') != -1) {
			return;
		}
		;
		if (typeof (c) == 'object') {
			this.config = c;
		} else {
			this.config = this.getConfig();
		}
		;
		if (!this.config.campaignId && this.mediaCode) {
			this.getMediaCode();
		}
		;
		if (this.getCookie("saveRequestV3")) {
			var $0t = this.getCookie("saveRequestV3").split("<<>>");
			for ( var i = 0; i < $0t.length; i++) {
				this.sendPixel($0t[i], "wt");
			}
			;
			this.setCookie("saveRequestV3", "", -3600);
		}
		;
		if (this.beforeSendinfoPixel != false) {
			this.beforeSendinfoPixel();
		} else {
			this.executePlugin(this.getPluginConfig(($c) ? $c : "page",
					"before"));
		}
		;
		if (this.contentId != "" || p != "" || document.layers) {
			this.send(p, $c, ep);
		}
		;
		if (this.afterSendinfoPixel != false) {
			this.afterSendinfoPixel();
		} else {
			this.executePlugin(this
					.getPluginConfig(($c) ? $c : "page", "after"));
		}
	};
	this.sendinfo_media = function($0u, mk, $0v, $0w, mg, bw, $0x, $0y) {
		if (this.wtTypeof($0z)) {
			$0z($0u, mk, $0v, $0w, mg, bw, $0x, $0y, this.unloadInstance);
		}
	};
	this.getExtLifeCycles = function(xlc, xlct, xlcv) {
		var $0A = "";
		var $0B = new Object();
		var $0C = xlc.split("|");
		for ( var i = 0; i < $0C.length; i++) {
			var $0D = $0C[i].split(";");
			for ( var j = 0; j < $0D.length; j++) {
				if (j == 0) {
					$0A += this.wtEscape($0D[j]);
				} else {
					$0A += $0D[j];
				}
				;
				$0A += ";";
			}
			;
			$0A = $0A.substr(0, $0A.length - 1);
			$0A += "|";
		}
		;
		$0A = $0A.substr(0, $0A.length - 1);
		$0B.xlcl = this.wtEscape(xlc.split("|").length);
		$0B.xlct = this.wtEscape(xlct);
		if (typeof (xlcv) != "undefined") {
			$0B.xlcv = this.wtEscape(xlcv);
		}
		;
		$0B.xlc = this.wtEscape($0A);
		var $04 = "";
		for (i in $0B) {
			$04 += "&" + i + "=" + $0B[i];
		}
		;
		return $04;
	};
	this.isOwnDomain = function(l) {
		var pt = '';
		if (this.domain) {
			if (this.domain.toUpperCase().indexOf("REGEXP:") == 0) {
				pt = new RegExp(this.domain.substring(7), "i");
				if (pt.test(this.getDomain(l))) {
					return true;
				}
			} else {
				var $0E = this.domain.split(';');
				var $0F = this.getDomain(l);
				for ( var i = 0; i < $0E.length; i++) {
					if ($0F == $0E[i]) {
						return true;
					}
				}
			}
		} else {
			return false;
		}
		;
		return false;
	};
	this.getDomain = function(l) {
		if (typeof (l) != 'string') {
			return '';
		}
		;
		l = this.wtUnescape(l);
		l = l.split('://')[1];
		var rx = new RegExp('^(?:[^\/]+:\/\/)?([^\/:]+)', 'g');
		if (typeof (l) != "undefined") {
			l = l.match(rx);
			if (l[0]) {
				return l[0].toLowerCase();
			}
		}
		;
		return '';
	};
	this.baseparams = function() {
		var $0G = screen.width
				+ "x"
				+ screen.height
				+ ","
				+ (navigator.appName != 'Netscape' ? screen.colorDepth
						: screen.pixelDepth) + ",";
		$0G += ((navigator.cookieEnabled == true) ? "1,"
				: ((navigator.cookieEnabled == false) ? "0,"
						: ((document.cookie.indexOf("=") != -1) ? "1," : "0,")));
		$0G += new Date().getTime() + ",";
		var $0H = 0;
		if (this.framesetReferrer) {
			$0H = this.wtEscape(this.framesetReferrer);
		} else if (this.getCookie("wt_ref") != "") {
			$0H = this.wtEscape(this.getCookie("wt_ref"));
			this.setCookie("wt_ref", "", -3600);
		} else {
			if (document.referrer.length > 0) {
				$0H = this.wtEscape(document.referrer);
			}
		}
		;
		if (this.sentFullPixel) {
			$0G += "2";
		} else if (!this.isOwnDomain($0H)) {
			$0G += $0H;
		} else if (this.isOwnDomain($0H)) {
			$0G += "1";
		} else {
			$0G += $0H;
		}
		;
		var h = 0;
		if (!document.layers && document.getElementById) {
			eval("try {h = top.window.innerHeight;}catch(e){};");
		} else {
			h = top.window.innerHeight;
		}
		;
		if (!h) {
			eval("try {h = top.document.documentElement.clientHeight;}catch(e){};");
		}
		;
		if (!h) {
			eval("try {h = top.document.body.clientHeight;}catch(e){};");
		}
		;
		var w = 0;
		if (!document.layers && document.getElementById) {
			eval("try {w = top.window.innerWidth;}catch(e){};");
		} else {
			w = top.window.innerWidth;
		}
		;
		if (!w) {
			eval("try {w = top.document.documentElement.clientWidth;}catch(e){};");
		}
		;
		if (!w) {
			eval("try {w = top.document.body.clientWidth;}catch(e){};");
		}
		;
		if (h && h > screen.height) {
			h = screen.height;
		}
		;
		if (w && w > screen.width) {
			w = screen.width;
		}
		;
		if (typeof (w) == 'undefined') {
			w = -1;
		}
		;
		if (typeof (h) == 'undefined') {
			h = -1;
		}
		;
		$0G += "," + w + "x" + h;
		$0G += "," + (navigator.javaEnabled() ? "1" : "0");
		return $0G;
	};
	this.getMediaCode = function(mc) {
		if (!mc) {
			if (!this.mediaCode) {
				return false;
			}
			;
			mc = this.mediaCode;
		}
		;
		if (this.mediaCodeValue) {
			v = this.mediaCodeValue.split(";");
		}
		;
		var m = mc.split(";");
		this.config.campaignId = "";
		for ( var i = 0; i < m.length; i++) {
			if (this.config.campaignId != "") {
				this.config.campaignId += ";";
			}
			;
			if (this.mediaCodeCookie) {
				if (this.getCookie('wt_' + m[i].toLowerCase()
						+ this.allUrlParam(m[i], "").toLowerCase()) == '') {
					this.config.campaignId += m[i]
							+ this.wtEscape("=" + this.allUrlParam(m[i], ""));
				} else {
					this.config.campaignId += m[i] + "=ignore";
				}
				;
				var $0I = '';
				if (this.mediaCodeCookie == 'eid') {
					$0I = 60 * 30 * 24 * 60;
				}
				;
				this.setCookie('wt_' + m[i].toLowerCase()
						+ this.allUrlParam(m[i], "").toLowerCase(), 1, $0I);
			} else {
				if (typeof (v) != "undefined" && typeof (v[i]) != "undefined"
						&& v[i] != "") {
					this.config.campaignId += m[i] + this.wtEscape("=" + v[i]);
				} else if (this.allUrlParam(m[i], "") != "") {
					this.config.campaignId += m[i]
							+ this.wtEscape("=" + this.allUrlParam(m[i], ""));
				}
			}
		}
	};
	this.searchContentIds = function() {
		var $0J = 0;
		var $0K = 0;
		this.contentIds = "";
		do {
			$0J++;
			if (this.urlParam(location.href, "wt_contentId" + $0J, false)) {
				var $0L = this.urlParam(location.href, "wt_contentId" + $0J,
						false);
				this.contentIds += "&wt_contentId" + $0J + "="
						+ this.wtEscape($0L);
				$0K++;
			}
		} while ($0K >= $0J);
	};
	this.heatmapOn = (this.wtHref().indexOf("wt_heatmap=1") >= 0);
	this.overlayOn = (this.wtHref().indexOf("wt_overlay=1") >= 0 || document.cookie
			.indexOf("wt_overlay=1") >= 0);
	if (this.wtHref().indexOf("wt_overlay=0") >= 0) {
		this.overlayOn = false;
		this.setCookie("wt_overlay", "", -1);
	}
	;
	var $0M = false;
	for (i = 0; i < webtrekkHeatmapObjects.length; i++) {
		if (this == webtrekkHeatmapObjects[i]) {
			$0M = true;
		}
	}
	;
	if (!$0M && this.heatmap && this.heatmap == "1") {
		webtrekkHeatmapObjects.push(this);
		this.registerEvent(document, "mousedown", webtrekkHeatmapClick);
	}
	;
	if (this.heatmapOn && !this.disableOverlayView) {
		this.searchContentIds();
		if (this.contentIds) {
			if (this.include(location.protocol + "//" + this.reporturl
					+ "/heatmap.pl?wt_contentId=" + this.contentIds + "&x="
					+ new Date().getTime())) {
				if (navigator.userAgent.indexOf('MSIE 6') != -1
						&& navigator.userAgent.indexOf('Windows NT 5.0') != -1) {
					alert("Click OK to start heatmap.");
				}
				;
				this.registerEvent(window, "load", webtrekkStartHeatmap);
			}
		} else {
			if (this.include(location.protocol + "//" + this.reporturl
					+ "/heatmap.pl?wt_contentId="
					+ this.wtEscape(this.contentId.split(";")[0]) + "&x="
					+ new Date().getTime())) {
				if (navigator.userAgent.indexOf('MSIE 6') != -1
						&& navigator.userAgent.indexOf('Windows NT 5.0') != -1) {
					alert("Click OK to start heatmap.");
				}
				;
				this.registerEvent(window, "load", webtrekkStartHeatmap);
			}
		}
	}
	;
	if (this.overlayOn && !this.disableOverlayView) {
		this.searchContentIds();
		this.setCookie("wt_overlay", "1");
		if (this.contentIds) {
			if (this.include(location.protocol + "//" + this.reporturl
					+ "/overlay.pl?wt_contentId=" + this.contentIds + "&x="
					+ new Date().getTime())) {
				this.registerEvent(window, "load", webtrekkStartOverlay);
			}
		} else {
			if (this.include(location.protocol + "//" + this.reporturl
					+ "/overlay.pl?wt_contentId="
					+ this.wtEscape(this.contentId.split(";")[0]) + "&x="
					+ new Date().getTime())) {
				this.registerEvent(window, "load", webtrekkStartOverlay);
			}
		}
	}
	;
	this.setPixelSampling = function($0N) {
		if (!$0N) {
			var $0N = this.pixelSampling;
		}
		;
		var trackId = this.trackId.split(",")[0];
		var $0O = this.getCookie("wt3_sample").split(";");
		var $0P = false;
		for ( var i = 0; i < $0O.length; i++) {
			if (this.indexOf($0O[i], trackId + "|" + $0N) != -1) {
				$0P = true;
			} else {
				if (this.indexOf($0O[i], trackId + "|") != -1) {
					$0O[i] = "";
				}
			}
		}
		;
		if (!$0P) {
			if (Math && Math.random && parseInt(Math.random() * $0N) == 0) {
				$0O.push(trackId + "|" + $0N + "|1");
			} else {
				$0O.push(trackId + "|" + $0N + "|0");
			}
			;
			var $0Q = 6;
			if (this.cookieEidTimeout) {
				$0Q = this.cookieEidTimeout;
			}
			;
			this.setCookie("wt3_sample", $0O.join(";"), $0Q * 30 * 24 * 60);
			$0O = this.getCookie("wt3_sample");
		} else {
			$0O = $0O.join(";");
		}
		;
		if (this.indexOf($0O, trackId + "|" + $0N + "|1") == -1) {
			this.deactivatePixel = true;
		}
	};
	if (this.pixelSampling && !this.optOut) {
		this.setPixelSampling();
	}
	;
	this.firstParty = function() {
		var $0R = this.getCookie("wt3_sid").split(";");
		var $0S = this.getCookie("wt3_eid").split(";");
		var $0T = (this.cookieSidTimeout) ? this.cookieSidTimeout : 30;
		var $0Q = (this.cookieEidTimeout) ? this.cookieEidTimeout : 6;
		var trackId = this.trackId.split(",")[0];
		var $0U = false;
		var $0V = false;
		for ( var i = 0; i < $0R.length; i++) {
			if ($0R[i].indexOf(trackId) != -1) {
				$0U = i;
				break;
			}
		}
		;
		for ( var i = 0; i < $0S.length; i++) {
			if ($0S[i].indexOf(trackId + "|") != -1) {
				$0V = i;
				break;
			}
		}
		;
		if (!$0U) {
			$0R.push(trackId);
			if ($0V) {
				this.forceNewSession = true;
			}
		}
		;
		if (!$0V) {
			this.eid = this.generateEid();
			this.cookieOne = true;
			$0S.push(trackId + "|" + this.eid);
			this.setCookie("wt3_eid", $0S.join(";"), $0Q * 30 * 24 * 60);
		} else {
			this.eid = $0S[$0V].replace(trackId + "|", "");
		}
		;
		this.setCookie("wt3_sid", $0R.join(";"));
	};
	var $0W = false;
	for (i = 0; i < webtrekkUnloadObjects.length; i++) {
		if (this == webtrekkUnloadObjects[i]) {
			$0W = true;
		}
	}
	;
	if (!$0W) {
		webtrekkUnloadObjects.push(this);
	}
	;
	this.findForm = function() {
		if (!this.form || this.formObject) {
			return;
		}
		;
		var f = document.forms;
		for ( var i = 0; i < f.length; i++) {
			var cf = f[i];
			if (this.wtTypeof(cf.elements["wt_form"])) {
				this.formObject = cf;
				return;
			}
		}
	};
	this.checkFormFocus = function($0X) {
		if ($0X == this.formFocus) {
			return 1;
		}
		;
		return 0;
	};
	this.getFormFieldValue = function(ff) {
		var p = ff.name;
		if (this.formFieldAttribute) {
			p = '';
			var tmp = false;
			tmp = this.getAttribute(ff, this.formFieldAttribute);
			if (tmp) {
				p = tmp;
			}
			;
			if (p) {
				p = p.replace(/[\.|;]/g, "_");
			}
		}
		;
		return p;
	};
	this.isFormFieldAnonym = function(ff) {
		var $0Y = "";
		if (this.formFullContent) {
			$0Y = this.formFullContent.split(";");
		}
		;
		if (this.formAnonymous || ff.type == "password" || ff.type == "text"
				|| ff.type == "textarea") {
			for ( var k = 0; k < $0Y.length; k++) {
				if ($0Y[k] == this.getFormFieldValue(ff)) {
					return false;
				}
			}
			;
			return true;
		}
		;
		return false;
	};
	this.getFieldValue = function(ff, e) {
		var $O = this.getAttribute(e, this.formValueAttribute).replace(
				/[\.|;]/g, "_");
		if (ff.type == "password" || ff.type == "text" || ff.type == "textarea") {
			return this.maxlen(e.value, 30);
		}
		;
		if (!this.isFormFieldAnonym(ff)) {
			return this.maxlen($O, 30);
		}
		;
		return "anon";
	};
	this.gatherForm = function() {
		var $0Z = ";";
		if (!this.formObject) {
			return;
		}
		;
		var f = this.formObject;
		this.formName = this.getAttribute(f, this.formAttribute) ? this
				.getAttribute(f, this.formAttribute) : this.contentId
				.split(";")[0];
		var fl = "";
		if (this.wtTypeof(f.elements["wt_fields"])) {
			fl = f.elements["wt_fields"].value;
		}
		;
		if (!fl) {
			for ( var i = 0; i < f.elements.length; i++) {
				var e = f.elements[i];
				if (this.getFormFieldValue(e)) {
					fl += this.getFormFieldValue(e) + $0Z;
				}
			}
			;
			fl = fl.substring(0, fl.lastIndexOf($0Z));
		}
		;
		var $10 = fl.split($0Z);
		var $11 = $10.length;
		var pa = "";
		var $12 = new Array();
		for ( var i = 0; i < f.elements.length; i++) {
			var e = f.elements[i], $O, $13, $14 = false;
			if (fl) {
				for ( var j = 0; j < $11; j++) {
					if (this.getFormFieldValue(e) == $10[j]) {
						$14 = true;
					}
				}
			} else {
				if (this.getFormFieldValue(e)) {
					$14 = true;
				}
			}
			;
			if ($14) {
				$O = null;
				if (e.type == 'select-multiple') {
					for ( var j = 0; j < e.options.length; j++) {
						var $0K = false;
						if (e.options[j].selected) {
							$0K = true;
							pa += ";"
									+ this.getFormFieldValue(e).replace(
											/[\.|;]/g, "_") + "." + e.type
									+ "|" + this.getFieldValue(e, e.options[j])
									+ "|" + this.checkFormFocus(e.name);
						}
						;
						if (!$0K) {
							$O = "empty";
						}
					}
				}
				;
				if (e.type == 'select-one') {
					if (e.selectedIndex != -1) {
						$O = this.getFieldValue(e, e.options[e.selectedIndex]);
						if (!$O) {
							$O = "empty";
						}
					}
				}
				;
				if (e.type == 'checkbox') {
					if (!e.checked) {
						$O = "empty";
					} else {
						$O = this.getFieldValue(e, e);
					}
				}
				;
				if (e.type == 'radio') {
					if (!e.checked) {
						$O = "empty";
					} else {
						$O = this.getFieldValue(e, e);
					}
				}
				;
				if (e.type == "password" || e.type == "text"
						|| e.type == "textarea") {
					$O = (this.getFieldValue(e, e) ? "filled_out" : "empty");
					if (!this.isFormFieldAnonym(e)) {
						$O = this.getFieldValue(e, e);
					}
					;
					if (!$O) {
						$O = "empty";
					}
				}
				;
				if ($O) {
					name = this.getFormFieldValue(e).replace(/[\.|;]/g, "_");
					$13 = ";" + name + "." + e.type + "|";
					if (pa.indexOf($13) == -1) {
						pa += $13
								+ ((this.isFormFieldAnonym(e) && $O != "empty" && $O != "filled_out") ? "anon"
										: $O) + "|"
								+ this.checkFormFocus(e.name);
					}
				}
			}
		}
		;
		if (pa) {
			pa = pa.substring(1);
		}
		;
		return pa;
	};
	this.formTrackInstall = function(f) {
		if (f) {
			this.formObject = f;
		} else {
			this.formObject = (document.forms[0]) ? document.forms[0] : false;
		}
		;
		if (this.formObject) {
			this.form = "1";
			webtrekkFormTrackInstall();
		}
	};
	if (this.form) {
		webtrekkFormTrackInstall();
	}
	;
	this.cookieManager = function(name, $15, $16) {
		var i, j;
		this.name = name;
		this.keySeperator = "~";
		this.fieldSeparator = "#";
		this.durationSeperator = "|";
		this.found = false;
		this.expires = $15;
		this.accessPath = $16;
		this.rawValue = "";
		this.fields = [];
		this.fieldsDuration = [];
		this.fieldnames = [];
		this.read = function() {
			var $y = this.name + "=";
			var $17 = document.cookie;
			this.rawValue = null;
			this.found = false;
			if ($17.length > 0) {
				$18 = $17.indexOf($y);
				if ($18 != -1) {
					$18 += $y.length;
					end = $17.indexOf(";", $18);
					if (end == -1) {
						end = $17.length;
					}
					;
					this.rawValue = $17.substring($18, end);
					this.found = true;
				}
			}
			;
			if (this.rawValue != null) {
				var sl = this.rawValue.length;
				var $19 = 0;
				var $1a = 0;
				var i = 0;
				do {
					$1a = this.rawValue.indexOf(this.fieldSeparator, $19);
					if ($1a != -1) {
						var $1b = this.rawValue.substring($19, $1a).split(
								this.durationSeperator);
						var rV = $1b[0].split(this.keySeperator);
						this.fields[rV[0]] = unescape(rV[1]);
						this.fieldsDuration[rV[0]] = parseInt(unescape($1b[1]));
						i++;
						$19 = $1a + 1;
					}
				} while ($1a != -1 & $1a != (this.rawValue.length - 1));
			}
			;
			return this.found;
		};
		this.getSize = function() {
			var $1c = new Date().getTime();
			var $1d = "";
			for (i in this.fields) {
				if (this.fieldsDuration[i] >= $1c) {
					$1d += escape(i) + this.keySeperator
							+ escape(this.fields[i]) + this.durationSeperator
							+ escape(this.fieldsDuration[i])
							+ this.fieldSeparator;
				}
			}
			;
			return $1d.length;
		};
		this.write = function() {
			var $1c = new Date().getTime();
			var $1e = true;
			var $1d = this.name + "=";
			for (i in this.fields) {
				if (this.fieldsDuration[i] >= $1c) {
					$1d += escape(i) + this.keySeperator
							+ escape(this.fields[i]) + this.durationSeperator
							+ escape(this.fieldsDuration[i])
							+ this.fieldSeparator;
					$1e = false;
				}
			}
			;
			var $1f = ($1e) ? -99999 : this.expires;
			if ($1f != "") {
				if (typeof ($1f) == "number") {
					var $1g = new Date();
					var $1h = new Date();
					$1h.setTime($1g.getTime() + 1000 * 60 * 60 * 24 * $1f);
					$1d += "; expires=" + $1h.toGMTString();
				} else {
					$1d += "; expires=" + $1f.toGMTString();
				}
			}
			;
			if (this.accessPath != null) {
				$1d += "; PATH=" + this.accessPath;
			}
			;
			var d = location.hostname;
			var $Q = "^[0-9]{1,3" + String.fromCharCode(125) + "\.[0-9]{1,3"
					+ String.fromCharCode(125) + "\.[0-9]{1,3"
					+ String.fromCharCode(125) + "\.[0-9]{1,3"
					+ String.fromCharCode(125) + "$";
			if (d.search($Q) == -1) {
				d = location.hostname.split(".");
				d = d[d.length - 2] + "." + d[d.length - 1];
			}
			;
			$1d += "; DOMAIN=" + d;
			document.cookie = $1d;
			return null;
		};
		this.remove = function() {
			this.expires = -10;
			this.write();
			return this.read();
		};
		this.get = function($1i) {
			var $1c = new Date().getTime();
			if (this.fieldsDuration[$1i] >= $1c) {
				return this.fields[$1i];
			}
			;
			return "";
		};
		this.set = function($1i, $1j, $P, $c, $1k) {
			if (!$P) {
				$P = 31536000;
			}
			;
			if (!$c) {
				$c = "";
			}
			;
			var $1c = new Date().getTime();
			if ($c == "first" && this.fields[$1i] != ""
					&& this.fields[$1i] != null
					&& this.fieldsDuration[$1i] >= $1c) {
				return this.fields[$1i];
			}
			;
			this.fields[$1i] = $1j;
			this.fieldsDuration[$1i] = $1c + (parseInt($P) * 1000);
			if (!$1k) {
				this.write();
			}
			;
			return $1j;
		};
		this.prepare = function($1i, $1j, $P, $c) {
			this.set($1i, $1j, $P, $c, true);
		};
		this.read();
	};
};
/* Ende der webtrekk.js */

/* Kompatibilit�tsmodus */
var webtrekkPixel = false;
function wt_sendinfo(p, mode, ep) {
	if (webtrekkPixel) {
		for (i in webtrekk) {
			if (i != "plugins" && i != "sendinfo") {
				webtrekkPixel[i] = webtrekk[i];
			}
		}
		webtrekkPixel.sendinfo(false, p, mode, ep);
	}
}

if (typeof (webtrekk) == "object") {
	webtrekkConfig = webtrekk;
	webtrekkPixel = new webtrekkV3();
	if (typeof (wt_updatePixel) == "function") {
		wt_updatePixel();
	}
	if (webtrekk.sendinfo && webtrekk.sendinfo == '1') {
		webtrekkPixel.sendinfo();
	}
}
/* Ende Kompatibilit�tsmodus */

