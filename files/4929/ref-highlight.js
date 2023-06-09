function highlight(elemId){
    var elem = $(elemId);
    elem.css("backgroundColor", "#ffffff"); // hack for Safari
    elem.animate({ backgroundColor: '#ffffaa' }, 1500);
    setTimeout(function(){$(elemId).animate({ backgroundColor: "#ffffff" }, 3000)},1000);
}

if (document.location.hash) {
    highlight(document.location.hash);
}
$('a[href*=#]').click(function(){
    var elemId = '#' + $(this).attr('href').split('#')[1];
    highlight(elemId);
});