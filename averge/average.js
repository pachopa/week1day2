function average(list) {
  var sum = 0;
  var num = list;
  for (var i = 0; i < num.length; i++) {
    sum += num[i];
  }

  return sum / list.length;
}

console.log(average([3, 5, 7]));
