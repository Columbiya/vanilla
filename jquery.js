$(document).ready(function() {
    let coordinates_to_more = $('#more').offset().top;
    let coordinates_to_theSlider = $('#bg-3').offset().top;
    let coordinates_to_tabs = $('#tabs').offset().top;
    let coordinates_to_form = $('#send-form').offset().top;

    let first_tab = $('#first-tab');
    let second_tab = $('#second-tab');
    let third_tab = $('#third-tab');
    let forth_tab = $('#forth-tab');

    let first_switch = $('#first-switch');
    let second_switch = $('#second-switch');
    let third_switch = $('#third-switch');
    let forth_switch = $('#forth-switch');

    let back_to_top = $('#back-to-top');

    first_switch.on('click', function(e) {
        e.preventDefault();

        $('.tab-active').removeClass("tab-active");
        $('.switch-active').removeClass("switch-active");
        first_switch.addClass('switch-active');
        first_tab.addClass("tab-active");
    });

    second_switch.on('click', function(e) {
        e.preventDefault();

        $('.tab-active').removeClass("tab-active");
        $('.switch-active').removeClass("switch-active");
        second_switch.addClass('switch-active');
        second_tab.addClass("tab-active");
    });

    third_switch.on('click', function(e) {
        e.preventDefault();

        $('.tab-active').removeClass("tab-active");
        $('.switch-active').removeClass("switch-active");
        third_switch.addClass('switch-active');
        third_tab.addClass("tab-active");
    });

    forth_switch.on('click', function(e) {
        e.preventDefault();

        $('.tab-active').removeClass("tab-active");
        $('.switch-active').removeClass("switch-active");
        console.log(this);
        forth_switch.toggleClass('switch-active');
        forth_tab.addClass("tab-active");
    });

    $('#roll-to-more').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: coordinates_to_more
        }, 1000);
    });

    $('.slider__inner').slick({
        autoplay: true,
        dots : true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed : 1000,
        infinite: false,
        arrows: false,
    });

    $('#roll-to-slider').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: coordinates_to_theSlider
        }, 1000);
    });

    back_to_top.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).on('scroll', function(e) {
        e.preventDefault();

        if ($(window).scrollTop() < coordinates_to_more - 25) {
            $('.nav__item-active').removeClass('nav__item-active');
            $('.nav__item').eq(0).addClass('nav__item-active');
        }
        else if (($(window).scrollTop() > coordinates_to_more - 25) && ($(window).scrollTop() < coordinates_to_theSlider - 25)) {
            $('.nav__item-active').removeClass('nav__item-active');
            $('.nav__item').eq(1).addClass('nav__item-active');
        }
        else if ( ($(window).scrollTop() > coordinates_to_theSlider - 25) && ($(window).scrollTop() < coordinates_to_tabs - 25)) {
            $('.nav__item-active').removeClass('nav__item-active');
            $('.nav__item').eq(2).addClass('nav__item-active');
        }
        else if (( $(window).scrollTop() > coordinates_to_tabs - 25) && ($(window).scrollTop() < coordinates_to_form - 25))  {
            $('.nav__item-active').removeClass('nav__item-active');
            $('.nav__item').eq(3).addClass('nav__item-active');
        }
        else if ($(window).scrollTop() > coordinates_to_form - 25) {
            $('.nav__item-active').removeClass('nav__item-active');
            $('.nav__item').eq(4).addClass('nav__item-active');
        }
    });

    $('.nav__item').eq(0).on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.nav__item').eq(1).on('click', function() {
        $('html, body').animate({
            scrollTop: coordinates_to_more
        }, 1000);
    });

    $('.nav__item').eq(2).on('click', function() {
        $('html, body').animate({
            scrollTop: coordinates_to_theSlider
        }, 1000);
    });

    $('.nav__item').eq(3).on('click', function() {
        $('html, body').animate({
            scrollTop: coordinates_to_tabs
        }, 1000);
    });

    $('.nav__item').eq(4).on('click', function() {
        $('html, body').animate({
            scrollTop: coordinates_to_form
        }, 1000);
    });
});