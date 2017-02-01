var arr = [8, 3, 2, 8, 5, 3];

function partition(items, left, right) {
    var pivot = arr[Math.round(left + right /2)];
    var first = left;
    var last = right; 
    while(first <= last) {
        while(arr[first] < pivot) {
            first++;
        }
        while(arr[last] < pivot) {
            last--;
        }

        if (arr[first] > arr[last]) {
            swap(arr, first, last);
            first++;
            last--;
        }
    }
    return first;
}

function swap(items, firstIdx, lastIdx) {
    var temp = items[firstIdx];
    items[first] = items[lastIdx];
    items[last] = temp;
}

function quickSort(arr, first, last) {
    if (arr.length === 1) {
        return arr;
    }

    var idx = partition(arr, first, last);

    if (first > idx) {
        quickSort(arr, first, idx - 1);
    }

    if (idx < last) {
        quickSort(arr, idx, last - 1);
    }
    return arr;
}
console.log(quickSort(arr, 0, arr.length - 1));
