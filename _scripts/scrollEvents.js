$(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		
		if( y >= 300){
			$('#icon1').addClass('animate');
			$('#icon2').addClass('animate');
			$('#icon3').addClass('animate');
		} else {
			$('#icon1').addClass('animate');
			$('#icon2').addClass('animate');
			$('#icon3').addClass('animate');
		}
	});
});



$(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		
		if( y >= 300){
			$('#leftContainer h1').fadeIn("slow");
			$('#leftContainer p').fadeIn("slow");
		} else {
			$('#leftContainer h1').fadeOut("slow");
			$('#leftContainer p').fadeOut("slow");
		}
	});
});
