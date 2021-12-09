var node = {};
function Node(data, next = null) {
  Object.defineProperties(node, {
    data: {
      value: data,
      writable: true,
    },
    next: {
      value: null,
    },
  });
}
var list = [];
function LinkedList() {
  this.head = null;
  this.size = 0;

  this.firstChild = function (data) {
    this.head = new Node(data, this.head);
  };
}
var node = new Node();
var Linked1 = new LinkedList(100);
Linked1.firstChild(100);
console.log(Linked1);

// const

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  this.displayInfo = function () {
    return `the width ${this.width} and height ${
      this.height
    } perimeter = ${this.perimeter()} and Aree = ${this.area()}`;
  };
}
var width1 = document.getElementsByTagName("input")[0].value;
var height1 = document.getElementsByTagName("input")[1].value;

var req1 = new Rectangle(5, 10);

document
  .getElementById("calculateArea")
  .addEventListener("click", function (e) {
    document.getElementById("display").innerHTML +=
      " Aree of rectangle is = " + req1.area();
    +"<br>";
  });
document
  .getElementById("calculatePerimeter")
  .addEventListener("click", function (e) {
    document.getElementById("display").innerHTML +=
      " <br> <br>perimter is = " + req1.perimeter();
  });
document
  .getElementById("displayInformation")
  .addEventListener("click", function (e) {
    document.getElementsByTagName("p")[0].innerHTML +=
      "<br> <br>" + req1.displayInfo();
  });
