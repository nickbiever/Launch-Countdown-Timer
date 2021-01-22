const launchDate = new Date();
const [launchDays, LaunchHours, launchMinutes, launchSeconds] = [
  8 * 24 * 60 * 60,
  23 * 60 * 60,
  55 * 60,
  41,
];

launchDate.setSeconds(
  launchDate.getSeconds() +
    launchDays +
    LaunchHours +
    launchMinutes +
    launchSeconds
);

launchDate.getTime();

var minuteCounter = 55;
var hourCounter = 23;

function countDownTimer() {
  const today = new Date().getTime();
  const diff = launchDate - today;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("seconds").innerHTML = cardFlip(seconds);
  if (seconds == 59) {
    minuteCounter--;
    document.getElementById("minutes").innerHTML = cardFlip(minutes);
  } else if (minuteCounter == 0) {
    minuteCounter = 60;
    hourCounter--;
    document.getElementById("hours").innerHTML = cardFlip(hours);
  } else if (hourCounter == 0) {
    hourCounter = 24;
    document.getElementById("days").innerHTML = cardFlip(days);
  }

  setTimeout(countDownTimer, 1000);
}

function cardFlip(time) {
  var data =
    "<span class='counter card-top flip-card-top'>" +
    (time + 1) +
    "</span><span class='counter card-top'>" +
    time +
    "</span><span class='counter card-bottom flip-card-bottom'>" +
    time +
    "</span><span class='counter card-bottom'>" +
    (time + 1) +
    "</span>";

  return data;
}

countDownTimer();
