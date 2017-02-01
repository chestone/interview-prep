function allPerms(input) {
  var combinations = [];
  var usedChars = [];

  function perm(arr) {
    var char;
    for (var i = 0; i < input.length; i++) {
      char = arr.splice(i, 1)[0];
      usedChars.push(char);
      if (arr.length === 0) {
        combinations.push(usedChars.slice());
      }
      perm(arr);
      input.splice(i, 0, char);
      usedChars.pop();
    }
  }
  perm(input);
  return combinations;
}

console.log(allPerms(['a', 'b', 'c']));
