YUI().use('node', 'aui-popover', 'io-base', 'node-event-simulate', 'cookie', 'aui-modal', function (Y) {

    /*'liferay-sign-in-modal', 'event-outside','transition'*/
    var myPortalDropDownMenu = Y.one('.myportalwrapper .dropdown-menu');
    var removePopup = Y.one('.singout-popup-container .singout-popup');
    if (myPortalDropDownMenu != null) {
        var signOutLink = myPortalDropDownMenu.one(".signout a");
    }

    var target = Y.one('#myPortal');

    var isBasketEmpty;
    if (signOutLink != null) {
        signOutLink.on('click', function (e) {
            if (!myPortal_basketHasItems || myPortal_basketHasItems.length == 0) {
                return;
            }
            e.preventDefault();
            Y.io(myPortal_basketHasItems, {
                method: 'GET',
                on: {
                    success: function (id, response) {
                        isBasketEmpty = JSON.parse(response.response);
                        if (removePopup != null && isBasketEmpty != null && isBasketEmpty == true) {
                            showValidatePopupBeforeLogOut(signOutLink.get('href'));
                        }
                        else {
                            window.location = signOutLink.get('href');
                        }
                    },
                    error: function () {
                        window.location = signOutLink.get('href');
                    }
                }
            });

        });
    }

    if (!(typeof myPortal_getUserDashboardInfoURL === "undefined") ) {
        //to protect against pages where only the JS is included
        Y.io(myPortal_getUserDashboardInfoURL, {
            method: 'GET',
            on: {
                success: function (id, response) {
                    var userDashboardInfo = JSON.parse(response.response);
                    updateMenu(userDashboardInfo);

                },
                error: function () {
                    console.log('error loading user dashboard info')
                }
            }
        });
    }

    function showValidatePopupBeforeLogOut(signOutLink) {

        var popover = new Y.Popover({
                    align: {
                        node: target,
                        points: [Y.WidgetPositionAlign.TC, Y.WidgetPositionAlign.BC]
                    },
                    bodyContent: removePopup.getHTML(),
                    position: 'bottom'
                }
        ).render();

        var popoverNode = popover ? popover.get('srcNode') : undefined;
        if (popoverNode) {
            popoverNode.get('parentNode').setStyle('z-index', '');
            var removeButton = popoverNode.one('.btn-remove');
            var cancelButton = popoverNode.one('.btn-cancel');
            if (removeButton) {
                removeButton.on('click', function () {
                    window.location = signOutLink;
                });
            }
            if (cancelButton) {
                cancelButton.on('click', function () {
                    popover.destroy();
                });
            }
        }
    }

    showLoginPopup = function (renderUrl, title, dialogHeight) {
        var modal = new Y.Modal(
                {
                    bodyContent: '<iframe src="' + renderUrl + '" frameborder="0" id="loginPopup"></iframe>',
                    destroyOnHide: true,
                    headerContent: title,
                    centered: true,
                    modal: true,
                    resizable: {
                        handles: 'b, r'
                    },
                    visible: true,
                    height: 500,
                    cssClass: 'login-popup-modal'
                }
        ).render();
        /*var loginIframe = Y.one('#loginPopup');
         if (loginIframe) {
         loginIframe.on('load', function (e) {
         AUI().use('liferay-service', function (a) {
         try {
         var signedIn = Liferay.ThemeDisplay.isSignedIn();
         alert(signedIn);
         } catch (e) {
         console.log(e);
         }
         });
         });
         }*/
    }

    function getUrlParameters() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    shouldReload = function () {
        try {
            var urlParameters = getUrlParameters();
            if (urlParameters["p_p_state"] &&
                    ( urlParameters["p_p_state"] === "maximized" || urlParameters["p_p_state"] === "pop_up")
            ) {
                return false;
            }
        } catch (e) {
            console.log(e);
        }
        return true;
    }

    var signedIn = Liferay.ThemeDisplay.isSignedIn();
    if (signedIn && (typeof isConfig === 'undefined' || isConfig === false)) {//portlet in an iframe){
        var isPopup = false;
//        if (window.opener) {
//            isPopup = true;
//        }
//        else {
        if (window.top !== window.self) {
            isPopup = true;
        }
        else {
            if (window.parent != window) {
                isPopup = true;
            }
        }
//        }

        if (isPopup && shouldReload()) {
            window.top.location.reload();
        }
    }


    closeDialog = function () {
        YUI().use('node', 'portal2012dialog', function (A) {
            if (A.portal2012dialog.getDialog() != undefined) {
                A.portal2012dialog.getDialog().hide();
            }
        });
    }

    function displayMenu(menuCount, menuName) {
        if (!menuCount) {
            return;
        }
        if (menuCount > 0) {

            var menuItem = Y.one('#' + myPortalNamespace + menuName + 'Menu');
            if (menuItem) {
                menuItem.removeClass('hidden');
                var spanItem = Y.one('#' + myPortalNamespace + menuName + 'Number');
                if (spanItem) {
                    spanItem.html('' + menuCount);
                }
            }
        }
    }

    updateMenu = function (userDashboardInfo) {
        var instance = this;
        if (!userDashboardInfo) {
            return;
        }

        displayMenu(userDashboardInfo.numberOfAddresses, 'myAddresses');
        displayMenu(userDashboardInfo.numberOfUserPublications, 'myLists');
        displayMenu(userDashboardInfo.numberOfWidgets, 'myWidgets');
        displayMenu(userDashboardInfo.numberOfQueries, 'savedQuery');
        displayMenu(userDashboardInfo.numberOfAlerts, 'alertMe');
        displayMenu(userDashboardInfo.numberOfRssFeeds, 'myRss');
        displayMenu(userDashboardInfo.numberOfAnnotations, 'myAnnotations');
        displayMenu(userDashboardInfo.numberOfUserRatings, 'myRatings');
        displayMenu(userDashboardInfo.numberOfOrders, 'myOrders');
    }


})
;