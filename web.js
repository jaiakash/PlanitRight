function startTime() {
    var today = new Date();
    var hrs = today.getHours();
    var min = checkTime(today.getMinutes());
    var sec = checkTime(today.getSeconds());
    var ampm = AmPm(today.getHours());
    document.getElementById('time').innerHTML = hrs + ":" + min + ":" + sec + " " + ampm;
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