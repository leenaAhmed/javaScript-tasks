// 1-	Create array that contain some tips about JavaScript (Array of 10 strings,
//  each string is tip about JS), and show random tip for the user each time he opens the page "Tip of the day

var tips = [];
tips[0] = "Declare and initialize your variables at the top";
tips[1] = "Build modular, specialized Functions";
tips[2] = "Recognize and remove duplicate code";
tips[3] = "Comment your code often";
tips[4] = "Beware of recursion overuse";
tips[5] = "Be efficient with DOM manipulations";
tips[6] = "Use Strict Mode to catch silent errors";
tips[7] = "Use template literals to combine strings";
tips[8] = "Shorten conditionals with false values";
tips[9] = "Sharing methods with inheritance";

var quats = Math.floor(Math.random() * tips.length);
// document.write(`<h1>Tip of the day </h1><br> <h3>${tips[quats]}</h3>`);

// 2-	Make a button that display the current date and time in local format on the page.

function PrintDate() {
  var date = new Date();
  document.write(`the current date is ${date} <br>`);
  document.write(`time in local ${date.toLocaleTimeString()} <br>`);
}

// 3 his Full Name and email address
// /^(01)(1|2|5|0)[0-9]{8}$/;

// var hisFullName = prompt("Enter your full name");
// var NameReg = /^([a-zA-Z]{3,}\s[a-zA-Z]{3,})*$/;

// if (NameReg.test(hisFullName)) {
//   alert(hisFullName);
// } else {
//   hisFullName = prompt("Enter your full name");
// }

// var email = prompt("Enter your email address");
// var emailExp = /^[a-zA-Z]{3,}(@)([0-9]){4,}(.com|.net|.edu|.org).eg$/;
// var test = emailExp.test(email);
// do {
//   if (test) {
//     alert(email);
//   } else {
//     email = prompt("Enter your email address");
//   }
// } while (!test);

// 4.4-	Create an array that hold the following students grades :
var students = [60, 10, 15, 85, 150, 120];
var grades;

var gradsorted = students.sort(function (a, b) {
  return b - a;
});
document.write(gradsorted + "<br> <br>");

// b.	Using the sorted Array find the highest student degree
// (first degree less than or equal to 100) [Use find()].
var findstudent = students.find(function (student) {
  return student <= 100;
});
document.write(" find Student grad : " + findstudent);

// c.Print the grades of all students with grades below 60 [Use filter()].
var studentsfilter = students.filter(function (student) {
  return student < 60;
});
document.write(" <br> students filter  grad : " + studentsfilter);

// 5.Make a function that takes date string as a parameter,
// and returns the Day name (Saturday, Sunday,…) of the given date.

function getWeekDays(strDate, locale) {
  var baseDate = new Date(strDate); // just a Monday

  var weekDays = baseDate.toLocaleDateString(locale, { weekday: "long" });

  return weekDays;
}

var weekDays = getWeekDays("10/30/2021", "en-us");

document.write(" <br> <br> <br>weekDays : ", weekDays);
