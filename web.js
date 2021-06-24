var  date = new Date();

var render = () => {

  date.setDate(1)
  var monthDays = document.querySelector('.days')

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = date.getDay()

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()

  const nextDays = 7 - lastDayIndex - 1

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = ""

  for (var x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for(var i=1;i<=lastDay;i++){
    if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()) {
      days += `<div class="today" onclick="dateClick(this)">${i}</div>`
    }
    else {
      days += `<div class="${months[date.getMonth()]} ${i} ${date.getFullYear()}" onclick="dateClick(this)">${i}</div>`
    }
  }

  for (var j=1;j<=nextDays;j++) {
    days += `<div class="next-date">${j}</div>`
  }
  monthDays.innerHTML = days

  startTime();
}

function dateClick(obj) {
  prev_task = window.localStorage.getItem(obj.className);
  if(prev_task == null || prev_task == ""){
    var todo = prompt("Enter task for date "+obj.className);
    window.localStorage.setItem(obj.className, todo);
  }
  else{
    alert("Task for "+ obj.className +" is " + prev_task);
  }

  //Remove Everything
  //window.localStorage.clear();
}

function startTime() {
  var today = new Date();
  var hrs = today.getHours();
  var min = checkTime(today.getMinutes());
  var sec = checkTime(today.getSeconds());
  var ampm = AmPm(today.getHours());
  var myClock = document.getElementById("time");
  myClock.innerHTML = hrs + ":" + min + ":" + sec + " " + ampm;
  console.log(hrs + ":" + min + ":" + sec + " " + ampm);
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function AmPm(hours){
  var meridiem = "AM";
  if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
  }

  // 0 AM and 0 PM should read as 12
  if (hours === 0) {
      hours = 12;    
  }
  return meridiem;
}

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1)
  render()
})

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1)
  render()
})

render()