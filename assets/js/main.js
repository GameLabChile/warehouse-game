$(document).ready(function(){
    setTimeout(function(){
    	$(".globo").fadeIn(500);
    },1000);

     setTimeout(function(){
    	$(".globo2").fadeIn(1000);
    },2000);

      setTimeout(function(){
    	$(".globo3").fadeIn(1500);
    },3000);

       setTimeout(function(){
    	$(".all-maribel").fadeIn(2000);
    },4000);

});

$(document).ready(function() {
	$('.dos').hide();
	$('.tres').hide();
	$('.cuatro').hide();
	$('.cinco').hide();
	$('.seis').hide();
	$('.siete').hide();
	$('.btn-planta').hide();
	$('.siguiente').hide();
	$('.uno').click(function(e) {
		$(this).removeClass('pulse');	
		$('#linea1').css({
			width: '280px',
			background: '#c50000',
			transform: 'rotate(16deg)'
		});
		$('.dos').show();
	});

	$('.dos').click(function(e) {
		$(this).removeClass('pulse');
		$('#linea2').css({
			width: '270px',
			background: '#c50000',
			transform: 'rotate(-35deg)'
		});
		$('#linea3').css({
			width: '400px',
			background: '#c50000',
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
			background: '#c50000',
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
			background: '#c50000',
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
			background: '#c50000',
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
			background: '#c50000',
			transform: 'rotate(85deg)'
		});
		setTimeout(function() {
	        $(".ruta-ptl").fadeIn(500);
	    },1000);
	    $('.siete').show();
	    $('#linea4').css('height','5px');
	    $('#linea5').css('height','5px');
	});

	$('.siete').click(function(e) {
		$(this).removeClass('pulse');
		setTimeout(function() {
	        $(".ruta-ds").fadeIn(500);
	    },1000);
	    $('.btn-planta').show();
		$('.siguiente').show();
	});

});
	

$('#comenzar').on('click', function(e){
	
	$("#fase-dos").removeClass("hidden")
	$("#foto").addClass("hidden")
});

$('#login-button').on('click', function(e){
	e.preventDefault();

	$("#fase-tres").removeClass("hidden")
	$("#formLogin").addClass("hidden")
	$(".footerGL").addClass("hidden")
});

$('#btnJoin').on('click', function(e){
	e.preventDefault();

	$("#fase-cuatro").removeClass("hidden")
	$("#fase-tres").addClass("hidden")
	$("#formLogin").addClass("hidden")
	$(".footerGL").addClass("hidden")
});
$("#btn").on('click', function(e){
	e.preventDefault();

	$("#fase-cinco").removeClass("hidden")
	$("#fase-cuatro").addClass("hidden")
	$("#fase-tres").addClass("hidden")
	$("#formLogin").addClass("hidden")
	$(".footerGL").addClass("hidden")
})

