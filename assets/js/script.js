// Scroll down arrow:
$("div.scroll-down-container").on("click", ".bottom", function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

// Left images hovers:
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

// Left images clicks:
$("div#text-box-0").on("click", ".eran-img-3-text", function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", ".eran-img-3", function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", "#text-box-1", function () {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", ".eran-img-5", function () {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", "#text-box-2", function () {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", ".eran-img-6", function () {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", "#text-box-3", function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$("div.eran-img-container").on("click", ".eran-img-7", function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

// Skill icon hovers:
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

// Projects icon hover:
$(".project-text-container").hover(
    function () {
        $(this).removeClass("text-0-opacity");
    }, function () {
        $(this).addClass("text-0-opacity");
    }
);
$(".project-text-container").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1.gif");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);

// Contact Me hover:
$(".smile").hover(
    function () {
        $(".eran-img-1").attr("src", "assets/images/1-2.png");
    }, function () {
        $(".eran-img-1").attr("src", "assets/images/1.png");
    }
);

// Project clicks:
var modal = $("#modalId");
var modelImg = $("#modal-img");
var modalTitle = $("#modal-title");
var modelText = $("#modal-text");
var modelTech = $("#modal-tech");
var modalLinkContainer = $("#modal-link-container");

function techIcomMaker(target, iconString) {
    iconString.split(" ").forEach(icomName => {
        target.append(`<img src="assets\\images\\${icomName}.png" alt=${icomName} class="modal-tech-icon">`)
    });
}
function linkAdd(ll, ghl, vlc, vl){
    if (ll !== "none"){
        modalLinkContainer.append(`<a href="${ll}" target="_blank" class="modal-link-ll"><img src="assets\\images\\link.png" alt="Link Icon" class="modal-small-icon"></a>`);
    }
    if (ghl !== "none"){
        modalLinkContainer.append(`<a href="${ghl}" target="_blank" class="modal-link-gh"><img src="assets\\images\\github.png" alt="GitHub Icon" class="modal-small-icon"></a>`);
    }
    if (vlc !== "0"){
        vl.split(" ").forEach(link => {
            modalLinkContainer.append(`<a href="${link}" target="_blank" class="modal-link-v"><img src="assets\\images\\video.png" alt="Video Icon" class="modal-small-icon"></a>`);
        });
    }
}
$("div.projects").on("click", ".project-container", function () {
    modelImg.attr("src", $(this).attr("data-img"));
    modalTitle.append($(this).attr("data-title"));
    modelText.append($(this).attr("data-text"));
    techIcomMaker(modelTech, $(this).attr("data-tech"))
    
    var liveLink = $(this).attr("data-link-ll");
    var gitHubLink = $(this).attr("data-link-gh");
    var videoLinkCount = $(this).attr("data-link-vc");
    var videoLink = $(this).attr("data-link-v");
    linkAdd(liveLink, gitHubLink, videoLinkCount, videoLink);

    modal.css("display", "flex");
});
$("#modalId").click(function () {
    modal.css("display", "none");
    modelImg.attr("src", "");
    modalTitle.text("");
    modelText.text("");
    modelTech.empty();
    modalLinkContainer.children().remove();
});
$("div#modal-link-container").on("click", "#modal-link-ll", function () {
    window.open($(this).attr("href"), '_blank');
});
$("div#modal-link-container").on("click", "#modal-link-gh", function () {
    window.open($(this).attr("href"), '_blank');
});
$("div#modal-link-container").on("click", "#modal-link-gh", function () {
    window.open($(this).attr("href"), '_blank');
});

// Scroll up arrow:
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.scroll-to-top').stop(true, true).fadeIn();
    } else {
        $('.scroll-to-top').stop(true, true).fadeOut();
    }
});