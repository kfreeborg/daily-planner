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
//var fullDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var colorcode = document.getElementsByClassName("colorcode");
var currentHour = moment().hour();
$(".colorcode")
  .each(function () {
    var val = parseInt($(this).prop('id'));
    console.log(val, typeof val, currentHour);
    if (val < currentHour) {
      $(this).next("textarea").addClass("past");
      console.log("past");
    }
    else if (val > currentHour) {
      $(this).next("textarea").addClass("future");
      console.log("future");
    }
    else {
      $(this).next("textarea").addClass("present");
      console.log("present");
    }
  });


// WHEN I click into a time block
// THEN I can enter an event
// See HTML

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist