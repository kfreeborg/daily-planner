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
// var auditTask = function (taskEl) {
//   // get time from time element
//   var date = $(taskEl).find(".time").text().trim();
//   // ensure it worked
//   console.log(date);

//   // convert to moment object at 5:00pm
//   var time = moment(date, "L").set("hour", 17);
//   // this should print out an object for the value of the date variable, but at 5:00pm of that date
//   console.log(time);

//   // apply new class if task is near/over due date
//   if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   }

// };

// check due date
// auditTask(taskLi);

//var timeBlocks = // array?
var currentTime = moment().format('LT');
console.log(currentTime);
function timeColor() {
  // remove any old classes from element
  $(taskEl).removeClass("text-item-bg-light");

  if (moment().isAfter(time)) {
    $(taskEl).addClass("text-item-danger");
  }
};



// WHEN I click into a time block
// THEN I can enter an event
// See HTML

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist