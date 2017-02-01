var oldReduce = Array.prototype.reduce;
Array.prototype.reduce = function(cb, initialVal) {
    var prevVal = initialVal;
    for(var i = 0; i < this.length; i++) {
        prevVal = cb(prevVal, this[i], i, this);
    }
    return prevVal;
}

var testArray = [1, 2, 3, 4];
var testVal = testArray.reduce(function(a, b) {
    return a + b;
}, 0);

var testOldVal = oldReduce.call(testArray, (function(a, b) {
    return a + b;
}), 0);

console.log(testVal);
console.log(testOldVal);
