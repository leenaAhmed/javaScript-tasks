// ----------------------------------------------------------------------------
var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var i = 1;
function NextSlide() {
  if (i > arr.length - 1) i = arr.length - 1;
  document.images[0].src = "images/" + arr[i];
  i++;
  return;
}
var timerID;
function SlideShow() {
  if (i > arr.length - 1) {
    i = 0;
  }
  document.images[0].src = "images/" + arr[i];
  timerID = setTimeout(SlideShow, 1000);

  i++;
}

function prevSlide() {
  if (i > arr.length - 1) i = arr.length - 1;
  document.images[0].src = "images/" + arr[i];
  i--;
  return;
}
function stopeShow() {
  clearTimeout(timerID);
}
