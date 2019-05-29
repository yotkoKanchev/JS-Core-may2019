function solve() {
    let textAreaElement = document.getElementById('text');
    let numberElement = document.getElementById('number');
    let resultElemet = document.getElementById('result');

    let inputText = textAreaElement.value;
    let number = parseInt(numberElement.value);

    if (inputText.length >= number) {
        let resultText = [];

        for (let i = 0; i < inputText.length; i += number) {
            resultText.push(inputText.substr(i, number));
        }

        if (inputText.length % number !== 0) {
            let additionalLettersCount = number - inputText.length % number;
            resultText[resultText.length - 1] += inputText.substr(0, additionalLettersCount);
        }

        resultElemet.textContent = resultText.join(' ');
    } else {
        let resultText = inputText;
        number -= inputText.length;
        while (number > 0) {
            resultText += inputText.substr(0, number);
            number -= inputText.length;
        }

        resultElemet.textContent = resultText;
    }
}