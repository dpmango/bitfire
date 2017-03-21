$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // hamburger
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
  });

  // Sticky header
  $(window).scroll(function(e){
    var wScroll = $(window).scrollTop();

    if( wScroll > 300 ) {
      $('.header').addClass('header--transformed');
    } else{
      $('.header').removeClass('header--transformed');
    }

    if( wScroll > $('.hero').height() - 80 ) {
      $('.header').addClass('header--sticky');
    } else{
      $('.header').removeClass('header--sticky');
    }
  });

  // WOW
  var wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         false        // default
  })
  wow.init();



});
