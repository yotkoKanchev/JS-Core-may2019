function calculate(firstOperand, secondOperand, operator) {
    let calc = function (firstOperand, secondOperand, operator) {
        return operator(firstOperand, secondOperand);
    }

    let add = function (firstOperand, secondOperand) {
        return firstOperand + secondOperand;
    }

    let subtract = function (firstOperand, secondOperand) {
        return firstOperand - secondOperand;
    }

    let multiply = function (firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }

    let divide = function (firstOperand, secondOperand) {
        return firstOperand / secondOperand;
    }

    let result;

    switch (operator) {
        case '+': result = calc(firstOperand, secondOperand, add); break;
        case '-': result = calc(firstOperand, secondOperand, subtract); break;
        case '*': result = calc(firstOperand, secondOperand, multiply); break;
        case '/': result = calc(firstOperand, secondOperand, divide); break;
    }

    console.log(result);
}

calculate(2, 4, '+');