var allValues = [2, 3, 4, 6, 7];
var totalScore = 10;

function printScores(values, score, possible) {
  var sum = possible.reduce(function(a, b) { return a + parseInt(b) }, 0);
  console.log('sum', sum);

  if (sum === score) {
    return possible;
  } else if (sum > score) {
    return false;
  }

  for (var i = 0; i < values.length; i++) {
    var curr = values.splice(i, 1);
    possible.push(curr);
    printScores(values, score, possible);
  }
}

console.log(printScores(allValues, totalScore, []));
