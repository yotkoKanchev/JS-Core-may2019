function solve(array) {
    let resultArray = [];

    for (let i = array.length; i >= 0; i--) {
        if (i % 2 === 1){
            resultArray.push(array[i] * 2);
        }
    }

    console.log(resultArray.join(' '));
}
