$(document).ready(function() {
	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();
		var percentagePos = scrollPos/($(document).height() - $(window).height());
		var barPercentage = 100 * percentagePos + "%";
		$(".progressbar").css("width", barPercentage + "%");
	});
	var origTitle = $(document).find("title").text();
	var newTitle = "See Rumble.live!";
	function setTitle( t ){
		document.title = t;
	}
	$(window).on("focus", function(){
		setTitle( origTitle );
	});
	$(window).on("blur", function(){
		setTitle( newTitle );
	});
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
