$(document).ready(function () {
    let index = 1;

    $(".burger-menu").click(function () {
        $("nav").toggleClass("show");
        $("header").toggleClass("full");
        $(".burger-menu").toggleClass("x");

    });

    $('.burger-menu').click(function () {

        $('.bar1').css('background-color', 'black');
        $('.bar3').css('background-color', 'black');


    });
     
     $('.bar1').click(function () {

        $(this).css('background-color', 'white');
        


    });
   
    
});
