$(document).ready(function(){

  var mainMenu = $("#main-menu");
  var itmMenu = $("#itm-menu");
  var lnkMenuOpen = $("#lnk-menu-open");
  var itmBack = $("#itm-back");
  var lnkBackToText = $("#lnk-back-to-text");
  var itmHome = $("#itm-home");

  var popupMenu = $("#popup-menu");
  var lnkPopupMenuClose = $("#lnk-popup-menu-close");
  var itmContents = $("#itm-contents");
  var lnkContents = $("#lnk-contents");

  var popupSettings = $("#popup-settings");
  var lnkSettingsOpen = $("#lnk-settings-open");
  var lnkSettingsClose = $("#lnk-settings-close");
  var lnkFontSizeDecrease = $("#lnk-font-size-decrease");
  var lnkFontSizeIncrease = $("#lnk-font-size-increase");
  var fontSize = ($("html, body").css("font-size")).substr(0,2);
  var langRu = $(".lang-ru");
  var langEn = $(".lang-en");
  var lnkLangRu = $("#lnk-lang-ru");
  var lnkLangEn = $("#lnk-lang-en");
  var lnkFontSans = $("#lnk-font-sans");
  var lnkFontSerif = $("#lnk-font-serif");
  var lnkColorScheme1 = $("#lnk-color-scheme-1");
  var lnkColorScheme2 = $("#lnk-color-scheme-2");
  var lnkColorScheme3 = $("#lnk-color-scheme-3");
  var stylesheet = $("#stylesheet");

  var lnkPrevChapter = $("#lnk-prev-chapter");
  var lnkNextChapter = $("#lnk-next-chapter");
  var lnkToTop = $("#lnk-to-top");

  var contents = $(".book__contents");
  var bookTitle = $(".book__title");
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

  var showBottomMenu = function() {
    lnkPrevChapter.show();
    lnkNextChapter.show();
    lnkToTop.show();
  }

  var hideBottomMenu = function() {
    lnkPrevChapter.hide();
    lnkNextChapter.hide();
    lnkToTop.hide();
  }

  // Плавная прокрутка страницы наверх

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      lnkToTop.fadeIn();
    }
    else {
      lnkToTop.fadeOut();
    }
  });
  lnkToTop.click(function(){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Открытие и закрытие всплывающего меню

  lnkMenuOpen.click(function(){
    event.preventDefault();
    itmMenu.hide();
    bookTitle.css({"opacity": "0"});
    if (contents.css("display") != "none"){
      itmContents.hide();
    }
    else {
      itmContents.show();
    }
    popupMenu.fadeIn(600);
  });

  lnkPopupMenuClose.click(function(){
    event.preventDefault();
    popupMenu.fadeOut(600);
    itmMenu.show();
    bookTitle.css({"opacity": "1"});
  });

  chapter.hide();
  lnkPrevChapter.hide();
  lnkNextChapter.hide();
  runningTitle.hide();
  itmMenu.show();
  lnkFontSerif.css({"opacity": "1"});
  lnkFontSans.css({"opacity": "0.5"});
  lnkLangRu.css({"opacity": "1"});
  lnkLangEn.css({"opacity": "0.5"});
  lnkColorScheme1.css({"opacity": "1"});
  lnkColorScheme2.css({"opacity": "0.5"});
  lnkColorScheme3.css({"opacity": "0.5"});
  langEn.hide();
  langRu.show();

  // Переходы между главами

  $(chapterLink).click(function(event){
    event.preventDefault();
    chapterIdx = chapterLink.index(this);
    itmHome.hide();
    itmBack.hide();
    contents.hide();
    $(showBottomMenu);
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
    lnkPrevChapter.hide();
    lnkNextChapter.hide();
    runningTitle.hide();
    itmBack.show();
    contents.fadeIn(600);
  });

  lnkBackToText.click(function(){
    event.preventDefault();
    itmBack.hide();
    contents.hide();
    $(showBottomMenu);
    runningTitle.show();
    itmMenu.show();
    $(setupChapter);
    $(showChapter);
  });

  // Открытие и закрытие окна настроек
  lnkSettingsOpen.click(function(){
    event.preventDefault();
    popupMenu.fadeOut(600);
    popupSettings.fadeIn(600);
  });

  lnkSettingsClose.click(function(){
    event.preventDefault();
    popupSettings.fadeOut(600);
    itmMenu.show();
    bookTitle.css({"opacity": "1"});
  });

  // Изменение шрифта

  lnkFontSans.click(function(){
    $(this).css({"opacity": "1"});
    lnkFontSerif.css({"opacity": "0.5"});
    $("html, body").css({"font-family": "'PT Sans', Arial, sans-serif"});
  });

  lnkFontSerif.click(function(){
    $(this).css({"opacity": "1"});
    lnkFontSans.css({"opacity": "0.5"});
    $("html, body").css({"font-family": "'PT Serif', Georgia, serif"});
  });

  // Изменение размера шрифта

  lnkFontSizeDecrease.click(function(){
    event.preventDefault();
    if (fontSize > 10) {
      fontSize--;
      $("html, body").css({"font-size": fontSize+"px"});
    }
  });

  lnkFontSizeIncrease.click(function(){
    event.preventDefault();
    if (fontSize < 24) {
      fontSize++;
      $("html, body").css({"font-size": fontSize+"px"});
    }
  });

  // Изменение языка

  lnkLangEn.click(function(){
    $(this).css({"opacity": "1"});
    lnkLangRu.css({"opacity": "0.5"});
    langRu.hide();
    langEn.show();
  });

  lnkLangRu.click(function(){
    $(this).css({"opacity": "1"});
    lnkLangEn.css({"opacity": "0.5"});
    langEn.hide();
    langRu.show();
  });

// Смена цветовой схемы

  lnkColorScheme1.click(function(event){
    stylesheet.attr("href", "css/style-blue.min.css");
    lnkColorScheme1.css({"opacity": "1"});
    lnkColorScheme2.css({"opacity": "0.5"});
    lnkColorScheme3.css({"opacity": "0.5"});
  });

  lnkColorScheme2.click(function(event){
    stylesheet.attr("href", "css/style-red.min.css");
    lnkColorScheme1.css({"opacity": "0.5"});
    lnkColorScheme2.css({"opacity": "1"});
    lnkColorScheme3.css({"opacity": "0.5"});
  });

  lnkColorScheme3.click(function(event){
    stylesheet.attr("href", "css/style-green.min.css");
    lnkColorScheme1.css({"opacity": "0.5"});
    lnkColorScheme2.css({"opacity": "0.5"});
    lnkColorScheme3.css({"opacity": "1"});
  });
});
