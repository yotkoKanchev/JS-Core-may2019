function solve(array) {
    let number = 1;
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'add') {
            resultArray.push();
        } else if (array[i] === 'remove') {
            resultArray.pop();
        }
        number++;
    }
    if (resultArray.length === 0) {
        console.log('Empty')
    } else {
        console.log(resultArray.join('\n'));
    }
}
