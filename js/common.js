$(document).ready(function(){
    $('.mainPage').length && mainPage();
});

function mainPage(){
    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').removeClass('active') : $('header').addClass('active');
    })
}