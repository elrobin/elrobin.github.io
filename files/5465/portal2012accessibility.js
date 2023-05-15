YUI.add('portal2012accessibility', function(Y) {
    var LANGUAGE_PORTLET_PROCCESSED = "accessibilityLanguagePortletProcessed",
        PORTAL_ACCESSIBILITY_FONT_DEFAULT_CLASS = "default-font-size",
        PORTAL_ACCESSIBILITY_FONT_LARGER_CLASS = "acct-larger-font-size",
        PORTAL_ACCESSIBILITY_FONT_LARGEST_CLASS = "acct-largest-font-size",
        PORTAL_ACCESSIBILITY_HIGH_CONTRAST_CLASS = "high-contrast",
        COOKIE_PORTAL_ACCESSIBILITY_FONT = "fontSize",
        COOKIE_PORTAL_ACCESSIBILITY_HIGH_CONTRAST = "highContrast",
        COOKIE_PORTAL_ACCESSIBILITY = "PORTAL2012_ACCESSIBILITY";

    Y.PortalAccessibility = function (config) {
        Y.PortalAccessibility.superclass.constructor.apply(this, arguments);
    }

    Y.PortalAccessibility.NAME = "portalAccessibility";

    Y.PortalAccessibility.ATTRS = {
        highContrast : {
            value: null,
            setter: function(node) {
                if(typeof node == typeof Y.Node){
                    return node;
                }
                var n = Y.one(node);
                if (!n) {
                    Y.fail('DD.Drag: Invalid dragNode Given: ' + node);
                }
                return n;
            }
        },
        smallerFont : {
            value: null,
            setter: function(node) {
                if(typeof node == typeof Y.Node){
                    return node;
                }
                var n = Y.one(node);
                if (!n) {
                    Y.fail('DD.Drag: Invalid dragNode Given: ' + node);
                }
                return n;
            }
        },
        largerFont : {
            value: null,
            setter: function(node) {
                if(typeof node == typeof Y.Node){
                    return node;
                }
                var n = Y.one(node);
                if (!n) {
                    Y.fail('DD.Drag: Invalid dragNode Given: ' + node);
                }
                return n;
            }
        },
        largestFont : {
            value: null,
            setter: function(node) {
                if(typeof node == typeof Y.Node){
                    return node;
                }
                var n = Y.one(node);
                if (!n) {
                    Y.fail('DD.Drag: Invalid dragNode Given: ' + node);
                }
                return n;
            }
        }
    }

    Y.extend(Y.PortalAccessibility, Y.Base, {
        initializer : function(cfg) {
            this.initAccessibility();
        },
        initAccessibility : function(){
            var self = this;
            var highContrast = self.get('highContrast');
            var smallerFont = self.get('smallerFont');
            var largerFont = self.get('largerFont');
            var largestFont = self.get('largestFont');
            smallerFont.on('click', function(e){
                e.preventDefault();
                var body = Y.one(document.body);
                body.addClass(PORTAL_ACCESSIBILITY_FONT_DEFAULT_CLASS);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_LARGER_CLASS);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_LARGEST_CLASS);
                Y.portal2012tools.addCookie(COOKIE_PORTAL_ACCESSIBILITY,
                    COOKIE_PORTAL_ACCESSIBILITY_FONT, PORTAL_ACCESSIBILITY_FONT_DEFAULT_CLASS);
            });
            largerFont.on('click', function(e){
                e.preventDefault();
                var body = Y.one(document.body);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_DEFAULT_CLASS);
                body.addClass(PORTAL_ACCESSIBILITY_FONT_LARGER_CLASS);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_LARGEST_CLASS);
                Y.portal2012tools.addCookie(COOKIE_PORTAL_ACCESSIBILITY,
                    COOKIE_PORTAL_ACCESSIBILITY_FONT, PORTAL_ACCESSIBILITY_FONT_LARGER_CLASS);
            });
            largestFont.on('click', function(e){
                e.preventDefault();
                var body = Y.one(document.body);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_DEFAULT_CLASS);
                body.removeClass(PORTAL_ACCESSIBILITY_FONT_LARGER_CLASS);
                body.addClass(PORTAL_ACCESSIBILITY_FONT_LARGEST_CLASS);
                Y.portal2012tools.addCookie(COOKIE_PORTAL_ACCESSIBILITY,
                    COOKIE_PORTAL_ACCESSIBILITY_FONT, PORTAL_ACCESSIBILITY_FONT_LARGEST_CLASS);
            });
            highContrast.on('click', function(e){
                e.preventDefault();
                var body = Y.one(document.body);
                if(body.hasClass(PORTAL_ACCESSIBILITY_HIGH_CONTRAST_CLASS)){
                    body.removeClass(PORTAL_ACCESSIBILITY_HIGH_CONTRAST_CLASS);
                    Y.portal2012tools.addCookie(COOKIE_PORTAL_ACCESSIBILITY,
                        COOKIE_PORTAL_ACCESSIBILITY_HIGH_CONTRAST, false);
                } else {
                    body.addClass(PORTAL_ACCESSIBILITY_HIGH_CONTRAST_CLASS);
                    Y.portal2012tools.addCookie(COOKIE_PORTAL_ACCESSIBILITY,
                        COOKIE_PORTAL_ACCESSIBILITY_HIGH_CONTRAST, true);
                }
            });
        },
        destructor : function() {
            Y.Event.purgeElement(this.get('highContrast'));
            Y.Event.purgeElement(this.get('smallerFont'));
            Y.Event.purgeElement(this.get('largerFont'));
        }
    });

    Y.namespace('Plugin').AccessibilityLanguagePortlet = Y.Base.create('accessibilityLanguagePortlet', Y.Plugin.Base, [], {
        _addComponentList : function(){
            var compList = Y.all("." + LANGUAGE_PORTLET_PROCCESSED + "li");
            if(compList){
                compList.each(function(z){

                });
            }
        },
        initializer : function () {
            var _this = this;

            var host = _this.get('host');



            if(host.hasClass(LANGUAGE_PORTLET_PROCCESSED)){
                return;
            }

            host.addClass(LANGUAGE_PORTLET_PROCCESSED);

            _this._addComponentList();

        },

        destructor : function () {
            var host = this.get('host');
            host.removeClass(LANGUAGE_PORTLET_PROCCESSED);
        }
    }, {
        NS : 'accessibilityLanguagePortlet',
        ATTRS : {
        }
    });


}, 'portalop-2014.05.28-17-20' ,{requires:['node', 'base-build', 'plugin','event-mouseenter', 'event-outside', 'event-focus', 'portal2012tools']});