function q() {
    return Math.ceil(Math.random() * 100);
    }

$(document).ready(function(){
   $('#submit').on('click', function(){
      q();
      console.log (q());
      var value =$('#guess').val();
      console.log (value); 
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