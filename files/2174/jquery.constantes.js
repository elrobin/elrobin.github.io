


/* Esta función añade la etiqueta "cargando" en BlockUI según el idioma seleccioado,
 * también añade el boton cancelar por defecto a los diálogos 
 */

;(function($) {
    $.addCSS = function(url){
        var linkTag = document.createElement('link');
        linkTag.type = 'text/css';
        linkTag.rel = 'stylesheet';
        linkTag.href = url;
        linkTag.media = 'screen, projection';
        linkTag.charset = 'utf-8';
        document.getElementsByTagName("head")[0].appendChild(linkTag);
    };

    $.setConstantes = function setConstants() {
        
        $("<img src='/imagen/cargando.gif'/>").appendTo("body").remove();
        
        if($.blockUI) $.blockUI.defaults.message = "<img src='/imagen/cargando.gif' alt='Cargando'/><span>Cargando</span>";
        
        if($.fn.botonesDialogo) $.fn.botonesDialogo.defaults.botonCancelar = $("<button id='cerrar' class='boton'>Cerrar</button>");
        
        if($.fn.fileInput) {
            $.fn.fileInput.defaults.textoNoSeleccionado = 'No se ha seleccionado ningún archivo';
            $.fn.fileInput.defaults.botonExaminar = 'Examinar';
            $.fn.fileInput.defaults.botonSeleccionado = 'Seleccionado';
        }
    };
    
    /* Comentado hasta evaluar que consecuencias positivas/negativas podría tener
    // Loggeo mediante Google Analytics todas las peticiones AJAX
    $(document).ajaxSend(function(event, xhr, settings){
        if (typeof _gaq !== "undefined" && _gaq !== null) {
            _gaq.push(['_trackPageview', settings.url]);
        }
    });*/
    
})(jQuery);

$(document).ready(function(){
    $.setConstantes();
});

// Establezco las constantes también antes del document.ready por si hay scripts en linea que las requieran
$.setConstantes();

