$(function () {
    $('.nav_btn, .nav_wrap_list li').on('click', function () {
        $('.nav_wrap').fadeToggle();
        $('.nav_btn_line, .nav_btn').toggleClass('open');

    });
});

// TOPに戻るボタン
var pagetop = $('#page_top');
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {  //300pxスクロールしたら表示
        pagetop.fadeIn(); //ふわっと出てくる
    } else {
        pagetop.fadeOut(); //ふわっと無くなる
    }
});
