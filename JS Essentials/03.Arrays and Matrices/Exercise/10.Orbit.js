function solve(inputArray) {
    let rows = Number(inputArray[0]);
    let cols = Number(inputArray[1]);
    let x = Number(inputArray[2]);
    let y = Number(inputArray[3]);

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}
