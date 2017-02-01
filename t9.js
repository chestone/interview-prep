var numToChar = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'r', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

function allPerms(input) {
  var combinations = [];
  var arrInput = String(input).split('');
  var startPairs = arrInput.map(function(num) {
    return numToChar[num - 2];
  });

  function perm(prefix, pairs) {
    if (prefix.length === String(input).length) {
      return combinations.push(prefix);
    }

    var current = pairs[0];
    var remains = pairs.slice(1);
    for (var i = 0; i < current.length; i++) {
      perm(prefix + current[i], remains);
    }
  }

  perm('', startPairs);
  return combinations;
}

// (allPerms(2273));
console.log(allPerms(2273));
console.log(allPerms(2273).length);
