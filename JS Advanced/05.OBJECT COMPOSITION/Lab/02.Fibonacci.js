function getFibonaci () {
    let fibonachi = 0;

    let prevNum = 0;
    let nextNum = 1;

    return function () {
        fibonachi = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = fibonachi;
        return prevNum;
    }
}

let fib = getFibonaci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());