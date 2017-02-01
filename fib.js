function fibonacci(num, memo) {
    var memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) {
        return 1;
    }
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
