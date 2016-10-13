$(document).ready(function(){
/*--------------------------------------------------------*/
/* # GENERAL */
/*--------------------------------------------------------*/

// Loading
$(function(){
	$(window).load(function() {
		show();
	});


	function show() {
		$('#loading').hide();
		$('#content').fadeIn();
	};
});

// Js Check
$(function(){
	$("html").removeClass("no-js").addClass("js");
});

// Titles
$(function(){
	$('section').waypoint(function(){
		$(this).find('.section-title > h1').addClass('animated fadeInDown');
		$(this).find('.section-title > p').addClass('animated fadeInUp');
	}, {offset: 400});
});

// Back Top
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.back-top-btn').removeClass('downscaled');
		} else {
			$('.back-top-btn').addClass('downscaled');
		}
	});	
	$('.back-top-btn').click(function(){
			$('body,html').animate({ scrollTop: 0 }, 800);
			return false;
	});
});

/*--------------------------------------------------------*/
/* # NAVIGATION */
/*--------------------------------------------------------*/

// Sticky Nav
$(function(){
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('#nav').addClass('hidden');
			$('.top-header .socials').hide();
			$('.menu').appendTo('.top-header .container');
		} else {
			$('#nav').removeClass('hidden');		
			$('.top-header .socials').fadeIn(600);
			$('.menu').appendTo('#nav .container');
		}
	});	
});

// Mobile Menu
$(function(){
	$('.top-header .mobile-menu').click(function(){
		$('#nav').toggleClass('hidden');
	});			
});

// Nav Links
$(function(){
	var menu = $(".menu"),
		navBar = $("#header"),
		navBarHeight = navBar.outerHeight()+1,
		menuItems = $(".menu li a");

	menuItems.click(function(e){		
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-navBarHeight+80;
		$('html, body').stop().animate({ 
				scrollTop: offsetTop
		}, 800);					
		e.preventDefault();

	});	
});

// Offsite Nav
$(function(){
	if($('body').hasClass('offsite-nav')){
		$('#nav ul.menu').appendTo('#bt-menu').removeClass('menu');
		$('.top-header ul.socials').appendTo('#bt-menu').removeClass('socials');	
	} else {
		$('#header').waypoint('sticky', { offset: -1 });
	}
	
});

/*--------------------------------------------------------*/
/* # SHOWCASE */
/*--------------------------------------------------------*/

// Selectors
$(function(){
	var scSelector = $('.showcase-selector'),
		scBullet   = $('.showcase-bullet');
		
	$('.portfolio:eq(0), .portfolio:eq(2) ').hide();

	var w = $(window).width();
	

		scSelector.click(function(){
		
			var sCase = $(this).data('showcase');
			
			$('.portfolio').fadeOut(600);
			
			$('.portfolio').filter("[data-showcase='" + sCase + "']").fadeIn(600);		
		
			$('.portfolio-item').show();
			$('.portfolio-detail').hide();
		
			scSelector.removeClass('active');
			$(this).addClass('active');
			
			if(scSelector.eq(0).hasClass('active')){
				scBullet.css('margin-left','12%');
			}
			if(scSelector.eq(1).hasClass('active')){
				scBullet.css('margin-left','45%');
			}
			if(scSelector.eq(2).hasClass('active')){
				scBullet.css('margin-left','79%');
			}
						
		});	
	

	
});

