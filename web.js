var  date = new Date();

var monthDays = document.querySelector('.days')

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

for(var i=1;i<=31;i++){
  days += `<div>${i}</div>`
  monthDays.innerHTML = days
}