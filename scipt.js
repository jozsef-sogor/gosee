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



//Interaction of the SignUp modal window

$('.box').click(function() {
  $('#signUp').css('display', 'block');
});

$('#closeModal').click(function() {
  $('#signUp').css('display','none');
  //$('#signUp').css('animation', 'scale-down-center .8s ease-in-out');
  $(".lid").removeClass("opened");
  $(".inside").removeClass("show");
  $(".box").removeClass("s");
});
/*
$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest("#signUp,.box").length) {
    $('#signUp').css('display','none');
  }*/



if ($('consent').is(':checked')) {
  console.log('checked');
}

});
