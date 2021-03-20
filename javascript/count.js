// カテゴリーの数用
$(function () {
  var countElm = $('.count-1'),
    countSpeed = 50;

  countElm.each(function () {
    var self = $(this),
      countMax = self.attr('data-num'),
      thisCount = self.text(),
      countTimer;

    function timer() {
      countTimer = setInterval(function () {
        var countNext = thisCount++;
        self.text(countNext);

        if (countNext == countMax) {
          clearInterval(countTimer);
        }
      }, countSpeed);
    }
    timer();
  });

});


// BGMの数用
$(function () {
  var countElm = $('.count-2'),
    countSpeed = 5;

  countElm.each(function () {
    var self = $(this),
      countMax = self.attr('data-num'),
      thisCount = self.text(),
      countTimer;

    function timer() {
      countTimer = setInterval(function () {
        var countNext = thisCount++;
        self.text(countNext);

        if (countNext == countMax) {
          clearInterval(countTimer);
        }
      }, countSpeed);
    }
    timer();
  });

});