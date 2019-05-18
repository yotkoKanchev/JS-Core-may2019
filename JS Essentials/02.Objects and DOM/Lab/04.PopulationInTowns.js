function solve(inputArray) {
    let townsObject = {};

    for (const kvp of inputArray) {
        let cityTokens = kvp.split(' <-> ');
        let city = cityTokens[0];
        let population = Number(cityTokens[1]);

        if (!townsObject[city]) {
            townsObject[city] = 0;
        }

        townsObject[city] += population;
    }

    for (const propName in townsObject) {
        console.log(`${propName} : ${townsObject[propName]}`);
    }
}
