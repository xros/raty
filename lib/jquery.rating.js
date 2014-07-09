;(function($) {
  function Raty() {

  };

  $.fn.raty = function(options) {
    return this.each(function() {
      var self = $(this);

      if (!self.data('raty')) {
        self.data('raty', new Raty(this, options));
      }
    });
  };
}(jQuery));
