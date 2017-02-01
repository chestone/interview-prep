var notPal = 'This is my String';
var pal = 'A Santa at Nasa';

function trim(str) {
    return str.replace(/\s/g, '');
}

function checkPal(str) {
    var reversed = str.split('').reverse().join('').toLowerCase();
    var isPalindrome = false;
    if (trim(reversed) === trim(str.toLowerCase())) {
        isPalindrome = true;
    }

    return isPalindrome;
}

console.log('Is this a palindrome? ', checkPal(notPal));
console.log('Is this a palindrome? ', checkPal(pal));
