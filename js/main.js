function q() {
    return Math.ceil(Math.random() * 100);
    }
var countdown = 5;
var random = q();

$(document).ready(function(){

   $('#submit').on('click', function(){
      random;
      console.log (random);
      
      var value =$('#guess').val();
      console.log (value); 

      countdown -=1;
      if (countdown >=0) {
        $('#counter').val(countdown).html(countdown);
         $('#message').html("");
      }
      if (countdown ==0) {
        $('#message').val("GAME OVER!").addClass("game_over");

      }

       if (value > 100 || value < 1 ) {
            $('#message').html("That does not count. Enter a number beween 1 and 100.");
                }
            else if (isNaN (value)) {
            $('#message').html("That does not count. Enter a number beween 1 and 100.");
        } else if (random - value >= 50) {
            $('#message').html("You're ice cold. Guess way higher.");
        } else if (random - value < 50 && random - value >= 30) {
            $('#message').html("You're quite cold. Guess higher.");
        } else if (random - value < 30 && random - value >= 20) {
            $('#message').html("You're getting there. Keep guessing higher.");
        } else if (random - value < 20 && random - value >= 10) {
            $('#message').html("You're warm. But still guess higher.");
        } else if (random - value < 10 && random - value >= 5) {
            $('#message').html("You're quite warm. Just guess a little higher.");
        } else if (random - value < 5 && random - value > 0) {
            $('#message').html("You're red hot. Guess a tad higher.");       
        } else if (value - random >= 50) {
            $('#message').html("You're ice cold. Guess way lower.");
        } else if (value - random < 50 && value - random >= 30) {
            $('#message').html("You're quite cold. Guess lower.");
        } else if (value - random < 30 && value - random >= 20) {
            $('#message').html("You're getting thee. Keep guessing lower.");
        } else if (value - random < 20 && value - random >= 10) {
            $('#message').html("You're warm. But still guess lower.");
        } else if (value - random < 10 && value - random >= 5) {
            $('#message').html("You're quite warm. Just guess a little lower.");
        } else if (value - random < 5 && value - random > 0) {
            $('#message').html("You're red hot. Guess a tad lower.");
        } else if (value == random) {
            $('#message').html("Congrats. You win!");
                }

    $('#reset').on('click', function(){
        $('#guess').val("Enter a number between  1  and  100").removeClass('game_over');
          countdown = 5;
          $('#counter').val(countdown).html(countdown);
          $('#message').val("").html("");

    }); // handler for reset button

    $('#hint').on('click', function () {
        var hint = function () {
          if (value - random <= 50 && value - random > 40 || random - value <= 50 && random - value > 40) {
              return 50;
          } else if (value - random <= 40 && value - random > 30 || random - value <= 40 && random - value > 30) {
              return 40;
          } else if (value - random <= 30 && value - random > 20 || random - value <= 30 && random - value > 20) {
              return 30;
          } else if (value - random <= 20 && value - random > 10 || random - value <= 20 && random - value > 10) {
              return 20;
          } else if (value - random <= 10 && value - random > 5 || random - value <= 10 && random - value > 5) {
              return 10;
          } else if (value - random <= 5 && value - random > 0 || random - value <= 5 && random - value > 0) {
              return 5;
          } else if (value - random > 50 || random - value > 50) {
              return "a shitload of";
          }
        }; // hint variable
            $('#message').html("You are within " + (hint()) + " units of the right answer");

        }); // handler for hint button
    }); // handler for random number generator


}); //document ready function


/*
    $('h1').on('mouseenter', function(){
        $(this).addClass("blue");
    });
    $('h1').on('mouseleave', function(){
        $(this).removeClass("blue");
    });

*/

/*
 $('#guess').on('keypress', function(){
      if (guess_val>100 || guess_val<0 || isNaN(guess_val)) {
        alert('Please enter a number between 1 and 100');
      }
   });
*/