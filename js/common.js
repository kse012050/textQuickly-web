$(document).ready(function(){
    // 메인페이지
    $('.mainPage').length && mainPage();

    // 서비스 페이지
    $('.servicePage').length && servicePage();

    // 게시판 드랍 박스 이벤트
    $('.boardBox-drop').length && boardDrop()();
    
});

// 메인페이지
function mainPage(){
    // 해더 이벤트
    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').removeClass('active') : $('header').addClass('active');
    })
}

// 서비스 페이지
function servicePage(){
    // 슬라이더
    var serviceSlider = new Swiper(".serviceSlider", {
        slidesPerView: "auto",
        spaceBetween: 60,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}

// 게시판 드랍 박스 이벤트
function boardDrop(){
    $('.boardBox-drop li a').click(function(e){
        boardDropEvent($(this) , e)
    })

    $('.boardBox-drop li a label').click(function(e){
        $('.boardBox-drop li a').off('click');
        setTimeout(()=>{
            $('.boardBox-drop li a').on('click',function(e){
                boardDropEvent($(this) , e)
            })
        },100)
    })
    
    function boardDropEvent(selector , e){
        e.preventDefault();
        if(selector.next().is(':animated')) return;
        if(selector.hasClass('active')){
            selector.removeClass('active');
            selector.stop().next().slideUp(function(){
                $('.eventPage').length && selector.next().remove();
            });
        }else{
            selector.parent().siblings().find('a').removeClass('active');
            selector.parent().siblings().find('> div').slideUp(function(){
                $('.eventPage').length && $(this).remove();
            });
            selector.addClass('active');
            // api 추가
            $('.eventPage').length && selector.after('<div class="editor">내용</div>')
            selector.stop().next().slideDown();
        }
    }
}