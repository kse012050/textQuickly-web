$(document).ready(function(){
    $('.mainPage').length && mainPage();
    $('.servicePage').length && servicePage();
    $('.eventPage').length && eventPage();
});

function mainPage(){
    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').removeClass('active') : $('header').addClass('active');
    })
}

function servicePage(){
    var serviceSlider = new Swiper(".serviceSlider", {
        slidesPerView: "auto",
        spaceBetween: 60,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}

function eventPage(){
    $('.eventPage .boardArea li a').click(function(e){
        e.preventDefault();
        if($(this).next('.editor').is(':animated')) return;
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).stop().next().slideUp(function(){
                $(this).next().remove();
            });
        }else{
            $(this).addClass('active');
            $(this).after('<div class="editor">내용</div>')
            $(this).stop().next().slideDown();
        }
    })
}