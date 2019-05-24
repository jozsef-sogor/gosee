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
   var opened = 0;

$(".cache").click(function(){
  if ($(".cache").hasClass("opened")) {
    $(".cache").removeClass("opened");
  } else {$(".cache").addClass("opened");}

});

});
