/**
 * Created by florinaie on 2/16/2016.
 */
AUI().ready(function () {
    AUI().use('node', 'aui-io-request', function (A) {
        //loading the document rating
        var container = A.one('.publication-detail-document-rating');
        var resourceUrl = A.one('#documentDetailResourceUrl').get('value');
        var authorSuccessorLink = A.all('.authorSuccessorLink');
        A.io.request(resourceUrl, {
            method: 'POST',
            data: {requestAction: 'getRating'},
            on: {
                success: function () {
                    var responseData = JSON.parse(this.get('responseData'));
                    //console.log(responseData);
                    //rebuild the hidden inputs like in the tag
                    if (responseData != null && responseData != undefined) {
                        responseData.documentTitle = document.title;
                        setupDocumentRating(responseData);
                    }

                }
            }
        });

        var showMore = authorSuccessorLink.one('.show-more');
        var showLess = authorSuccessorLink.one('.show-less');
        var authorSuccessor = authorSuccessorLink.all('.authorSuccessor');

        if(showMore) {
            showMore.on('click', function () {
                authorSuccessor.each(function (e) {
                    e.removeClass('hidden');
                    e.removeClass('successorLinkActive');
                });

                showMore.addClass('hidden');
                showLess.removeClass('hidden');

            });
        }

        if(showLess) {
            showLess.on('click', function () {
                authorSuccessor.each(function (e) {
                    e.addClass('hidden');
                });

                showMore.removeClass('hidden');
                showLess.addClass('hidden');

            });
        }
    });

    if (typeof documentDetailView_loadJavascript != 'undefined') {
        AUI().use('node', function (Y) {
            var nodeToPopulate = Y.one(".breadcrumb");
            nodeToPopulate.append("<li><span>" + documentDetailView_portletTitle + "</span></li>");
        });
    }

    if (typeof documentDetailView_loadSecondJavascript != 'undefined') {
        AUI().use('node', 'aui-io-request', function (Y) {

            var node = Y.one("#" + documentDetailView_portletNamespace + "publication-detail-formats");
            var handler = node.one(".xs-formats-toggle-handler");
            handler.on("click", function (e) {
                e.preventDefault();
                if (node.hasClass("xs-formats-collapsible")) {
                    node.removeClass("xs-formats-collapsible");
                    node.addClass("xs-formats-collapsed");
                }
                else {
                    node.addClass("xs-formats-collapsible");
                    node.removeClass("xs-formats-collapsed");
                }
            });

            Y.all('.col-format.with-content .format-title').on('click', function (event) {
                event.currentTarget.get('parentNode').toggleClass('opened');
            });

        });
    }


});