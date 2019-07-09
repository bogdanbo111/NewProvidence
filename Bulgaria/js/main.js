

/* Слайдер */

$(document).ready(function() {
        $('.single-item').slick({
            dots: true,
            speed: 1000,
            infinite: true,
            prevArrow: $('.respond__left'),
            nextArrow: $('.respond__right'),
            slidesToShow: 1,
            slidesToScroll: 1,


        });
    });


/* Гамбургер */

$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });


    /* Анімація якірної ссилки */

    $('.bulgary__link').on('click', function (e) {
        e.preventDefault();

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 1000);


    });
});





