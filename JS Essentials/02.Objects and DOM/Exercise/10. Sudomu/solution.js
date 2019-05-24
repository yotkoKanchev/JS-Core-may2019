function solve() {
    let buttonElements = document.getElementsByTagName('button');
    let checkButton = buttonElements[0];
    let clearButton = buttonElements[1];
    let inputElements = document.getElementsByTagName('input');
    let pCheckElement = document.getElementById('check').getElementsByTagName('p')[0];
    let tableElement = document.getElementsByTagName('table')[0];

    clearButton.addEventListener('click', clearSudoco);
    checkButton.addEventListener('click', checkSudoco);

    function checkSudoco() {
        let matrix = [];
        let counter = 0;
        let isValid = true;

        for (let row = 0; row < 3; row++) {
            matrix[row] = [];
            for (let col = 0; col < 3; col++) {
                matrix[row][col] = Number(inputElements[counter++].value);
            }
        }

        for (let i = 1; i < matrix.length - 1; i++) {
            for (let j = 1; j < matrix[i].length - 1; j++) {
                if ((matrix[i][j] === matrix[i][j - 1] || matrix[i][j] === matrix[i][j + 1])
                    || (matrix[i][j] === matrix[i - 1][j] || matrix[i][j] === matrix[i + 1][j])) {
                    isValid = false;
                    break;
                }

                if ((matrix[i].reduce((a, b) => a + b, 0) !== (matrix[i + 1].reduce((a, b) => a + b, 0))
                    || (matrix[i].reduce((a, b) => a + b, 0) !== (matrix[i - 1].reduce((a, b) => a + b, 0))
                    || (matrix[i][j] + matrix[i - 1][j] + matrix[i + 1][j]) !== (matrix[i][j + 1] + matrix[i - 1][j + 1] + matrix[i + 1][j + 1])
                    || (matrix[i][j] + matrix[i - 1][j] + matrix[i + 1][j]) !== (matrix[i][j - 1] + matrix[i - 1][j - 1] + matrix[i + 1][j - 1])))) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            pCheckElement.textContent = "You solve it! Congratulations!";
            pCheckElement.style.color = "green";
            tableElement.style.border = "2px solid green";
        } else {
            pCheckElement.textContent = "NOP! You are not done yet...";
            pCheckElement.style.color = "red";
            tableElement.style.border = "2px solid red";
        }
    }

    function clearSudoco() {
        for (let element of Array.from(inputElements)) {
            element.value = '';
        }

        document.getElementsByTagName('table')[0].style.border = "none";
        document.getElementsByTagName('p')[0].textContent = '';
    }
}

