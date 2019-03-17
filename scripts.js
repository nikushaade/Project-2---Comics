$("#texto").hide();
$("#texto1").hide();
$("#texto2").hide();
$("#texto3").hide();
$("#texto4").hide();
$("#texto5").hide();
$("#btn1").hide();


jQuery(document).ready(function($){

$('#button-one').on({
     'click': function(){
         $('#img1').attr('src','hotwok.png');
         // tinderSound.play();
     }
 });

$('#button-two').on({
     'click': function(){
         $('#img2').attr('src','feelgood.png');
     }
 });

$('#button-three').on({
     'click': function(){
         $('#img3').attr('src','homebaked.png');
     }
 });

$('#button-four').on({
     'click': function(){
         $('#img4').attr('src','grill.png');
     }
 });

$('#button-five').on({
     'click': function(){
         $('#img5').attr('src','mealclub.png');
     }
 });

$('#button-six').on({
     'click': function(){
         $('#img6').attr('src','grabngo.png');

     }
 });
 });



function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var end = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                 window.location = "redirect.html";
                // clearInterval(end);
            }
        }, 1000);

    $("#button-one").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto").show();
    $("#btn1").show();
    $("#button-two").hide();
    $("#button-three").hide();
    $("#button-four").hide();
    $("#button-five").hide();
    $("#button-six").hide();
});
    $("#button-two").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto1").show();
    $("#btn1").show();
    $("#button-one").hide();
    $("#button-three").hide();
    $("#button-four").hide();
    $("#button-five").hide();
    $("#button-six").hide();
});
    $("#button-three").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto2").show();
    $("#btn1").show();
    $("#button-two").hide();
    $("#button-one").hide();
    $("#button-four").hide();
    $("#button-five").hide();
    $("#button-six").hide();
});
    $("#button-four").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto3").show();
    $("#btn1").show();
    $("#button-two").hide();
    $("#button-three").hide();
    $("#button-one").hide();
    $("#button-five").hide();
    $("#button-six").hide();
});
    $("#button-five").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto4").show();
    $("#btn1").show();
    $("#button-two").hide();
    $("#button-three").hide();
    $("#button-four").hide();
    $("#button-one").hide();
    $("#button-six").hide();
});
    $("#button-six").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto5").show();
    $("#btn1").show();
    $("#button-two").hide();
    $("#button-three").hide();
    $("#button-four").hide();
    $("#button-five").hide();
    $("#button-one").hide();
});
}
 

window.onload = function () {
   var fiveMinutes = 60,
   display = document.querySelector('#time');
   startTimer(fiveMinutes, display);
};





