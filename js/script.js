(function($) {

  $(document).ready(function() {

    /**
     * Set the correct rating markup.
     */
    $('.bake .rating').each(function () {
      var rating = $(this).data('rating'),
        ratingPercentage = (rating * 2) * 10;

      if (rating) {
        $(this)
          .wrapInner('<span></span>')
          .prepend('<span class="stars" style="width: ' + ratingPercentage + '%;" />')
          .find('span:nth-child(2)').hide();
      }
    });
  });

})(jQuery);
