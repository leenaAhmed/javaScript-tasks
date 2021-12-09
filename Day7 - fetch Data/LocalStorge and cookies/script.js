//use local storage to save user name and password
var user;
var pass;

function saveLocal() {
  var inputs1 = document.getElementById("inpsto1");
  var inputs2 = document.getElementById("inpsto2");

  localStorage.setItem("userName1", inputs1.value);
  localStorage.setItem("password1", inputs2.value);
}
//
onload = function retrieveLocalStorage() {
  var name = localStorage.getItem("userName1");
  var password = localStorage.getItem("password1");

  document.getElementById("storedname").innerHTML =
    "Hello, " + name + "! Welcome!";
  document.getElementById("storedpass").innerHTML =
    "passwoed, " + password + "!!";
};

function saveLocalStorage() {
  if (document.getElementById("key").checked) {
    var inputs = document.getElementsByTagName("input");
    user = localStorage.setItem("userName", inputs[3].value);
    pass = localStorage.setItem("password", inputs[4].value);
  } else {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
  }
}

//5-In local storage Assignment (No.1) use cookies instead of local storage
function saveCookis() {
  var inps = document.getElementsByClassName("inps");
  var dat = new Date();
  if (document.getElementById("keys").checked) {
    dat.setMonth(dat.getHours() * 5);
    document.cookie = "cookieusernam=" + inps[0].value + ";expires=" + dat;

    document.cookie = "cookiepassword=" + inps[1].value + ";expires=" + dat;
  } else {
    document.cookie = "cookieusernam=" + inps[0].value;

    document.cookie = "cookiepassword=" + inps[1].value;
  }
}

function displaycookies() {
  var associativeCookie = [];
  var cookies = document.cookie.split(";"); //

  for (var i = 0; i < cookies.length; i++) {
    associativeCookie[cookies[i].split("=")[0].trim()] =
      cookies[i].split("=")[1];
  }
  return associativeCookie;
}

function displaycookie() {
  var cookies = displaycookies();
  var user = cookies["cookieusernam"];
  var password = cookies["cookiepassword"];

  document.getElementsByTagName(
    "span"
  )[0].innerHTML = `<p> user name : ${user} <span> </span> password : <strong> ${password}</strong </p> `;
}
