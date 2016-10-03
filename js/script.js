$(document).ready(function(){

  // Плавная прокрутка страницы наверх

  $("#top-btn").click(function(){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });




  $("#menu-btn").click(function(){
    event.preventDefault();
    $("#main-menu").fadeOut();
    $("#popup-menu").fadeIn();
    return false;
  });

  $("body").click(function(){
    event.preventDefault();
    $("#popup-menu").fadeOut();
    $("#main-menu").fadeIn();
    return false;
  });

  $("#popup-menu").click(function(event){
    event.stopImmediatePropagation();
  });
});
