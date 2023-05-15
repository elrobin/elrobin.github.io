anadirEvento(window, "load", procesarLinksExternos);

function anadirModoPopup(URL) {
    var resultado = new Array();
    resultado.push(URL);
    
    if(URL.indexOf("?") == -1) {
        resultado.push("?");
    } else {
        resultado.push("&");
    }
    
    resultado.push("modo=popup");
    
    return resultado.join("");
}

function anadirEvento(obj, evType, fn){ 
    if (obj.addEventListener){ 
        obj.addEventListener(evType, fn, false); 
        return true; 
    } else if (obj.attachEvent){ 
        var r = obj.attachEvent("on" + evType, fn); 
        return r; 
    } else { 
        return false; 
    } 
}

function procesarLinksExternos() {    
    var links = document.getElementsByTagName("a");
    
    for(var i = 0; i < links.length; i++) {
        if(links[i].className.match(/^externo|^externo | externo | externo$|externo$/)) {
            links[i].onclick = funcionPopup;
        }
        
        if(links[i].className.match(/^exportacion|^exportacion | exportacion | exportacion$|exportacion$/)) {
            links[i].onclick = funcionPopupExportacion;
        }

        if(links[i].className.match(/^facebook|^facebook | facebook | facebook|facebook/)) {
            links[i].onclick = funcionPopupFacebook;
        }

        if(links[i].className.match(/^twitter|^twitter | twitter | twitter|twitter/)) {
            links[i].onclick = funcionPopupTwitter;
        }
                
        if(links[i].className.match(/^normasDeEstiloDeRevista|^normasDeEstiloDeRevista | normasDeEstiloDeRevista | normasDeEstiloDeRevista$|normasDeEstiloDeRevista$/)) {
            links[i].onclick = funcionPopupNormasDeEstiloDeRevista;
        }
    }
}

var funcionPopup = function() {
    window.open(this.href);
    return false;
}

var funcionPopupExportacion = function() {
    window.open(anadirModoPopup(this.href), null, "width = 600, height = 600, scrollbars = yes, resizable = yes").focus();
    return false;
}

var funcionPopupTwitter = function() {
    var width  = 550,
        height = 340,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = this.href,
        opts   = 'width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(anadirModoPopup(url), "Twitter", opts).focus();
    return false;
}

var funcionPopupFacebook = function() {
    var width  = 900,
        height = 560,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = this.href,
        opts   = 'width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(anadirModoPopup(url), "Twitter", opts).focus();
    return false;
}

var funcionPopupNormasDeEstiloDeRevista = function() {
    window.open(anadirModoPopup(this.href), null, "width = 500, height = 400, resizable = yes, scrollbars = yes").focus();
    return false;
}