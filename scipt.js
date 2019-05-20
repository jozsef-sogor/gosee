$(document).ready(function () {
    let index = 1;

    $(".burger-menu").click(function () {
        $("nav").toggleClass("show");
        $("header").toggleClass("full");
        $(".burger-menu").toggleClass("x");
        //$(".burger-menu").css("float", "right");
    });


});
