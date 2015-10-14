function headerInfo() {
	$('header .description').css({
		'margin-top': -$('header .description').outerHeight()/2+68+'px'
	});
}
function headerHeight() {
	$('header').height($(window).height());
}
$(document).ready(function() {
	if ( $('header').length > 0 ) {
		headerHeight();
	}
	$('.zoom').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('.menu-drop li a').bind('click', function(event) {
		var t = $('[data-anchor="'+$(this).attr('href')+'"]');
		$('body, html').stop().animate({
			scrollTop: t.offset().top+'px'
		}, 500);
		$('.menu-drop').stop().fadeOut(400);
		event.preventDefault();
	});
	$('.menu-open').bind('click', function(event) {
		if ( $('.menu-drop').is(':visible') ) {
			$('.menu-drop').stop().fadeOut(400);
		}
		else {
			$('.menu-drop').stop().fadeIn(400);
		}
		event.preventDefault();
	});
	$('html').click(function() {
		$('.menu-drop').stop().fadeOut(400);
	});
	$('.menu-open, .menu-drop').click(function(event){
		event.stopPropagation();
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).load(function() {
	if ( $('header .description').length > 0 ) {
		headerInfo();
		$('header .description').css({
			'opacity': '1'
		});
	}
	if ( $('.reviews ul').length > 0 ) {
		var max = 0;
		$('.reviews ul li div').each(function() {
			var h = $(this).outerHeight(); 
			max = h > max ? h : max;
		});
		$('.reviews ul li div').outerHeight(max);
		$('.reviews ul').css({
			'opacity': '1'
		});	
	}
});
$(window).resize(function() {
	if ( $('header').length > 0 ) {
		headerHeight();
	}
	if ( $('header .description').length > 0 ) {
		headerInfo();
	}
});