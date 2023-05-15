AUI().ready(function () {

    YUI().use('base', 'widget', 'aui-io-request', function (Y) {
        //setupDocumentRating();
    });

    var POP_UP_CONTENT_ID = 'popup-content';
    var dialogCloseButton = '<button type="button" onClick=" AUI().use(\'node\', \'portal2012dialog\', function(A){if (A.portal2012dialog.getDialog() != undefined) {A.portal2012dialog.getDialog().hide();}});">Close</button>';

    showPopUp = function(renderUrl, title, dialogHeight, actionName) {
        //window.location.hash=actionName;
        AUI().use('node', 'portal2012dialog', function(A){
            A.portal2012dialog.show(renderUrl, title, 'auto');
            try {
                YUI.one(".myportalwrapper ul.worpmenu").addClass('colapsed');
            } catch (exception) {

            }
        });
    };

    asyncSubmitDetailActionsForm = function(portletNamespace, actionName, actionURL) {
        var formValid = false;
        AUI().use('node','aui-form-validator', function(A){
            var emailInput = A.one(".form_user_email input[type='text']");
            if (!emailInput) {
                emailInput = A.one(".form_user_email .control-group input[type='text']");
            }
            if (!emailInput) {
                emailInput = A.one(".form_user_email .control-group.error input[type='text']");
            }

            if(emailInput != null && emailInput != "null") {
                var email = emailInput.get('value');
                if(email == '') {
                    formValid = false;
                    A.one(".form_user_email .control-group").addClass('error');
                    emailInput.focus();
                } else {
                    var emailRegexStr = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
                    formValid = emailRegexStr.test(email);
                }
            } else {
                formValid = true;
            }

            var form = A.one('#' + portletNamespace + 'sa_fm');
            var liferayForm = Liferay.Form.get(form.attr('id'));
            if (liferayForm) {
                var validator = liferayForm.formValidator;

                if (A.instanceOf(validator, A.FormValidator)) {
                    validator.validate();

                    hasErrors = validator.hasErrors();

                    if (hasErrors) {
                        validator.focusInvalidField();

                        return;
                    }
                }
            }
        });

        AUI().use('aui-io-request', 'portal2012dialog', function (A) {
            if(formValid) {
                A.io.request(actionURL, {
                    method: 'POST',
                    data: {actionName: actionName},
                    form: {
                        id: portletNamespace + 'sa_fm'
                    },
                    on: {
                        success: function () {
                            var responseData = this.get('responseData');
                            if (A.portal2012dialog.getDialog() != undefined) {
                                A.portal2012dialog.getDialog().set('bodyContent', "<br/><p>" + responseData + "</p><p>" + dialogCloseButton + "</p>");
                            }
                        }
                    }
                });
            }
        });
    }

    closeDialog = function() {
        AUI().use('node', 'portal2012dialog', function(A){
            if (A.portal2012dialog.getDialog() != undefined) {
                A.portal2012dialog.getDialog().hide();
            }
        });
    }

    checkFrequencyType = function(element) {
        if(element.value == "WEEKLY") {
            document.getElementById("dayOfWeek_Selector").style.display = "block";
        } else {
            document.getElementById("dayOfWeek_Selector").style.display = "none";
        }
    }

});