function solve(array) {
    let resultArray = [];

    let maxElement = array[0];
    resultArray.push(maxElement);

    for (let i = 1; i <= array.length; i++) {
        if (array[i] >= maxElement) {
            resultArray.push(array[i]);
            maxElement = array[i];
        }
    }

    console.log(resultArray.join('\n'));
}
