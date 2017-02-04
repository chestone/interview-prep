// Remove duplicate words from a string while keeping words in the original order
var text = "one two three one one five seven eleven two";

function dedupe(str) {
    var strArr = str.split(' ');
    var finalArr = [];
    var queue = {};
    var i = 0;
    for (i; i < strArr.length; i++) {
      if (queue[strArr[i]]) {
        queue[strArr[i]] += 1;
      } else {
        finalArr.push(strArr[i]);
        queue[strArr[i]] = 1;
      }
    }
    return Array.prototype.join.call(finalArr, ' ');
}
console.log('dedupe orig\n', text);
console.log('deduped string\n', dedupe(text));
