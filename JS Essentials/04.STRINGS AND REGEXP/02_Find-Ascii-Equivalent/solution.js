function solve() {
    let inputElement = document.getElementById('text');
    let resultElement = document.getElementById('result');

    let inputArray = inputElement.value.split(' ').filter(w => w !== '');
    let word = '';

    for (let element of inputArray) {
        if (isNaN(element)){
            let lettersInAsci = [];
            for (let letter of element) {
                lettersInAsci.push(letter.charCodeAt(0));
            }
            let newP = document.createElement('p');
            newP.textContent = lettersInAsci.join(' ');
            resultElement.appendChild(newP);


        } else{
            word += String.fromCharCode(Number(element));
        }
    }
    let newP = document.createElement('p');
    newP.textContent = word;
    resultElement.appendChild(newP);
}