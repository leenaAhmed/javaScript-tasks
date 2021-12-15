function Range(start, end, step = 1) {
  this.start = start;
  this.end = end;
  this.step = step;

  var list = [start, end, step].every(Number.isFinite);
  var length = Math.floor(Math.abs((end - start) / step)) + 1;

  if (!list) {
    throw new TypeError("range() expects only  numbers as arguments.");
  }

  if (step <= 0) {
    throw new Error("step must be a number greater than 0.");
  }

  if (start > end) {
    step = -step;
  }
  var re = Array.from(Array(length), (x, index) => start + index * step);
  this.append = function (step) {};
  // this.insert = function (num) {
  //   var appe = re.split(place, 0, num);
  // };
  return re;
}
//  2 + (0 * 3) = 2 , 2+(1*3)=5 , 2+(2*3) = 7 , 2+(3*3) = 11 , 2+(4*3) =14 ...
var r = new Range(2, 20, 3);

console.log(r);
// -------------------------------- Rectangle  ------------------------------//
var count = 0;
function Rectangle(width, height) {
  if (this.constructor == Rectangle) {
    count++;
    this.width = width;
    this.height = height;
  }
  Rectangle.getCount = function () {
    return count;
  };
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.toString = function () {
  return `the width ${this.width} and height ${
    this.height
  } perimeter = ${this.perimeter()} and Aree = ${this.area()}`;
};
// Rectangle.count;
// Rectangle.getCount = function () {
//   if (this.constructor == Rectangle) {
//     count++;
//   }
//   return this.count;
// };

var rect = new Rectangle(15, 10);
var rect2 = new Rectangle(15, 10);
var rect3 = new Rectangle(15, 10);

console.log(count);
