$(".project-text-container").hover(
    function () {
        $(this).removeClass("text-0-opacity");
    }, function () {
        $(this).addClass("text-0-opacity");
    }
);

$(".eran-img-3-text").hover(
    function () {
        $("#text-box-0").addClass("text-black-bold");
    }, function () {
        $("#text-box-0").removeClass("text-black-bold");
    }
);
$(".eran-img-3").hover(
    function () {
        $("#text-box-0").addClass("text-black-bold");
    }, function () {
        $("#text-box-0").removeClass("text-black-bold");
    }
);
$(".eran-img-5").hover(
    function () {
        $("#text-box-1").addClass("text-black-bold");
    }, function () {
        $("#text-box-1").removeClass("text-black-bold");
    }
);
$(".eran-img-6").hover(
    function () {
        $("#text-box-2").addClass("text-black-bold");
    }, function () {
        $("#text-box-2").removeClass("text-black-bold");
    }
);
$(".eran-img-7").hover(
    function () {
        $("#text-box-3").addClass("text-black-bold");
    }, function () {
        $("#text-box-3").removeClass("text-black-bold");
    }
);

$(".eran-img-3-text").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$(".eran-img-3").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$(".eran-img-5").click(function () {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$(".eran-img-6").click(function () {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});
$(".eran-img-7").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#icon-design").hover(
    function () {
        $(this).attr("src", "assets/images/design-color.png");
    }, function () {
        $(this).attr("src", "assets/images/design.png");
    }
);
$("#icon-code").hover(
    function () {
        $(this).attr("src", "assets/images/code-color.png");
    }, function () {
        $(this).attr("src", "assets/images/code.png");
    }
);
$("#icon-communicate").hover(
    function () {
        $(this).attr("src", "assets/images/communicate-color.png");
    }, function () {
        $(this).attr("src", "assets/images/communicate.png");
    }
);
$("#icon-passion").hover(
    function () {
        $(this).attr("src", "assets/images/passion-color.png");
    }, function () {
        $(this).attr("src", "assets/images/passion.png");
    }
);

$(".project-text-container").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1.gif");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);

$(".smile").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1-2.png");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.scroll-to-top').stop(true, true).fadeIn();
    } else {
        $('.scroll-to-top').stop(true, true).fadeOut();
    }
});