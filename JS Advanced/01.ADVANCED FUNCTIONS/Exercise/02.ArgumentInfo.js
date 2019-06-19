function result() {

    let countingObj = {};

    for (let element of arguments) {
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if (!countingObj[type]) {
            countingObj[type] = 0;
        }

        countingObj[type]++;
    }

    Object
        .entries(countingObj)
        .sort((a, b) => b[1] - a[1])
        .forEach((element) => console.log(`${element[0]} = ${element[1]}`));
}

