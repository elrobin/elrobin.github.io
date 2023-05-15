YUI.add('portal2012dialog', function (Y) {
    var dialog, dialogHeight,
        DIALOG_ID = 'PORTAL2012_DIALOG',
        CELLAR_ID = 'cellarId',
        HEIGHT = Y.one("body").get("winHeight");
    Y.portal2012dialog = function() {
        Y.portal2012dialog.superclass.constructor.apply(this, arguments);
        Y.portal2012dialog._instances[Y.stamp(this)] = this;
    };
    Y.portal2012dialog.NAME = 'portal2012dialog';
    Y.portal2012dialog.show = function(url, title, height, width, ioConfig){
        var defIOConfig = ioConfig || {};
        var node = Y.one('#' + DIALOG_ID);
        if(!node){
            node = Y.Node.create('<div id="' + DIALOG_ID + '">' +
                '<div id="blocking-loader" class="portal-loader" aria-busy="true">' +
                '<span class="loading-image"></span>' +
                '</div>' +
                '</div>');
        }

        /*var cellarIdNode = Y.one('#' + CELLAR_ID);
        if (cellarIdNode && cellarIdNode != undefined) {
            url = url +
        }*/

        if (dialog || dialog != undefined) {
            dialog.hide();
        }

        var config = {
            headerContent: title,
            bodyContent: node,
            centered: true,
            modal: true,
            width: '40em',
            cssClass: 'detail-actions-dialog',
            destroyOnHide: true
        };

        if( width != undefined ) {
            config.width = width;
        }

        if (height == 'auto') {

        } else if (height) {
            config.height = height;
        }

        dialog = new Y.Modal(config);
        dialog.render();

        var cfg = defIOConfig;
        dialogHeight = dialog.get('boundingBox').get('clientHeight');
        Y.portal2012dialog.updateContent(url, cfg);

        return dialog;
    };
    Y.portal2012dialog.getDialog = function(){
        return dialog;
    }
    Y.portal2012dialog.updateContent = function(url, cfg){
        var node = Y.one('#' + DIALOG_ID);
        node.set("innerHTML", '<div id="blocking-loader" class="portal-loader" aria-busy="true">' +
            '<span class="loading-image"></span>' +
            '</div>');
        var dispatcher = new Y.Dispatcher ({
            node: node,
            ioConfig: cfg
        });
        dispatcher.on('ready', Y.portal2012dialog._centerModalBox);
        setTimeout(function(){
            dispatcher.set('uri', url);
        }, 10);
    }
    Y.portal2012dialog._centerModalBox = function(){
        var newY = dialog.get('boundingBox').getY() - dialog.get('boundingBox').get('clientHeight') / 2 + dialogHeight / 2;
        if(newY < 0){
            newY = 0;
        }
        //console.log(newY);
        dialog.get('boundingBox').setY(newY);
        dialogHeight = dialog.get('boundingBox').get('clientHeight');
    }
}, '0.0.1', {
    requires: ['aui-modal', 'aui-overlay-manager', 'dd-constrain', 'aui-io-request', 'portal2012dispatcher']
});