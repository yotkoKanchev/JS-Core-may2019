function deleteByEmail() {
    let inputElement = document.getElementsByTagName('input')[0];
    let searchedEmail = inputElement.value;
    let resultDivElement = document.getElementById('result');

    let theadThArray = document.getElementsByTagName('thead')[0].getElementsByTagName('th');
    let columnIndex;

    for (const thElement of Array.from(theadThArray)) {
        if (thElement.textContent === 'Email') {
            columnIndex = Array.from(theadThArray).indexOf(thElement);
        }
    }

    let tbodyElement = document.getElementsByTagName('tbody')[0];
    let trElements = tbodyElement.getElementsByTagName('tr');

    let isFound = false;

    for (const trElement of trElements) {
        if (trElement.getElementsByTagName('td')[columnIndex].textContent === searchedEmail) {
            tbodyElement.removeChild(trElement);
            isFound = true;
            break;
        }
    }

    resultDivElement.textContent = isFound ? "Deleted." : "Not found.";
}