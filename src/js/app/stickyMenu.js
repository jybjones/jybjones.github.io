// $(window).on('scroll', function() {
//   var scroll     = $(window).scrollTop(),
//     feature    = $('#feature'),
//     primaryNav = $('#navbar-default navbar-fixed-top');

//   if (scroll >= feature.outerHeight())
//     primaryNav.addClass('sticky');
//   else
//     primaryNav.removeClass('sticky');
// });
// For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >100 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');
        }
    else{
      $(".navbar-fixed-top").removeClass('past-main');
      }
    });

/* ----------------------------------------------------------- */
  /*  12. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });

    //Click event to scroll to top

    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
//MENU SCROLLING WITH ACTIVE ITEM SELECTED

  // Cache selectors
  var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight()+13,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 900);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }
  })


  /* ----------------------------------------------------------- */
  /*  15. MOBILE MENU ACTIVE CLOSE
  /* ----------------------------------------------------------- */

  $('.navbar-nav').on('click', 'li a', function() {
    $('.navbar-collapse').collapse('hide');
  });



