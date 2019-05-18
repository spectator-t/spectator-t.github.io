$(function () {

    $('.drawer_button').click(function () {
        $(this).toggleClass('active');
        $('.drawer_bg').fadeToggle();
        $('nav').toggleClass('open');
    })
    $('.drawer_bg').click(function () {
        $(this).fadeOut();
        $('.drawer_button').removeClass('active');
        $('nav').removeClass('open');
    });
    // 追記
    $('.drawer_nav li').on('click', function () {
        $(".drawer_nav_wrapper").toggleClass('open');
        $(".drawer_button").toggleClass('active');
        $(".drawer_bg").fadeOut('');
    })
})
