    

    

    



var request = null;

/* Construcción de una petición
 * Parámetros:
 *    reqType: el tipo de request GET or POST
 *    url: la URL a invocar
 *    asynch: Para indicar si ejecutamos la petición de forma asíncrona
 *    funcion: funcion que se registra para onreadystatechange
 */
function httpRequest(reqType, url, parametros, asynch, funcion) {
    //mozilla based
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
        if(request.overrideMimeType) {
            request.overrideMimeType("text/xml");
        }
    } else if(window.ActiveXObject) {
        request = new ActiveXObject("Msxml2.XMLHTTP");
        if(!request) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    //comprueba que request se ha creado ok
    if(request) {
       initReq(reqType, url, parametros, asynch, funcion);
    } else {
       alert("Su navegador no es compatible con esta aplicación");
    }
}

//Inicializa una petición y la envía
function initReq(reqType, url, parametros, bool, funcion) {
    try {
        request.onreadystatechange = funcion
        request.open(reqType, url, bool);
        if(parametros != null) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        }
        request.send(parametros);
    } catch (errv) {
        alert("No se pudo contactar con el servidor\nPor favor, vuelva a intentarlo");
        alert(errv);
    }
}

function addEvent(obj, evType, fn){ 
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

    addEvent(window, 'load', onLoadParaSeleccionarArticulo);

//manejadores de eventos del formulario
function onLoadParaSeleccionarArticulo() {
    var checkDeArticulo = getCheckDeArticulo();

    if(checkDeArticulo != null) {
        checkDeArticulo.onclick = function() {
            enviarMarcadoDeArticulo(this);
        }

        checkDeArticulo.disabled = false;
    }
}

function enviarMarcadoDeArticulo(checkDeArticulo) {
    if(checkDeArticulo != null) {
        var url = new Array();
        var accion = "";

        if(checkDeArticulo.checked) {
            //Marcarlo
            accion = "seleccionar";
        } else {
            //Desmarcarlo
            accion = "deseleccionar";
        }

        url.push("/servlet/seleccionar_articulo?accion=");
        url.push(accion);
        url.push("&codigoDeArticulo=");
        url.push(encodeURIComponent(checkDeArticulo.getAttribute("value")));

        httpRequest("GET", url.join(""), null, true, manejarRespuestaDeMarcadoDeArticulo);
    }
}

//manejador de la respuesta de XMLHttpRequest
function manejarRespuestaDeMarcadoDeArticulo() {
    try {
        if(request.readyState == 4) {

            if(request.status == 200) {

                var respuesta =  request.responseXML.documentElement;
                if(respuesta != null) {

                    if(respuesta.nodeName == "respuesta") {

                        var estado = respuesta.getElementsByTagName("estado");
                        if(estado[0].getAttribute("valor") == "ok") {

                            redibujarArticulo(respuesta);
                        }
                    }
                } else {
                    alert("Tipo de respuesta no esperada\nPor favor, vuelva a intentarlo");
                }
            } else {
                alert("Ha ocurrido un problema comunicando con el servidor\nPor favor, vuelva a intentarlo");
            }
        }
    } catch (err) {
        alert("Ha ocurrido un error procesando su petición\nPor favor, vuelva a intentarlo");
    }
}

function redibujarArticulo(respuesta) {
    var seleccionar = true;

    var conjuntoDeArticulos = respuesta.getElementsByTagName("documentos-seleccionados");
    var articulo = null;

    if(conjuntoDeArticulos.length == 1) {
        //Marcar como seleccionado
        seleccionar = true;
        articulo = conjuntoDeArticulos[0].childNodes[0];
    } else {
        conjuntoDeArticulos = respuesta.getElementsByTagName("documentos-deseleccionados");
        if(conjuntoDeArticulos.length != 0) {
            //Marcar como deseleccionados
            seleccionar = false;
            articulo = conjuntoDeArticulos[0].childNodes[0];
        }
    }

    if(articulo != null) {
        actualizarDivDeSuscribirArticulo(articulo.getAttribute("codigo"),articulo.getAttribute("tipo"), seleccionar);
    }
}

function actualizarDivDeSuscribirArticulo(codigoDeArticulo,tipoDeDocumento, seleccionar) {
    var labelDeSelecionarArticulo = document.getElementById("labelDeSeleccion-" + tipoDeDocumento +"-" + codigoDeArticulo);

    if(labelDeSelecionarArticulo != null) {
        //Cambio la clase del label del articulo
        var divDeSeleccionarArticulo = labelDeSelecionarArticulo.parentNode.parentNode.parentNode;
        
        var classDeSeleccionarArticulo = divDeSeleccionarArticulo.className;

        if(seleccionar) {
            if(classDeSeleccionarArticulo == null) {
                divDeSeleccionarArticulo.className = "seleccionado";
            } else {
                divDeSeleccionarArticulo.className = classDeSeleccionarArticulo + " " + "seleccionado";
            }
        } else {
            if(classDeSeleccionarArticulo != null) {
                divDeSeleccionarArticulo.className = classDeSeleccionarArticulo.replace("seleccionado", "");
            }
        }
    }
}

function getCheckDeArticulo() {
    var resultado = null;
    var encontrado = false;

    var todosLosInputs = document.getElementsByTagName("input");

    var inputActual = null;
    var i = 0;
    while(i < todosLosInputs.length && !encontrado) {
        inputActual = todosLosInputs[i];
        if(inputActual.type == "checkbox" && inputActual.id.substring(0, 23) == "checkDePortadaSeleccion") {
            resultado = inputActual;
            encontrado = true;
        }

        i++;
    }

    return(resultado);
}