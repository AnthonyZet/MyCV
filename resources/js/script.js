$(document).ready(function () {
	$("#nezajima").on("click", function () {
		alert("Klikáte špatně");
	});




	/*PROČ TO NEFUNGUJE!!!??? */


	$(".sticky").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		},
		{
			offset: "60px;",
		}
	);

	/*
	SCROLL
	*/

	$('.js--scroll-to-plans').click(function() {
		$('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
});
