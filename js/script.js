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

  // Переходы между главами

  var chapter = $(".chapter");
  var firstChapter = chapter.first();
  var lastChapter = chapter.last();
  var firstChapterIdx = chapter.index(firstChapter);
  var lastChapterIdx = chapter.index(lastChapter);
  var firstChapterNumber = firstChapterIdx + 1;
  var lastChapterNumber = lastChapterIdx + 1;
  var chapterIdx = 0;
  var currentChapter;

  var hideCurrentChapter = function() {
    currentChapter = chapter.eq(chapterIdx);
    $(currentChapter).hide();
  }

  var showPrevChapter = function() {
    chapterIdx--;
    currentChapter = chapter.eq(chapterIdx);
    $(currentChapter).fadeIn(600);
  }

  var showNextChapter = function() {
    chapterIdx++;
    currentChapter = chapter.eq(chapterIdx);
    $(currentChapter).fadeIn(600);
    $("#prev-btn").show();
  }

  $(firstChapter).show();
  $("#prev-btn").hide();

  $("#prev-btn").click(function(){
    $(hideCurrentChapter);
    $(showPrevChapter);
    if (chapterIdx = 0){
      $("#prev-btn").hide();
    }
    $("html, body").animate({ scrollTop: 0 }, 0);
  });

  $("#next-btn").click(function(){
    $(hideCurrentChapter);
    $(showNextChapter);
    $("html, body").animate({ scrollTop: 0 }, 0);
  });

  // Перелистывание страниц

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


});
