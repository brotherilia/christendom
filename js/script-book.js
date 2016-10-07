$(document).ready(function(){

  var mainMenu = $("#main-menu");
  var itmMenu = $("#itm-menu");
  var lnkMenuOpen = $("#lnk-menu-open");
  var itmBack = $("#itm-back");
  var lnkBackToText = $("#lnk-back-to-text");
  var itmHome = $("#itm-home");

  var popupMenu = $("#popup-menu");
  var lnkPopupMenuClose = $("#lnk-popup-menu-close");
  var lnkContents = $("#lnk-contents");

  var bottomMenu = $("#bottom-menu");
  var lnkPrevChapter = $("#lnk-prev-chapter");
  var lnkNextChapter = $("#lnk-next-chapter");
  var lnkToTop = $("#lnk-to-top");

  var contents = $(".book__contents");
  var chapterLink = $(".book__contents-link");
  var runningTitle = $("#running-title");
  var chapter = $(".book__chapter");
  var firstChapter = chapter.first();
  var lastChapter = chapter.last();
  var firstChapterIdx = chapter.index(firstChapter);
  var lastChapterIdx = chapter.index(lastChapter);
  var chapterIdx;
  var currentChapter;
  var currentChapterNumberMark = $("#current-chapter-number");

  var setupChapter = function() {
    chapter.hide();
    lnkPrevChapter.text(chapterIdx);
    lnkNextChapter.text(chapterIdx + 2);
    currentChapterNumberMark.text(chapterIdx + 1);
    runningTitle.show();
    if (chapterIdx == firstChapterIdx){
      lnkPrevChapter.hide();
      lnkNextChapter.show();
    }
    else if (chapterIdx == lastChapterIdx){
      lnkNextChapter.hide();
      lnkPrevChapter.show();
    }
    else {
      lnkPrevChapter.show();
      lnkNextChapter.show();
    }
  }

  var showChapter = function() {
    currentChapter = chapter.eq(chapterIdx);
    currentChapter.fadeIn(600);
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  // Плавная прокрутка страницы наверх

  lnkToTop.click(function(){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Открытие и закрытие всплывающего меню

  lnkMenuOpen.click(function(){
    event.preventDefault();
    itmMenu.hide();
    popupMenu.fadeIn(600);
  });

  lnkPopupMenuClose.click(function(){
    event.preventDefault();
    popupMenu.fadeOut(600);
    itmMenu.show();
  });

  // Переходы между главами

  chapter.hide();
  bottomMenu.hide();
  runningTitle.hide();
  itmHome.show();

  $(chapterLink).click(function(event){
    event.preventDefault();
    chapterIdx = chapterLink.index(this);
    itmHome.hide();
    itmBack.hide();
    contents.hide();
    bottomMenu.show();
    itmMenu.show();
    $(setupChapter);
    $(showChapter);
  });

  lnkPrevChapter.click(function(){
    event.preventDefault();
    chapterIdx--;
    $(setupChapter);
    $(showChapter);
  });

  lnkNextChapter.click(function(){
    event.preventDefault();
    chapterIdx++;
    $(setupChapter);
    $(showChapter);
  });

  lnkContents.click(function(){
    event.preventDefault();
    chapter.hide();
    popupMenu.hide();
    bottomMenu.hide();
    runningTitle.hide();
    itmBack.show();
    contents.fadeIn(600);
  });

  lnkBackToText.click(function(){
    event.preventDefault();
    itmBack.hide();
    contents.hide();
    bottomMenu.show();
    runningTitle.show();
    itmMenu.show();
    $(setupChapter);
    $(showChapter);
  });










  // Перелистывание страниц

/*

  var windowHeight = $(window).height() * 0.99;

  var prevPage = function() {
    $("html, body").animate({ scrollTop: -windowHeight }, 0);
  }

  var nextPage = function() {
    $("html, body").animate({ scrollTop: windowHeight }, 0);
  }

  $(chapter).on("swiperight",function(event){
    $(prevPage);
  });

  $(chapter).on("swipeleft",function(event){
    $(nextPage);
  });

*/


});
