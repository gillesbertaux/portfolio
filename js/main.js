$(document).ready(function() {
  var origTitle = $(document).find("title").text();
  var newTitle = "See Livestorm.co!";
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

$(document).scroll(function () {
  var el = $('.main-nav');
  var w = $(window).height() + 200;
  var s = $(window).scrollTop() + $(window).height();

  if ($('.main-nav')) {
    if (s > w) {
      el.addClass('active');
    } else {
      el.removeClass('active');
    }
  }
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