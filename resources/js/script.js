$(document).ready(function () {



	$("#nezajima").on("click", function () {
		alert("Klikáte špatně");
	});

	$(".js--section-knowledge").waypoint(
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

	/* Scroll on buttons */
	$(".js--scroll-to-section-knowledge").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-knowledge").offset().top },
			1000
		);
	});

	$(".js--scroll-to-section-education").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-education").offset().top },
			1000
		);
	});

	$(".js--scroll-to-section-plans").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-plans").offset().top },
			1000
		);
	});

	$(".js--scroll-to-section-about").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-about").offset().top },
			1000
		);
	});

	$(".js--scroll-to-section-about").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-about").offset().top },
			1000
		);
	});



			/*

	NAVIGATION SCROLL

	*/

			$(function () {
				$("a[href*=#]:not([href=#])").click(function () {
					if (
						location.pathname.replace(/^\//, "") ==
							this.pathname.replace(/^\//, "") &&
						location.hostname == this.hostname
					) {
						var target = $(this.hash);
						target = target.length
							? target
							: $("[name=" + this.hash.slice(1) + "]");
						if (target.length) {
							$("html,body").animate(
								{
									scrollTop: target.offset().top,
								},
								1000
							);
							return false;
						}
					}
				});
			});

			/* Animations on scroll */
			$(".js--wp-1").waypoint(
				function (direction) {
					$(".js--wp-1").addClass("animated bounceInLeft");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-2").waypoint(
				function (direction) {
					$(".js--wp-2").addClass("animated bounceInRight");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-3").waypoint(
				function (direction) {
					$(".js--wp-3").addClass("animated fadeInLeft");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-4").waypoint(
				function (direction) {
					$(".js--wp-4").addClass("animated fadeInRight");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-5").waypoint(
				function (direction) {
					$(".js--wp-5").addClass("animated bounceInUp");
				},
				{
					offset: "80%",
				}
			);
		});


		/*

		BACK TO TOP

		*/
var backToTop = $("<a>", {
	href: "#",
	class: "back-to-top",
	html: '	<ion-icon name="caret-up-circle-outline"></ion-icon>',
});

backToTop
	.hide()
	.appendTo("body")
	.on("click", function () {
		$("body").animate({ scrollTop: 0 });
	});

var win = $(window);
win.on("scroll", function () {
	if (win.scrollTop() >= 600) backToTop.fadeIn();
	else backToTop.hide();
});

	$(".back-to-top")
		.hide()
		.click(function () {
			$("html, body").animate({ scrollTop: 0 });

		});



















	/*
	 * BACK TO TOP

	var backToTop = $("<a>", {
		href: "#",
		class: "back-to-top",
		html: '<ion-icon name="caret-up-circle-outline"></ion-icon>',
	});

	backToTop
		.hide()
		.appendTo("body")
		.on("click", function () {
			$("body").animate({ scrollTop: 0 });
		});

	var win = $(window);
	win.on("scroll", function () {
		if (win.scrollTop() >= 500) backToTop.fadeIn();
		else backToTop.hide();
	});
*/


	/*	$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000); */


	/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})
*/
