$(function() {
	$(".form-element").submit(function () {
		$.ajax({
			type: "POST",
			url: "telegram.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
			.find("input")
			.val("");
			window.location.replace("/thank-you.html");
			$(".form-element").trigger("reset");
		});
		return false;
	});
	$(".form-docs").submit(function () {
		$.ajax({
			type: "POST",
			url: "telegram-docs.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
			.find("input")
			.val("");
			window.location.replace("/thank-you.html");
			$(".form-docs").trigger("reset");
		});
		return false;
	});
});
smoothScrol();
function smoothScrol() {
	const anchors = document.querySelectorAll('a[href^="#"]');
	for (let anchor of anchors) {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
			document.querySelector(goto).scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}
}