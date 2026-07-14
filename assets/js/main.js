jQuery(document).ready(function ($) {
  // Toggle Menu - Start
  const $btnMenuMobile = $(".sth-btn-mobile");
  const $menuMobile = $(".wrap-header-mobile");

  $btnMenuMobile.on("click", function () {
    $(this).toggleClass("active");
    $menuMobile.toggleClass("active");
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
  // Toggle Menu - End

  // Sites Tab - Start
  const $siteTabs = $(".all-sites-content__tabs button");
  const $siteList = $(".all-sites-content__list");
  const $siteCards = $(".site-card");

  $siteTabs.on("click", function () {
    const category = $(this).data("tab");

    $siteTabs.removeClass("active");
    $(this).addClass("active");

    $siteList.stop(true).animate(
      {
        opacity: 0,
      },
      150,
      function () {
        $siteCards.hide();

        if (category === "all") {
          $siteCards.show();
        } else {
          $siteCards
            .filter(function () {
              return $(this).data("category").split(" ").includes(category);
            })
            .show();
        }

        $siteList.animate(
          {
            opacity: 1,
          },
          150,
        );
      },
    );
  });
  // Sites Tab - End
});
