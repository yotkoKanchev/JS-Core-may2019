function solve(n, k) {
    n = Number(n);
    k = Number(k);

    let resultArray = [];
    resultArray.push(1);
    for (let i = 1; i < n; i++) {
        resultArray.push(0);
    }

    for (let i = 1; i < n; i++) {
        let currentSum = 0;
        let start = i - k >= 0 ? i - k : 0;

        for (let j = start; j < resultArray.length; j++) {
            currentSum += resultArray[j];
        }

        resultArray[i] = currentSum;
    }
    console.log(resultArray.join(' '));
}