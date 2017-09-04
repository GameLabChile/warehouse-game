$(document).ready(function() {
	// index
	$("#btn-reu").on("click", function() {
		location = "intro.html"
	});

	// intro
	$("#btn-intro").on("click", generarTexto);

	function generarTexto() {
		$("#contenido").html('Tu objetivo será cumplir las metas de despacho y recepción, al mínimo costo.');
		$("#btn-intro").on("click", generarTexto2);
	}

	function generarTexto2(){
		$("#contenido").html('Comienza planificando el día en la sala de reuniones.');
		$("#btn-intro").on("click", nextPage);
	}

	function nextPage() {
		location = "reuniones.html"
	}
});

IZoom = setInterval(function(){
    var docWidth = window.outerWidth;
    var scale = docWidth/1366;
    //document.documentElement.style.zoom = scale
    document.documentElement.style.webkitTransform = "scale("+scale+")";
    document.documentElement.style.MozTransform = "scale("+scale+")";
    document.documentElement.style.msTransform = "scale("+scale+")";
    document.documentElement.style.OTransform = "scale("+scale+")";
    document.documentElement.style.transform = "scale("+scale+")";
    document.documentElement.style.webkitTransformOrigin = "0 0";
    document.documentElement.style.MozTransformOrigin = "0 0";
    document.documentElement.style.msTransformOrigin = "0 0";
    document.documentElement.style.OTransformOrigin = "0 0";
    document.documentElement.style.transformOrigin = "0 0";
    document.documentElement.style.width = (100/scale)+"%";
    document.documentElement.style.height = (100/scale)+"%";
},0.5)