// Lightbox
$(function(){

	var pfItem = $('.portfolio-item'),
		pfDetail = $('.portfolio-detail'),
		pfOverlay = $('.lb-overlay'),
		pfClose = $('.portfolio-detail > .close');
	
	if($('#showcase').hasClass('lightbox')){
	
		var w = $(window).width();
		
		if(w > 768){
			pfItem.click(function(){
				var pfData = $(this).data('portfolio'),
					wTop   = $(document).scrollTop();
				
				pfOverlay.fadeIn(500);
				pfDetail.filter("[data-portfolio='" + pfData + "']").show().css({
					'top' : wTop-1100 + 'px'
				}).addClass('animated fadeInUpBig');
			});	
		}
		
		if(w < 768){
			pfItem.click(function(){
				var pfData = $(this).data('portfolio'),
					wTop   = $(document).scrollTop();
				
				pfOverlay.fadeIn(500);
				pfDetail.filter("[data-portfolio='" + pfData + "']").show().css({
					'top' : wTop-900 + 'px'
				}).addClass('animated fadeInUpBig');
			});	
		}	

		
		$('.lb-overlay, .portfolio-detail > .close').click(function(){
			pfOverlay.fadeOut(500);
			pfDetail.removeClass('animated bounceIn').fadeOut(300);
		});
	
	} else {
	
		$('.portfolio-details').append('<i class="icon-angle-left prev-detail">');
		$('.portfolio-details').append('<i class="icon-angle-right next-detail">');
		
		pfItem.click(function(){
			var pfData = $(this).data('portfolio');
			pfDetail.filter("[data-portfolio='" + pfData + "']").fadeIn();
			pfItem.hide();
			$('.prev-detail, .next-detail').show();		
		});
	
		
		$('.next-detail').click(function(){
			pfDetail.removeClass('animated fadeInRightBig fadeInLeftBig');
			pfDetail.filter(':visible').hide().next().show().addClass('animated fadeInRightBig');
			$('.prev-detail').fadeIn(300);
			if($(this).parent().children('.portfolio-detail:last').is(':visible')){
				$('.next-detail').fadeOut(300);
			}
		});
		
		
		$('.prev-detail').click(function(){
			pfDetail.removeClass('animated fadeInRightBig fadeInLeftBig');
			pfDetail.filter(':visible').hide().prev().show().addClass('animated fadeInLeftBig');
			$('.next-detail').fadeIn(300);
			if($(this).parent().children('.portfolio-detail:first').is(':visible')){
				 $('.prev-detail').fadeOut(300);
			}
		});		
		

		$('.portfolio-detail > .close').click(function(){
			pfDetail.fadeOut(300);
			$('.prev-detail, .next-detail').hide();
			pfItem.fadeIn();
		});

		$('.portfolio:eq(0) .portfolio-item:first, .portfolio:eq(1) .portfolio-item:first, .portfolio:eq(2) .portfolio-item:first').click(function(){
			$(this).parent().children('.portfolio-details').children('.prev-detail').hide();
		});
		
		$('.portfolio:eq(0) .portfolio-item:last, .portfolio:eq(1) .portfolio-item:last, .portfolio:eq(2) .portfolio-item:last').click(function(){
			$(this).parent().children('.portfolio-details').children('.next-detail').hide();
		});		

	};

});


/*--------------------------------------------------------*/
/* # SLIDER */
/*--------------------------------------------------------*/

// Controls
$(function(){
	$('.slider-prev').addClass('animated fadeInLeftBig');
	$('.slider-next').addClass('animated fadeInRightBig');
});

// Basic Slider	
$(function() {
    $('#the-slider').cycle({
        fx: 'fade',
        speed: 450,
        slides: "> li",
		next: '.slider-next',
		prev: '.slider-prev',
		timeout: 0
    });
});

