/* Theme Name: Itawa - Real Estate Landing Page
	Author: Rajesh-Doot
	File Description: Main JS file of the template */	

	
(function ($) {
	"use strict";
	//OWL-CAROUSEL	
	$(".owl-carousel").each(function () {
		var $Carousel = $(this);
		$Carousel.owlCarousel({
			loop: $Carousel.data('loop'),
			autoplay: $Carousel.data("autoplay"),
			margin: $Carousel.data('space'),
			nav: $Carousel.data('nav'),
			dots: $Carousel.data('dots'),
			dotsSpeed: $Carousel.data('speed'),
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: $Carousel.data('slide-res')
				},
				1000: {
					items: $Carousel.data('slide'),
				}
			}
		});
	});
	//FLOOR PLAN POPUP  
	$('.image-popup-floor-plan').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
	});
	//GALLERY POPUP
	$('.image-popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
	});
	//STICKY HEADER
	$(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });
	
	//NAVBAR SCROLL		
	var aScroll = $('.nav-item .nav-link'),
		$navbarCollapse = $('.navbar-collapse');
	aScroll.on('click', function (event) {
		var target = $($(this).attr('href'));
		$(this).parent(".nav-item").siblings().removeClass('active');
		$(this).parent('.nav-item').addClass('active');

		if (target.length > 0) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 70
			}, 1000);
		}
		// If click link and navabr is show
		if ($('.navbar-collapse').hasClass('show')) {
			$('.navbar-collapse').toggleClass('show');
			$('.navbar-toggler-icon').toggleClass('active');
			$('.navbar-toggler').toggleClass('collapsed');
		}
	});

	
//Background image
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })	

})(jQuery);

// Show more properties
document.getElementById("show-more").addEventListener("click", function() {
	document.getElementById("more-properties").style.display = "flex";
	document.getElementById("show-less").style.display = "block";
	this.style.display = "none";
});

// Show less properties
document.getElementById("show-less").addEventListener("click", function() {
	document.getElementById("more-properties").style.display = "none";
	document.getElementById("show-more").style.display = "block";
	this.style.display = "none";
});



// Bootstrap modal

document.querySelectorAll('.btn-close').forEach(button => {
 button.addEventListener('click', function () {
	 let modal = bootstrap.Modal.getInstance(this.closest('.modal'));
	 modal.hide();
	 
	 // Ensure backdrop is removed
	 document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
 });
});

// Also remove overlay when modal is hidden
document.querySelectorAll('.modal').forEach(modal => {
 modal.addEventListener('hidden.bs.modal', function () {
	 document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
	 document.body.classList.remove('modal-open'); // Removes scrolling lock
 });
});



   document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("enquireButton").addEventListener("click", function (event) {
         event.preventDefault();

         // Close the modal (Assuming Bootstrap modal)
         var modal = document.querySelector(".modal.show");
         if (modal) {
            var modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
         }

         // Scroll to the contact section smoothly
         setTimeout(function () {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
         }, 100); // Delay to ensure modal closes first
      });
   });
