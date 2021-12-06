// Write a script that accepts a string from user through prompt and count the number of ‘e’ characters in it
function acceptString() {
  var message = prompt("Enter a string");
  var count = 0;
  for (var i = 0; i < message.length; i++) {
    if (message[i] == "e") {
      count++;
    }
  }

  console.log("the number of characters e is : " + count);
}

// 2 Write a script to determine whether the entered string is palindrome or not.
function palindrome() {
  var message = prompt("Enter a palindrome ");
  var confirmsensitivity = confirm("confirm sensitivity ");
  var original = message.split("").reverse().join("");
  confirmsensitivity == true;

  if (message === original) {
    console.log("palindrome");
  } else if (confirmsensitivity == true) {
  
    
    if(message.toLowerCase()=original.toLowerCase()){
      console.log("palindrome sensitivity");

    }
  } else {
    console.log("not palindrome");
  }
  console.log(confirmsensitivity);
}

// 1.3. Write a script that reads from the user his info;
//  validates and displays it with a welcoming message with today’s date
function validatesAndDisplays() {
  var colors = prompt("choice your favorite colors ", "1)red ,2)green ,4)blue");
  // var info = [
  //   [name, PhoneNumber, MobileNumber, email],
  //   [NameExp, PhoneeExp, MobileExp, emailExp],
  // ];
  // for (var i = 0; i < info[0].length; i++) {
  //   var infoExp = info[1][i];
  //   if (infoExp.test(info[0][i])) {
  //     console.log(info[0][i], info[1][i]);
  //   }
  // }

  var name = prompt("plz enter your name ");
  var NameExp = /^([a-zA-Z]{3,}\s[a-zA-Z]{3,})*$/;
  do {
    var ExpTest = NameExp.test(name);
    if (ExpTest) {
      text = "<br> <br>welcome dear guest : ";
      document.write(text.fontcolor(colors), name);
    } else {
      name = prompt("plz enter your name : ");
    }
  } while (!ExpTest);

  var PhoneNumber = parseInt(prompt("plz enter your Phone Number"));
  var PhoneeExp = /^[0-9]{8}$/;
  do {
    var exptest = PhoneeExp.test(PhoneNumber);
    if (exptest) {
      text = "<br> <br>your Phone Number is :  ";
      document.write(text.fontcolor(colors), PhoneNumber);
    } else {
      PhoneNumber = prompt("Enter your phone  number contain 8 digit");
    }
  } while (!exptest);

  var MobileNumber = parseInt(prompt("plz enter your mobile Number"));
  var MobileExp = /^(011|012|015|010)[0-9]{8}$/;
  do {
    var mobtest = MobileExp.test(MobileNumber);
    if (mobtest) {
      textM = " <br> <br>and your phone number is : ";
      document.write(textM.fontcolor(colors), MobileNumber);
    } else {
      MobileNumber = prompt("Enter your Mobile  number 11 digit");
    }
  } while (!mobtest);

  var email = prompt("plz enter your email");
  var emailExp = /^[a-zA-Z]{3,}(@)([0-9]){3,}(.com|.net|.edu|.org)$/;
  do {
    var emailtest = emailExp.test(email);
    if (emailtest) {
      text = "<br> <br> your email address is ";
      document.write(text.fontcolor(colors), email);
    } else {
      email = prompt("Enter your email address");
    }
  } while (!emailtest);

  var date = new Date();
  document.write("<br> <br>today is : ", date.getDay());
  document.write("<br> <br> we are in month : ", date.getMonth());
  document.write("<br> <br> today year : ", date.getYear());
  document.write("<br> <br>today is : ", date.toDateString());
}

// 2.1. Fill an array of 3 elements from the user,
// and apply each of the following mathematical operations on
function FillArray() {
  var array = [];

  for (var i = 0; i < 3; i++) {
    var addition = parseInt(prompt("inter  element"));
    array.push(addition);
  }

  document.write(
    "\n Sum of the 3 elements : ",
    array.join("+"),
    " =   ",
    array.reduce((a, b) => a + b, 0)
  );
  document.write(
    "<br> <br> multiplication  of the 3 elements : ",
    array.join("*"),
    " =   ",
    array.reduce((a, b) => a * b)
  );
  document.write(
    "<br> <br> divison of the 3 elements : ",
    array.join("/"),
    " =   ",
    array.reduce((a, b) => a / b)
  );
}

// Fill an array (5 numerical values) from the user,
// Sort it in descending and ascending orders then display

function SortNumerical() {
  var array = [];

  for (var i = 0; i < 5; i++) {
    var SortNum = parseInt(prompt("5 numerical values"));
    array.push(SortNum);
  }
  document.write("\n 5 numerical values : ", array.join(" , "));
  document.write(
    "<br> <br> sort  of 5 numerical values descending : ",
    array.sort((a, b) => b - a)
  );
  document.write(
    "<br> <br> sort  of 5 numerical values ascending  : ",
    array.sort((a, b) => a - b)
  );
}

// 3  Write a script that ask the user to
// • Enter the value of a circle’s radius
// var lists = [radius, side, angle];
// for (var i = 0; i < lists.length; i++) {
//   console.log(lists[i]);
// }
function calculatecircle() {
  var radius = parseInt(prompt("Enter the value of a circle’s radius"));
  alert("calculate its area is : " + 2 * Math.PI * radius);

  // Enter another value to calculate its square root and alert the result

  var side = parseInt(prompt(" Enter  side of  square root"));
  alert("calculate its area is : " + side + "  " + Math.sqrt(side));

  // Enter an angle to calculate its cos value then display the output

  var angle = parseInt(prompt("Enter the value of a  angle"));
  document.write(
    "calculate its area is : " +
      `cos ${angle}` +
      " is" +
      Math.cos(angle * (Math.PI / 180)).toFixed(5)
  );
}
