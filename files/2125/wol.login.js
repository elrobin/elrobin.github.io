(function(g,d){var c={padding:0,autoDimensions:false,width:480,height:"auto",autoScale:false,centerOnScroll:true,titleShow:false};
var f='<div class="loginContainer confirmContainer"><h1>Error</h1><p class="navAction message"><a href="#" id="confirm" class="actionBtn okBtn">OK</a>There has been an unexpected error, please try again.</p></div>';
var i=function(l){l.preventDefault();
var k=[],j;
c.target=d(l.target);
if(c.target.attr("type")&&c.target.attr("type")=="submit"){d(".validationRequired").validate({onclick:false,onfocusout:false,onkeyup:false,rules:{_checkbox_var:{required:true,minlength:1}},messages:{_checkbox_var:"Please select a journal title"},submitHandler:function(m){d.fancybox.staticUseSetup();
d.fancybox.showActivity();
j=d(m).attr("action");
k=d(m).serializeArray();
k.push({name:"reqType",value:"ajax"});
a(j,k)
}});
d(".validationRequired").submit()
}else{d.fancybox.staticUseSetup();
d.fancybox.showActivity();
j=c.target.attr("href");
k.push({name:"reqType",value:"ajax"});
a(j,k)
}};
var a=function(k,j){d.ajax({type:"GET",cache:false,url:k,data:j,success:function(l){b(l)
},error:function(){b(f)
}})
};
var e=function(l){d.fancybox.showActivity();
var k=d(l).attr("action");
var j=d(l).serializeArray();
j.push({name:"reqType",value:"ajax"});
d.ajax({type:"POST",cache:false,url:k,data:j,success:function(m){b(m)
},error:function(){d.fancybox.hideActivity();
var m=d('<p class="errorMsg">There has been an error, please try again.</p>');
d(".loginForm").find("input[name=password]").parent(".formField").after(m);
d.fancybox.resize()
}})
};
var b=function(j){c.content=j;
c.onComplete=function(){d("#cancelLogin").click(function(k){k.preventDefault();
d.fancybox.close()
});
d("#standaloneLogin").validate({onclick:false,onfocusout:false,onkeyup:false,submitHandler:function(k){e(k)
}});
d(".okBtn").click(function(k){k.preventDefault();
d.fancybox.close()
})
};
c.onCleanup=function(){var k=d(".okBtn").length&&d(".okBtn").parents("#fancybox-tmp").length!=1;
if(k){window.location.reload(true)
}};
d.fancybox(c)
};
var h=function(j){d.each(j.elms,function(l,m){var k=d(m);
k.click(i)
})
};
g.login={init:h};
return g
}(window.wol=window.wol||{},jQuery));
$(document).ready(function(){wol.login.init({elms:[".authReq"]})
});