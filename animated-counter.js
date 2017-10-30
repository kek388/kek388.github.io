$('.count1').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 8800,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});

$('.count2').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 18800,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});


$('.count3').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 28800,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});


