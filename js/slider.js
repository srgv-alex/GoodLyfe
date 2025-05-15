document.addEventListener('DOMContentLoaded', function () {
	let headerSwiper = new Swiper('.header-slider', {
		loop: true,
		// effect: 'fade',
		speed: 1000,
		preloadImages: false,
		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
