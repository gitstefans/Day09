// Only change code below this line

function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    //console.log(i);
    myNumbers += i;
    if (i === 9) {
      break;
    }
    myNumbers += ", ";
    i++;
  } while (i < 10);
  return myNumbers;
}
myDoWhile();
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;
