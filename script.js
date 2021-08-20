$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,

        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });
})