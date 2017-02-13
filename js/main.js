$(function(){

//Sylwia

    $('.short_about').animate({opacity: 0.5}, 1000);
    var $currentSlide = $('.short_about').first().css({opacity: 0.8});

//Natalia

    // 1

    $('.feature_mobile').mouseover( function () {
        $(this).stop(true, false).animate({
            width: "22em",
            height: "22em"
        }, 0, function() {
        });

        $('.feature_mobile img').stop(true, false).animate({
            width: "21em",
            height: "21em"
        }, 0, function() {
        });

        $('.feature_mobile h2').stop(true, false).hide();

        $('#icon1').stop(true, false).animate({display: "block"}, 0).fadeIn("slow");

    });


    $('.feature_mobile').mouseout( function () {
        $(this).animate({
            width: "20em",
            height: "20em"
        }, 0, function() {
        });

        $('.feature_mobile img').animate({
            width: "19em",
            height: "19em"
        }, 0, function() {
        });

        $('.feature_mobile h2').stop(true, false).fadeIn( "slow", function() {
        });

        $('#icon1').stop(true, false).animate({display: "none"}, 0).fadeOut(0);

    });

    //2

    $('.feature_wcag').mouseover( function () {
        $(this).stop(true, false).animate({
            width: "22em",
            height: "22em"
        }, 0, function() {
        });

        $('.feature_wcag img').stop(true, false).animate({
            width: "21em",
            height: "21em"
        }, 0, function() {
        });

        $('.feature_wcag h2').stop(true, false).hide();

        $('#icon2').stop(true, false).animate({display: "block"}, 0).fadeIn("slow");

    });


    $('.feature_wcag').mouseout( function () {
        $(this).animate({
            width: "20em",
            height: "20em"
        }, 0, function() {
        });

        $('.feature_wcag img').animate({
            width: "19em",
            height: "19em"
        }, 0, function() {
        });

        $('.feature_wcag h2').stop(true, false).fadeIn( "slow", function() {
        });

        $('#icon2').stop(true, false).animate({display: "none"}, 0).fadeOut(0);

    });

    //3

    $('.feature_search').mouseover( function () {
        $(this).stop(true, false).animate({
            width: "22em",
            height: "22em"
        }, 0, function() {
        });

        $('.feature_search img').stop(true, false).animate({
            width: "21em",
            height: "21em"
        }, 0, function() {
        });

        $('.feature_search h2').stop(true, false).hide();

        $('#icon3').stop(true, false).animate({display: "block"}, 0).fadeIn("slow");

    });


    $('.feature_search').mouseout( function () {
        $(this).animate({
            width: "20em",
            height: "20em"
        }, 0, function() {
        });

        $('.feature_search img').animate({
            width: "19em",
            height: "19em"
        }, 0, function() {
        });

        $('.feature_search h2').stop(true, false).fadeIn( "slow", function() {
        });

        $('#icon3').stop(true, false).animate({display: "none"}, 0).fadeOut(0);

    });

    //4

    $('.feature_security').mouseover( function () {
        $(this).stop(true, false).animate({
            width: "22em",
            height: "22em"
        }, 0, function() {
        });

        $('.feature_security img').stop(true, false).animate({
            width: "21em",
            height: "21em"
        }, 0, function() {
        });

        $('.feature_security h2').stop(true, false).hide();

        $('#icon4').stop(true, false).animate({display: "block"}, 0).fadeIn("slow");

    });


    $('.feature_security').mouseout( function () {
        $(this).animate({
            width: "20em",
            height: "20em"
        }, 0, function() {
        });

        $('.feature_security img').animate({
            width: "19em",
            height: "19em"
        }, 0, function() {
        });

        $('.feature_security h2').stop(true, false).fadeIn( "slow", function() {
        });

        $('#icon4').stop(true, false).animate({display: "none"}, 0).fadeOut(0);

    });

    /*antibot*/

    var firstNumber = Math.floor((Math.random() * 10) + 1);
    var secondNumber = Math.floor((Math.random() * 100) + 1);
    var finalResult = firstNumber + secondNumber;
    var $xxx;

    $('.first_number').val(firstNumber);
    $('.second_number').val(secondNumber);

    $('#submit').click(function (){

        $xxx = parseInt($('.final_result').val());
        var antibotResult = document.getElementById("antibot_result");

        console.log(finalResult, $xxx);

        if ( finalResult === ($xxx) ) {
            return true
        }
        else {
            antibotResult.reportValidity(); return false;
        }

    });





});


