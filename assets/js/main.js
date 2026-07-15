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

  // FAQ - Start
  const $firstFaq = $(".faq-item").first();

  $firstFaq.addClass("active");
  $firstFaq.find(".faq-answer").slideDown(0);

  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");
    const $answer = $item.find(".faq-answer");

    if ($item.hasClass("active")) {
      $item.removeClass("active");
      $answer.stop(true, true).slideUp(300);
    } else {
      $(".faq-item.active")
        .removeClass("active")
        .find(".faq-answer")
        .stop(true, true)
        .slideUp(300);

      $item.addClass("active");
      $answer.stop(true, true).slideDown(300);
    }
  });
  // FAQ - End
});
