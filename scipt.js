$(document).ready(function () {
    let index = 1;

    $("#myVideo").get(0).play();

    $(".burger-menu").click(function () {
        $("nav").toggleClass("show");
        $("header").toggleClass("full");
        $(".burger-menu").toggleClass("x");

    });

    $('.burger-menu').click(function () {

        $('.bar1').css('background-color', 'black');
        $('.bar3').css('background-color', 'black');
//so this one will set the color black for the top and bottom bar
//and they'll stay black because there's nothing that
//changes them back.. we need a seond function that listens for a second click
//and changes the color to white

    });


  /*   $('.bar1').click(function () {

        $(this).css('background-color', 'white');

this one does nothing basically.. changes the color from white to white when clicked

    });
   */


//box opening
   var opened = 0;

$(".cache").click(function(){
  if ($(".cache").hasClass("opened")) {
    $(".cache").removeClass("opened");
  } else {$(".cache").addClass("opened");}

});

});
