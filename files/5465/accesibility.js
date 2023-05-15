AUI().ready(function(){
    if (typeof accessibilityToolsLoadJavascript === 'undefined') {
        return
    }
    AUI().use('node', 'portal2012accessibility', function(Y) {
        if(!Liferay.portalAccessibility){
            Liferay.portalAccessibility = new Y.PortalAccessibility({
                highContrast: '.accessibility-tools .portal-high-contrast-handler',
                smallerFont: '.accessibility-tools .portal-default-font-size-handler',
                largerFont: '.accessibility-tools .portal-larger-font-size-handler',
                largestFont: '.accessibility-tools .portal-largest-font-size-handler'
            });
        }

        var button = Y.one('#' + accessibility_buttonId);
        var buttonImage = Y.one('#' + accessibility_buttonImageId);
        if (button && buttonImage) {
            button.after('click', function(e){
                if (buttonImage.hasClass(accessibility_buttonImageClassHighContrast)) {
                    buttonImage.removeClass(accessibility_buttonImageClassHighContrast);
                    buttonImage.addClass(accessibility_buttonImageClassLowContrast);
                    button.set('title', accessibility_buttonLabelLowContrast);
                } else {
                    buttonImage.removeClass(accessibility_buttonImageClassLowContrast);
                    buttonImage.addClass(accessibility_buttonImageClassHighContrast);
                    button.set('title', accessibility_buttonLabelHighContrast);
                }
            });
        }
    });
});