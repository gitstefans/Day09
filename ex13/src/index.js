// Write code below this line
var fiveNumbers = "";
function inverseWhile() {
  var i = 5;
  while (i >= -1) {
    fiveNumbers += i;
    i--;
    if (i === -1) {
      break;
    }
    fiveNumbers += ",";
  }
  return fiveNumbers;
}
inverseWhile();
console.log(fiveNumbers);
// Write code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
