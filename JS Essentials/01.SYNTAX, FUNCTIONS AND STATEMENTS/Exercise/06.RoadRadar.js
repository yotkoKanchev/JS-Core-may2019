function solve(inputArray) {
    let speed = +inputArray[0];
    let area = inputArray[1];
    let speedLimit = 0;

    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    let speedDifference = speed - speedLimit;
    let result = '';

    if (speedDifference > 0 && speedDifference <= 20) {
        result = 'speeding';
    }
    else if (speedDifference > 20 && speedDifference <= 40) {
        result = 'excessive speeding';
    }
    else if (speedDifference > 40) {
        result = 'reckless driving';
    }

    if (result) {
        console.log(result)
    }
}
