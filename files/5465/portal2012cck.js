YUI.add('portal2012cck', function (Y) {

    var CCK_COOKIE_NAME = "user_consent",
            CCK_COOKIE_NEW_VISIT = "new_visit",
            CCK_PROCESSED_CLASS = "cck-processed";

    var CCK_BAR;
    Y.Portal2012CCK = function () {
    };


    Y.Portal2012CCK.createBar = function(cckBarText){
        if(!CCK_BAR){
            CCK_BAR = Y.Node.create('<div class="cck-consent-bar navbar navbar-default navbar-static-top"><div class="container"><div class="col-xs-12">' + cckBarText + ' <i class="icon-ok pull-right"></i></div></div></div>');
            var instance = this,
                    widget = Y.one(document.body);
            CCK_BAR.one('.icon-ok').on('click', function(e){
                e.preventDefault();
                instance.accept();
                instance.hideBar();
            });
            widget.prepend(CCK_BAR);
        }
    };

    Y.Portal2012CCK.init = function(cckBarText){
        var widget = Y.one(document.body), instance = this;
        if(!widget || widget.hasClass(CCK_PROCESSED_CLASS)){
            return;
        }
        var userConsentCookie = Y.Cookie.get(CCK_COOKIE_NAME),
                newVisitCookie = Y.Cookie.get(CCK_COOKIE_NEW_VISIT);
        if(userConsentCookie == null){
            if(newVisitCookie == null){
                instance._addNewVisitCookie();
                instance.createBar(cckBarText);
            } else {
                instance._removeNewVisitCookie();
                instance.accept();
            }
        } else {
            instance._removeNewVisitCookie();
        }
    };

    Y.Portal2012CCK._addNewVisitCookie = function(){
        Y.Cookie.set(CCK_COOKIE_NEW_VISIT, "true", {
            path: "/"
        });
    },

    Y.Portal2012CCK._removeNewVisitCookie = function(){
        Y.Cookie.remove(CCK_COOKIE_NEW_VISIT, {
            path: "/"
        });
    },

    Y.Portal2012CCK._addNewVisitCookie = function(){
        Y.Cookie.set(CCK_COOKIE_NEW_VISIT, "true", {
            path: "/"
        });
    },

    Y.Portal2012CCK.hideBar = function(){
        var widget = Y.one(document.body);
        CCK_BAR.remove();
    };

    Y.Portal2012CCK.accept = function(){
        var expireDate = new Date();
        expireDate.setFullYear(expireDate.getFullYear() + 1);
        Y.Cookie.set(CCK_COOKIE_NAME, "true", {
            path: "/",
            expires: expireDate
        });
    };

    Y.Portal2012CCK.refuse = function(){
        var expireDate = new Date();
        expireDate.setFullYear(expireDate.getFullYear() + 1);
        Y.Cookie.set(CCK_COOKIE_NAME, "false", {
            path: "/",
            expires: expireDate
        });
    };

    Y.Portal2012CCK.refuseAll = function(){
        Y.Cookie.remove(CCK_COOKIE_NAME, {
            path: "/"
        });
        Y.Cookie.set(CCK_COOKIE_NAME, "all",{
            path: "/"
        });
    };

    Y.Portal2012CCK.accepted = function(){
        var s = Y.Cookie.get(CCK_COOKIE_NAME);
        return s == null || s == "true";
    };

    Y.Portal2012CCK.getWebtrendsCookieType = function(){
        if(this.accepted()){
            return "firstPartyOnly";
        } else {
            return "none";
        }
    };
}, '0.0.1', {
    requires: ['node', 'cookie']
});