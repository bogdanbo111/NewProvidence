

$(function () {
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        initialSlide: 2,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.slick').slick({
        dots: false,
        speed: 1000,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        centerMode: true,
        initialSlide: 1,
        centerPadding: '-160px',
        slidesToShow: 3,
        asNavFor: '.slick__nav',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slick__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slick',
        initialSlide: 1,
        centerMode: true,
        focusOnSelect: true,
        fade: true
    });


});




