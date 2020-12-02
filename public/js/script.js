$(function () {
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
