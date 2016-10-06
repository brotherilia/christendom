$(document).ready(function(){

  var infoPopup = $("#info-popup");
  var infoOpenBtn = $("#info-open-btn");
  var infoCloseBtn = $("#info-close-btn");

  // Открытие и закрытие окна с информацией о проекте

  infoOpenBtn.click(function(){
    event.preventDefault();
    infoOpenBtn.hide();
    infoPopup.fadeIn(600);
  });

  infoCloseBtn.click(function(){
    event.preventDefault();
    infoPopup.fadeOut(600);
    infoOpenBtn.show();
  });
});
