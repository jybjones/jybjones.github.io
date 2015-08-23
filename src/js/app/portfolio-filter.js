$('#portfolioFilter').on('click', 'button', function() {

  var clicked = $(this);

  if (!clicked.hasClass('active'))
  {
    var allButtons     = clicked.siblings(),
      filter         = clicked.text(),
      portfolioItems = $('#portfolioItems .portfolio-item')

    allButtons.removeClass('active');
    clicked.addClass('active');

    if (filter == 'All')
    {
      portfolioItems.fadeIn();
      return false;
    }

    portfolioItems.each(function() {
      var item     = $(this),
        category = item.attr('data-category');

      if (filter == category)
        item.fadeIn();
      else
        item.hide();
    });
  }

});
