function sumNumbers(startNum, endNum){
    let sum = 0;

    for (let i = +startNum; i <= +endNum; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNumbers('1', '5');