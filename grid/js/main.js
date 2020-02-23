var $ = jQuery.noConflict();

jQuery(document).ready(function($){

	// object fit js initialisation
	objectFitImages();

	//Banner slider 
	$('.movie-slider').slick({
	  	infinite: true,
	  	slidesToShow: 1,
  		slidesToScroll: 1,
	  	arrows : true,
	  	autoplay : true,
	  	dots : true,
	  	centerMode: true,
    	centerPadding: '500px',
	   	focusOnSelect: true,
	   	prevArrow : '<div class="prev-arrow"><i class="fa fa-chevron-left"></i></div>',
	   	nextArrow : '<div class="next-arrow"><i class="fa fa-chevron-right"></i></div>',
	   	responsive: [
	    {
	      breakpoint: 1441,
	      settings: {
	        centerPadding: '300px',
	      }
	    },
      	{
	      breakpoint: 1337,
	      settings: {
	        centerPadding: '250px',
	      }
	    },
	    {
	      breakpoint: 1025,
	      settings: {
	        centerPadding: '100px',
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        centerPadding: '0px',
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

