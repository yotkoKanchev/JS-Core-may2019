function solve(matrix) {
    let areNotEqual = false;
    let rowSum = sumElements(matrix[0]);

    for (let i = 1; i <= matrix.length - 1; i++) {
        if (rowSum !== sumElements(matrix[i])) {
            areNotEqual = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentSum += matrix[j][i];
        }
        if(rowSum !== currentSum ){
            areNotEqual = true;
            break;
        }
    }

    if(areNotEqual === true){
        console.log('false')
    }else{
        console.log('true')
    }

    function sumElements(array) {
        return array.reduce((a, b) => a + b, 0);
    }
}
