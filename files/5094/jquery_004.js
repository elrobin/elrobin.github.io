/* Permite abrir mediante fancybox los dialogos de envio de correo a amigo/incidencia y petición de documentos */
$(document).on('click', 'a.correo, a.peticion, a.mailDeContacto, a.resumen', function(event){
    event.preventDefault();
    $.post($(this).attr("href"), {dialog : true}, function(data) {
        $.fancybox(data);
        procesarLinksExternos();
    }).error(function(xhr, status, error){
        $.fancybox(xhr.responseText);
        procesarLinksExternos();
    });
});