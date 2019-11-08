$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots'
	});
	// main-slider
	// 	$('.offer-blocks').slick({
	// 		infinite: true,
	// 		autoplay: true,
	// 		autoplaySpeed: 3000,
	// 		speed: 1500,
	// 		slidesToShow: 2,
	// 		slidesToScroll: 1,
	// 		arrows: false,
	// 	})
});