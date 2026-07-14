jQuery(document).ready(function ($) {
  const $btn = $(".sth-btn-mobile");
  const $menu = $(".wrap-header-mobile");

  $btn.on("click", function () {
    $(this).toggleClass("active");
    $menu.toggleClass("active");
    $("body").toggleClass("menu-open");
  });
  $(".site-nav-mobile a").on("click", function () {
    $(".sth-btn-mobile").removeClass("active");
    $(".wrap-header-mobile").removeClass("active");
    $("body").removeClass("menu-open");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".site-header").length) {
      $(".sth-btn-mobile").removeClass("active");
      $(".wrap-header-mobile").removeClass("active");
      $("body").removeClass("menu-open");
    }
  });
});
