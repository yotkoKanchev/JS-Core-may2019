function solve() {
    let messageDelimiter = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let resultSpanElement = document.getElementById('result');

    let messageStartIndex = text.indexOf(messageDelimiter) + messageDelimiter.length;
    let messageEndIndex = text.lastIndexOf(messageDelimiter);

    let message = text.substring(messageStartIndex, messageEndIndex);

    let eastCoordinates;
    let northCoordinates;

    let coordinatesPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;

    let matches = coordinatesPattern.exec(text);

    while (matches !== null) {
        let direction = matches[1];
        let degreesFullPart = matches[2];
        let degreesDecimalPart = matches[3];

        if (direction.toLowerCase() === 'east') {
            eastCoordinates = `${degreesFullPart}.${degreesDecimalPart} E`
        } else {
            northCoordinates = `${degreesFullPart}.${degreesDecimalPart} N`
        }

        matches = coordinatesPattern.exec(text);
    }

    let firstPElement = document.createElement('p');
    let secondPElement = document.createElement('p');
    let thirdPElement = document.createElement('p');

    firstPElement.textContent = northCoordinates;
    secondPElement.textContent = eastCoordinates;
    thirdPElement.textContent = `Message: ${message}`;

    resultSpanElement.appendChild(firstPElement);
    resultSpanElement.appendChild(secondPElement);
    resultSpanElement.appendChild(thirdPElement);
}