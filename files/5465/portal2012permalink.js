AUI().add('portal2012permalink', function (Y) {
    var getUserPublicationListsURL = '/portal2012-services/publicationLists?userId={userId}&systemId={systemId}';
    var portal2012permalink = Y.Component.create({
        NAME: "portal2012permalink",
        ATTRS: {},
        prototype: {
            permalinkBox: null,
            options: {},
            initPermalink: function (node, config) {
                var options = {
                    cellarId: '000000',
                    url: 'http://localhost:7001/',
                    urlRdf: 'http://localhost:7001/',
                    urlShort: 'http://localhost:7001/',
                    urlJs: 'http://localhost:7001/',
                    urlRss: 'http://localhost:7001/',
                    urlSave: 'http://localhost:7001/',
                    getUserPublicationListsURL: '',
                    authenticated: false,
                    labels: {},
                    offsetX: 0,
                    offsetY: 0,
                    displayWidget: false
                };
                if (typeof config !== 'undefined') {
                    if (typeof config.cellarId !== 'undefined') {
                        options.cellarId = config.cellarId;
                    }
                    if (typeof config.url !== 'undefined') {
                        options.url = config.url;
                    }
                    if (typeof config.urlRdf !== 'undefined') {
                        options.urlRdf = config.urlRdf;
                    }
                    if (typeof config.urlShort !== 'undefined') {
                        options.urlShort = config.urlShort;
                    }
                    if (typeof config.urlJs !== 'undefined') {
                        options.urlJs = config.urlJs;
                    }
                    if (typeof config.urlRss !== 'undefined') {
                        options.urlRss = config.urlRss;
                    }
                    if (typeof config.urlSave !== 'undefined') {
                        options.urlSave = config.urlSave;
                    }
                    if (typeof config.getUserPublicationListsURL !== 'undefined') {
                        options.getUserPublicationListsURL = config.getUserPublicationListsURL;
                    }
                    if (typeof config.authenticated !== 'undefined') {
                        options.authenticated = config.authenticated;
                    }
                    if (typeof config.labels !== 'undefined') {
                        options.labels = config.labels;
                    }
                    if (typeof config.offsetX !== 'undefined') {
                        options.offsetX = config.offsetX;
                    }
                    if (typeof config.offsetY !== 'undefined') {
                        options.offsetY = config.offsetY;
                    }
                    if (typeof config.uuid !== 'undefined') {
                        options.uuid = config.uuid;
                    }
                    if (typeof config.portalUrl !== 'undefined') {
                        options.portalUrl = config.portalUrl;
                    }
                    if (typeof config.editWidgetUrl !== 'undefined') {
                        options.editWidgetUrl = config.editWidgetUrl;
                    }
                    if (typeof config.previewWidgetUrl !== 'undefined') {
                        options.previewWidgetUrl = config.previewWidgetUrl;
                    }

                    if (typeof config.displayWidget !== 'undefined') {
                        options.displayWidget = config.displayWidget;
                    }
                }
                this.options = options;
                this.initPermalinkBox(options);
                var _this = this;

                var showAnim = new Y.Anim({
                    node: _this.permalinkBox,
                    to: {
                        opacity: 1
                    },
                    duration: 0.5
                });

                node.on("click", function () {
                    _this.initDisplayBox(_this, node, options);
                    showAnim.run();
                });
                node.on('key', function (event) {
                    _this.initDisplayBox(_this, node, options);
                    showAnim.run();
                }, 'enter');

            },
            _initTest: function (_this, options) {
                alert("test");
            },

            getWidgetContent: function (options) {
                var widgetLoader = {};
                widgetLoader.portalURL = options.portalUrl;
                widgetLoader.uuid = options.uuid;
                widgetLoader.widgetType = '3';
                widgetLoader.cellarId = options.cellarId;

                var widgetJson = JSON.stringify(widgetLoader);
                var permanentLinkWidget =
                    '<script type="text/javascript" src="' + options.portalUrl + '/portal2012-widgets/html/widget/js/widgetload.js"></script>\n' +
                    '<script type="application/json">\n' + widgetJson + '\n</script>';
                return permanentLinkWidget;
            },

            initDisplayBox: function (_this, node, options) {
                if (!_this.permalinkBox.get('parentNode') || _this.permalinkBox.get('parentNode') != Y.one(document.body)) {
                    if (_this.permalinkBox.get('parentNode')) {
                        _this.permalinkBox.get('parentNode').removeChild(_this.permalinkBox);
                    }
                    var bodyNode = Y.one(document.body);
                    bodyNode.append(_this.permalinkBox);
                    _this.permalinkBox.setStyle('opacity', 0);
                }

                _this.permalinkBox.one('#permanentLink').set('value', options.url);

                if (options.urlRdf != "") {
                    _this.permalinkBox.one('#permanentLinkRdf').set("href", options.urlRdf);
                }

                _this.permalinkBox.one('#permanentLinkShort').set("href", options.urlShort);
                _this.permalinkBox.one('#permanentLinkSave').set("href", options.urlSave);
                if (options.urlRss != "") {
                    _this.permalinkBox.one('#permanentLinkRss').set("href", options.urlRss);
                }


                var permanentLinkWidgetControl = _this.permalinkBox.one('#permanentLinkWidget');
                if (this.options.displayWidget && permanentLinkWidgetControl) {
                    permanentLinkWidgetControl.set("value", _this.getWidgetContent(options));
                }
                _this.permalinkBox.one('#save-publication-container').html('');
                _this.permalinkBox.setStyle('display', 'block');
                _this.permalinkBox.setX(node.getX() - _this.permalinkBox.get('offsetWidth') + options.offsetX);
                _this.permalinkBox.setY(node.getY() + options.offsetY);

                _this.permalinkBox.one('#permanentLink').focus();
                _this.permalinkBox.on('key', function () {
                    _this.hidePermalinkBox();
                    node.focus();
                }, 'esc');

            },
            hidePermalinkBox: function () {
                var _this = this;
                var hideAnim = new Y.Anim({
                    node: _this.permalinkBox,
                    to: {
                        opacity: 0
                    },
                    duration: 0.5
                });

                hideAnim.on('end', function () {
                    if (_this.permalinkBox.get('parentNode')) {
                        _this.permalinkBox.get('parentNode').removeChild(_this.permalinkBox);
                    }
                });
                hideAnim.run();
            },
            initPermalinkBox: function (options) {
                if (this.permalinkBox) {
                    return;
                }
                var labels = this.options.labels;
                var _this = this;
                var closeButton = Y.Node.create('<a href="#"><span class="icon-container icon-modal-close" tabindex="-1">x</span></a>');
                var htmlBoxStructure = '<div class="previewer permalink-preview">' +
                        '<div class="preview-container">' +
                        '<h6><span class="icon-container icon-link-law"></span>' + labels.title + '</h6>' +
                        '<input name="permalink" type="text" id="permanentLink" value="" />' +
                        '<ul class="menu-list horizontal">';
                if (this.options.urlRss != "") {
                    htmlBoxStructure += '<li class="list-item first"><a href="javascript:void(0)" id="permanentLinkRss"><span class="icon-container icon-triarrow-bullet"></span>' + labels.rss + '</a></li>';
                }

                if (this.options.urlRdf != "") {
                    htmlBoxStructure += '<li class="list-item"><a href="javascript:void(0)" id="permanentLinkRdf"><span class="icon-container icon-triarrow-bullet"></span>' + labels.rdf + '</a></li>';
                }

                var editWidgetUrl = options.editWidgetUrl;

                htmlBoxStructure +=
                        '<li class="list-item"><a href="javascript:void(0)" id="permanentLinkSave"><span class="icon-container icon-triarrow-bullet"></span>' + labels.saveLink + '</a></li>' +
                        '<li class="list-item last"><a href="javascript:void(0)" id="permanentLinkShort"><span class="icon-container icon-triarrow-bullet"></span>' + labels.shortUrl + '</a></li>' +
                        '</ul>' +
                        '<div id="save-publication-container"></div>';
                if (this.options.displayWidget) {
                    htmlBoxStructure += '<div class="strong">' + labels.widget + '</div>' +
                            '<textarea id="permanentLinkWidget" readonly></textarea>' +
                            '<div><a href="javascript:void(0)" class="preview" style="margin-right:10px">' + labels.preview + '</a><a href="' + editWidgetUrl + '" class="editTheWidget">' + labels.editTheWidget + '</a></div>' +
                            '<div id="widgetFrame" class="widgetFrame" style="display: none" ><div>' +
                            '<p class="desc">' + labels.widgetText + '</p>';
                }
                htmlBoxStructure += '</div></div>';

                this.permalinkBox = Y.Node.create(htmlBoxStructure);

                this.permalinkBox.one('h6').insert(closeButton, 'before');

                if (this.options.displayWidget) {
                    var widgetURL = options.previewWidgetUrl + "?ns=" + options.uuid + "&cellarIDs=" + options.cellarId;
                    this.permalinkBox.one(".widgetFrame").html('<iframe src="' + widgetURL + '" frameborder="0" width="100%" height="351"></iframe>');
                    this.permalinkBox.one(".preview").on("click", function () {
                        var widgetFrame = AUI().one('.widgetFrame');

                        if (widgetFrame.getStyle("display") === "none") {
                            widgetFrame.setStyle("display", "block");
                        }
                        else {
                            widgetFrame.setStyle("display", "none");
                        }
                    });
                }

                this.permalinkBox.one('#permanentLinkShort').on('click', function (e) {
                    e.preventDefault();
                    var anchor = Y.one(e.currentTarget);
                    Y.io(anchor.get("href"), {
                        method: 'GET',
                        on: {
                            success: function (id, result) {
                                _this.permalinkBox.one('#permanentLink').set('value', result.responseText);
                            },
                            failure: function (id, result) {
                            }
                        }
                    });
                });

                if (this.options.urlRss != "") {
                    this.permalinkBox.one('#permanentLinkRss').on('click', function (e) {
                        if (window.dialog == undefined || window.dialog == 'undefined') {
                            return;
                        }
                        window.dialog.hide();
                    });
                }

                if (this.options.urlRdf != "") {
                    this.permalinkBox.one('#permanentLinkRdf').on('click', function (e) {
                        e.preventDefault();
                        var anchor = Y.one(e.currentTarget);
                        downloadURL(anchor.get("href"));
                    });
                }

                this.permalinkBox.one('#permanentLinkSave').on('click', function (e) {
                    e.preventDefault();
                    var savePublicationContainer = _this.permalinkBox.one('#save-publication-container');
                    if (!_this.options.authenticated) {
                        savePublicationContainer.html('<div class="alert alert-warning">' + labels.notAuthenticated + '</div>');
                        return;
                    }
                    var url = Y.one(e.currentTarget).get('href');
                    var listIdSelectContent = '';

                    Y.io(_this.options.getUserPublicationListsURL, {
                        method: 'GET',
                        on: {
                            success: function (id, result) {
                                var userPublicationsLists = JSON.parse(result.responseText);
                                if (userPublicationsLists) {
                                    for (var i = 0; i < userPublicationsLists.length; i++) {
                                        listIdSelectContent += '<option value="' + userPublicationsLists[i].id + '">' +
                                                userPublicationsLists[i].name + '</option>';
                                    }
                                }
                                var hasExistingLists = userPublicationsLists && userPublicationsLists.length > 0;
                                var addPublicationFormContent =
                                        '<div class="addPublicationForm">' +
                                        '<div class="list-type-selector">' +
                                        '<div class="message">' + labels.selectList + '</div>' +
                                        '<ul class="no-style-list">' +
                                        '<li>' +
                                        '<div>' +
                                        '<input type="radio" class="field" name="listTypeRadioButton" id="listSelectorExisting" value="existing" ' +
                                        (hasExistingLists ? 'checked' : 'disabled') + '/>' +
                                        '<label for="listSelectorExisting">' + labels.existingList + '</label>' +
                                        '</div>' +
                                        '<div class="list-type-controls list-type-controls-existing ' + (!hasExistingLists ? 'hidden' : '') + '">' +
                                        '<select name="listId">' + listIdSelectContent + '</select>' +
                                        '</div>' +
                                        '</li>' +
                                        '<li>' +
                                        '<div>' +
                                        '<input type="radio"  class="field" name="listTypeRadioButton" id="listSelectorNew" value="new" ' +
                                        (!hasExistingLists ? 'checked' : '') + '/>' +
                                        '<label for="listSelectorNew">' + labels.newList + '</label>' +
                                        '</div>' +
                                        '<div class="list-type-controls list-type-controls-new ' + (hasExistingLists ? 'hidden' : '') + '">' +
                                        '<input id="list-name_id" type="text" name="listName" placeholder="' + labels.listName + '"/>' +
                                        '<select name="listPrivacy">' +
                                        '<option value="private">' + labels.privateList + '</option>' +
                                        '<option value="public">' + labels.publicList + '</option>' +
                                        '</select>' +
                                        '</div>' +
                                        '<div id="errorMsgDiv" class="hide" hidden="true" style="display: none"></div>' +
                                        '</li>' +
                                        '</ul>' +
                                        '</div>' +
                                        '<div class="list-type-save">' +
                                        '<button id="saveButton" class="btn btn-primary btn-xs">' + labels.saveLink + '</button>' +
                                        '</div>' +
                                        '</div>';


                                savePublicationContainer.html(addPublicationFormContent);

                                savePublicationContainer.all('input[name=listTypeRadioButton]').on('change', function (e) {
                                    var val = e.currentTarget.get('value');
                                    if (val == 'existing') {
                                        savePublicationContainer.one('.list-type-controls-existing').removeClass('hidden');
                                        savePublicationContainer.one('.list-type-controls-new').addClass('hidden');
                                    }
                                    else {
                                        savePublicationContainer.one('.list-type-controls-existing').addClass('hidden');
                                        savePublicationContainer.one('.list-type-controls-new').removeClass('hidden');
                                    }
                                });

                                savePublicationContainer.one('#list-name_id').on('click', function () {
                                    var errorMsgDiv = Y.one('#errorMsgDiv');
                                    errorMsgDiv.addClass('hide');
                                    errorMsgDiv.attr('hidden', true);
                                    Y.one('#list-name_id').removeAttribute('style');
                                });

                                savePublicationContainer.one('#saveButton').on('click', function (e) {
                                    var errorMsgDiv = Y.one('#errorMsgDiv');
                                    var listNameInput = Y.one('#list-name_id');
                                    if (Y.one('#listSelectorNew').attr('checked') == true && listNameInput.get('value') == '') {
                                        listNameInput.setStyle('border-color', 'red');
                                        var requiredListNameMsg = '<p style="color:red;">' + labels.requiredListName + '</p>'
                                        errorMsgDiv.html(requiredListNameMsg);
                                        errorMsgDiv.removeClass('hide');
                                        errorMsgDiv.attr('hidden', false);
                                        errorMsgDiv.removeAttribute('style');

                                        this.removeClass('disabled');
                                    }
                                    else {
                                        e.preventDefault();
                                        this.addClass('disabled');
                                        var listTypeRadio = savePublicationContainer.one('input[name=listTypeRadioButton]:checked').get('value');
                                        var listId = savePublicationContainer.one('select[name=listId]').get('value');
                                        var listNameInput = savePublicationContainer.one('input[name=listName]');
                                        var listName = listNameInput.get('value');
                                        var listPrivacy = savePublicationContainer.one('select[name=listPrivacy]').get('value');

                                        url += (url.indexOf('?') > -1 ? '&' : '?') + 'permanentLinkListType=' + listTypeRadio;
                                        url += '&permanentLinkListId=' + listId;
                                        url += '&permanentLinkListName=' + listNameInput.get('value');
                                        url += '&permanentLinkListPrivacy=' + listPrivacy;

                                        var dispatcher = new Y.Dispatcher({
                                            node: savePublicationContainer.one('.addPublicationForm'),
                                            ioConfig: {
                                                method: "GET"
                                            }
                                        });
                                        dispatcher.set('uri', url);
                                    }
                                });
                            }
                        }
                    });
                });

                closeButton.on("click", function () {
                    _this.hidePermalinkBox();
                });
            }
        }
    });

    Y.portal2012permalink = portal2012permalink;

}, '1.0.0', {requires: ['node', 'anim', 'io-base', 'aui-modal', 'portal2012dispatcher', 'event-focus', 'event-key']});