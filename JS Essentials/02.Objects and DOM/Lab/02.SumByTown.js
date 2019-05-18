function solve(inputArray){
    let townsObject = {};

    for (let i = 0; i < inputArray.length; i+=2) {
        let town = inputArray[i];
        let income = Number(inputArray[i+1]);

        if (!townsObject[town]) {
            townsObject[town] = 0;
        }

        townsObject[town] += income;

    }

    console.log(JSON.stringify(townsObject));
}
