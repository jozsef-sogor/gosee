$(document).ready(function () {
    let index = 1;

    $("#myVideo").get(0).play();

    $(".mute-video").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(this).addClass('unmute-video');

        } else {
            $("video").prop('muted', true);
            $(this).removeClass('unmute-video');
        }
        console.log($("video").prop('muted'))
    });



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
$(".box").click(function(){
  if ($(".lid").hasClass("opened")) {
    $(".lid").removeClass("opened");
  } else {$(".lid").addClass("opened");}


  if ($(".inside").hasClass("show")) {
    $(".inside").removeClass("show");
  } else {$(".inside").addClass("show");}


  if ($(".box").hasClass("s")) {
    $(".box").removeClass("s");
  } else {$(".box").addClass("s");}

});

});
