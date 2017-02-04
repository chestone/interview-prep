//Print out all the ways you can reach the score of n with possible points S = [2,3,4,6,7];
var allValues = [1, 2, 3, 4, 6, 7, 10];
var totalScore = 10;

// function totals(values) {
//   var temp = [[]];
//   for (var i = 0; i < values.length; i++) {
//     for(var j = 0, len = temp.length; j < len; j++) {
//       temp.push(temp[j].concat(values[i]));
//     }
//   }
//   return temp;
// }

function totals(values) {
  var combinations = [];
  function combinate(curr, remains) {
    if (!curr && !remains) {
      return false;
    }
    if (remains.length === 0) {
      combinations.push(curr);
    } else {
      combinate(curr.concat(remains[0]), remains.slice(1));
      combinate(curr, remains.slice(1));
    }
  }
  combinate([], values);
  return combinations;
}

function sum(values) {
  return values.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

function printScores(values, totalScore) {
  var combinations = totals(values.sort(function(a, b) { return a - b; }));
  return combinations.reduce(function(vals, combination) {
    if (sum(combination) === totalScore) {
      vals.push(combination);
    }
    return vals;
  }, []);
};

console.log(printScores(allValues, totalScore));
