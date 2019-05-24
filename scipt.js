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
