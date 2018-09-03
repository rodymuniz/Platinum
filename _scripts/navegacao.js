function goTo(element, speed){
	var href = element.attr('href');
	var top = $(href).offset().top;
	$("html, body").animate({scrollTop : top}, speed);
}

$(function(){
	$("#platinumTop #platinumMenu a, .wrapper a").click(function (e){
		e.preventDefault();
		goTo($(this), 1000);
	//	return false;
	});
});