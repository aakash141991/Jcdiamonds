jQuery( document ).ready(function($) {
	  $('.categories-list-container').owlCarousel({
	  	items: 4,
	  	margin: 10,
	  	dots: true,
	  	nav: true,
	  	slideBy:4,
	  	navContainer: '#customNav',
	  	dotsContainer: '#customDots',
	  	navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
	  });
});