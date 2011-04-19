/*
  jShaker jQuery Plugin
  (C)2010 ajaxBlender.com
  For any questions please visit www.ajaxblender.com 
  or email us at support@ajaxblender.com
  Some modifications by ronier@gmail.com
*/
;(function($){
    var element = {};
    $.fn.jshaker = function(){
      element = $(this);
      element.css('position', 'relative');
      element.run = true;
      element.find('*').each(function(i, el){
	  $(el).css('position', 'relative');
	});
      var iFunc = function(){ $.fn.jshaker.animate($(element)); };
      setTimeout(iFunc, 50);
    };    
    $.fn.jshaker.animate = function(el){
      if( element.run == true ) {
	$.fn.jshaker.shake(el);
	el.find('*').each(function(i, el){
	    $.fn.jshaker.shake(el);
	  });        
	var iFunc = function(){ $.fn.jshaker.animate(el); };
	setTimeout(iFunc, 50);
      }
    }
    $.fn.jshaker.stop = function(el) {
      element.run = false;
      element.css("top","0px");
      element.css("left","0px");
    }
	
    $.fn.jshaker.shake = function(el){
      var pos = $(el).position();
      if(Math.random() > 0.5){
	$(el).css('top', pos['top'] + Math.random() * 20 < 10 ? (Math.random() * 20 * (-1)) : Math.random() * 20);
      } else {
	$(el).css('left', pos['left'] + Math.random() * 20 < 10 ? (Math.random() * 20 * (-1)) : Math.random() * 20);
      }
    }
  })(jQuery);
