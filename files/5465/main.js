AUI().ready(
    function () {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) {
                        return i;
                    }
                }
                return -1;
            }
        }

        colapse = function (param) {
            AUI().use(function (Ycolapse) {
                var myNode = Ycolapse.one('param');
                var parent = myNode.ancestor();
                var child = parent.one('ul');
                child.toggleClass('colapsed');
            });
        }

        colapse2 = function (param2) {
            AUI().use(function (Ycolapse2) {
                var myNode = Ycolapse2.one(param2);
                var parent = myNode.ancestor();
                //parent.toggleClass('colapsed');
                myNode.toggleClass('colapsable');
                var child = parent.one('ul');
                child.toggleClass('colapsed');
            });
        }

        preview = function (myElement) {
            AUI().use(function (Ypreview) {
                var myNode = Ypreview.one(myElement);
                //myNode.toggleClass('preview-show');
                var parent = myNode.ancestor();
                var child = parent.one('.previewer')
                try {
                    child.addClass('preview-show');
                } catch (e) {

                }

            });
        }

        delpreview = function (myElement) {
            AUI().use(function (Y) {
                var myNode = Y.one(myElement);
                //myNode.toggleClass('preview-show');
                var parent = myNode.ancestor();
                var child = parent.one('.previewer');

                try {
                    child.removeClass('preview-show');
                } catch (e) {

                }
            });
        }

        selectAllOptions = function (SelectAllOptionsElement) {
            AUI().use(function (SelectAllOptions) {
                var myNodeControlSelect = SelectAllOptions.one(SelectAllOptionsElement);
                var myNodeSelectAll = SelectAllOptions.all(".search-in-collections input[type='checkbox']");
                var myElementChcecked = myNodeControlSelect.get('checked');

                //console.log("My action node:::" + myNodeControlSelect.get('checked'))
                if (myNodeControlSelect.get('checked') == true) {
                    myNodeSelectAll.each(function (node) {
                        // console.log(" Checked :::" + node.get('checked') + " Disabled :::" + node.get('disabled'))
                        if (node.get('checked') == false && node.get('disabled') == false) {
                            node.set('checked', true);
                        }
                    })
                } else {
                    myNodeSelectAll.set('checked', false);
                }

            });
        }

        copyToClipboard = function (SelectedContainer) {
            AUI().use('gallery-clipboard', function (SelectedFunction) {
                var myNodeToCopy = SelectedFunction.one(SelectedContainer);
                var contentNodeToCopy = myNodeToCopy.value;


                var clipboarddiv = document.getElementById(SelectedContainer);
                if (clipboarddiv == null) {
                    clipboarddiv = document.createElement('div');
                    clipboarddiv.setAttribute("name", "preview-container");
                    clipboarddiv.setAttribute("id", "preview-container");
                    document.body.appendChild(clipboarddiv);
                }
                clipboarddiv.innerHTML = '<embed src="../javascript/clipboard.swf" FlashVars="clipboard=' +
                    encodeURIComponent(contentNodeToCopy) + '" width="0" height="0" type="application/x-shockwave-flash"></embed>';

                alert('The text is copied to your clipboard...');

            });
        }

        printPortalOPPage = function () {
            window.print();
        }


        AUI().use('event-mouseenter','event-key','node', function(A) {
            var markSelected = function(o){
                var a = o.ancestor();
                if (a) {
                    a = a.ancestor();
                    if (a) {
                        if (a.hasClass('withChildren')) {
                            a.addClass('selected');
                            markSelected(a);
                        }
                    }
                }
            };
            A.all("li.leaf.selected").each(function(o){
                markSelected(o);
            });

            A.all(".tree-toggler").on('click', function(e) {
                // structure:
                // <li class=withChildren open/closed>
                // <a class=tree-toggler></a>
                // <ul class=ul.tree>...</ul>
                // </li>
                // this = a href
                //e.preventDefault();

                /*var parentLI = e.currentTarget.ancestor();
                var siblingUL = parentLI.one('ul.tree');

                if (siblingUL.hasClass('hidden')) {
                    siblingUL.removeClass('hidden');
                    parentLI.removeClass('closed');
                    parentLI.addClass('open');
                } else {
                    siblingUL.addClass('hidden');
                    parentLI.removeClass('open');
                    parentLI.addClass('closed');
                }*/
            });
        });


        /*AUI().use('event-mouseenter','event-key','node', function(MenuEventClick) {
            var menuItems = MenuEventClick.all(".maincontent .level-1 li");
            //console.log("all elements");
            if(menuItems) {
                menuItems.each(function(menuItem){
                    var hasChilds = "false";
                   if(menuItem.one(".level-2")){

                       menuItem.all(".level-2 li").each(function(e){
                           if(e.hasClass("selected")){ hasChilds = "true" }
                       })

                       if(hasChilds == "false"){
                           this.addClass("colappsed");
                       }else{
                           this.set("aria-expanded","true");
                       }

                   }

                    if(hasChilds == "false"){
                        menuItem.on('mouseenter', function(elementE) {
                            if(this.hasClass("colappsed")){
                                this.removeClass("colappsed");
                            }

                        });

                        menuItem.on('mouseleave', function(elementE) {
                            this.addClass("colappsed");
                        });

                        menuItem.on('keypress', function(elementE) {
                            //alert(elementE.type + ": " + elementE.keyCode);

                            if(this.hasClass("colappsed") && (elementE.keyCode == 32 || elementE.keyCode == 39)){
                                this.removeClass("colappsed");
                                this.set("aria-expanded","true");
                            }

                            if(!this.hasClass("colappsed") && (elementE.keyCode == 27)){
                                this.addClass("colappsed");
                                this.set("aria-expanded","false");
                            }


                        });
                    }



                })
            }

        });*/

        /* cellar file downloader below */
        /*var IDENTIFIER_REPLACE = "i_r";
        var FORMAT_REPLACE = "f_r";
        var LANGUAGE_REPLACE = "l_r";
        var PRODSYS_REPLACE = "ps_r";
        var DOWNLOAD_HANDLER_PATH = "/portal2012-portlet/html/downloadHandler.jsp?" +
            "identifier=" + IDENTIFIER_REPLACE +
            "&format=" + FORMAT_REPLACE +
            "&language=" + LANGUAGE_REPLACE +
            "&productionSystem=" + PRODSYS_REPLACE;

        var IFRAME_ELEMENT = "iframe";
        var IFRAME_NAME = "document-download";

        downloadCellarContent = function (productionSystem, identifier, format, language) {
            if (format === null || format === undefined) {
                format = '';
            }
            if (identifier === null || identifier === undefined) {
                identifier = '';
            }
            if (language === null || language === undefined) {
                language = '';
            }

            var url = DOWNLOAD_HANDLER_PATH;
            url = url.replace(IDENTIFIER_REPLACE, identifier);
            url = url.replace(FORMAT_REPLACE, format);
            url = url.replace(LANGUAGE_REPLACE, language);
            url = url.replace(PRODSYS_REPLACE, productionSystem);

            var iframe = document.getElementById(IFRAME_ELEMENT);

            if (iframe === null) {
                iframe = document.createElement(IFRAME_ELEMENT);
                iframe.name = IFRAME_NAME;
                iframe.style.display = "none";
                document.body.appendChild(iframe);
            }

            iframe.src = url;
        }*/
        /* END cellar file downloader */
        //PORTAL-496 - show available languages

        YUI().use('node','event-mouseenter','event-key', function(A){
            var opLangBox = "lang-op-wrap";
            var dspClass = "hidden";

            var allLangBoxes = A.all("." + opLangBox);
            var langBoxA = A.all(".lang-op-wrap .lang-op a")

            var onEsc = function(e){
                if(!e.target.ancestor().ancestor().hasClass(dspClass)) {
                    e.target.ancestor().ancestor().addClass(dspClass);
                }
            }

            if(A.all(".available-languages-link")){
                A.all(".available-languages-link").each(function(e){
                    this.on('click', function(e){
                        e.preventDefault();
                    })

                })
            }

            if(langBoxA){
                langBoxA.each(function(){
                    this.delegate('key', onEsc, 'esc')
                })

            }

            showLanguageOptions = function(x) {
                var langCaller = A.one(x);
                var langCallerParent = langCaller.ancestor();
                var langCallerBox = langCallerParent.one("." + opLangBox);

                var firstChild = langCallerParent.one("." + opLangBox + " a");

                if(langCaller == null || langCallerParent == null || langCallerBox == null ){
                    return;
                }

                if(langCallerBox.hasClass(dspClass)) {
                    langCallerBox.removeClass(dspClass);
                    firstChild.focus();
                } else {
                    langCallerBox.addClass(dspClass);
                }

            }

        });

        AUI().use('node', 'portal2012dialog', function (Y) {
            Y.all('a[target^="_popup"').each(function (element) {
                element.on('click', function (event) {
                    event.preventDefault();
                    var link = this.get('href');
                    var target = this.get('target');
                    var title = this.getHTML();
                    var popupDimensions = ['auto', 'auto'];
                    if (target && target.length > 6) {
                        var popupDimensionsString = target.substring(7, target.length - 1);
                        if (popupDimensionsString.split(';').length == 2) {
                            popupDimensions = popupDimensionsString.split(';');
                        }
                    }
                    Y.portal2012dialog.show(link, title, popupDimensions[0], popupDimensions[1]);
                });
            })
        });
    }
);

