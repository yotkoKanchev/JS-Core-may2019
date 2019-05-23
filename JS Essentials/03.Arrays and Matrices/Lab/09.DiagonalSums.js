function solve(matrix) {
    let leftDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
    }

    let rightDiagonalSum = 0;
    let counter = 0;
    for (let i = matrix.length - 1; i >= 0; i--) {
        rightDiagonalSum += matrix[i][counter];
        counter++;
    }

    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}

