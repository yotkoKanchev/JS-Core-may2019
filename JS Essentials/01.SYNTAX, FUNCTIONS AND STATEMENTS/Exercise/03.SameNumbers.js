function solve(number){
    let numberAsString = number.toString();
    let digitsSum = 0;
    let areSame = true;

    for (let i = 0; i < numberAsString.length - 1 ; i++) {
        if (numberAsString[i] !== numberAsString[i+1]) {
            areSame = false;
        }
        digitsSum += +numberAsString[i];
    }

    digitsSum += +numberAsString[numberAsString.length - 1];

    console.log(areSame);
    console.log(digitsSum);
}
