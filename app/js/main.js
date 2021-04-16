

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

    $('#checkbox').click(function () {
        if (this.checked != true) {
            $('.slider__right').removeClass('slider__active')
                .closest('.slider').find('.slider__left').addClass('slider__active');
            $('.pro h4').text('$4.99');
            $('.starter h4').text('Free');
        } else {
            $('.slider__left').removeClass('slider__active')
                .closest('.slider').find('.slider__right').addClass('slider__active');
            $('.pro h4').text('$7.99');
            $('.starter h4').text('$3.99');
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/question.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#thanks').fadeIn(2500).fadeOut(1500);
            $('form').trigger('reset');
        });
        $(this).find("input").val("");
        $('#thanks').fadeIn(1500).fadeOut(2500);
        return false;
    });

    $(".more__list").find("a").on('click', function (e) {
        e.preventDefault();
    });
    $(".plan__offer").find("a").on('click', function (e) {
        e.preventDefault();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    new WOW().init();


    $('.header__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay').addClass('d-flex');
    });
    $('.close').on('click', function () {
        $('.overlay').removeClass('d-flex');
    });
});




