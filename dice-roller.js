var myArgs = process.argv[2];
var value = "Rolled myArgs dice: ";

for(var i = 0; i < myArgs; i++) {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  value += randomNumber + ", "
}
console.log(value);




// Write a program that takes a single parameter from the command line,
// a number, and rolls that many six-sided dice. For example,
// the following is a sample output of the program.

// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5
// To generate a random number, you'll have to use the built-in Math.random.


// When you've finished, don't forgot to save your work as a gist and to submit it.