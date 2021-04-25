$(function(){
    $('.intro__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    }); 
    $('.reviews__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
    $('.header__menu-burger').on('click', function(){
        $('.header__menu-list').toggleClass('header__menu-list--active');
    });
});