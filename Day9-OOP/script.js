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

  this.insert = function (num) {
    var appe = re.split(place, 0, num);
  };
  return re;
}

var r = new Range(2, 20, 3);

console.log(r);
