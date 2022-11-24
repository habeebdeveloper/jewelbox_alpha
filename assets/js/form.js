// openFullscreen & closeFullscreen

let elem = document.documentElement;

function closeFullscreen() {
  if (document.exitFullscreen) document.exitFullscreen();
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn2").style.display = "none";
}

function openFullscreen() {
  if (elem.requestFullscreen) elem.requestFullscreen();
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
}

// password show & hide

$(document).ready(function () {
  $('.pass_show').append('<span class="ptxt">show</span>');
});
$(document).on('click', '.pass_show .ptxt', function () {
  $(this).text($(this).text() == "show" ? "hide" : "show");
  $(this).prev().prev().attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; });
});

// datepicker

$(document).ready(function () {
  $("#datepicker").datepicker({
    autoclose: true,
    todayHighlight: true
  });

  $("#startdate").datepicker({
    todayHighlight: true,
    autoclose: true
  }).on('changeDate', function (selected) {
    var minDate = new Date(selected.date.valueOf());
    $('#enddate').datepicker('setStartDate', minDate);
  });

  $("#enddate").datepicker({
    autoclose: true
  })
    .on('changeDate', function (selected) {
      var maxDate = new Date(selected.date.valueOf());
      $('#startdate').datepicker('setEndDate', maxDate);
    });

});