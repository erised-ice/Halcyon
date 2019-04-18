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
  var element = $('.js-anchor');
  var smoothSpeed = 500;

  element.on('click', function (event) {
    event.preventDefault();

    var target = $(event.currentTarget);
    var id  = target.attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, smoothSpeed);
  });
}

smoothAnchor();