Liferay.Portlet.ready(

    /*
     This function gets loaded after each and every portlet on the page.

     portletId: the current portlet's id
     node: the Alloy Node object of the current portlet
     */

    function (portletId, node) {
    }
);

Liferay.on(
    'allPortletsReady',

    /*
     This function gets loaded when everything, including the portlets, is on
     the page.
     */

    function () {

        AUI().use('node', function (mainContentSet) {
            var mainContentLink = mainContentSet.one("#skip-to-content");
            var mainSearch = mainContentSet.one("#maincontent .maincontentarea .main-search-form");
            var contextPages = mainContentSet.one("#maincontent .maincontentarea h1");

            if (contextPages) {
                mainContentLink.set('href', "#maincontentgo");
                contextPages.set('id', "maincontentgo");
            } else if (mainSearch) {
                mainContentLink.set('href', "#maincontentgo");
                mainSearch.set('id', "maincontentgo");
            } else {

            }

            AUI().use('node', function (AUIselected) {
                var node = AUIselected.one(".header .level0 .first");
                try {
                    node.addClass("selected");
                }
                catch (e) {
                    //console.log('error: ' + e);
                }

            });

            AUI().use(function (mouseClick) {
                // document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
                //console.log("Right Click function - disabled for development reasons")
            })


        });

    }
);

