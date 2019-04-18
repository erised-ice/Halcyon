$(document).ready(function() {
  $('.js-responsive-slider').slick({
    dots: true,
    arrows: false
  });

  $('.js-portfolio-slider').slick({
    dots: true,
    arrows: false
  });

  $('.js-team-slider').slick({
    dots: true,
    arrows: false
  });
});

function smoothAnchor() {
  var menu = $('.js-nav');
  var smoothSpeed = 5000;

  menu.on('click','a', function (event) {
    event.preventDefault();

    var target = $(event.target);
    var id  = target.attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, smoothSpeed);
  });
}

smoothAnchor()