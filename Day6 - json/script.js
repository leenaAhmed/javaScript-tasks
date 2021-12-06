var band = document.getElementById("sel");
var artist = document.getElementById("artist");

var xhr = new XMLHttpRequest();

xhr.open("GET", "rockbands.json");
var data;

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.responseText);
    for (var i in data) {
      band.innerHTML += '<option value=" ' + i + '">' + i + "</option>";
    }
    console.log(data);
  }
});

var keys;
function show() {
  var i = band.value;
  var obj = data[i.trim()];

  for (var i = 0; i < obj.length; i++) {
    keys = obj[i];
    artist.innerHTML += '<option value="">' + keys.name + "</option>";
  }
}
function openValue() {
  location.assign(keys.value);
}

xhr.send("");
