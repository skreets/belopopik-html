$(document).ready(function(){

	$('.gallerys').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});

	$('.posts-wrapp').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});

	$('.gallerys div img').each(function() {
    var $this = $(this),
      title = $this.attr('alt');
    $this.after($('<span class="alt">').html(title));
  });

});
