function solve() {
    let inputText = document.getElementById('string').value;
    let resultElement = document.getElementById('result');
    let textAsArray = inputText.split(', ').filter(x => x !== '');

    debugger;

    let text = textAsArray[0];
    let informationToPrint = textAsArray[1];

    let namePattern = /(?<=\s)([A-Z][a-zA-Z]*)-([A-Z][a-zA-Z]*)(\.-([A-Z][a-zA-Z]*))?(?=\s)/gm;
    let airportPattern = /(?<=\s)([A-Z]{3})\/([A-Z]{3})(?=\s)/gm;
    let flightNumberPattern = /(?<=\s)([A-Z]{1,3}\d{1,5})(?=\s)/gm;
    let companyPattern = /(?<=-\s)([A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*)(?=\s)/gm;

    let name = text.match(namePattern)[0].replace(/-/g, ' ');
    let airportsAsArray = text.match(airportPattern)[0].split('/').filter(x => x !== '');
    let departureAirport = airportsAsArray[0];
    let destinationAirport = airportsAsArray[1];
    let flightNumber = text.match(flightNumberPattern)[0];
    let companyName = text.match(companyPattern)[0].replace('*', ' ');

    if (name && airportsAsArray && flightNumber && companyName){
        let result = '';

        switch (informationToPrint) {
            case 'all':
                result = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${departureAirport} to ${destinationAirport}. Have a nice flight with ${companyName}.`;
                break;
            case 'name':
                result = `Mr/Ms, ${name}, have a nice flight!`;
                break;
            case 'flight':
                result = `Your flight number ${flightNumber} is from ${departureAirport} to ${destinationAirport}.`;
                break;
            case 'company':
                result = `Have a nice flight with ${companyName}.`;
                break;
        }

        let newSpanElement = document.createElement('span');
        newSpanElement.textContent = result;
        resultElement.appendChild(newSpanElement);
    }
}