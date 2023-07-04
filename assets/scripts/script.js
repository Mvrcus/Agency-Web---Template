
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(window).ready(()=>{$("#loading").fadeOut(1e3),$("body").css("overflow","auto")});var a=0;$(window).scroll(function(){$(window).scrollTop()>$("#main").offset().top+200?($("#scrollTopBtn").fadeIn(500),$("#scrollTopBtn").css("display","flex")):$("#scrollTopBtn").fadeOut(500);var t=$("#counter-box").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>t&&($(".counter").each(function(){var t=$(this),o=t.attr("data-number");$({countNum:t.text()}).animate({countNum:o},{duration:850,easing:"swing",step:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))},complete:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))}})}),a=1)}),$("#scrollTopBtn").click(()=>{$("html,body").animate({scrollTop:0},2)});let toggleMenu=document.getElementById("toggleMenu"),LinksList=document.getElementById("LinksList");toggleMenu.addEventListener("click",()=>{toggleMenu.classList.toggle("open"),LinksList.classList.toggle("open")}),$(function(){$(".owl-carousel").owlCarousel({margin:20,responsive:{0:{items:1,dots:!0,loop:!0},600:{items:2,dots:!0,loop:!0},1e3:{items:4,dots:!0,loop:!0}}})}),AOS.init();