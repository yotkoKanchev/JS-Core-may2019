function solve(array, cutSize) {
    let firstGiantArray = array.slice(0, array.length / 2);
    let secondGiantArray = array.slice(array.length / 2);

    let firstGiantProducts = [];
    let secondGiantProducts = [];

    for (let i = 0; i < firstGiantArray.length; i += Number(cutSize)) {
        let firstGiantCurrentSlice = firstGiantArray.slice(i, i + cutSize);
        firstGiantProducts.push(firstGiantCurrentSlice.reduce((a, b) => a * b, 1));
        let secondGiantCurrentSlice = secondGiantArray.slice(i, i + cutSize);
        secondGiantProducts.push(secondGiantCurrentSlice.reduce((a, b) => a * b, 1));
    }

    let firstGiant = firstGiantProducts.reduce((a, b) => a + b, 0);
    let secondGiant = secondGiantProducts.reduce((a, b) => a + b, 0);

    let minNumber = Math.min(...array);
    let maxNumber = Math.max(...array);

    let rounds = 1;

    while (firstGiant > maxNumber && secondGiant > maxNumber && minNumber !== 0) {
        firstGiant -= minNumber;
        secondGiant -= minNumber;
        rounds++;
    }

    if (firstGiant === secondGiant) {
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`)
    } else if (firstGiant > secondGiant) {
        console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`)
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`)
    }
}
