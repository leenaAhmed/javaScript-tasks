// 1-Ask the user to enter a message then display it using the
// differenthtml heading tags (from <h1> to <h6>) using Loops. DO
// NOT write the header element explicitly in your script!

var message = prompt("enter yor massage");

for (var i = 0; i < 6; i++) {
  if (isNaN(message)) document.write(`<h${i + 1}>${message}</h${i + 1}>`);
}

// 2-Write a script that takes from the user n values and returns
// their sum, stop receiving values from user when he enters 0 or
// sum exceeds100, check that the entered data is numeric and
// inform the user with the total sum of the entered values.

var sum = 0;
do {
  var values = parseInt(prompt("Enter  a number "));
  if (isNaN(values)) {
    alert("Please enter a number");
  } else {
    sum += values;
  }
} while (sum < 100 && values != 0);
document.write("the sum number is : " + sum);

// 3- Make a function that takes today’s temperature as a parameter,
// prints: “HOT” if the entered temperature are more than or equals 30
// and “Cold” if it’s less than 30 (use ternary conditional operator).

function printTemperature() {
  var temperature = parseInt(prompt("enter temperature"));
  var temperatureString;
  temperature >= 30
    ? (temperatureString = "hot")
    : (temperatureString = "cold");
  document.write("the temperature is " + temperatureString);
}

printTemperature();

// 4-Write a function that takes 2 parameters: start and end number and
// print odd numbers between the given 2 numbers.

var start = parseInt(prompt("num 1"));
var end = parseInt(prompt("num 1"));

function getnumbers(start = 0, end = 0) {
  for (var i = start; i < end; i++) {
    if (i % 2 != 0) {
      document.write("number : " + i + " " + " is odd <br>");
    }
  }
}

var response = getnumbers(start, end);
