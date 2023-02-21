$(document).ready(function(){
    $('.mainPage').length && mainPage();
    $('.servicePage').length && servicePage();
});

function mainPage(){
    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').removeClass('active') : $('header').addClass('active');
    })
}

function servicePage(){
    var swiper = new Swiper(".serviceSlider", {
        slidesPerView: "auto",
        spaceBetween: 60,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}