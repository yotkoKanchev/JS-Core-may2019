function solve(matrix, commandInput) {
    let commandArray = commandInput.split(' ').filter(x=>x !== '');
    let command = commandArray[0];
    let header = commandArray[1];
    let value;

    if (commandArray.length === 3){
        value = commandArray[2];
    }

    let columnIndex = matrix[0].indexOf(header);

    switch (command) {
        case 'hide' :
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].splice(columnIndex,1);
            }

            for (let row of matrix) {
                console.log(row.join(' | '));
            }

            break;
        case 'sort' :
            let firstRow = matrix.shift();

            matrix.sort(function (a, b) {
                if (a[columnIndex] === b[columnIndex]) {
                    return 0;
                }
                else {
                    return (a[columnIndex] < b[columnIndex]) ? -1 : 1;
                }
            });

            matrix.unshift(firstRow);

            for (let row of matrix) {
                console.log(row.join(' | '));
            }
            break;
        case 'filter' :
            let headerRow = matrix.shift();
            for (let i = 0; i < matrix.length; i++) {
                if (matrix[i][columnIndex] !== value){
                    matrix.splice(i,1);
                    i--;
                }
            }

            matrix.unshift(headerRow);
            for (let row of matrix) {
                console.log(row.join(' | '));
            }
            break;
    }
}
