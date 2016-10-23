$(document).ready(function(){

  // Открытие и закрытие окна с информацией о проекте
  var popupInfo = $("#popup-info");
  var lnkInfoOpen = $("#lnk-info-open");
  var lnkInfoClose = $("#lnk-info-close");

  lnkInfoOpen.click(function(){
    event.preventDefault();
    popupInfo.fadeIn(600);
  });

  lnkInfoClose.click(function(){
    event.preventDefault();
    popupInfo.fadeOut(600);
  });
});
