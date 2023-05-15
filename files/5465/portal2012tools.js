YUI.add('portal2012tools', function (Y) {
    var CCK_URL="/c/portal2012/cookie-consent";
    Y.portal2012tools = function() {
        Y.portal2012tools.superclass.constructor.apply(this, arguments);
        Y.portal2012tools._instances[Y.stamp(this)] = this;
    };
    Y.portal2012tools.NAME = 'portal2012tools';
    Y.portal2012tools.createExpandCollapseButtons = function(element, selector, labelCollapse, labelExpand){
        var elem = Y.one('#' + element);
        var all = Y.all(selector);
        var collapseAll = Y.Node.create('<a href="javascript:void(0)">' +labelCollapse+ '</a>');
        var expandAll = Y.Node.create('<a href="javascript:void(0)">' +labelExpand+ '</a>');

        elem.appendChild(collapseAll);
        elem.appendChild(expandAll);

        expandAll.on('click', function(e){
            e.preventDefault();
            all.each(function(h){
                if(h.hasClass('toggler-header-collapsed')){
                    Y.one(h).simulate('click');
                }
            });
        });
        collapseAll.on('click', function(e){
            e.preventDefault();
            all.each(function(h){
                if(!h.hasClass('toggler-header-collapsed')){
                    h.simulate('click');
                }
            });
        });
    }
    Y.portal2012tools.serialize = function(obj, prefix){
        var str = [];
        for(var p in obj) {
            var k = prefix ? prefix : p, v = obj[p];
            if(!Y.portal2012tools.isNumeric(p) && !obj.hasOwnProperty(p)){
                continue;
            }
            if(prefix && !Y.portal2012tools.isNumeric(p) && obj.hasOwnProperty(p)){
                k += "[" + p + "]";
            }
            str.push(typeof v == "object" ?
                Y.portal2012tools.serialize(v, k):
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
        return str.join("&");
    }
    Y.portal2012tools.isNumeric = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    Y.portal2012tools.addIC = function(namespace, name, value){
        var form = Y.one("#" + namespace);
        form.appendChild("<input type=\"hidden\" name=\""+name+"\" value=\""+value+"\" />");
    }
    // Panel methods
    Y.portal2012tools.addCookie = function(cookie, name, value, callback) {
        callback = typeof callback !== 'undefined' ? callback : function(){};
        if(euCookieConsent && euCookieConsent.accepted(window.location.hostname)){
            if("PORTAL2012_UI" == cookie && "language" == name)
            {
                Y.Portal2012CCK._removeNewVisitCookie();
            }
            var cookieValue = Y.portal2012tools.getCookie(cookie);
            cookieValue[name] = value;
            var expireDate = new Date();
            expireDate.setFullYear(expireDate.getFullYear() + 1);
            Y.Cookie.set(cookie, Y.JSON.stringify(cookieValue), {
                path: "/",
                expires: expireDate
            });
            callback();
        } else {
            // save it on session
            AUI().use('aui-io-request','querystring-parse', function (A) {
                var data = {
                    cookie: cookie,
                    name: name,
                    value: value,
                    persist: false
                };
                A.io.request(CCK_URL, {
                    dataType: 'json',
                    method: 'GET',
                    data: A.QueryString.stringify(data),
                    on:{
                        complete: callback
                    }
                });
            });
        }
    }
    Y.portal2012tools.getCookie = function(cookie){
        var cookieValue = Y.Cookie.get(cookie, function(stringValue){
            if(stringValue){
                return Y.JSON.parse(stringValue);
            } else {
                return {};
            }
        });
        if(!cookieValue){
            cookieValue = {};
        }
        return cookieValue;
    }
    Y.portal2012tools.cookieExists = function(cookie){
        return typeof Y.Cookie.get(cookie) != "undefined";
    }
    Y.portal2012tools.remCookie = function(cookie, callback) {
        callback = typeof callback !== 'undefined' ? callback : function(){};
        Y.Cookie.remove(cookie, {
            path: "/",
            domain: window.location.hostname
        });
        callback();
    }
    Y.portal2012tools.remCookies = function(callback, all) {
        callback = typeof callback !== 'undefined' ? callback : function(){};
        if(all) {
            Y.Portal2012CCK.refuseAll();
        } else {
            Y.Portal2012CCK.refuse();
        }
        AUI().use('aui-io-request','querystring-parse', function (A) {
            var data = {
                remove: "all"
            };
            A.io.request(CCK_URL, {
                dataType: 'json',
                method: 'GET',
                data: A.QueryString.stringify(data),
                on:{
                    complete: callback
                }
            });
        });
    }

    Y.portal2012tools.base64 = {

// private property
        _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
        encode : function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            input = this._utf8_encode(input);

            while (i < input.length) {

                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

            }

            return output;
        },

// public method for decoding
        decode : function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (i < input.length) {

                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

            }

            output = this._utf8_decode(output);

            return output;

        },

// private method for UTF-8 encoding
        _utf8_encode : function (string) {
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        },

// private method for UTF-8 decoding
        _utf8_decode : function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;

            while ( i < utftext.length ) {

                c = utftext.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i+1);
                    c3 = utftext.charCodeAt(i+2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }

            }

            return string;
        }

    }

}, '0.0.1', {
    requires: ['node', 'node-event-simulate', 'cookie', 'json-parse', 'json-stringify', 'portal2012cck']
});