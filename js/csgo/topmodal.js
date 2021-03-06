(function($){

  var methods = {

      init: function() {
          var self = $(this);
    
          $(document).on('click', methods.options.popupBtn, function() {
              methods.show(self);
              methods.showOverlay(self);
          });
    
          $(document).on('click', methods.options.popupBtnClose, function() {
              methods.hide(self);
              methods.hideOverlay(self);
          });

          $(document).on('click', methods.options.popupOverlay, function() {
              methods.hide(self);
              methods.hideOverlay(self);
          });
      },

      show: function(self) {
          self.addClass('is-open');
      },

      hide: function(self) {
          self.removeClass('is-open');
      },
      
      showOverlay: function(self) {
          self.siblings(methods.options.popupOverlay).addClass('is-open');
      },

      hideOverlay: function(self) {
          self.siblings(methods.options.popupOverlay).removeClass('is-open');
      }
  };

  $.fn.topmodal = function(method) {

      methods.options = $.extend({
          popup: '.js-topmodal',
          popupBtn: '.js-topmodal-btn',
          popupBtnClose: '.js-topmodal-btn-close',
          popupOverlay: '.js-topmodal-overlay'
      }, method);

      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
          return methods.init.apply(this, arguments);
      } else {
          $.error('TopModal has no such method: ' + method);
      }

      return this;
  };

})(jQuery);