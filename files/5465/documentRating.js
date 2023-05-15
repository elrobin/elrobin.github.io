AUI().ready(function () {

    YUI().use('base', 'widget', 'aui-io-request', function (Y) {

        var Lang = Y.Lang;

        Y.Ratings = Y.Base.create('gallery-ratings', Y.Widget, [], {
            //HTML Template for the current rating
            CURRENT_RATING_TEMPLATE: '<li class="yui3-gallery-ratings-current" style="width:{width};">{value}</li>',
            //HTML Template for the a rating item
            ITEM_TEMPLATE: '<a href="#" title="{title}" name="rating" value="{value}" role="button" class="{className}">{value}</a>',
            //HTML Template for the Bounding Box/Rating Content
            BOUNDING_TEMPLATE: '<div><div><ul class="yui3-gallery-ratings-star-list"></ul></div></div>',

            initializer: function () {
                this.after("ratingChange", this.afterRatingChange, this);
                this.after("allowClearRatingChange", this.renderList, this);
                this.after("skinChange", this.renderList, this);
                this.after("iconWidthChange", this.renderList, this);
                this.after("maxChange", this.renderList, this);
                this.after("titlesChange", this.renderList, this);
                this.after("inlineChange", this.renderList, this);
                this.after("mouseover", this.mouseOver, this);
            },
            /**
             * Validates the rating is within the expected bounds
             * @method validateRating
             * @param {number} val The rating value
             * @protected
             * @returns {boolean} true If val is a number and within bounds
             */
            validateRating: function (val) {
                return Lang.isNumber(val) && val <= this.get('max') && val >= this.get('min');
            },
            /**
             * Validates the skin is expected value
             * @method validateSkin
             * @param {number} val The skin name
             * @protected
             * @returns {boolean} true If val is a valid skin name
             */
            validateSkin: function (attrVal) {
                return Lang.isString(attrVal) && (attrVal === "default" || attrVal === "small");
            },
            /**
             * Calculates the width for the current rating value
             * @method getRatingWidth
             * @private
             * @returns {string} width percentage
             */
            getRatingWidth: function () {
                return Math.floor(this.get("rating") / this.get("max") * 100) + "%";
            },
            /**
             * Creates a string signifying the current rating
             * @method getRatingString
             * @protected
             * @returns {string} Current rating value out of (max) stars
             */
            getRatingString: function () {
                return "Currently " + this.get("rating") + "/" + this.get("max") + " Stars.";
            },
            /**
             * Sets up the UI for the widget
             * @method renderList
             * @protected
             */
            renderList: function () {
                var bb = this.get("boundingBox"), cb = bb.one('div'),
                    ul = bb.one('ul'), i = 1, max = this.get('max'),
                    titles = this.get('titles'), item, a;
                if (this.get('skin') === "small") {
                    cb.addClass('yui3-gallery-ratings-small-star');
                    this.set('iconWidth', 10);
                } else {
                    cb.removeClass('yui3-gallery-ratings-small-star');
                    this.set('iconWidth', 25);
                }
                if (this.get('inline')) {
                    cb.addClass('yui3-gallery-ratings-inline');
                } else {
                    cb.removeClass('yui3-gallery-ratings-inline');
                }

                this.setReadonly(this.get('readonly'));

                ul.setStyle('width', this.get('iconWidth') * this.get('max') + "px");
                ul.empty();
                if (this.get('allowClearRating') && !cb.one('.clearRating')) {
                    ul.insert(Y.Node.create(Lang.sub(this.ITEM_TEMPLATE, {
                        title: "Clear Rating",
                        className: 'clearRating',
                        value: 0
                    })), 'before');
                } else if (cb.one('.clearRating')) {
                    cb.one('.clearRating').destroy();
                }
                ul.append(Y.Node.create(Lang.sub(this.CURRENT_RATING_TEMPLATE, {
                    width: this.getRatingWidth(),
                    value: this.getRatingString()
                })));
                for (i; i <= max; i += 1) {
                    item =
                        Y.Node.create(Lang.sub('<li>' + this.ITEM_TEMPLATE + '</li>', {
                            title: titles[i - 1] || i + " of " + max + ' stars',
                            className: 'yui3-gallery-ratings-star',
                            value: i
                        }));
                    a = item.one('a');
                    a.setStyle('width', i * this.get('iconWidth') + "px");
                    a.setStyle('zIndex', this.get('max') - (i - 1));
                    ul.append(item);
                }
            },
            /**
             * Stuff to do after the rating has changed
             * @method afterRatingChange
             * @param {Event} e The ratingChange event
             * @protected
             */
            afterRatingChange: function (e) {
                this.uiSetRating(e.newVal);
            },
            /**
             * Stuff to do after the rating has been clicked
             * @method onRatingClick
             * @param {Event} e The click event
             * @protected
             */
            /**
             * Fires when a rating anchor is clicked
             * @event ratingClick
             * @param {number} val The value of the rating
             */
            onRatingClick: function (e) {
                e.preventDefault();
                //console.log('onRatingClick: readonly=' + this.get("readonly"));
                if (this.get('readonly')) {
                    //console.log('return.');
                    return;
                }
                var val = parseFloat(e.currentTarget.get("innerHTML"));
                this.fire('ratingClick', val);
                this.set("rating", val);
            },
            /**
             * Set the current rating display, update the value in srcNode
             * @method uiSetRating
             * @param {number} val The rating value
             * @protected
             */
            uiSetRating: function (val) {
                var n = this.get("boundingBox").one(".yui3-gallery-ratings-current"),
                    srcNode = this.get('srcNode');
                if (n) {
                    n.setStyle("width", this.getRatingWidth());
                    n.set("innerHTML", this.getRatingString());
                }
                if (srcNode.get('tagName') === 'INPUT') {
                    srcNode.set('value', val);
                } else {
                    srcNode.set('innerHTML', val);
                }
            },
            /**
             * The render process
             * @method renderUI
             * @private
             */
            renderUI: function () {
                this.renderList();
            },
            /**
             * The bind process
             * @method bindUI
             * @private
             */
            bindUI: function () {
                this.get('boundingBox').delegate("click", this.onRatingClick, 'a', this);
            },
            /**
             * The sync process
             * @method syncUI
             * @private
             */
            syncUI: function () {
                this.uiSetRating(this.get("rating"));
            },

            mouseOver: function () {
                //console.log('mouse over !');
            },

            setReadonly: function(readonly) {
                //console.log("setReadonly: " + readonly);
                var ul = this.get("boundingBox").one('ul');
                if (readonly) {
                    ul.addClass('disabled');
                } else {
                    ul.removeClass('disabled');
                }
            }

        }, {
            ATTRS: {
                /**
                 * The current rating
                 * @attribute rating
                 * @type number
                 * @default 0
                 */
                rating: {
                    value: 0,
                    broadcast: 1,
                    validator: "validateRating"
                },
                /**
                 * The minimum value
                 * @attribute min
                 * @type number
                 * @default 0
                 * @private
                 */
                min: {
                    value: 0,
                    validator: Lang.isNumber,
                    readOnly: true
                },
                /**
                 * The total number of "stars"
                 * @attribute max
                 * @type number
                 * @default 5
                 */
                max: {
                    value: 5,
                    validator: Lang.isNumber
                },
                /**
                 * Display the widget as an inline widget?
                 * @attribute inline
                 * @type boolean
                 * @default false
                 */
                inline: {
                    value: false,
                    validator: Lang.isBoolean
                },
                /**
                 * The skin for the widget ("default" | "small")
                 * @attribute skin
                 * @type string
                 * @default "default"
                 */
                skin: {
                    value: "default",
                    validator: "validateSkin"
                },
                /**
                 * Should the clear rating button be shown? (Allows setting rating to 0)
                 * @attribute allowClearRating
                 * @type boolean
                 * @default false
                 */
                allowClearRating: {
                    value: false,
                    validator: Lang.isBoolean
                },

                readonly: {
                    value: false,
                    validator: Lang.isBoolean,
                    setter: "setReadonly"
                },

                /**
                 * Render widget on instantiation
                 * @attribute render
                 * @type boolean
                 * @default true
                 */
                render: {
                    value: true
                },
                /**
                 * Titles to apply to rating tooltips
                 * @attribute titles
                 * @type Array
                 * @default []
                 */
                titles: {
                    value: [],
                    validator: Lang.isArray
                },
                /**
                 * The width of rating icons, used in calculation of the rating widget width
                 * @attribute iconWidth
                 * @type number
                 * @default 25
                 * @protected
                 */
                iconWidth: {
                    value: 25,
                    validator: Lang.isNumber
                },

                containerIndex: {
                    value: ''
                }
            },
            HTML_PARSER: {
                rating: function (srcNode) {
                    // If progressive enhancement is to be supported, return the value of "rating" based on the contents of the srcNode
                    var val;
                    if (srcNode.get('tagName') === "INPUT") {
                        val = parseFloat(srcNode.get('value'), 10);
                    } else {
                        val = parseFloat(srcNode.get('innerHTML'), 10);
                    }
                    return Lang.isNumber(val) ? val : 0;
                }
            }
        });



        /* ###################### document rating ################ */

        setupDocumentRating = function(jsonValues) {

            var RATING_QUERY_HANDLER_PATH = "/portal2012-portlet/html/document_rating/documentRatingQueryHandler.jsp";
            var RATING_CONTAINER_ID = 'rating-container';
            var RATING_WRAPPER_ID = 'rating-wrapper';
            var CURRENT_RATING_PARAM = 'rating';
            var AVERAGE_RATING_PARAM = 'averageRating';
            var USER_ID_PARAM = 'userId';
            var USER_EMAIL_PARAM = 'userEmail';
            var DOCUMENT_ID_PARAM = 'documentId';
            var DOCUMENT_TITLE_PARAM = 'documentTitle';
            var COMPANY_ID_PARAM = 'companyId';
            var GROUP_ID_PARAM = 'groupId';


            if(typeof jsonValues !== "undefined") {
                Y.one("#" + DOCUMENT_ID_PARAM).set('value', jsonValues.documentId);
                Y.one("#" + CURRENT_RATING_PARAM).set('value', jsonValues.rating);
                Y.one("#" + AVERAGE_RATING_PARAM).set('value', jsonValues.averageRating);
                Y.one("#" + USER_ID_PARAM).set('value', jsonValues.userId);
                Y.one("#" + USER_EMAIL_PARAM).set('value', jsonValues.userEmail);
                Y.one("#" + DOCUMENT_TITLE_PARAM).set('value', jsonValues.documentTitle);
                Y.one("#" + COMPANY_ID_PARAM).set('value', jsonValues.companyId);
                Y.one("#" + GROUP_ID_PARAM).set('value', jsonValues.groupId);
            }

            //console.log('setupDocumentRating');
            //console.log('#' + RATING_CONTAINER_ID + ' is ' + Y.one("#" + RATING_CONTAINER_ID));

            var ratingWrapper = Y.one("#" + RATING_WRAPPER_ID);
            if (ratingWrapper == undefined) {
                //console.log('rating wrapper is undefined');
                return;
            }
            if (ratingWrapper.hasClass("processed")) {
                //console.log('rating wrapper already processed');
                return;
            }

            var documentId = Y.one("#" + DOCUMENT_ID_PARAM) ? Y.one("#" + DOCUMENT_ID_PARAM).get('value'):null;
            if (documentId == null || documentId == '') {
                //console.log('documentId is undefined');
                return;
            }

            var userId = Y.one("#" + USER_ID_PARAM).get('value');
            var currentRating = Y.one("#" + CURRENT_RATING_PARAM).get('value');
            //var isReadonly = (currentRating != null && currentRating != undefined && currentRating != '0');
            var isReadonly = false;
            //console.log('isReadonly: ' + isReadonly);

            var ratingContainer = Y.one("#" + RATING_CONTAINER_ID);
            var average = Y.one("#" + AVERAGE_RATING_PARAM);
            if (ratingContainer != undefined && average != undefined) {
                ratingContainer.setHTML(average.get("value"));
            }
            var ratingObject = new Y.Ratings({ srcNode: "#" + RATING_CONTAINER_ID, skin: "small", inline: true, readonly: isReadonly });

//        var ratings = new Y.Ratings({ srcNode: "#myWidget_basic" });
//        var ratings2 = new Y.Ratings({ srcNode: "#myWidget_inline", inline: true, titles: ["2.5 of 5", "2.5 of 5", "2.5 of 5", "2.5 of 5", "2.5 of 5"], readonly: true });
//        var ratings3 = new Y.Ratings({ srcNode: "#myWidget_small", skin: "small", allowClearRating: true });
//        var ratings4 = new Y.Ratings({ srcNode: "#myWidget_small_inline", skin: "small", inline: true });
//        var ratings5 = new Y.Ratings({ srcNode: "#ip_based", inline: true, allowClearRating: false, titles: ["1 boot", "2 boots", "3 Feet", "Extra Good", "Great"], max: 15, allowClearRating: true});

            Y.on("gallery-ratings:ratingChange", function (e) {
                var id = e.target.get("contentBox").get("id");
                //console.log(id + " New Value: " + e.newVal + " was: " + e.prevVal);
                if (e.newVal == e.prevVal) {
                    return;
                }
                e.target.set("readonly", true);

                var userEmail = Y.one("#" + USER_EMAIL_PARAM).get('value');
                var documentId = Y.one("#" + DOCUMENT_ID_PARAM).get('value');
                var documentTitle = Y.one("#" + DOCUMENT_TITLE_PARAM).get('value');
                var companyId = Y.one("#" + COMPANY_ID_PARAM).get('value');
                var groupId = Y.one("#" + GROUP_ID_PARAM).get('value');

                if (documentId == null || documentId == '') {
                    // nothing to do
                } else {
                    saveOrUpdateRating(e.newVal, userId, userEmail, documentId, documentTitle, companyId, groupId, function(averageRating) {
                        if (average != undefined) {
                            average.set('value', averageRating);
                        }

                        if (ratingContainer != undefined) {
                            ratingContainer.set('value', averageRating);
                        }

                        e.target.set("readonly", false);
                    });
                }
            });

            saveOrUpdateRating = function (rating, userId, userEmail, documentId, documentTitle, companyId, groupId, callback) {
                Y.io.request(RATING_QUERY_HANDLER_PATH, {
                    method: 'POST',
                    data: {rating: rating, userId: userId, userEmail: userEmail, documentId: documentId, documentTitle: documentTitle,
                        companyId: companyId, groupId: groupId},
                    on: {
                        success: function () {
                            var responseData = this.get('responseData');
                            callback(responseData);
                        }
                    }
                });
            }

            ratingWrapper.addClass("processed");
        }
        /* ###################### document rating ################ */



        /* ###################### user rating ################ */

        setupUserRating = function() {

            var RATING_QUERY_HANDLER_PATH = "/portal2012-portlet/html/document_rating/documentRatingQueryHandler.jsp";
            var RATING_CONTAINER_ID = 'rating-container';
            var AVERAGE_RATING_PARAM = 'averageRating';
            var USER_ID_PARAM = 'userId';
            var USER_EMAIL_PARAM = 'userEmail';
            var DOCUMENT_ID_PARAM = 'documentId';
            var DOCUMENT_TITLE_PARAM = 'documentTitle';
            var COMPANY_ID_PARAM = 'companyId';
            var GROUP_ID_PARAM = 'groupId';

            var userField = Y.one("#" + USER_ID_PARAM);
            if (!userField) {
                return;
            }

            var userId = userField.get('value');
            var isReadonly = (userId === null || userId === undefined || userId == '');
            //console.log('isReadonly: ' + isReadonly);

            var index = 1;
            var containerId = "#" + RATING_CONTAINER_ID + index;
            var container = Y.one(containerId);
            while(container && container != undefined) {
                new Y.Ratings({ srcNode: containerId, inline: true, readonly: isReadonly, containerIndex: index + '' });
                index++;
                containerId = "#" + RATING_CONTAINER_ID + index;
                container = Y.one(containerId);
            }

            Y.on("gallery-ratings:ratingChange", function (e) {
                var id = e.target.get("contentBox").get("id");
                //console.log(id + " New Value: " + e.newVal + " was: " + e.prevVal);
                if (e.newVal == e.prevVal) {
                    return;
                }
                e.target.set("readonly", true);

                var index = e.target.get("containerIndex");
                var documentIdContainer = Y.one("#" + DOCUMENT_ID_PARAM + index);
                if (!documentIdContainer || documentIdContainer == undefined) {
                    //console.log("#" + DOCUMENT_ID_PARAM + index + " was not found!");
                    return;
                }

                var userId = Y.one("#" + USER_ID_PARAM).get('value');
                var userEmail = Y.one("#" + USER_EMAIL_PARAM).get('value');
                var documentId = Y.one("#" + DOCUMENT_ID_PARAM + index).get('value');
                var documentTitle = Y.one("#" + DOCUMENT_TITLE_PARAM + index).get('value');
                var companyId = Y.one("#" + COMPANY_ID_PARAM).get('value');
                var groupId = Y.one("#" + GROUP_ID_PARAM).get('value');

                saveOrUpdateRating(e.newVal, userId, userEmail, documentId, documentTitle, companyId, groupId, function(averageRating) {
                    var average = Y.one("#" + AVERAGE_RATING_PARAM + index);
                    if (average != undefined) {
                        average.set('value', averageRating);
                    }
                    var container = Y.one("#" + RATING_CONTAINER_ID + index);
                    if (container != undefined) {
                        container.set('value', averageRating);
                    }

                    e.target.set("readonly", false);
                });
            });

            saveOrUpdateRating = function (rating, userId, userEmail, documentId, documentTitle, companyId, groupId, callback) {
                Y.io.request(RATING_QUERY_HANDLER_PATH, {
                    method: 'POST',
                    data: {rating: rating, userId: userId, userEmail: userEmail, documentId: documentId, documentTitle: documentTitle,
                        companyId: companyId, groupId: groupId},
                    on: {
                        success: function () {
                            var responseData = this.get('responseData');
                            callback(responseData);
                        }
                    }
                });
            }
        }
        /* ###################### user rating ################ */


    });
});