function getGreatestCommonDivisior(firstNumber, secondNumber) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    let start = Math.min(firstNumber, secondNumber);

    for (let i = start; i >= 0; i--) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            console.log(i);
            return;
        }
    }
}
