function solve() {
    let buttonElement = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementsByTagName('input')[0];
    let listElements = document.getElementsByTagName('li');

    buttonElement.addEventListener('click', () => {
        let insertedText = inputElement.value;
        let name = insertedText[0].toLocaleUpperCase() + insertedText.slice(1).toLowerCase();
        let firstLetter = name[0];

        let index = firstLetter.charCodeAt(0) - 65;
        if (listElements[index].textContent){
            listElements[index].textContent += ', ' + name;
        }         else{
            listElements[index].textContent = name;
        }
        inputElement.value = '';
    })
}