var arr1 = [1, 2, 3, 4, 5];
var arr2 = [5];
var arr3 = [10, 6, 2, 8];

function findSmallest(arr) {
    return arr.reduce(function(a, b) {
        return (a < b ? a : b);
    });
}

console.log(findSmallest(arr1));
console.log(findSmallest(arr2));
console.log(findSmallest(arr3));
