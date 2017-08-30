$(document).ready(function() {
	$('.dos').hide();
	$('.tres').hide();
	$('.cuatro').hide();
	$('.cinco').hide();
	$('.seis').hide();
	$('.siete').hide();
	$('.uno').click(function(e) {
		$(this).removeClass('pulse');	
		$('#linea1').css({
			width: '300px',
			background: '#428bca',
			transform: 'rotate(20deg)'
		});
		$('#linea1').css('margin-top','7%');
		$('.dos').show();
	});

	$('.dos').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea2').css({
			width: '270px',
			background: '#428bca',
			transform: 'rotate(-35deg)'
		});
		$('#linea3').css({
			width: '400px',
			background: '#428bca',
			transform: 'rotate(-10deg)'
		});
		$('#linea1').css('height','5px');
		$('#linea2').css('margin-top','-3%');
		$('#linea2').css('margin-left','-1%');
		$('#linea3').css('margin-top','1%');
		$('#linea3').css('margin-left','2%');
		$('.tres').show();
		$('.cuatro').show();
		$('.cinco').show();
	});

	$('.tres').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea4').css({
			width: '80px',
			background: '#428bca',
			transform: 'rotate(150deg)'
		});
		$('#linea4').css('margin-top','0%');
		$('#linea4').css('margin-left','-7%');
		$('#linea2').css('height','5px');
		setTimeout(function() {
			$(".ruta-mn").fadeIn(1500);
		},2000);
		$('.seis').show();
	});

	$('.cuatro').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea5').css({
			width: '72px',
			background: '#428bca',
			transform: 'rotate(85deg)'
		});
		$('#linea5').css('margin-top','14%');
		$('#linea5').css('margin-left','6.5%');
		$('#linea3').css('height','5px');
		setTimeout(function() {
			$(".ruta-mopp").fadeIn(1500);
		},2000);
		$('.seis').show();
	});

	$('.cinco').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea6').css({
			width: '72px',
			background: '#428bca',
			transform: 'rotate(85deg)'
		});
		$('#linea6').css('margin-top','17%');
		$('#linea6').css('margin-left','9.5%');
		setTimeout(function() {
			$(".ruta-xd").fadeIn(1500);
		},2000);
		$('.seis').show();
	});

	$('.seis').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea6').css({
			width: '72px',
			background: '#428bca',
			transform: 'rotate(85deg)'
		});
		$('#linea6').css('margin-top','17%');
		$('#linea6').css('margin-left','9.5%');
		setTimeout(function() {
			$(".ruta-ptl").fadeIn(500);
		},1000);
		$('.siete').show();
		$('#linea4').css('height','5px');
		$('#linea5').css('height','5px');
		$('#linea6').css('height','5px');
	});

	$('.siete').click(function(e) {
		$(this).removeClass('pulse');
		setTimeout(function() {
			$(".ruta-ds").fadeIn(500);
		},1000);
	});

});


$('#comenzar').on('click', function(e){

	$('#txtUsername').typeIt({
		strings : 'BigBoss',
		speed: 50,
		autoStart: true,
		cursor: false
	});

	$('#txtPassword').typeIt({
		strings : '*********',
		speed: 50,
		autoStart: true,
		startDelay: 1000,
		cursor: false
	});
	
	$("#fase-dos").removeClass("hidden")
	$("#foto").addClass("hidden")
	
});

$('#login-button').on('click', function(e){
	e.preventDefault();

	$('#txtCodigo').typeIt({
		strings : 'Bc1ol9',
		speed: 50,
		autoStart: true,
		cursor: false
	});

	$("#fase-tres").removeClass("hidden")
	$("#formLogin").addClass("hidden")
	$(".footerGL").addClass("hidden")
});

$('#btnJoin').on('click', function(e){
	e.preventDefault();

	$('#txtNombreGrupo').typeIt({
		strings : 'The Best Group',
		speed: 50,
		autoStart: true,
		cursor: false
	});

	$("#fase-cuatro").removeClass("hidden")
	$("#fase-tres").addClass("hidden")
	$("#formLogin").addClass("hidden")
});
$("#btn").on('click', function(e){
	e.preventDefault();

	$("#fase-cinco").removeClass("hidden")
	$(".headerGL").addClass("hidden")
	$("#fase-cuatro").addClass("hidden")
	$("#fase-tres").addClass("hidden")
	$("#formLogin").addClass("hidden")
	$(".footerGL").addClass("hidden")
})

$("#btnSubmitNuevoGrupo").on("click", function(e){
	e.preventDefault();

	$("#grupo").removeClass("hidden");
	$("#jugador").addClass("hidden");
})

