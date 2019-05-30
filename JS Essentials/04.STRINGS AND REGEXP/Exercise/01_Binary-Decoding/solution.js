function solve() {
    let inputText = document.getElementById('input').value;
    let resultElement = document.getElementById('resultOutput');

    let digitsSum = inputText.split('').filter(x => x === '1').length;
    let symbolsToRemoveCount = 0;

    while (digitsSum > 9) {
        symbolsToRemoveCount = 0;

        for (let digit of digitsSum.toString()) {
            symbolsToRemoveCount += Number(digit);
        }
        digitsSum = symbolsToRemoveCount;
    }

    let workString = inputText.substring(symbolsToRemoveCount, inputText.length - symbolsToRemoveCount);

    let result = '';

    for (let i = 0; i < workString.length; i += 8) {
        let currentBinaryCode = workString.substr(i, 8);
        let currentLetter = parseInt(currentBinaryCode, 2);
        let letter = String.fromCharCode(currentLetter);
        if ((/[a-zA-Z ]+/).test(letter)) {
            result += letter;
        }
    }

    resultElement.textContent = result;
}