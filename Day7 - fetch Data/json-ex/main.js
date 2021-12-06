console.log("Starting");

var inp = document.querySelector("input");

function getId() {
  var xhr = new XMLHttpRequest();
  var id = inp.value;
  var data;
  xhr.open("GET", `https://reqres.in/api/users/${id}`);

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      console.log(data);
      displayData(data);
    }
  });

  function displayData(obj) {
    var result = data["data"];
    var suport = data["support"];
    document.getElementById("fristname").innerHTML =
      result.first_name + " " + result.last_name;
    document.getElementsByTagName("img")[0].src = result.avatar;
    document.getElementById("title").innerHTML = suport.text;
    document.getElementById(
      "title"
    ).innerHTML += `<p> contact : <a href="#">  ${result.email}</a></p> `;
  }
  xhr.send("");
}
