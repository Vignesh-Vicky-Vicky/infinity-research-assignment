$(function () {
  const carousel = $(".carousel");
  const seats = $(".carousel-seat");
  const points = $(".carousel-points li");

  const next = function (el) {
    if (el.next().length > 0) {
      return el.next();
    } else {
      return seats.first();
    }
  };

  const progress = function (e) {
    const el = $(".is-ref").removeClass("is-ref");
    let new_seat = next(el);

    new_seat.addClass("is-ref").css("order", 1);
    for (var i = 0, ref = seats.length; i <= ref; i++) {
      new_seat = next(new_seat).css("order", i);
    }
    points
      .eq(new_seat.index())
      .addClass("active")
      .siblings()
      .removeClass("active");

    carousel.removeClass("is-set");

    return setTimeout(function () {
      return carousel.addClass("is-set");
    }, 50);
  };

  window.setInterval(function () {
    progress();
  }, 2000);
});
