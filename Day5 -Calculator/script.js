function EnterNumber(obj, evt) {
  var pushed = evt.target.value;
  document.getElementById("Answer").value += pushed;
}
function EnterOperator(obj, evt) {
  var pushed = evt.target.value;
  document.getElementById("Answer").value += pushed;
}
function EnterEqual() {
  var answer = document.getElementById("Answer").value;
  var x = eval(answer);
  document.getElementById("Answer").value = x;
}

function EnterClear() {
  document.getElementById("Answer").value = " ";
}
