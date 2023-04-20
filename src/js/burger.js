$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.burger').toggleClass('burger_active');
        $('.header__nav').toggleClass('header__nav_active')
    })
});
