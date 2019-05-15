function calculateCircleArea(argument) {
    if (typeof (argument) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (argument)}.`)
    }else{
        console.log((Math.PI*Number(argument)*Number(argument)).toFixed(2));
    }
}

calculateCircleArea(5);