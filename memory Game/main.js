var maincontent = document.getElementById("main");
var getallDIv = document.getElementsByTagName("div");
var arr = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "8.jpg"];
var random = Math.floor(Math.random() * arr.length);
function displayImage() {
  for (var i = 0; i < arr.length; i++) {
    maincontent.innerHTML += `<div><img src="images/${arr[i]}"/></div>`;
  }
  Math.floor(Math.random() * arr.length);
}
displayImage();
displayImage();

var flag = true;
var imgArr = [];
for (var i = 0; i < getallDIv.length; i++) {
  getallDIv[i].addEventListener("click", function (e) {
    if (flag) {
      this.firstChild.style.opacity = "1";
      if (imgArr.length == 0) {
        imgArr[0] = this.firstChild;
      } else if (imgArr.length == 1) {
        imgArr[1] = this.firstChild;
      }
      if (imgArr.length == 2) {
        flag = false;
        setTimeout(checkImage, 1000);
      }
    } else {
      return;
    }
  });
}

var sum = 0;
var wrong = 1;
function checkImage() {
  if (imgArr[0].getAttribute("src") == imgArr[1].getAttribute("src")) {
    sum++;
    if (sum == 6) {
      setTimeout(function () {
        document.getElementsByClassName("sucess")[0].style.display = "block";
      }, 500);
    }
  } else {
    imgArr[0].style.opacity = 0;
    imgArr[1].style.opacity = 0;
    document.getElementsByTagName("i")[0].innerHTML = wrong++;
    if (wrong >= 7) {
      alert("game over");
      wrong = 0;
    }
  }
  imgArr = [];
  flag = true;
}
