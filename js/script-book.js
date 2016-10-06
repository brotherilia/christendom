$(document).ready(function(){

  var toTopBtn = $("#top-btn");
  var mainMenu = $("#main-menu");
  var popupMenu = $("#popup-menu");
  var menuOpenBtn = $("#menu-open-btn");
  var menuCloseBtn = $("#menu-close-btn");
  var contentsOpenBtn = $("#contents-open-btn");
  var backToTextNav = $("#back-to-text-nav");
  var backToTextBtn = $("#back-to-text-btn");
  var contents = $(".book__contents");
  var chapterLink = $(".book__contents-link");
  var runningTitle = $("#running-title");
  var chapter = $(".book__chapter");
  var chapterNav = $("#chapter-nav");
  var prevChapterLink = $("#prev-btn");
  var nextChapterLink = $("#next-btn");
  var firstChapter = chapter.first();
  var lastChapter = chapter.last();
  var firstChapterIdx = chapter.index(firstChapter);
  var lastChapterIdx = chapter.index(lastChapter);
  var chapterIdx;
  var currentChapter;
  var currentChapterNumberMark = $("#current-chapter-number");

  var setupChapter = function() {
    chapter.hide();
    prevChapterLink.text(chapterIdx);
    nextChapterLink.text(chapterIdx + 2);
    currentChapterNumberMark.text(chapterIdx + 1);
    runningTitle.fadeIn(600);
    if (chapterIdx == firstChapterIdx){
      prevChapterLink.hide();
      nextChapterLink.show();
    }
    else if (chapterIdx == lastChapterIdx){
      nextChapterLink.hide();
      prevChapterLink.show();
    }
    else {
      prevChapterLink.show();
      nextChapterLink.show();
    }
  }

  var showChapter = function() {
    currentChapter = chapter.eq(chapterIdx);
    currentChapter.fadeIn(600);
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  // Плавная прокрутка страницы наверх

  toTopBtn.click(function(){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Открытие и закрытие главного меню

  menuOpenBtn.click(function(){
    event.preventDefault();
    mainMenu.fadeOut(600);
    popupMenu.fadeIn(600);
  });

  menuCloseBtn.click(function(){
    event.preventDefault();
    popupMenu.fadeOut(600);
    mainMenu.fadeIn(600);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      popupMenu.fadeOut(600);
      mainMenu.fadeIn(600);
    }
  });

  // Переходы между главами

  chapter.hide();
  chapterNav.hide();
  runningTitle.hide();
  backToTextNav.hide();

  $(chapterLink).click(function(event){
    event.preventDefault();
    chapterIdx = chapterLink.index(this);
    contents.hide();
    chapterNav.show();
    mainMenu.show();
    $(setupChapter);
    $(showChapter);
  });

  prevChapterLink.click(function(){
    event.preventDefault();
    chapterIdx--;
    $(setupChapter);
    $(showChapter);
  });

  nextChapterLink.click(function(){
    event.preventDefault();
    chapterIdx++;
    $(setupChapter);
    $(showChapter);
  });

  contentsOpenBtn.click(function(){
    event.preventDefault();
    chapter.hide();
    popupMenu.hide();
    chapterNav.hide();
    runningTitle.hide();
    backToTextNav.show();
    contents.fadeIn(600);
  });

  backToTextBtn.click(function(){
    event.preventDefault();
    backToTextNav.hide();
    contents.hide();
    chapterNav.show();
    runningTitle.show();
    mainMenu.show();
    chapter.fadeIn(600);
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
