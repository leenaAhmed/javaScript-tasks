function Shape(side) {
  // abstact
  if (this.constructor == Shape) {
    throw "you can't instance ";
  }
  this.side = side;
}

function Rectangle(side, height) {
  //inhetance
  Shape.call(this, side);

  this.height = height ? height : 1;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.calculateArea = function () {
  return this.side * this.height;
};

var rect = new Rectangle(5, 10);

function Square(side) {
  Rectangle.call(this, side, side);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
var squ = new Square(5);
