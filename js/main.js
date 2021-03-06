

// **************************category*********************
$(document).ready(function () {

    // Initialise Selectric Dropdown and Slick Carousel
    $('#categories').selectric();

    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                // centerMode: true,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    var currentIndex = 0;
    $('#categories').on('change', function () {
        currentIndex = $(this).prop('selectedIndex');
        var currentSlide = $('.responsive').slick('slickCurrentSlide');
        $('.responsive').slick('slickGoTo', parseInt(currentIndex));
    });


    $('.category .show-more-link').on('click', function () {
        $(this).next().css('display', 'block');
    });


    $('.category .close').on('click', function () {
        $(this).parent().css('display', 'none');
    });


});

// *******************end category*****************

/* *************Our Client say*************** */


// for animation 

$(document).ready(function () {
    $('.pp-quote').click(function () {
        $('.pp-quote').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {

    // hide-top

    $('.li-quote-1').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-1').addClass('show');
        $('.quote-text-1').removeClass('hide-bottom');
    });

    $('.li-quote-2').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-2').addClass('show');
        $('.quote-text-2').removeClass('hide-bottom');
    });

    $('.li-quote-3').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-3').addClass('show');
        $('.quote-text-3').removeClass('hide-bottom');
    });
    $('.li-quote-4').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-4').addClass('show');
        $('.quote-text-4').removeClass('hide-bottom');
    });
    $('.li-quote-5').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-5').addClass('show');
        $('.quote-text-5').removeClass('hide-bottom');
    });
    $('.li-quote-6').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-6').addClass('show');
        $('.quote-text-6').removeClass('hide-bottom');
    });
    $('.li-quote-7').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-7').addClass('show');
        $('.quote-text-7').removeClass('hide-bottom');
    });
    $('.li-quote-8').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-8').addClass('show');
        $('.quote-text-8').removeClass('hide-bottom');
    });


});


$(document).ready(function () {

    // hide-top

    $('.li-quote-1').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-1').addClass('look');
        $('.dp-name-1').removeClass('hide-dp-bottom');
    });

    $('.li-quote-2').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-2').addClass('look');
        $('.dp-name-2').removeClass('hide-dp-bottom');
    });

    $('.li-quote-3').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-3').addClass('look');
        $('.dp-name-3').removeClass('hide-dp-bottom');
    });
    $('.li-quote-4').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-4').addClass('look');
        $('.dp-name-4').removeClass('hide-dp-bottom');
    });

    $('.li-quote-5').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-5').addClass('look');
        $('.dp-name-5').removeClass('hide-dp-bottom');
    });

    $('.li-quote-6').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-6').addClass('look');
        $('.dp-name-6').removeClass('hide-dp-bottom');
    });
    $('.li-quote-7').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-7').addClass('look');
        $('.dp-name-7').removeClass('hide-dp-bottom');
    });
    $('.li-quote-8').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-8').addClass('look');
        $('.dp-name-8').removeClass('hide-dp-bottom');
    });


});
/* *************Our Client say end*************** */
