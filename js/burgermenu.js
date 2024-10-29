$(function () {

	$(".scrolldown").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});

	var $btnMenu = $('.jsMenu');
	$btnMenu.click(function () {
		$('._nav').slideToggle();
		$(this).toggleClass('menu-is-active');
	});

	$('.jsSubMenu').click(function () {
		$(this).next().slideToggle();
	});

	$('._nav li a').click(function (e) {
		e.preventDefault();
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
		$(this).parents('._nav').fadeOut(900);
		$('.jsMenu').removeClass('menu-is-active');
	});
});