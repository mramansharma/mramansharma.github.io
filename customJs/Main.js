$(document).ready(function(){
	$(window).scroll(function() {
  		$(".animateUp").each(function(){
    		var position = $(this).offset().top;
    		var topWindow = $(window).scrollTop();
    		if (position < topWindow + 500) {
      			$(this).addClass("slide");
    		}
  		});
	});
});