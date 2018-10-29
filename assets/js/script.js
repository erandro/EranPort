$(".project-text-container").hover(
    function () {
        $(this).removeClass("text-0-opacity");
    }, function () {
        $(this).addClass("text-0-opacity");
    }
);

$(".eran-img-3-text").hover(
    function () {
        $("#text-box-0").removeClass("text-0-opacity");
    }, function () {
        $("#text-box-0").addClass("text-0-opacity");
    }
);
$(".eran-img-3").hover(
    function () {
        $("#text-box-0").removeClass("text-0-opacity");
    }, function () {
        $("#text-box-0").addClass("text-0-opacity");
    }
);
$(".eran-img-5").hover(
    function () {
        $("#text-box-1").removeClass("text-0-opacity");
    }, function () {
        $("#text-box-1").addClass("text-0-opacity");
    }
);
$(".eran-img-6").hover(
    function () {
        $("#text-box-2").removeClass("text-0-opacity");
    }, function () {
        $("#text-box-2").addClass("text-0-opacity");
    }
);
$(".eran-img-7").hover(
    function () {
        $("#text-box-3").removeClass("text-0-opacity");
    }, function () {
        $("#text-box-3").addClass("text-0-opacity");
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

$(".project-text-container").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1.gif");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);
$("#contact").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1-2.png");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);