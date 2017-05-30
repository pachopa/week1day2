var myArgs = process.argv[2];
var value = "Rolled myArgs dice: ";

for(var i = 0; i < myArgs; i++) {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  if(i == myArgs -1) {
    value += randomNumber;
  } else {
  value += randomNumber + ", ";
  }
}
console.log(value);
