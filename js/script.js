$(document).ready(function() {
  $('.js-responsive-slider').slick({
    dots: true,
    arrows: false
  });

  $('.js-portfolio-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.js-team-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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