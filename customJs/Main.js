$(document).ready(function(){
	$(window).scroll(function() {
  		$(".animateUp").each(function(){
    		var position = $(this).offset().top;
    		var topWindow = $(window).scrollTop();
    		if (position < topWindow + 600) {
      			$(this).addClass("slide");
    		}
  		});
	});
});