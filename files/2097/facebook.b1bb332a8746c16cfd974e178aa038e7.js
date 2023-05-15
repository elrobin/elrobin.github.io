function facebookRedirectOnLogin() {
	if (loginType != "none") {
		return;
	}
	if (typeof FB == "undefined") {
		return
	}
	var authResponse = FB.getAuthResponse();
	if (authResponse && authResponse.userID && authResponse.userID != "") {
		jQuery.post(
			'/facebook::is_linked',
			{
				uid : authResponse.userID
			},
			function(data) {
				if (data && data.status && data.status == "ok") {
					alert("You have logged in to Facebook");
					location.reload();
				}
			}
		);
	}
}


window.fbAsyncInit = function() {

	FB.init({
		appId: facebookAppId,
		status: true,
		cookie: true,
		xfbml: true,
		oauth: true
	});


	facebookRedirectOnLogin();

	if (typeof facebookPostInit == "function") {
		facebookPostInit();
	}

	FB.Event.subscribe('auth.logout', function(response) {
		LOG(response);
		if (loginType!="facebook") {
			return;
		}
		alert("You have logged out of Facebook");
		location.href="/?noredirect=true&mode=fblogout";
		return;
		// Trying to debug this with extra belt-and-braces call
		// Shouldn't be required.
		/*
		FB.getLoginStatus(function(res) {
			LOG(res);
			if(!res.authResponse) {
				alert("You have logged out of Facebook");
				location.href="/?noredirect=true&mode=fblogout";
			}
		});
		*/

	});

	FB.Event.subscribe('auth.login', function(response) {
		if (loginType=="none") {
			if (location.pathname == "/login" || location.pathname == "/register") {
				return;
			}
			var qs = qs_param();
			// avoid loops in case of bad coding!
			if (!qs["noredirect"]) {
				appendQS("noredirect=true&mode=fblogin");
			}
		}
	});
};


/*******************************************************************************
 * Load facebook scripts, async
 * When loaded, it calls fbAsyncInit(), defined above
 */

(function() {
	var e = document.createElement('script'); e.async = true;
	e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
	document.getElementById('fb-root').appendChild(e);
}());


/*******************************************************************************
 * Populate facebook name.
 */

function _facebookPostInit() {
	if (typeof FB == "undefined") {
		return
	}
	FB.api('/me', function(response) {
		if (response && response.name) {
			jQuery("#facebookName").text(response.name);
			jQuery("#facebookNameOuter").show();
		}
	});
}
