function solve(inputArray) {
    let number = +inputArray[0];

    
    for (let i = 1; i < inputArray.length; i++) {
        let currentOperation = inputArray[i];

        switch (currentOperation) {
            case 'chop' : number /= 2; break;
            case 'dice' : number = Math.sqrt(number); break;
            case 'spice' : number += 1; break;
            case 'bake' : number *= 3; break;
            case 'fillet' : number = number - number / 5; break;
        }
        console.log(number);
    }
}
