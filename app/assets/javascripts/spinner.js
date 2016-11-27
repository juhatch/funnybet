var MAX = 10;
var MIN = 0;

$('.spinner .spinner-plus').click(function(){
  var value = parseInt($('.spinner input').val());
  if (isNaN(value)) {
    value = MIN;
  }
  if (value < MAX) {
    value = value + 1;
  }
  $('.spinner input').val(value);
});

$('.spinner .spinner-minus').click(function(){
  var value = parseInt($('.spinner input').val());
  if (isNaN(value)) {
    value = MIN;
  }
  if (value > MIN) {
    value = value - 1;
  }
  $('.spinner input').val(value);
});

$('.spinner .spinner-all-in').click(function(){
  $('.spinner input').val(MAX);
});

$('.spinner input').change(function() {
  var value = parseInt($(this).val());
  if (value < MIN) {
    value = MIN;
  }
  else if (value > MAX) {
    value = MAX;
  }
  if (isNaN(value)) {
    value = MIN;
  }
  $('.spinner input').val(value);
});