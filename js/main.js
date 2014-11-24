$(document).ready(function() {
	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();
		var percentagePos = scrollPos/($(document).height() - $(window).height());
		var barPercentage = 100 * percentagePos + "%";
		$(".progressbar").css("width", barPercentage + "%");
	});
});