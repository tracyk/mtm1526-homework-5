$(document).ready(function() {

	$('a').on('click', function(ev) {
		$.ajax({
			cache: true
		});
	});

	$('.tab1').on('click', function(ev) {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab1').css("background-color", "#66FFFF");
		$('.fill-me').load('tab1.html');
	});

	$('.tab2').on('click', function(ev) {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab2').css("background-color", "#66FFFF");
		$('.fill-me').load('tab2.html');
	});

	$('.tab3').on('click', function(ev) {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab3').css("background-color", "#66FFFF");
		$('.fill-me').load('tab3.html');
	});

	$('.tab4').on('click', function(ev) {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab4').css("background-color", "#66FFFF");
		$('.fill-me').load('tab4.html');
	});


	//$('.target').hide();

});