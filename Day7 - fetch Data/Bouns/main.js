var xhr = new XMLHttpRequest();
var jsonObject;
var data;

xhr.open("GET", "jso.json");
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    console.log(data);
  }
});

console.log(xhr.response);
xhr.send("");
