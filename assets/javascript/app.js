var wAnswer=0;
  var cAnswer=0;
  var userInput= [];
  var cletter=[];
  var number = 75;
  function run(){
    counter = setInterval(decrement, 1000);
    }
    function decrement(){
    number--;
    $('#clock').html('<center><h2>' + number + '</h2></center>');
      if (number === 0){
    $("#gameMain,#gameMain2,#gameMain3,#gameMain4,#gameMain5").hide();
   $("#gameAnswer,#gameAnswer2,#gameAnswer3,#gameAnswer4").show();
   stop();
   $('#gameAnswer').append('<h2>' + 'Thanks for playing'+ '</h2>');
   $('#gameAnswer2').append('<h3>' + 'Correct Answers: ' +cAnswer+'</h3>');
   $('#gameAnswer3').html('<h3>' + 'Wrong Answers: ' +wAnswer+'</h3>');
    $("#gameAnswer4").html('Press Restart to play agian!');
    $("#Restart").show();
      }
    }
    function stop(){
      clearInterval(counter);
    };

  
$( window ). ready(function() {
   $("#gameMain,#gameMain2,#gameMain3,#gameMain4,#gameMain5").hide();
   $("#gameAnswer,#gameAnswer2,#gameAnswer3,#gameAnswer4").hide();
   $("#Restart").hide();
    
 $('#start').on('click',function(){
  run();
   $("#init,#map").hide();
   $("#gameMain,#gameMain2,#gameMain3,#gameMain4,#gameMain5").show();
   
   $("#pics").html('<center><img src="http://www.orienttravel.ie/wp-content/uploads/2014/06/Istanbul-panorama-2.jpg" height="250"></center>')
   $("#a").text('Turkey');
   $("#b").text('Grecce');
   $("#c").text('Italy');
   $("#d").text('Spain');
    $("#pics2").html('<center><img src="http://edu-geography.com/data_images/countries/berlin/berlin-01.jpg" height="250"></center>')
    $("#e").text('USA');
    $("#f").text('Canada');
    $("#g").text('Germany');
    $("#h").text('England');
     $("#pics3").html('<center><img src="http://packages.qantas.com/uploads/featurepage/57/998x484-crop-singapore.jpg" height="250"></center>')
      $("#m").text('China');
      $("#n").text('Singapore');
      $("#o").text('Indonesia');
      $("#p").text('S. Korea');
       $("#pics4").html('<center><img src="http://www.baesystems.com/en/cybersecurity/download-en/cybersecurity/multimediaimage/webImage/20151124093019/1434557830021.jpg" height="250"></center>')
       $("#q").text('Germany');
       $("#r").text('USA');
       $("#s").text('England');
       $("#t").text('Canada');
        $("#pics5").html('<center><img src="https://coinsandmaps.files.wordpress.com/2015/07/nairobi.jpg" height="250"></center>')
        $("#u").text('S. Africa');
        $("#v").text('Nigeria');
        $("#w").text('Angola');
        $("#x").text('Kenya');










       cletter.push("a");
        cletter.push("g");
         cletter.push("n");
          cletter.push("t");
           cletter.push("x");
  
 
 
 
  $('#a,#b,#c,#d,#e,#f,#g,#h,#m,#n,#o,#p,#q,#r,#s,#t,#u,#v,#w,#x').on('click',function(){
  userInput.push($(this).data('name'));
  console.log(userInput)


  for(var i=0; i < userInput.length; i++){
        if (userInput[i] == cletter[0]){
          cAnswer++;
          userInput= [];
        }else if (userInput[i] == cletter[1]) {
         cAnswer++;
         userInput= [];
        }else if (userInput[i] == cletter[2]) {
         cAnswer++;
         userInput= [];
        }else if (userInput[i] == cletter[3]) {
         cAnswer++;
         userInput= [];
        }else if (userInput[i] == cletter[4]) {
         cAnswer++;
         userInput= [];
        }else{
          wAnswer++;
          userInput= [];
        }
      }
    



  });


$('#submit').on('click',function(){
   $("#gameMain,#gameMain2,#gameMain3,#gameMain4,#gameMain5").hide();
   $("#gameAnswer,#gameAnswer2,#gameAnswer3,#gameAnswer4").show();
   stop();
   $('#gameAnswer').append('<h2>' + 'Thanks for playing!!!'+ '</h2>');
   $('#gameAnswer2').append('<h3>' + 'Correct Answers: ' +cAnswer+'</h3>');
   $('#gameAnswer3').html('<h3>' + 'Wrong Answers: ' +wAnswer+'</h3>');
    $("#gameAnswer4").html('Press restart to play agian!');
    $("#Restart").show();


});

  });
});