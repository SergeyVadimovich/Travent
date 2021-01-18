$(function(){
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
  });

  $('.language__btn').on('click', function(){
    $('.language__list').toggleClass('language__list-active');
  });

  $('.phone__btn').on('click', function(){
    $('.phone__list').slideToggle();
  });

  $('.search-btn').on('click', function(){
    $('.search-btn__form').toggleClass('search-btn__form--active');
  });

  $('.menu a, .anchor').on('click', function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 700);
  });

  $(document).on('scroll', window, function () {
    if ($(window).scrollTop()>400) 
    {
        $('.anchor').show();
    }
    else
    {
        $('.anchor').hide();
    }
    });
});