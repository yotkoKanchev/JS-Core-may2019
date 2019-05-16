function solve(stringsArray){
    let resultObject = {};

    for (let i = 0; i < stringsArray.length - 1; i+=2) {
        resultObject[stringsArray[i]] = +stringsArray[i+1];
    }

    console.log(resultObject);
}
