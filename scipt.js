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
    $(".box").click(function () {
        if ($(".lid").hasClass("opened")) {
            $('#signUp').css('display', 'none');
            $(".lid").removeClass("opened");
        } else {
            $(".lid").addClass("opened");
        }


        if ($(".inside").hasClass("show")) {
            $(".inside").removeClass("show");
        } else {
            $(".inside").addClass("show");
        }


        if ($(".box").hasClass("s")) {
            $(".box").removeClass("s");
        } else {
            $(".box").addClass("s");
        }

    });



    //Interaction of the SignUp modal window

    $('.box').click(function () {
        $('#signUp').css('display', 'block');
    });

    $('#closeModal').click(function () {
        $('#signUp').css('display', 'none');
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



    $('input[name=consent]').click(function () {
        if ($(this).is(":checked")) {
            console.log('checked');
            $('.submitBtn').css({
                'color': 'white',
                'cursor': 'pointer'
            });
            $('.submitBtn').attr('disabled', 'false');
        } else {
            console.log('unchecked');
            $('.submitBtn').css({
                'color': 'rgba(0,0,0,0.1)',
                'cursor': 'not-allowed'
            });
            $('.submitBtn').attr('disabled', 'true');

        }
    });


    //    slideshow animation

//    setInterval(function () {
//
//       
//        for (let i = 0; i < 3; i++) { //hide all images
//            document.querySelectorAll(".slide-img")[i].classList.remove("shown");
//        }
//        document.querySelectorAll(".slide-img")[index].classList.add("shown");
//
//
//        index === 3 ? index = 0 : index++;
//    }, 4000);
//


});
