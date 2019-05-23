function  solve(array) {
    let resultArray = [];

    for (let num of array) {
        if(num < 0){
            resultArray.unshift(num);
        }else{
            resultArray.push(num);
        }
    }
    console.log(resultArray.join('\n'));
}
