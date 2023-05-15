var QICreative = "wol2";
var SurveyResponseID = "";
window.addEventListener("qsi_js_loaded", trackQI, false);
window.addEventListener("qsi_js_loaded", showSurveyElems, false);
function trackQI(){
	digitalData = window.digitalData ? digitalData : {};
	digitalData.event = digitalData.event || [];
	digitalData.event.push({
			"eventData":{
				"surveyID" : SurveyResponseID
			},
			"eventName":"trackSurvey"
	});
}
function showSurveyElems(){
	$(".survey-load-hide").show();
}
var QILoader = {
	runQIIntercept : function(interceptID){
		
		(function() {
			var g = function(e, h, f, g) {
				this.get = function(a) {
					for (var a = a + "=", c = document.cookie.split(";"), b = 0, e = c.length; b < e; b++) {
						for (var d = c[b];
							" " == d.charAt(0);) d = d.substring(1, d.length);
						if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
					}
					return null
				};
				this.set = function(a, c) {
					var b = "",
						b = new Date;
					b.setTime(b.getTime() + 6048E5);
					b = "; expires=" + b.toGMTString();
					document.cookie = a + "=" + c + b + "; path=/; "
				};
				this.check = function() {
					var a = this.get(f);
					if (a) a = a.split(":");
					else if (100 != e) "v" == h && (e = Math.random() >= e / 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(":"));
					else return !0;
					var c = a[1];
					if (100 == c) return !0;
					switch (a[0]) {
						case "v":
							return !1;
						case "r":
							return c = a[2] % Math.floor(100 / c), a[2]++, this.set(f, a.join(":")), !c
					}
					return !0
				};
				this.go = function() {
					if (this.check()) {
						var a = document.createElement("script");
						a.type = "text/javascript";
						a.src = g + "&t=" + (new Date()).getTime();
						document.body && document.body.appendChild(a)
					}
				};
				this.start = function() {
					var a = this;
					a.go()
				}
			};
			try {
				(new g(100, "r", "QSI_S_"+interceptID, "//zn8wxbnuhlfeu1aqt-wiley.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=" + interceptID + "&Q_LOC=" + encodeURIComponent(window.location.href))).start()
			} catch (i) {}
		})(); 
	},
	checkOSDFrame : function (){
		nodes = document.getElementsByTagName('iframe');
		for(i=0; i<nodes.length; i++){
			if(nodes.getAttribute("name")=="google_osd_static_frame"){
				return true;
			}
		}
		return false;
	},
	runSurveyInterceptAfterAds : function(){
		if(QILoader.checkOSDFrame){
			clearInterval(QILoader.QIInterval);
			QILoader.runQIIntercept('SI_29r6u67C30RWd01');
		}
	},
	QIInterval : '',
	start : function(){
		if(!(_satellite.readCookie("randomizeUser"))){
			_satellite.setCookie("randomizeUser", Math.random() );
		}
		if(_satellite.readCookie("randomizeUser") > 0.77 || document.location.search.indexOf("surveyon")>=0){
			var QIDiv = document.createElement('DIV');
			QIDiv.setAttribute('id',SI_29r6u67C30RWd01); 
			document.body.appendChild(QIDiv);
			SurveyResponseID = _satellite.readCookie("randomizeUser")*Math.pow(10,16);
			if(window.googletag){
				QILoader.QIInterval = setInterval(QILoader.runSurveyInterceptAfterAds, 2000);
			}
			else QILoader.runQIIntercept('SI_29r6u67C30RWd01');
		}
		if( (_satellite.readCookie("randomizeUser") > 0.66 && _satellite.readCookie("randomizeUser") <= 0.67) || document.location.search.indexOf("toctest1")>=0){
			//todo add additional criteria for journal homepages
			if(window.$ && $(".journal-actions-container a[href*=doUpdateAlert]").size()>0){
				$(".journal-actions-container a[href*=doUpdateAlert]").closest('li').hide()
				$(".journal-body .journal-actions-container").prepend('<div id="SI_erhK0PKCO6ypI45"><h3 class="survey-load-hide" style="display:none;padding-left:44px;">Sign up for email alerts</div');
				QILoader.runQIIntercept('SI_erhK0PKCO6ypI45');
			}
			
		}
		else if( (_satellite.readCookie("randomizeUser") > 0.56 && _satellite.readCookie("randomizeUser") <= 0.57) || document.location.search.indexOf("toctest2")>=0){
			//todo add additional criteria for engaged users and suppression logic
			if(window.$ && $(".journal-actions-container a[href*=doUpdateAlert]").size()>0){
				var QIDiv = document.createElement('DIV');
				QIDiv.setAttribute('id','SI_0Ii9zo2rsqWbxbf'); 
				document.body.appendChild(QIDiv);
				QILoader.runQIIntercept('SI_0Ii9zo2rsqWbxbf');
			}
			
		}

	}
}
QILoader.start();