// Animations
$(function() {
	var slide01model = $('.slide.01 .model').data('effect'),
		slide02model = $('.slide.02 .model').data('effect'),
		slide03model = $('.slide.03 .model').data('effect');
			
	var slide01content = $('.slide.01 .contents').data('effect'),
		slide02content = $('.slide.02 .contents').data('effect'),
		slide03content = $('.slide.03 .contents').data('effect');
			
	$('.slide.01 .model').addClass('animated ' + slide01model);
	$('.slide.01 .contents').addClass('animated ' + slide01content);

	var effects = 'animated flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft	fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight lightSpeedIn lightSpeedOut hinge rollIn rollOut';	

	$('.slider-next').click(function(){
		$('.slide').children().removeClass(effects);
		  if( $('.slide.01').hasClass('cycle-slide-active')){
			$('.slide.02 .model').removeClass().addClass('model animated ' + slide02model);
			$('.slide.02 .contents').removeClass().addClass('contents animated ' + slide02content);		
		} if( $('.slide.02').hasClass('cycle-slide-active')){
			$('.slide.03 .model').removeClass().addClass('model animated ' + slide03model);
			$('.slide.03 .contents').removeClass().addClass('contents animated ' + slide03content);		
		} if( $('.slide:last').hasClass('cycle-slide-active')){
			$('.slide.01 .model').removeClass().addClass('model animated ' + slide01model);
			$('.slide.01 .contents').removeClass().addClass('contents animated ' + slide01content);
		}
	});
	
	$('.slider-prev').click(function(){
		$('.slide').children().removeClass(effects);
		  if( $('.slide.01').hasClass('cycle-slide-active')){
			$('.slide:last .model').removeClass().addClass('model animated ' + slide03model);
			$('.slide:last .contents').removeClass().addClass('contents animated ' + slide03content);		
		} if( $('.slide.03').hasClass('cycle-slide-active')){
			$('.slide.02 .model').removeClass().addClass('model animated ' + slide02model);
			$('.slide.02 .contents').removeClass().addClass('contents animated ' + slide02content);		
		} if( $('.slide.02').hasClass('cycle-slide-active')){
			$('.slide.01 .model').removeClass().addClass('model animated ' + slide01model);
			$('.slide.01 .contents').removeClass().addClass('contents animated ' + slide01content);
		}
	});	
});

/*--------------------------------------------------------*/
/* # ABOUT */
/*--------------------------------------------------------*/

$(function(){
	$('.team-member').css('transform','scale(0.2)');
	$('#about').waypoint(function(){
		$('.team-member').css('transform','scale(1.0)');
	}, {offset: 500});
});

// Skill Bars
$(function(){
	$('#about').waypoint(function(){
		var skillBar = $('.skill-bar > span');
		var createBar =	function(){
			skillBar.each(function(){
				var percent = $(this).data('skill');
				$(this).css('width', percent);		
			});	
		}; createBar();	
	});
});

// Testimonials
$(function() {
    $('#testimonial-slider').cycle({
        fx: 'scrollHorz',
        speed: 250,
        slides: "> li",
		next: '#quote-next',
		prev: '#quote-prev'
    });
});


// Tooltips
$(function() {
	$('.tip').tooltipsy({
		delay: 600
	});
});

/*--------------------------------------------------------*/
/* # BLOG */
/*--------------------------------------------------------*/


$(function(){
	$('.blog-wrap').mCustomScrollbar({
		horizontalScroll:true
	});
	$('.mCSB_dragger_bar').addClass('transition');
});


$(function(){
	$('.blog-item').click(function(){

		$('.blog-detail').hide();
		$('.blog-item').children('span').hide();	

		var blogItem = $(this).data('blog'),
			firstRow = blogItem == '09' || blogItem == '10' || blogItem == '11' || 
					   blogItem == '12' || blogItem == '13' || blogItem == '14' || 
					   blogItem == '15' || blogItem == '16' || blogItem == '17';
					   
		$(this).children('span').slideDown(300);
		$('.blog-details').show().find("[data-blog='" + blogItem + "']").slideDown(300);
		
		if(firstRow){
			$('.blog-details').css('top','-29px');
			$('.blog-wrap, .blog-content').css('height','460px');
			
		} else {
			$('.blog-details').css('top','-180px');
			$('.blog-wrap, .blog-content').css('height','415px');
		}
	});

	$('.blog-detail .close').click(function(){
		$('.blog-details, .blog-detail').slideUp(300);
		$('.blog-item').children('span').hide();
		$('.blog-wrap, .blog-content').css('height','415px');
	});
});

/*--------------------------------------------------------*/
/* # CONTACT FORM */
/*--------------------------------------------------------*/

$(function() {
  $("#contact-form").on("submit",function(e){
    
    if($("#contact-form")[0].checkValidity()) {
      $.post("/mail", $("#contact-form").serialize(),  function(response) {
        $('.success').fadeIn(500).html(response);
        $("#contact-form").fadeOut(300);
		e.preventDefault();
      });
    } else console.log("invalid form");
	e.preventDefault(); // stop actual submission
  }); 
});


/*--- END DOCUMENT ---------------------------------------*/
});




