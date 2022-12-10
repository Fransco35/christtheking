$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
    } else {
        $(".nav").removeClass("affix");
    }
});
$(".navTrigger").click(function () {
    $(this).toggleClass("active");
    $("#mainListDiv").toggleClass("nav__show-list");
    $("#mainListDiv").fadeIn();
});
