$(document).ready(function() {

	//resize fullscreen img
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//menu click
	$(".toggle_menu").click(function() {
	  $(".sandwich").toggleClass("active");
	});

	$(".nav-menu ul a").click(function() {
		$(".nav-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".name-wrap").css("opacity", "1");
	});
	$(".toggle_menu").click(function() {
		if ($(".nav-menu").is(":visible")) {
			$(".name-wrap").css("opacity", "1");
			$(".nav-menu").fadeOut(600);
			$(".nav-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".name-wrap").css("opacity", ".1");
			$(".nav-menu").fadeIn(600);
			$(".nav-menu li a").addClass("fadeInUp animated");
		};
	});

	//animation

	// if ($(window).width() > 1024) {
	// 	$(".animation_1").animated("flipInY");
	// 	$(".animation_2").animated("fadeInLeft");
	// 	$(".animation_3").animated("fadeInRight");
	// }

	$('.popup').magnificPopup({type:'image'});

	//paints mix
	$("#paint-list").mixItUp();

	//active
	$(".paint-nav li").click(function() {
		$(".paint-nav li").removeClass("active");
		$(this).addClass("active");
	});

	//form validation
	//$("input, select, textarea").jqBootstrapValidation();
	
	//tabs
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//scroll to
	$(".nav-menu ul a").mPageScroll2id();
	$(".top-nav ul a").mPageScroll2id();

	//lazyload
	$('a img').lazyload({
	  event: "scrollstop",
	  effect : "fadeIn"
	});
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".name-wrap h1").animated("fadeInDown", "fadeOutUp");
}); 
