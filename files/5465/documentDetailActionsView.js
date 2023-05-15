/**
 * Created by florinaie on 2/17/2016.
 */
AUI().ready(function(){

    if(typeof documentDetailActionsView_loadJavascript != 'undefined'){
        Liferay.provide(
            window,
            documentDetailActionsView_portletNamespace + 'showActionPopUp',
            function (selectedPopUpUrl, title, dialogHeight, actionName) {
                showPopUp(selectedPopUpUrl, title, dialogHeight,actionName);
            },
            []
        );

        AUI().use('node','io-base','aui-modal', function (A) {
            var metadataRDF = A.one("#" + documentDetailActionsView_portletNamespace + "metadataRdf");
            if(metadataRDF != null) {
                metadataRDF.on('click', function (e) {
                    e.preventDefault();
                    var anchor = A.one(e.currentTarget);
                    downloadURL(anchor.get("href"));
                });
            }
        });
    }
});