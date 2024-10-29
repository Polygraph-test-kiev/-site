$(function () {
	$(".form-element").submit(function () {
		var formID = $(this).attr("id");
		var formNm = $("#" + formID);
		var message = $(formNm).find(".form-message");
		var formTitle = $(formNm).find(".form-title");
		$.ajax({
			type: "POST",
			url: "telegram.php",
			data: formNm.serialize(),
			success: function (data) {
				message.html(data);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html("");
					$("input")
						.not(":input[type=submit], :input[type=hidden]")
						.val("");
						alert("Благодарим за заявку!");
						$(".form-element").trigger("reset");
				});
			},
			error: function (error) {
				message.html(error);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html("");
					$("input")
						.not(":input[type=submit], :input[type=hidden]")
						.val("");
				});
			}
		});
		return false;
	});

	$(".form-docs").submit(function () {
		var formID = $(this).attr("id");
		var formNm = $("#" + formID);
		var message = $(formNm).find(".form-message");
		var formTitle = $(formNm).find(".form-title");
		$.ajax({
			type: "POST",
			url: "telegram-docs.php",
			data: formNm.serialize(),
			success: function (data) {
				message.html(data);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html("");
					$("input")
						.not(":input[type=submit], :input[type=hidden]")
						.val("");
						alert("Благодарим за заявку!");
						$(".form-element").trigger("reset");
				});
			},
			error: function (error) {
				message.html(error);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html("");
					$("input")
						.not(":input[type=submit], :input[type=hidden]")
						.val("");
				});
			}
		});
		return false;
	});

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
