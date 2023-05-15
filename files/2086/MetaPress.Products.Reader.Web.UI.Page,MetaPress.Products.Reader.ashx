if(typeof MetaPress == "undefined") MetaPress={};
if(typeof MetaPress.Products == "undefined") MetaPress.Products={};
if(typeof MetaPress.Products.Reader == "undefined") MetaPress.Products.Reader={};
if(typeof MetaPress.Products.Reader.Web == "undefined") MetaPress.Products.Reader.Web={};
if(typeof MetaPress.Products.Reader.Web.UI == "undefined") MetaPress.Products.Reader.Web.UI={};
if(typeof MetaPress.Products.Reader.Web.UI.Page == "undefined") MetaPress.Products.Reader.Web.UI.Page={};
MetaPress.Products.Reader.Web.UI.Page_class = function() {};
Object.extend(MetaPress.Products.Reader.Web.UI.Page_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/MetaPress.Products.Reader.Web.UI.Page,MetaPress.Products.Reader.ashx'
}));
MetaPress.Products.Reader.Web.UI.Page = new MetaPress.Products.Reader.Web.UI.Page_class();

