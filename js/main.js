$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.b-tech').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.b-clients').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.banner-slider').slick({
		dots: true
	});

	$('.b-about-slider').slick({
		dots: true
	});

	$(document).on('click','.b-filter ul li',function(){
		var el = $(this).attr('data-filter');

		if ( !$(this).hasClass('active') ){
			$(this).parents('ul').find('li').removeClass('active');
			$(this).parents('.filter-wrap').find('.filter-item').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
			$(this).parents('.b-filter').find('.text').find('span').text( $(this).text() );
		}
		$(this).parents('.b-filter').removeClass('active');
	});

	$(document).on('click','.b-filter .text',function(){
		$(this).parents('.b-filter').toggleClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.b-filter');
		
		if ( container.has(e.target).length === 0 ){
			container.removeClass('active');
		}
	});

	$(document).on('click','.b-qwestions li',function(){
		var ah = $(this).find('.answer').find('.text').outerHeight();

		$(this).toggleClass('active');
		if ( $(this).hasClass('active') ){
			$(this).find('.answer').animate({'height':ah},300);
		} else {
			$(this).find('.answer').animate({'height':0},300);
		}
	});

	$(window).resize(function(){

		if ($('.b-qwestions').length){
			$('.b-qwestions').find('li.active').each(function(){
				var ah = $(this).find('.answer').find('.text').outerHeight();
				$(this).find('.answer').css('height',ah);
			});
		}

	});

});