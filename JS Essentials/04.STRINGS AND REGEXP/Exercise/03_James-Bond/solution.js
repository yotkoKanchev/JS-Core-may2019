function solve() {
    let inputTextAsArray = JSON.parse(document.getElementById('array').value);
    let resultElement = document.getElementById('result');

    let specialKey = inputTextAsArray[0];
    let pattern = new RegExp(`(?:^|\\s)(?:${specialKey})\\s+([A-Z!%$#]{8,})(?:\.|,|\\s|$)`, 'gi');

    for (let i = 1; i < inputTextAsArray.length; i++) {
        let currentText = inputTextAsArray[i];

        let matches = pattern.exec(currentText);

        while (matches !== null) {
            if (matches[1].toUpperCase() === matches[1]) {
                let matchToReplace = replaceSymbols(matches[1]);
                currentText = currentText.replace(matches[1], matchToReplace);
            }

            matches = pattern.exec(currentText);
        }

        let newPElement = document.createElement('p');
        newPElement.textContent = currentText;
        resultElement.appendChild(newPElement);
    }

    function replaceSymbols(word) {

        if (word.includes('!')) {
            word = word.replace(/!/g, '1')
        }

        if (word.includes('%')) {
            word = word.replace(/%/g, '2')
        }

        if (word.includes('#')) {
            word = word.replace(/#/g, '3')
        }

        if (word.includes('$')) {
            word = word.replace(/\$/g, '4')
        }

        return word.toLowerCase();
    }
}