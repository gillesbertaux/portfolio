$(document).ready(function() {
	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();
		var percentagePos = scrollPos/($(document).height() - $(window).height());
		var barPercentage = 100 * percentagePos + "%";
		$(".progressbar").css("width", barPercentage + "%");
	});
	var origTitle = $(document).find("title").text();
	var newTitle = "Don't forget me :)";
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