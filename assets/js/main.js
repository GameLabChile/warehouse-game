
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
/*
$(document).ready(function(){
	$("#clicktext").click(function(){
		$('#asd1').typeIt({
			strings: 'Producto del temporal, la ',
			speed: 60,
			autoStart: true,
			cursor: false,
			lifeLike: true,
			callback:	function() {$('#asd').typeIt({
				startDelete: true,
				strings: 'fabrica A no cuenta con suministro eléctrico. Turno matutino dirigirse a jefatura. Turno vespertino suspendido.',
				speed: 10,
				autoStart: true,
				cursor: false,
				breakLines: false,
				deleteDelay: 200,
				lifeLike: true,
			});}
		});
		setTimeout(function(){
			$('#filter-rol').addClass('pulse');
		},4500);
	});
	$('.enter-button').on('click', function(e){
		setTimeout(function(){
			$('.container').animate({
				bottom: ["50%", "swing"]
			}, 1000, function(){
				$('.container').animate({
					top: ["0%", "swing"]
				}, 1000, function(){
					$('#create-message-pulse').addClass('pulse');
				});
			});
		}, 1200);
	});
	$('#login-button').on('click', function(e){
		$('#in-panel').animate(
		{
			right: ['100%', 'swing']
		},
		300,
		function(){
			$('#mail').typeIt({
				strings: 'arctos@osa.com',
				speed: 100,
				autostart: true,
				cursor: false
			});
			$('#pass').typeIt({
				strings: '••••••••',
				speed: 100,
				autoStart: true,
				startDelay: 2500,
				cursor: false
			});
			setTimeout(function() 
			{
				$('.mail-form').fadeOut('slow','linear');
				$('.rut-form').delay( 1000 ).fadeIn('fast','linear');
				setTimeout(function()
				{
					$('#rut').typeIt({
						strings: '19457653-4',
						speed: 100,
						autoStart: true,
						startDelay: 1000,
						cursor: false

					});
					$('#pass-rut').typeIt({
						strings: '••••••••',
						speed: 100,
						autoStart: true,
						startDelay: 3000,
						cursor: false
					});
					setTimeout(function()
					{
						$('#get-in').addClass('pulse');
					},
					4000
					);
				}, 
				1000
				);
			}, 
			4000
			);
		}
		);
	});
	$('#create-message').on('click', function(e) {
		$('.container').prepend($('#message').html());
		$('.bear-phone').addClass('vibration');
		$('.eye').addClass('alert-eye');
		setTimeout(function(){ 
			$('.new-message-card:first-child').addClass('new-message-vib');
			$('.new-message-card:not(:first-child)').removeClass('new-message-vib');
			setTimeout(function(){
				$('.bear-push-none').removeClass('bear-push-none').addClass('bear-push-initial');
				setTimeout(function(){
					$('.bear-push-initial').addClass('bear-push-none').removeClass('bear-push-initial');
				}, 4000);
			},500);
		}, 500);
		$('.pulse').removeClass('pulse');
	});
	$('#create-message-rounded').on('click', function(e) {
		$('.bear-phone').removeClass('vibration');
		$('.eye').removeClass('alert-eye');
	});
	$('#rol-filter-button').on('click', function(e){
		$('#filter-rol').removeClass('pulse').addClass('height-35');
		$('.modal-filter').animate( {
			bottom: [ "0", "swing" ]
		},
		300,
		function() {
			console.log( "done! filter" );
			console.log("done");
			setTimeout(function(){
				$('.check-select').addClass('pulse');
			}, 1000);
		}
		).addClass('modal-display');
		$('.cover-filter').fadeIn('fast','linear');
		setTimeout(() => {
			$('#test1').attr('checked','checked');
			$('#test2').attr('checked','checked');
			$('#test3').attr('checked','checked');
		},500)
	});
	$('.btn-modal').on('click', function(e) {
		$('.modal-filter').animate( {
			bottom: [ "-100%", "swing" ]
		},
		900,
		function() {
			console.log( "done! filter" );
		}
		).removeClass('modal-display');
		$('.cover-filter').delay(200).fadeOut('fast','linear');
		$('#rol-picker-2').hide();
		$('#rol-selected').show();
		$('#rol-picker').show();
		$('#before-filter').hide();
		$('#after-filter').show();
		$('#check-button').addClass('pulse');
	});
	$("#test6").change(function() {
		if(this.checked) {
			$('.check-select').removeClass('pulse');
			$('.ok-select').addClass('pulse');
		}
	});
	setTimeout(function () {
		$('#login-button').trigger('mouseover');
	}, 10);

	setTimeout(function () {
		$('#login-button').trigger('mouseout');
	}, 1000);
});
*/