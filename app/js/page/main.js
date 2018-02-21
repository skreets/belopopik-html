$(document).ready(function(){

	// Fixed block
	(function(){
	  var $h = $('header nav'),
	  hTop = $h.offset().top;

	  $(window).scroll(function(e){
	    var $this = $(this),
	    thisScroll = $this.scrollTop();

	  if(thisScroll > hTop) {
	    $h.addClass('fixed');
	  } else
	  $h.removeClass('fixed');
	  });
	})();

	$('.slider-wrapp').slick({
		dots: true,
		infinite: true,
		speed: 650,
		slidesToShow: 1,
		adaptiveHeight: true,
		fade: true,
  	cssEase: 'linear'
	});

	// No bot
	$('body').on('click', '.js-no-bot', function(){
		$(this).removeClass('js-no-bot').addClass('active');
		$('.form .button').removeClass('disabled').prop({'disabled':false});
	});
	$('body').on('click', '.active', function(){
		$(this).addClass('js-no-bot').removeClass('active');
		$('.form .button').addClass('disabled').prop({'disabled':true});
	});

	$('#instargamm-slider').instastream({
		instaToken: '3212988450.1677ed0.88ced7c8edd04693a828081c12592161',
		instaUser: '3212988450',
		instaResults: 10,
		instaMenu: 'yes'
	});

});
