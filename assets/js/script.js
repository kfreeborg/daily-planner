// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = moment().format('l');
$(".date").append(today);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// See HTML

// WHEN I view the time blocks for that day
// THEN each time block is color - coded to indicate whether it is in the past, present, or future
var colorcode = document.getElementsByClassName("colorcode");
var currentHour = moment().hour();
$(".colorcode")
  .each(function () {
    var val = parseInt($(this).prop('id'));
    if (val < currentHour) {
      $(this).next("textarea").addClass("past");
    }
    else if (val > currentHour) {
      $(this).next("textarea").addClass("future");
    }
    else {
      $(this).next("textarea").addClass("present");
    }
  });

// WHEN I click into a time block
// THEN I can enter an event
// See HTML

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".entry").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

$("#hour9 .entry").val(localStorage.getItem("hour9"));
$("#hour10 .entry").val(localStorage.getItem("hour10"));
$("#hour11 .entry").val(localStorage.getItem("hour11"));
$("#hour12 .entry").val(localStorage.getItem("hour12"));
$("#hour13 .entry").val(localStorage.getItem("hour13"));
$("#hour14 .entry").val(localStorage.getItem("hour14"));
$("#hour15 .entry").val(localStorage.getItem("hour15"));
$("#hour16 .entry").val(localStorage.getItem("hour16"));
$("#hour17 .entry").val(localStorage.getItem("hour17"));

// // WHEN I refresh the page
// // THEN the saved events persist