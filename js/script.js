$(document).ready(function(){

  // Плавная прокрутка страницы наверх

  $("#top-btn").click(function(){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });


  // Открытие и закрытие главного меню

  var openMainMenu = function() {
    $("#main-menu").fadeOut();
    $("#popup-menu").fadeIn();
    return false;
  }

  var closeMainMenu = function() {
    $("#popup-menu").fadeOut();
    $("#main-menu").fadeIn();
    return false;
  }

  $("#menu-open-btn").click(function(){
    event.preventDefault();
    $(openMainMenu);
  });

  $("#menu-close-btn").click(function(){
    event.preventDefault();
    $(closeMainMenu);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $(closeMainMenu);
    }
  });


});
