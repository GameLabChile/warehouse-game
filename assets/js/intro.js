$(document).ready(function() {
	$("#btn-intro").on("click", generarTexto);
	$("#btn-intro2").on("click", generarTexto);

	function generarTexto() {
		$("p").remove('#contenido');
		$(".dialogo").append('<p id="contenido">Tu objetivo será cumplir las metas de despacho y recepción, al mínimo costo.</p>');
		$("#btn-intro").on("click", generarTexto2);
		$("#btn-intro2").on("click", generarTexto2);
	}

	function generarTexto2(){
		$("p").remove('#contenido');
		$(".dialogo").append('<p id="contenido">Comienza planificando el día en la sala de reuniones.</p>');
		$("#btn-intro").on("click", nextPage);
		$("#btn-intro2").on("click", nextPage);
	}

	function nextPage() {
		$("#btn-intro").attr("href", "reuniones.html");
		$("#btn-intro2").attr("href", "reuniones.html");
	}
});

