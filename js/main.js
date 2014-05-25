$(document).ready(function(){
    $('h1').on('mouseenter', function(){
        $(this).addClass("blue");
    });
    $('h1').on('mouseleave', function(){
        $(this).removeClass("blue");
    });
});