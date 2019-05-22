function solve() {
    let buttonElements = document.getElementsByTagName('button');
    let expressionTextAreaElement = document.getElementById('expressionOutput');
    let resultOutputAreaElement = document.getElementById('resultOutput');

    let firstOperand = '';
    let secondOperand = '';
    let operator;

    for (let button of Array.from(buttonElements)) {
        button.addEventListener('click', (t) => {
            resultOutputAreaElement.textContent = '';
            let currentButton = t.currentTarget;
            let currentValue = currentButton.textContent;

            switch (currentValue) {
                case '=':
                    if (firstOperand && secondOperand && operator !== undefined) {
                        switch (operator) {
                            case'+':
                                resultOutputAreaElement.textContent = (Number(firstOperand) + Number(secondOperand)).toString();
                                break;
                            case '-':
                                if (secondOperand[0] === '-') {
                                    resultOutputAreaElement.textContent = (Number(firstOperand) + Number(secondOperand)).toString()
                                } else {
                                    resultOutputAreaElement.textContent = (Number(firstOperand) - Number(secondOperand)).toString();
                                }
                                break;
                            case 'x':
                                resultOutputAreaElement.textContent = (Number(firstOperand) * Number(secondOperand)).toString();
                                break;
                            case '/':
                                resultOutputAreaElement.textContent = (firstOperand / secondOperand).toString();
                                break;
                        }
                    } else {
                        resultOutputAreaElement.textContent = 'NaN';
                    }
                    firstOperand = '';
                    secondOperand = '';
                    operator = '';
                    break;
                case 'C':
                    expressionTextAreaElement.textContent = '';
                    resultOutputAreaElement.textContent = '';
                    firstOperand = '';
                    secondOperand = '';
                    operator = undefined;
                    break;
                case '/':
                    if (firstOperand && !secondOperand && operator === undefined) {
                        operator = '/';
                        expressionTextAreaElement.textContent += ' / ';
                    }
                    break;
                case 'x':
                    if (firstOperand && !secondOperand && operator === undefined) {
                        operator = 'x';
                        expressionTextAreaElement.textContent += ' * ';
                    }
                    break;
                case '+':
                    if (firstOperand && !secondOperand && operator === undefined) {
                        operator = '+';
                        expressionTextAreaElement.textContent += ' + ';
                    }
                    break;
                case '-':
                    if (!firstOperand) {
                        firstOperand += '-';
                        expressionTextAreaElement.textContent += '-';
                    } else if (operator === undefined) {
                        operator = '-';
                        expressionTextAreaElement.textContent += ' - ';
                    } else if (!secondOperand) {
                        secondOperand += '-';
                        expressionTextAreaElement.textContent += '-';
                    }
                    break;
                case '.':
                    if (firstOperand && !secondOperand && !firstOperand.includes('.')) {
                        firstOperand += '.';
                        expressionTextAreaElement.textContent += '.';
                    } else if (secondOperand && !secondOperand.includes('.')) {
                        secondOperand += '.';
                        expressionTextAreaElement.textContent += '.';
                    }
                    break;
                default:
                    expressionTextAreaElement.textContent += currentValue.toString();
                    if (!operator || firstOperand[firstOperand.length - 1] === '.' || firstOperand === '-') {
                        firstOperand += currentValue.toString();
                    } else if (operator) {
                        secondOperand += currentValue.toString();
                    }
                    break;
            }
        });
    }
}