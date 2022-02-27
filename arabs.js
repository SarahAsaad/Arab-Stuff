var popup = $('.popup');
$(window).scroll(function(){
  
/*    
 	var show = $(document).scrollTop() / (600);
    popup.css('opacity', show);  
  */
  
  if($(window).scrollTop() > $(document).height()/4){
    popup.addClass('popup_show'); 
  };
  
  $( '.close' ).click(function() {
  		popup.css('display', 'none');
	});
  
  
});