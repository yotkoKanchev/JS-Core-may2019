function solve() {
    let word = document.querySelector('#word').value;
    let textAsArray = JSON.parse(document.querySelector('#text').value);
    let resultElement = document.querySelector('#result');

    let wordsToReplace = textAsArray[0].split(' ').filter(x=> x !== '')[2];
    for (let element of textAsArray) {
        element = element.replace(new RegExp(wordsToReplace, 'gi'), word);
        let newPElement = document.createElement('p');
        newPElement.textContent = element;
        resultElement.appendChild(newPElement);
    }
}