$(function(){

//Sylwia

    $('.short_about').animate({opacity: 0.5}, 1000);
    var $currentSlide = $('.short_about').first().css({opacity: 0.8});

//Natalia

    $('.js').mouseover( function () {
        $(this).stop(true, false).animate({
            width: "17em",
            height: "17em"
        }, 0, function() {
        });

        $('#jsimg').stop(true, false).animate({
            width: "16em",
            height: "16em"
        }, 0, function() {
        });

        $('.js h2').stop(true, false).hide();

        $('#icon').stop(true, false).animate({display: "block"}, 0).fadeIn("slow");

    });


    $('.js').mouseout( function () {
        $(this).animate({
            width: "15em",
            height: "15em"
        }, 0, function() {
        });

        $('#jsimg').animate({
            width: "14em",
            height: "14em"
        }, 0, function() {
        });

        $('.js h2').stop(true, false).fadeIn( "slow", function() {
        });

        $('#icon').stop(true, false).animate({display: "none"}, 0).fadeOut(0);

    });


});


