let workDay = {
  "8 AM": "",
  "9 AM": "",
  "10 AM": "",
  "11 AM": "",
  "12 PM": "",
  "1 PM": "",
  "2 PM": "",
  "3 PM": "",
  "4 PM": "",
  "5 PM": "",
};

$(document).ready(function () {
  if (!localStorage.getItem('workDay')) {
    updateCalendarTasks(workDay);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
  }
})

//$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

let counter = 1;
for (const property in workDay) {
  let textEntry = "#text-entry" + counter;
  $(textEntry).text(workDay[property]);
  let timeId = "#time" + counter;
  let presentHour = moment().hour();
  let timeString = $(timeId).text();
  let timeNumber = hourNumberFromHourString(timeString);
  if (timeNumber < presentHour) {
    $(textEntry).addClass("past-hour");
  } else if (timeNumber > presentHour) {
    $(textEntry).addClass("future-hour");
  } else {
    $(textEntry).addClass("present-hour");
  }
  counter++;
}

$("button").click(function () {
  value = $(this).siblings("textarea").val();
  hourString = $(this).siblings("div").text();

  saveSchedule(hourString, value);
});

function hourNumberFromHourString(hourString) {
  switch (hourString) {
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
  }
}

function loadCorrectDataset() {
  result = localStorage.getItem('workDay')
  return (result ? result : workDay);
}

function initializeLocalStorage() {
  localStorage.setItem('workDay', JSON.stringify(workDay));
};

function saveToLocalStorage(dayObj) {
  localStorage.setItem('workDay', JSON.stringify(dayObj));
}

function saveSchedule(hourString, val) {
  if (!localStorage.getItem('workDay')) {
    initializeLocalStorage();
  }

  let workHours = JSON.parse(localStorage.getItem('workDay'));
  workHours[hourString] = val

  saveToLocalStorage(workHours);
}

function updateCalendarTasks(dayObject) {
  $(".calendar-row").each(function (index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  })
}

//text box array
var textboxArray = $(".form-control");
//name of array forEach funct that will go through each element in the array
//the function and I am passing in the elements in the array
textboxArray.forEach(function (myElement) {
  {
    if (this.moment === "ago") {
      this.style.color = ".past";
    }
    else if (this.moment === "from now") {
      this.style.color = ".future";
    }
    else {
      this.style.color = ".present";
    }

  };
});



//text box array
var textboxArray = $(".form-control");
for (let i = 0; i < textboxArray.length; i++) {
  let val = getCookie("box" + i);
  textboxArray[i].value = val != null ? val : "";
}

document.getElementById("date").innerHTML = moment();

console.log(moment())
function test(box) {
  setCookie("box" + box, textboxArray[box].value);
}

function setCookie(name, value) {
  document.cookie = name + "=" + value + ";path=/;";

}

function getCookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}