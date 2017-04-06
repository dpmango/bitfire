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
    $('.mobile-menu').toggleClass('is-active');
  });

  // Sticky header
  $(window).scroll(function(e){
    var wScroll = $(window).scrollTop();

    if ($('.header').is('.header--static')){

    } else{
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
    }
    
  });

  // Set active anchor tags
  // Cache selectors
  var topMenu = $(".header__menu"),
  topMenuHeight = topMenu.outerHeight()+80,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems.removeClass("active").filter("[href='#"+id+"']").addClass("active");
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

window.addEventListener('load', function() {
    var video = document.querySelector('.hero video');

    function checkLoad() {
        if (video.readyState === 4) {
            setTimeout(function(){
              $('.preloader').addClass('reveal');
            }, 300);

        } else {
            setTimeout(checkLoad, 100);
        }
    }

    checkLoad();
}, false);
