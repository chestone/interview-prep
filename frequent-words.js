// Get the k most frequent words in a string (delimited by spaces)

var text = "one two three one one five seven eleven two";

function frequency(str, most) {
  var strArr = str.split(' ');
  var heap = {};
  if (strArr.length === 0) {
    return '';
  }

  strArr.forEach(function(str) {
    if (heap[str]) {
      heap[str] += 1;
    } else {
      heap[str] = 1;
    }
  });

  return Object.keys(heap).reduce(function(frequencies, key) {
    if (heap[key] >= most) {
      frequencies.push(key);
    }
    return frequencies;
  }, []);
}

console.log(frequency(text, 2));
console.log(frequency(text, 3));
