$(function() {
	$(".form-element").submit(function() {
		var t = $(this).attr("id"),
		e = $("#" + t),
		n = $(e).find(".form-message"),
		i = $(e).find(".form-title");
		return $.ajax({
			type: "POST",
			url: "telegram.php",
			data: e.serialize(),
			success: function(t) {
				n.html(t), i.css("display", "none"), setTimeout(function() {
					i.css("display", "block"), n.html(""), $("input").not(":input[type=submit], :input[type=hidden]").val("")
				}, 3e3)
			},
			error: function(t, e, s) {
				n.html(s), i.css("display", "none"), setTimeout(function() {
					i.css("display", "block"), n.html(""), $("input").not(":input[type=submit], :input[type=hidden]").val("")
				}, 3e3)
			}
		}), !1
	}),
	$(".form-medbook").submit(function() {
		var t = $(this).attr("id"),
		e = $("#" + t),
		n = $(e).find(".form-message"),
		i = $(e).find(".form-title");
		return $.ajax({
			type: "POST",
			url: "telegram.php",
			data: e.serialize(),
			success: function(t) {
				n.html(t), i.css("display", "none"), setTimeout(function() {
					i.css("display", "block"), n.html(""), $("input").not(":input[type=submit], :input[type=hidden]").val("")
				}, 3e3)
			},
			error: function(t, e, s) {
				n.html(s), i.css("display", "none"), setTimeout(function() {
					i.css("display", "block"), n.html(""), $("input").not(":input[type=submit], :input[type=hidden]").val("")
				}, 3e3)
			}
		}), !1
	}),
	$(".scrolldown").on("click", function(t) {
		t.preventDefault();
		var e = $(this).attr("href"),
		n = $(e).offset().top;
		$("body,html").animate({
			scrollTop: n
		}, 1e3)
	}), $(".jsMenu").click(function() {
		$("._nav").slideToggle(), $(this).toggleClass("menu-is-active")
	}), $(".jsSubMenu").click(function() {
		$(this).next().slideToggle()
	}), $("._nav li a").click(function(t) {
		t.preventDefault(), event.preventDefault();
		var e = $(this).attr("href"),
		n = $(e).offset().top;
		$("body,html").animate({
			scrollTop: n
		}, 1e3), $(this).parents("._nav").fadeOut(900), $(".jsMenu").removeClass("menu-is-active")
	})
});