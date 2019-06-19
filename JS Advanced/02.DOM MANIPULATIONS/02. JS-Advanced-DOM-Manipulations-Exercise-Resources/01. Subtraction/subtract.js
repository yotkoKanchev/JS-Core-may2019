function subtract() {
    let firstInputValue = document.getElementById('firstNumber').value;
    console.log(firstInputValue);
    let secondInputValue = document.getElementById('secondNumber').value;
    console.log(secondInputValue);

    let resultDivElement = document.getElementById('result');

    resultDivElement.textContent = Number(firstInputValue) - Number(secondInputValue);
}