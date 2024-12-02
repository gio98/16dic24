$(function(){
	var btn = $('.btn'), bg_1 = $('.bg-1'), bg_2 = $('.bg-2'), ang_a = $('.ang-a'), ang_b = $('.ang-b'), ang_c = $('.ang-c'), text = $('.text'), glow = $('.glow'), dots = $('.dots'), shine = $('.shine');
	var start = function(){
		document.getElementById("audio").play();
		document.getElementById("intro1").style.visibility = 'hidden';
		document.getElementById("intro2").style.visibility = 'hidden';
		document.getElementById("intro3").style.visibility = 'hidden';
		document.getElementById("intro4").style.visibility = 'hidden';
		document.body.style.background = 'url(sfondo1.jpg) fixed center no-repeat';
		ang_a.removeClass('d-none').removeClass(ang_a.data('in')).addClass(ang_a.data('in'));
		ang_b.removeClass('d-none').removeClass(ang_b.data('in')).addClass(ang_b.data('in'));
		ang_c.removeClass('d-none').removeClass(ang_c.data('in')).addClass(ang_c.data('in'));
		bg_2.removeClass('d-none').removeClass(bg_2.data('out')).addClass(bg_2.data('in'));
		setTimeout(function(){
			bg_1.removeClass('d-none').removeClass(bg_1.data('out')).addClass(bg_1.data('in'));
		},500);
		btn.fadeOut(200);
	}
	btn.on('click',start);
	bg_2.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
		setTimeout(function(){
		bg_2.fadeOut('fast').addClass('d-none').removeClass(bg_2.data('in'));
			text.removeClass('d-none').addClass(text.data('in'));
		},600);
	});
	text.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
		setTimeout(function(){
			
			text.addClass('txt-ind');
			glow.removeClass('d-none').addClass(glow.data('in'));
			dots.removeClass('d-none');
			shine.removeClass('d-none').addClass(shine.data('in'));
			document.getElementById("feliz").style.visibility = 'visible';
			document.getElementById("cump").style.visibility = 'visible';
			document.getElementById("micomp").style.visibility = 'visible';
			document.getElementById("vida").style.visibility = 'visible';
			document.getElementById("heart").style.visibility = 'visible';
			document.getElementById("ag").style.visibility = 'visible';
			document.getElementById("mario").style.visibility = 'visible';
			document.getElementById("luigi").style.visibility = 'visible';
			document.getElementById("btn1").style.visibility = 'visible';
		},50);
		
	});
	glow.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
		bg_2.removeAttr('style').removeClass('d-none').addClass(bg_2.data('out'));
	});
	

	$(document).on('animate:reset',function(){
		$('.el').each(function(){
			$(this).addClass('d-none').removeClass($(this).data('in')).removeClass($(this).data('out')).removeAttr('style');
		});
		text.removeClass('txt-ind');
		btn.fadeIn(200);
	});
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  btn.style.visibility = 'hidden'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  btn.style.visibility = 'visible'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	btn.style.visibility = 'visible'
  }
}