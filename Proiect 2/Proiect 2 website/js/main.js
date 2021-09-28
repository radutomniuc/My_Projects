var doc = jQuery(document);

$(window).on("load",function(){
	$('.loader').fadeOut(500);
});

doc.ready(function(){

	"use strict";

	/*** scrolling animation ***/

	$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var cssvalue = $(this.element).attr('data-animation');

			$(this.element).addClass("animated "+cssvalue);
			$(this.element).css('opacity','1').fadeIn(2000);
		  },
		  offset: '70%'
		})

	});

});