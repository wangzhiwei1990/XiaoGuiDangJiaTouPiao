//create by zhiwei wang     2016-4-7 23:35:01
var touch = ("createTouch" in document),
	start = touch ? "touchstart" : "mousedown",
	move = touch ? "touchmove" : "mousemove";
	end = touch ? "touchend" : "mouseup";

var rem = $(window).width()/16;
$("html").css("font-size",rem);

$(function(){
	var mySwiper = new Swiper('#banner', {
		autoplay: 5000,//可选选项，自动滑动
		loop : true,
		pagination : '.swiper-pagination',
		paginationType : 'bullets',
	})
})