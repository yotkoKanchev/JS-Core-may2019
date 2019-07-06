function solve(wagonCapacity, passengersArray) {
    wagonCapacity = Number(wagonCapacity);

    let passengersLeft = 0;
    let resultArray = [];

    for (let i = 0; i < passengersArray.length; i++) {
        passengersLeft += passengersArray[i];
        let passengersToAdd = Math.min(wagonCapacity, passengersLeft);
        resultArray.push(passengersToAdd);
        passengersLeft -= passengersToAdd;
    }

    console.log(resultArray);

    if (passengersLeft === 0) {
        console.log(`All passengers aboard`)
    } else {
        console.log(`Could not fit ${passengersLeft} passengers`)
    }
}

solve(6, [5, 15, 2]);