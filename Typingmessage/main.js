// Writeascriptthatshowsa“typingmessage”appearingina
// new child window. The new window should close after fewsecondsofdisplaying your message.
var win;
var j = 0;
var timer;
function typingmessage() {
  var gmessage = " your";

  timer = setInterval(function () {
    document.getElementById("message").innerHTML += gmessage[j++];

    if (j >= gmessage.length) {
      clearInterval(timer);
      win.close();
    }
  }, 1000);
}

function openWindow() {
  win = open("child.html", "", "width=", "width=300,height=300 , top=50");
}

// var newWindow, timer;
// var x = 0;
// function openNewpage() {
//var x = 0;
//    var message =
//     " your message  will appear here chracter by chracter after 3sec this page will apper";
//   newWindow = open("child.html", "", "width=", "width=300,height=300 , top=50");

//   timer = setInterval(function () {
//     newWindow.document.getElementById("message").innerHTML += message[x++];
//     if (x >= message.length) {
//       clearInterval(timer);
//     }
//   }, 100);
// }

// ---------------------------------------------------------------- -------------
