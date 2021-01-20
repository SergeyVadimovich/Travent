$(function(){

    const offsetTop = 400;

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  });
  
  $('.client__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    responsive:[
      {
          breakpoint:1051,
          settings:{
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint:931,
          settings:{
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint:771,
          settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
  ]
  });

  $('.language').on('click', function(){
    $('.language__list').toggleClass('language__list-active');
  });

  $('.phone__btn').on('click', function(){
    $('.phone__list').slideToggle();
  });

  $('.search-btn').on('click', function(){
    $('.search-btn__form').toggleClass('search-btn__form--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
    $('.ham, .ham2').removeClass('active');
  });
  
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu a, .anchor').on('click', function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 700);
  });

  $(document).ready(function () {
      const showAnchor = $(window).scrollTop() > offsetTop;
      handleVisibilityAnchor(showAnchor);
  })

  $(document).on('scroll', function () {
      const showAnchor = $(window).scrollTop() > offsetTop;
      handleVisibilityAnchor(showAnchor);
  })

function handleVisibilityAnchor(show) {
    if (show) {
        $('.anchor').show();
    } else {
        $('.anchor').hide();
    }
}

});
