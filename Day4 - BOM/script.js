var timer;
function startclock() {
  alert("timer start");
  timer = setInterval(function () {
    let timerTime = new Date().toLocaleTimeString();
    document.getElementById("demo").innerHTML = timerTime;
  }, 1000);
}
function stopClock() {
  clearInterval(timer);
}
document.addEventListener("keyup", function (event) {
  if (event.altKey === true && event.key === "w") {
    clearInterval(timer);
  }
});
// open after 3 seconds
var win, index;
function openWindow() {
  index = setTimeout(function () {
    win = open("index2.html", "", "width=300,height=300 , top=50");
  }, 3000);
  console.log("openWindow", win);
}
function closeWindow() {
  win.close();
}
