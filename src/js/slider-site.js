$(document).ready(function () {
	// main - slider
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 3000,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots'
	});
	// slider offer
	$('.offer-slider').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
					dotsClass: 'offer-dots'
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: true,
					dotsClass: 'offer-dots'

				}
			},
			{
				breakpoint: 592,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					dotsClass: 'offer-dots'

				}
			}
		]
	})
});