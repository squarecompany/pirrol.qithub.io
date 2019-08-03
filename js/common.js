$(document).ready(function () {

    //Burger 
    $('.navbar__block-menu-burger-link').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('navbar__block-menu-burger-link-active');
        $('.navbar__hidden').toggleClass('navbar__hidden-active');
    });

    //Hidden menu close
    $('.navbar__hidden-wrapper-close-link').on('click', function(e) {
        e.preventDefault;
        $('.navbar__hidden').removeClass('navbar__hidden-active');
        $('.navbar__block-menu-burger-link').removeClass('navbar__block-menu-burger-link-active');
    });

    //Slick
    $('.comments__block-slider').slick({
        arrows: false,
        dots: true
    });

});