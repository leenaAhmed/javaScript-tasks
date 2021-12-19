function Shape(side) {
  // abstact
  if (this.constructor == Shape) {
    throw "you can't instance ";
  }

  this.side = side;
}
var count = 0;

function Rectangle(side, height) {
  //inhetance
  if (this.constructor == Rectangle && Rectangle.count == 1) {
    throw "not allowed  ";
  }
  if (this.constructor == Rectangle) Rectangle.count++;
  this.height = height ? height : 1;
  Shape.call(this, side);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.calculateArea = function () {
  return this.side * this.height;
};

var rect = new Rectangle(5, 10);

console.log(rect.calculateArea());

function Square(side) {
  if (this.constructor == Rectangle && Rectangle.count == 1) {
    throw "not allowed  ";
  }
  if (this.constructor == Rectangle) Rectangle.count++;
  Rectangle.call(this, side, side);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var squ = new Square(5);
console.log(squ.calculateArea());
