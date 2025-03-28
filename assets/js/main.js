(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		
	
	//---------- animation 

	AOS.init();

	//---------- animation 

			
	//---------- menu 

		$(".menu_bar").click(function(){
			$(".main_menu").addClass("active");
		  });
		$(".menu-x, .main_menu ul li a").click(function(){
			$(".main_menu").removeClass("active");
		  });
		
		//---------- menu  	
		


	//------- counterUp
	$('.coundown').counterUp({
		delay: 10,
		time: 1000
		});
	//------- counterUp
		







	  });








}(jQuery));	