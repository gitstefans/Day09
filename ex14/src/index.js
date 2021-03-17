// Only change code below this line
var evenNumbers = "";
var evenInverseNumbers = "";
function myForLoop1() {
  for (var i = 0; i < 10; i += 2) {
    //console.log(i);
    evenNumbers += i;
    if (i === 8) {
      break;
    }
    evenNumbers += ", ";
  }
  //console.log("even", evenNumbers);
  return evenNumbers;
}
function myForLoop2() {
  for (var i = 8; i >= 0; i -= 2) {
    evenInverseNumbers += i;
    if (i === 0) {
      break;
    }
    evenInverseNumbers += ", ";
  }
  //console.log("inverse", evenInverseNumbers);
  return evenInverseNumbers;
}
myForLoop1();
myForLoop2();
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2
};
