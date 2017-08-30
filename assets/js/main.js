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
			width: '280px',
			background: '#428bca',
			transform: 'rotate(16deg)'
		});
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
		$('.tres').show();
		$('.cuatro').show();
		$('.cinco').show();
	});

	$('.tres').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea4').css({
			width: '65px',
			background: '#428bca',
			transform: 'rotate(-30deg)'
		});
		$('#linea2').css('height','5px');
		setTimeout(function() {
	        $(".ruta-mn").fadeIn(1500);
	    },2000);
	    $('.seis').show();
	});

	$('.cuatro').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea5').css({
			width: '45px',
			background: '#428bca',
			transform: 'rotate(75deg)'
		});
		$('#linea3').css('height','5px');
		setTimeout(function() {
	        $(".ruta-mopp").fadeIn(1500);
	    },2000);
	    $('.seis').show();
	});

	$('.cinco').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea6').css({
			width: '55px',
			background: '#428bca',
			transform: 'rotate(-118deg)'
		});
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
	