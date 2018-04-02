$(document).ready(function () {
    checkScroll();
});

$(window).scroll(checkScroll);

$(".navigation-button").click(function(e) {
    if (!$(".header").hasClass("shown")) {
        $(".header").addClass("shown");
        e.stopPropagation();
    }
});
$(document).click(function() {
    $(".header").removeClass("shown");
});

$('a[href^="#"]').click(function() {
    loadsite(this.hash.substring(1));
});

$("a.work-changer").click(function () {
    $("#my-work").attr("data-section-selected", $(this).attr("data-work-changer"));
});

function loadsite(page) {
    $("body, html").animate({
        scrollTop: $("#" + page).offset().top - $(".header").height()
    }, 500);
}

function checkScroll() {
    if ($(document).scrollTop() > $(window).height() / 2) {
        $(".header").addClass("scrolled");
    } else {
        $(".header").removeClass("scrolled");
    }
    $("[id]").each(function() {
        if ($(window).scrollTop() > $(this).position().top - $(window).height() / 2.5) {
            var page = $(this).attr("id");
            $(".navigation li").removeClass("active");
            $('.navigation li a[href="#' + page + '"]:first').parent().addClass("active");
        }
    });
    $(".work").each(function() {
        $(this).height($(this).width() / 16 * 9)
    });
}
