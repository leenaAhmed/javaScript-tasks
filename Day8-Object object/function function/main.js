// Create a function that accepts only 2 parameters and throw
// exception if number of parameters either less than or exceeds 2
// parameters

function acceptsTwoParameters(param1, param2) {
  if (arguments.length != 2) {
    throw new RangeError("Exactly 2 parameters required !");
  }
  return param1 + param2;
}
var parameters = acceptsTwoParameters(5, 7);
// var parameter = acceptsTwoParameters(5, 7, 5);
console.log(parameters);

//Create an adding function that adds n numbers only.
// Throw exception if the user passed any data type other than
// “number” or called your function without passing any
// parameters.

function addsNumbers() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length < 2) {
      throw new RangeError("More than one argument  required!");
    } else if (typeof arguments[i] == "string") {
      throw new RangeError("Number Not String!");
    } else if (arguments.length === 0) {
      throw new RangeError("should pass arguments!");
    } else {
      sum += arguments[i];
    }
  }
  return "sum num of " + arguments.length + " = " + sum;
}

console.log(addsNumbers(5, 7, 10, 8));
console.log(addsNumbers(5, 7, 8));
console.log(addsNumbers(5, 7));
// console.log(addsNumbers("5", "4"));
// console.log(addsNumbers(5));
// console.log(addsNumbers());

// B.3. Write two different function with two different forms
// implementations that takes any number of parameters and
// returns them reversed using array’s reverse function.

function reverseFun() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  arr.reverse();
  return arr;
}
var reversed1 = reverseFun(5, 7, 9, 2, 5);
console.log(reversed1);

function reversefun2() {
  return [].reverse.apply(arguments);
}

var rever5 = reversefun2(5, 8, 7, 9, 7, 8);
console.log(rever5);

//
var obj = {
  id: "SD-10",
  addr: "123 st.",
  name: "mona",
  getSetGen: function () {
    for (let key in this) {
      this["get" + key] = function () {
        return this[key];
      };
      this["set" + key] = function (value) {
        this[key] = value;
      };
    }
  },
};
obj.getSetGen();
var user = { name: "Ali", age: 10 };
obj.getSetGen.call(user);

// using of getSetGen() will generate the following getId(), setId(),
// getLocation(), setLocation(), getAddr(), setAddr().
// If you created the following object
// var user = { name:”Ali”,age:10}
// When applying getSetGen() on user object (you can use call or
// bind or apply), it will result in creating the following : getName(),
// getAge(),setName(),setAge().
