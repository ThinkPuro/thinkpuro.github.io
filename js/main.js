$(window).on('load', function() {
    $('.loader').addClass('load');
    $('.browser').hover(
        function(){
            $(this).stop().animate({ scrollTop: $(this).find('img').height() }, 20000);
        },
        function(){
            $(this).stop().animate({ scrollTop: 0 }, 500);
    });
 });

$(document).ready(function() {
    $("nav [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
    $("nav a, .work-item").click(function(){
        $('body').addClass('unload');
    });
    $('.mobile-nav-button').click(
        function(){
            $(this).toggleClass('mobile-nav-open');
            $('.mobile-nav').toggleClass('mobile-nav-active');
    });
    if ($('.work-content').length) {
        $('body').addClass('work-body');
        $('.work-content').addClass('work-load');
        $('.work-close').addClass('work-close-load');
        $(".work-close, .thanks-link").click(function(){
            $('.work-content, .work-close').addClass('unload');
        });
    }

});