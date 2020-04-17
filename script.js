$(function($) {
    WindowHeight = $(window).height();
    $(".drawr").css("height", WindowHeight); //メニューをwindowの高さいっぱいにする
  
    $(document).ready(function() {
      $(".click").click(function() {
        //クリックしたら
        if ($(".drawr").is(":animated")) {
          return false;
        } else {
          $(".drawr").animate({ width: "toggle" }); //animateで表示・非表示
          $(this).toggleClass("peke"); //toggleでクラス追加・削除
          return false;
        }
      });
    });
  
    //別領域をクリックでメニューを閉じる
    $(document).click(function(event) {
      if (!$(event.target).closest(".drawr").length) {
        $(".click").removeClass("peke");
        $(".drawr").hide();
      }
    });
  });
  
  // スクロールでヘッダーを固定する
  $(function() {
    var header = $("header");
  
    header_offset = header.offset();
  
    header_height = header.height();
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > header_offset.top + header_height) {
        header.addClass("scroll");
      } else {
        header.removeClass("scroll");
      }
    });
  });