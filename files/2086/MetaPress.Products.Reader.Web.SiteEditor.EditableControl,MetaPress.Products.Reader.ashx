if(typeof MetaPress == "undefined") MetaPress={};
if(typeof MetaPress.Products == "undefined") MetaPress.Products={};
if(typeof MetaPress.Products.Reader == "undefined") MetaPress.Products.Reader={};
if(typeof MetaPress.Products.Reader.Web == "undefined") MetaPress.Products.Reader.Web={};
if(typeof MetaPress.Products.Reader.Web.SiteEditor == "undefined") MetaPress.Products.Reader.Web.SiteEditor={};
if(typeof MetaPress.Products.Reader.Web.SiteEditor.EditableControl == "undefined") MetaPress.Products.Reader.Web.SiteEditor.EditableControl={};
MetaPress.Products.Reader.Web.SiteEditor.EditableControl_class = function() {};
Object.extend(MetaPress.Products.Reader.Web.SiteEditor.EditableControl_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	IsLocked: function(key) {
		return this.invoke("IsLocked", {"key":key}, this.IsLocked.getArguments().slice(1));
	},
	url: '/ajaxpro/MetaPress.Products.Reader.Web.SiteEditor.EditableControl,MetaPress.Products.Reader.ashx'
}));
MetaPress.Products.Reader.Web.SiteEditor.EditableControl = new MetaPress.Products.Reader.Web.SiteEditor.EditableControl_class();

