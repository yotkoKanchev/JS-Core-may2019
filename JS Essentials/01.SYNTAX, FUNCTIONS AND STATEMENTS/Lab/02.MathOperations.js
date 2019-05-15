function calculate(firstOperand, secondOperand, operator) {
    let result = 0;
    switch (operator) {
        case '+': result = firstOperand + secondOperand; break;
        case '-': result = firstOperand - secondOperand; break;
        case '*': result = firstOperand * secondOperand; break;
        case '/': result = firstOperand / secondOperand; break;
        case '%': result = firstOperand % secondOperand; break;
        case '**': result = firstOperand ** secondOperand; break;
    }

    console.log(result);
}

calculate('2','3','**');
