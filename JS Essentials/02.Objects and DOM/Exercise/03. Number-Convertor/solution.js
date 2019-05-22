function solve() {
    let toElements = document.getElementById('selectMenuTo');

    let binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.text = 'Binary';

    let hexadecimalOpitonElement = document.createElement('option');
    hexadecimalOpitonElement.value = 'hexadecimal';
    hexadecimalOpitonElement.text = 'Hexadecimal';

    toElements.appendChild(binaryOptionElement);
    toElements.appendChild(hexadecimalOpitonElement);

    let buttonElement = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementById('input');
    let resultElement = document.getElementById('result');

    buttonElement.addEventListener('click', ()=>{
        let toTypeElement = document.getElementById('selectMenuTo');

        let inputNumberValue = Number(inputElement.value);
        let toTypeValue = toTypeElement.value;
        let resultValue = 0;

        if (toTypeValue === 'hexadecimal') {
            resultValue = (+inputNumberValue).toString(16).toUpperCase();
        }else if(toTypeValue === 'binary'){
            resultValue = (+inputNumberValue).toString(2);
        }

        resultElement.value = resultValue;
    });
}