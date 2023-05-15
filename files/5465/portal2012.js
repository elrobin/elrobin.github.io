;(function(A){

    var portalConfig = {
        groups: {
            portal2012: {
                base: '/portal2012-theme/js/portal2012/',
                modules: {
                    portal2012dialog: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012dialog/portal2012dialog.js?t=20191202180405' ,
                        requires: ['aui-modal', 'aui-overlay-manager', 'dd-constrain', 'aui-io-request', 'portal2012dispatcher']
                    },
                    portal2012permalink: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012permalink/portal2012permalink.js?t=20191202180405',
                        requires: ['node', 'anim', 'io-base', 'aui-modal', 'portal2012dialog', 'event-focus','event-key']
                    },
                    portal2012treeSelector: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012treeSelector/portal2012treeSelector.js?t=20191202180405',
                        requires: ['node', 'anim', 'aui-modal', 'portal2012dialog', 'event-focus','event-key', 'aui-tree-view']
                    },
                    portal2012dispatcher: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012dispatcher/portal2012dispatcher.js?t=20191202180405',
                        requires: ['base', 'node-base', 'io-base', 'get', 'async-queue', 'classnamemanager']
                    },
                    portal2012tools: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012tools/portal2012tools.js?t=20191202180405',
                        requires: ['node', 'node-event-simulate']
                    },
                    portal2012placeholder: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012placeholder/portal2012placeholder.js?t=20191202180405',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager', 'attribute-base']
                    },
                    portal2012accessibility: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012accessibility/portal2012accessibility.js?t=20191202180405',
                        requires: ['node', 'base-build', 'plugin']
                    },
                    dojo: {
                        fullpath: '//ajax.googleapis.com/ajax/libs/dojo/1.10.0/dojo/dojo.js?t=20191202180405'
                    },
                    portal2012cck: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012cck/portal2012cck.js?t=20191202180405',
                        requires: ['node', 'cookie']
                    },
                    portal2012labels: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012labels/portal2012labels.js?t=20191202180405',
                        requires: []
                    },
                    'gallery-storage-lite': {
                        fullpath: '/portal2012-theme/js/portal2012/gallery-storage-lite/gallery-storage-lite.js?t=20191202180405',
                        requires: ["event-base", "event-custom", "event-custom-complex", "json", "node-base"]
                    },
                    portal2012hierarchicBrowser: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012hierarchicBrowser/portal2012hierarchicBrowser.js?t=20191202180405',
                        requires: ['node']
                    },
                    portal2012numericInput: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012numericInput/portal2012numericInput.js?t=20191202180405',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager', 'attribute-base']
                    },
                    portal2012publicationSlide: {
                        fullpath: '/portal2012-theme/js/portal2012/portal2012publicationSlide/portal2012publicationSlide.js?t=20191202180405',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager']
                    }
                }
            }
        }
    };

    A.applyConfig(portalConfig);
    A._setup();
})(AUI());