/* FlexPaper Annotations callback functions*/
function onCreateAnnotationSuccess(annotationId) {
    //console.log('onCreateAnnotationSuccess');
    AUI().use('base', 'node', 'widget', function (engine) {
        var numberOfAnnotations = engine.one("#numberOfAnnotations");
        if (numberOfAnnotations) {
            var value = numberOfAnnotations.get('value');
            if (value != undefined && value != "") {
                var no = parseInt(value);
                no++;
                numberOfAnnotations.set("value", no + "");
            }
        }
        var shareAnnotationsListItem = engine.one(".list-item.shareAnnotations.hidden");
        if (shareAnnotationsListItem) {
            shareAnnotationsListItem.removeClass("hidden");
        }
    });
}
function onCreateAnnotationError(annotationId) {

}
function onUpdateAnnotationSuccess(annotationId) {

}
function onUpdateAnnotationError(annotationId) {

}
function onDeleteAnnotationSuccess(annotationId) {
    //console.log('onDeleteAnnotationSuccess');
    AUI().use('base', 'node', 'widget', function (engine) {
        var no = -1;
        var numberOfAnnotations = engine.one("#numberOfAnnotations");
        if (numberOfAnnotations) {
            var value = numberOfAnnotations.get('value');
            if (value != undefined && value != "") {
                no = parseInt(value);
                if (no > 0) {
                    no--;
                    numberOfAnnotations.set("value", no + "");
                }
            }
        }
        if (no <= 0) {
            var shareAnnotationsListItem = engine.one(".list-item.shareAnnotations");
            //console.log("shareAnnotationsListItem is " + shareAnnotationsListItem);
            if (shareAnnotationsListItem) {
                shareAnnotationsListItem.addClass("hidden");
                //console.log("shareAnnotationsListItem class " + shareAnnotationsListItem.get("class"));
            }
        }
    });
}
function onDeleteAnnotationError(annotationId) {

}
/* END FlexPaper Annotations callback functions*/


var downloadURL = function downloadURL(url) {
    var hiddenIFrameID = 'hiddenDownloader',
        iFrame = document.getElementById(hiddenIFrameID);
    if (iFrame === null) {
        iFrame = document.createElement('iframe');
        iFrame.id = hiddenIFrameID;
        iFrame.style.display = 'none';
        document.body.appendChild(iFrame);
    }
    iFrame.src = url;
};

function stopEnterKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) { return false; }
}

/* Copyright (c) 2007 Lev Muchnik <LevMuchnik@gmail.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * $Date: 2007-10-03 19:08:15 -0700 (Wed, 03 Oct 2007) $
 */

