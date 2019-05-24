function solve(array) {

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(' ').map(Number);
        leftDiagonalSum += array[i][i];
        rightDiagonalSum += array[i][array.length - 1 - i];
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (i !== j && i + j !== array.length - 1) {
                    array[i][j] = leftDiagonalSum;
                }
            }
        }
    }
    array.forEach(r => console.log(r.join(' ')));
}
