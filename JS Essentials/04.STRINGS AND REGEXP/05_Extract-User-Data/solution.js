function solve() {
    let inputTextAsArray = JSON.parse(document.querySelector('#arr').value);
    let resultElement = document.querySelector('#result');

    let regex = new RegExp('^[A-Z][a-z]* [A-Z][a-z]* \\+359([\\s|-])\\d\\1[0-9]{3}\\1[0-9]{3} [a-z0-9]+@[a-z]+\.[a-z]{2,3}$');

    for (let element of inputTextAsArray) {
        if (element.match(regex)) {
            let currentLine = regex.exec(element)[0];
            let namePattern = (/[A-Z][a-z]* [A-Z][a-z]*/g);
            let numberPattern = (/\+359([\s|-])\d\1[0-9]{3}\1[0-9]{3}/g);
            let emailPattern = (/[a-z0-9]+@[a-z]+.[a-z]{2,3}/g);

            let namePElement = document.createElement('p');
            let numberPElement = document.createElement('p');
            let emailPElement = document.createElement('p');
            namePElement.textContent = `Name: ${currentLine.match(namePattern)}`;
            numberPElement.textContent = `Phone Number: ${currentLine.match(numberPattern)}`;
            emailPElement.textContent = `Email: ${currentLine.match(emailPattern)}`;

            resultElement.appendChild(namePElement);
            resultElement.appendChild(numberPElement);
            resultElement.appendChild(emailPElement);
        } else {
            let invalidDataPElement = document.createElement('p');
            invalidDataPElement.textContent = 'Invalid data';
            resultElement.appendChild(invalidDataPElement);
        }
        let newLinePElement = document.createElement('p');
        newLinePElement.textContent = '- - -';
        resultElement.appendChild(newLinePElement);
    }
}