var input = process.argv[2];
function reverse(original) {
  var newArray = original.split("").reverse().join('');
  return newArray;
}

 console.log(reverse(input));