function LoadXML(ParentElementID,URL)
{
    var xmlHolderElement = GetParentElement(ParentElementID);
    if (xmlHolderElement==null) { return false; }
    ToggleElementVisibility(xmlHolderElement);
    return RequestURL(URL,URLReceiveCallback,ParentElementID);
}
function LoadXMLDom(ParentElementID,xmlDoc)
{
    if (xmlDoc) {
        var xmlHolderElement = GetParentElement(ParentElementID);
        if (xmlHolderElement==null) { return false; }
        while (xmlHolderElement.childNodes.length) { xmlHolderElement.removeChild(xmlHolderElement.childNodes.item(xmlHolderElement.childNodes.length-1));	}
        var Result = ShowXML(xmlHolderElement,xmlDoc.documentElement,0);

        return Result;
    }
    else { return false; }
}
function LoadXMLString(ParentElementID,XMLString)
{
    xmlDoc = CreateXMLDOM(XMLString);
    return LoadXMLDom(ParentElementID,xmlDoc) ;
}
////////////////////////////////////////////////////////////
// HELPER FUNCTIONS - SHOULD NOT BE DIRECTLY CALLED BY USERS
////////////////////////////////////////////////////////////
function GetParentElement(ParentElementID)
{
    if (typeof(ParentElementID)=='string') {	return document.getElementById(ParentElementID);	}
    else if (typeof(ParentElementID)=='object') { return ParentElementID;}
    else { return null; }
}
function URLReceiveCallback(httpRequest,xmlHolderElement)
{
    try {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var xmlDoc = httpRequest.responseXML;
                if (xmlHolderElement && xmlHolderElement!=null) {
                    xmlHolderElement.innerHTML = '';
                    return LoadXMLDom(xmlHolderElement,xmlDoc);
                }
            } else {
                return false;
            }
        }
    }
    catch( e ) {
        return false;
    }
}
function RequestURL(url,callback,ExtraData) { // based on: http://developer.mozilla.org/en/docs/AJAX:Getting_Started
    var httpRequest;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) { httpRequest.overrideMimeType('text/xml'); }
    }
    else if (window.ActiveXObject) { // IE
        try { httpRequest = new ActiveXObject("Msxml2.XMLHTTP");   }
        catch (e) {
            try { httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e) {}
        }
    }
    if (!httpRequest) { return false;   }
    httpRequest.onreadystatechange = function() { callback(httpRequest,ExtraData); };
    httpRequest.open('GET', url, true);
    httpRequest.send('');
    return true;
}
function CreateXMLDOM(XMLStr)
{
    if (window.ActiveXObject)
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.loadXML(XMLStr);
        return xmlDoc;
    }
    else if (document.implementation && document.implementation.createDocument)	  {
        var parser=new DOMParser();
        return parser.parseFromString(XMLStr,"text/xml");
    }
    else {
        return null;
    }
}

