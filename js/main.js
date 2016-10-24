$(document).ready(function() {
    $("body").addClass('load');
    $("nav [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
    $("nav a").click(function(){
        $('body').addClass('unload')
    });
});