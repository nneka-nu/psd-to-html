$(document).ready(function() {
	
	/* Show or hide the menu when menu icon is clicked */
	$('.menu-icon').on('click', function( evt ) {
		evt.preventDefault();
		$('header ul').toggle();
		$('header nav').toggleClass('dropdown');
	});
	
	/* Animate scroll to anchor links */
	$('nav li a').on('click', function(evt) {
		evt.preventDefault();
		var $href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $($href).offset().top
		}, 1100
		);
	});
	
	/* On scroll, make the navigation sticky */
	$(window).scroll(function() {
		var $currPos = $(this).scrollTop();
		if ($currPos > 27) {
			$('.fixed-nav').addClass('fixed');
		}
		else {
			$('.fixed-nav').removeClass('fixed');
		}
	});
	
	
	
	/* Waypoints if viewer is scrolling down. Uses Waypoints.js */
	var waypoint = new Waypoint({
		element: document.getElementById('about-section'),
  		handler: function(direction) {
			  if (direction === 'down') {
				  $('nav li a').filter('.active-link').removeClass('active-link');
				  $('#about-link a').addClass('active-link'); 

			  }
  		},
		offset: 60
	});

	var waypoint = new Waypoint({
		element: document.getElementById('portfolio-section'),
  		handler: function(direction) {
			  if (direction === 'down') {
				  $('nav li a').filter('.active-link').removeClass('active-link');
				  $('#portfolio-link a').addClass('active-link');
			  }		
  		},
		offset: 60
	});
	
	var waypoint = new Waypoint({
		element: document.getElementById('services-section'),
  		handler: function(direction) {
			  if (direction === 'down') {
				  $('nav li a').filter('.active-link').removeClass('active-link');
				  $('#services-link a').addClass('active-link');
			  }		
  		},
		offset: 60
	});
	
	var waypoint = new Waypoint({
		element: document.getElementById('contact-section'),
  		handler: function(direction) {
			  if (direction === 'down') {
				  $('nav li a').filter('.active-link').removeClass('active-link');
				  $('#contact-link a').addClass('active-link');
			  }		
  		},
		offset: 60
	});
	
	/* Waypoints if viewer is scrolling up */
	var waypoint = new Waypoint({
		element: document.getElementById('end-home'),
		handler: function(direction) {
			if (direction === 'up' && !$('#home-link a').hasClass('active-link')) {
				$('nav li a').filter('.active-link').removeClass('active-link');
				$('#home-link a').addClass('active-link');
			}
		},
		offset: 60
	});

	var waypoint = new Waypoint({
		element: document.getElementById('end-about'),
		handler: function(direction) {
			if (direction === 'up' && !$('#about-link a').hasClass('active-link')) {
				$('nav li a').filter('.active-link').removeClass('active-link');
				$('#about-link a').addClass('active-link');
			}
			
		},
		offset: 60
	});
	
	var waypoint = new Waypoint({
		element: document.getElementById('end-portfolio'),
		handler: function(direction) {
			if (direction === 'up' && !$('#portfolio-link a').hasClass('active-link')) {
				$('nav li a').filter('.active-link').removeClass('active-link');
				$('#portfolio-link a').addClass('active-link');
			}
		},
		offset: 60
	});
	
	var waypoint = new Waypoint({
		element: document.getElementById('end-services'),
		handler: function(direction) {
			if (direction === 'up' && !$('#services-link a').hasClass('active-link')) {
				$('nav li a').filter('.active-link').removeClass('active-link');
				$('#services-link a').addClass('active-link');
			}
		},
		offset: 60
	});	
	
}); //end of document.ready