$(function () {
  var header = $("#header")
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  var header = $("#header");

  // Fixed Header

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {

    if (scrollOffset >= introH) {
      header.addClass("fixed");
      header.css("color", "white");
    } else {
      header.removeClass("fixed");
      header.css("color", "black");
    }

  }

  // Smooth Scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this);
    var blockId = $this.data('scroll');
    var blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass('active');

    $this.addClass('active');

    $("html, body").animate({
      scrollTop: blockOffset
    }, 300);
  });

  // Menu Nav Toggle
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

  });

  // filter
  let filter = $("[data-filter]");

  filter.on("click", function (evt) {
    evt.preventDefault();
    let cat = $(this).data('filter');

    if (cat == 'all') {

      $("[data-cat]").removeClass('hidden');
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data('cat');

        if (workCat != cat) {
          $(this).addClass('hidden');

        } else {
          $(this).removeClass('hidden');
        }
      });
    }
  });
});


