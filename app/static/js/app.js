/* Project specific Javascript goes here. */

$(document).ready (function () { 


	$( "#cover" ).each(function(){
	    var $this = $(this);
	    $this.css({'min-height':($(window).height())+'px'});

	    /*Recalculate on window resize*/
	    $(window).resize(function(){
	        $this.css({'min-height':($(window).height())+'px'});
	    });
	});

	$("#button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	   		}, 1000);
	});

	$("#first").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#cover").offset().top
	   		}, 1000);
	});

	$("#second").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	   		}, 1000);
	});

	$('body').scrollspy({ target: '.navbar-example' });

});