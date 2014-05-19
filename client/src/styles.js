var $ = require('jquery');

$(function(){
	"use strict";

	var $window = $(window);

	// # Nav
	// - fixes the nav to the top of the screen
	// _______

	var $nav = $('.nav-container');
	var $navBuffer = $('.nav-fixed-buffer')
	var navOuterHeight = $nav ? $nav.outerHeight(true) : $navBuffer.height() + $('.trim-color-block').height();

	var fixNavTrigger = $('#projects').offset().top - navOuterHeight;

	// recalculate the trigger when window is resized
	$window.resize(function(e){
		fixNavTrigger = $('#projects').offset().top - navOuterHeight;
	});

	$window.scroll(function(){
    if ($window.scrollTop() >= fixNavTrigger){
			if (!$nav.hasClass('fixed')) {
				$nav.addClass('fixed');
				$navBuffer.removeClass('hide');
				$nav.find('.nav-inner-container').addClass('container');
			}
    }
    else{
			if ($nav.hasClass('fixed')) {
				$nav.removeClass('fixed');
				$navBuffer.addClass('hide');
				$nav.find('.nav-inner-container').removeClass('container');
			}
    }
	});

	// # Toggle the nav
	// _______________

	$('.toggle-nav').click(function(e){
		$nav.find('.nav').toggleClass('hide');

		// need display block on the list items
		// and margin top 50px
		// when there isn't enough horizontal room
	});

	// # Hover Links
	// _______________

	var colors = [
		'yellow',
		'amber',
		'orange',
		'sunset',
		'red',
		'fuchsia',
		'purple',
		'indigo',
		'blue',
		'aqua',
		'green',
		'lime'
	];

	var $links = $('.hover-link');

	$links.mouseenter(function(e){
		var $target = $(e.target).closest('.hover-link');
		var i = Math.floor(11.1111111 * Math.random());
		$target.addClass(colors[i]);
	});

	$links.mouseleave(function(e){
		var $target = $(e.target).closest('.hover-link');
		_($target.attr('class').split(/\s+/)).forEach(function(i){
			if (_(colors).contains(i)) {
				$target.removeClass(i);
			}
		});
	});


});