var IDCounter = 1;
var NestingIndent = 15;
function ShowXML(xmlHolderElement,RootNode,indent)
{
    if (RootNode==null || xmlHolderElement==null) { return false; }
    var Result  = true;
    var TagEmptyElement = document.createElement('div');
    TagEmptyElement.className = 'Element';
    TagEmptyElement.style.position = 'relative';
    TagEmptyElement.style.left = NestingIndent+'px';
    if (RootNode.childNodes.length==0) {
        var ClickableElement = AddTextNode(TagEmptyElement,'','Clickable') ;
        ClickableElement.id = 'div_empty_' + IDCounter;
        AddTextNode(TagEmptyElement,'<','Utility') ;
        AddTextNode(TagEmptyElement,RootNode.nodeName ,'NodeName')
        for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
            CurrentAttribute  = RootNode.attributes.item(i);
            AddTextNode(TagEmptyElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
            AddTextNode(TagEmptyElement,'=','Utility') ;
            AddTextNode(TagEmptyElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
        }
        AddTextNode(TagEmptyElement,' />') ;
        xmlHolderElement.appendChild(TagEmptyElement);
        //SetVisibility(TagEmptyElement,true);
    }
    else { // mo child nodes

        var ClickableElement = AddTextNode(TagEmptyElement,'+','Clickable') ;
        ClickableElement.onclick  = function() {ToggleElementVisibility(this); }
        ClickableElement.id = 'div_empty_' + IDCounter;

        AddTextNode(TagEmptyElement,'<','Utility') ;
        AddTextNode(TagEmptyElement,RootNode.nodeName ,'NodeName')
        for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
            CurrentAttribute  = RootNode.attributes.item(i);
            AddTextNode(TagEmptyElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
            AddTextNode(TagEmptyElement,'=','Utility') ;
            AddTextNode(TagEmptyElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
        }

        AddTextNode(TagEmptyElement,'>  </','Utility') ;
        AddTextNode(TagEmptyElement,RootNode.nodeName,'NodeName') ;
        AddTextNode(TagEmptyElement,'>','Utility') ;
        xmlHolderElement.appendChild(TagEmptyElement);
        SetVisibility(TagEmptyElement,false);
        //----------------------------------------------

        var TagElement = document.createElement('div');
        TagElement.className = 'Element';
        TagElement.style.position = 'relative';
        TagElement.style.left = NestingIndent+'px';
        ClickableElement = AddTextNode(TagElement,'-','Clickable') ;
        ClickableElement.onclick  = function() {ToggleElementVisibility(this); }
        ClickableElement.id = 'div_content_' + IDCounter;
        ++IDCounter;
        AddTextNode(TagElement,'<','Utility') ;
        AddTextNode(TagElement,RootNode.nodeName ,'NodeName') ;

        for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
            CurrentAttribute  = RootNode.attributes.item(i);
            AddTextNode(TagElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
            AddTextNode(TagElement,'=','Utility') ;
            AddTextNode(TagElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
        }
        AddTextNode(TagElement,'>','Utility') ;
        TagElement.appendChild(document.createElement('br'));
        var NodeContent = null;
        for (var i = 0; RootNode.childNodes && i < RootNode.childNodes.length; ++i) {
            if (RootNode.childNodes.item(i).nodeName != '#text') {
                Result &= ShowXML(TagElement,RootNode.childNodes.item(i),indent+1);
            }
            else {
                NodeContent =RootNode.childNodes.item(i).nodeValue;
            }
        }
        if (RootNode.nodeValue) {
            NodeContent = RootNode.nodeValue;
        }
        if (NodeContent) {
            var ContentElement = document.createElement('div');
            ContentElement.style.position = 'relative';
            ContentElement.style.left = NestingIndent+'px';
            AddTextNode(ContentElement,NodeContent ,'NodeValue') ;
            TagElement.appendChild(ContentElement);
        }
        AddTextNode(TagElement,'  </','Utility') ;
        AddTextNode(TagElement,RootNode.nodeName,'NodeName') ;
        AddTextNode(TagElement,'>','Utility') ;
        xmlHolderElement.appendChild(TagElement);
    }

    // if (indent==0) { ToggleElementVisibility(TagElement.childNodes(0)); } - uncomment to collapse the external element
    return Result;
}
function AddTextNode(ParentNode,Text,Class)
{
    NewNode = document.createElement('span');
    if (Class) {  NewNode.className  = Class;}
    if (Text) { NewNode.appendChild(document.createTextNode(Text)); }
    if (ParentNode) { ParentNode.appendChild(NewNode); }
    return NewNode;
}
function CompatibleGetElementByID(id)
{
    if (!id) { return null; }
    if (document.getElementById) { // DOM3 = IE5, NS6
        return document.getElementById(id);
    }
    else {
        if (document.layers) { // Netscape 4
            return document.id;
        }
        else { // IE 4
            return document.all.id;
        }
    }
}
function SetVisibility(HTMLElement,Visible)
{
    if (!HTMLElement) { return; }
    var VisibilityStr  = (Visible) ? 'block' : 'none';
    if (document.getElementById) { // DOM3 = IE5, NS6
        HTMLElement.style.display =VisibilityStr;
    }
    else {
        if (document.layers) { // Netscape 4
            HTMLElement.display = VisibilityStr;
        }
        else { // IE 4
            HTMLElement.id.style.display = VisibilityStr;
        }
    }
}
function ToggleElementVisibility(Element)
{
    if (!Element|| !Element.id) { return; }
    try {
        ElementType = Element.id.slice(0,Element.id.lastIndexOf('_')+1);
        ElementID = parseInt(Element.id.slice(Element.id.lastIndexOf('_')+1));
    }
    catch(e) { return ; }
    var ElementToHide = null;
    var ElementToShow= null;
    if (ElementType=='div_content_') {
        ElementToHide = 'div_content_' + ElementID;
        ElementToShow = 'div_empty_' + ElementID;
    }
    else if (ElementType=='div_empty_') {
        ElementToShow= 'div_content_' + ElementID;
        ElementToHide  = 'div_empty_' + ElementID;
    }
    ElementToHide = CompatibleGetElementByID(ElementToHide);
    ElementToShow = CompatibleGetElementByID(ElementToShow);
    if (ElementToHide) { ElementToHide = ElementToHide.parentNode;}
    if (ElementToShow) { ElementToShow = ElementToShow.parentNode;}
    SetVisibility(ElementToHide,false);
    SetVisibility(ElementToShow,true);
}
