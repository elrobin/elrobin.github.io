ddmegamenu.docinit({
	menuid:'mainmenu',
	dur:200 //<--no comma after last setting
})
ddmegamenu.docinit({
	menuid:'accountmenu',
	dur:200 //<--no comma after last setting
})

$(document).ready(function() {

// manipulation for the navigation header.
    $("div.uber").prependTo($("body"));
    $("div#authstring").prependTo($("div.hw-account"));


// Authstring drop downs script details.
    if ($("#auth-drop").length) {
        $("#accountmenu").css("display", "none");
        $("#authstring.suppress-header-login").css("height", "35px");
        $("#authstring.suppress-header-login").prependTo(".hw-account");
        
        if ($("#auth-drop > li > ul").children().length == 0) {
            $("#authstring #auth-drop li ul").css('border','none');
            $("#authstring #auth-drop li a span").removeClass("caret-gray");
        } else {
            $('li.subscr-ref > a').append('<span class="caret-gray"></span>');
        }
    } 
});
