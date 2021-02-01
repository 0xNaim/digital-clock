// DOM Selection
let digiSecond = document.getElementById("seconds");
let digiMinutes = document.getElementById("minutes");
let digiHours = document.getElementById("hours");
let digiAmPm = document.getElementById("am-pm");

const setClock = () => {
  const currentDate = new Date();

  let seconds = currentDate.getSeconds();
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();

  // 24 hours handling
  if (hours > 12) {
    hours = hours - 12;
    digiAmPm.innerText = "PM";
  }
  hours = hours === 0 ? (hours = 12) : hours;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  // value inserting
  digiSecond.innerText = seconds;
  digiMinutes.innerText = minutes;
  digiHours.innerText = hours;
};

setInterval(setClock, 500);
setClock();
