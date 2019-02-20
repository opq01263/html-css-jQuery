jQuery(document).ready(function($) {
	var mySwiper = new Swiper ('.swiper-container', {
    // 可選參數
    direction: 'horizontal',
    speed: 1200,
    loop: true,
    autoplay: {
    delay: 1500,
    },
    effect: 'flip',

  });
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
    });
      $(window).scroll(function(){
     //最後一頁scrollTop=body-window，50是預留空間
     last=$("body").height()-$(window).height()-10
     if($(window).scrollTop()>=last){
     $(".topbutton a").hide()
     }
})
$(".topbutton a").click(function(event) {
  event.preventDefault()
  $("html,body").animate({
    scrollTop: 0
  }, 800);
});
	$(".dropdown").click(function(event) {
		event.preventDefault();
		$(".dropdown").toggleClass('active');
		$(".dropdown-open").slideToggle();
	});
  $("a,.enter").click(function(event) {
    event.preventDefault();
  });
});