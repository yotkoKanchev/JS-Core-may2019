function solve(input) {
    let totalIncome = 0;

    for (const str of input) {
        let orderAsArray = str.split(', ');
        let moneyInserted = +orderAsArray[0];
        let drinkType = orderAsArray[1];
        let sugarQuantity = +orderAsArray[orderAsArray.length - 1];
        let price = 0;

        if (drinkType === 'coffee') {
            let coffeeType = orderAsArray[2];

            if (coffeeType === 'caffeine') {
                price = 0.8;
            } else {
                price = 0.9;
            }

            if (orderAsArray.length > 4) {
                price = Math.round(price) / 10 + price;
            }
        } else {
            price = 0.8;

            if (orderAsArray.length > 3) {
                price = Math.round(price) / 10 + price;
            }
        }

        if (sugarQuantity > 0) {
            price += 0.1;
        }
        
        if (moneyInserted >= price) {
            console.log(`You ordered ${drinkType}. Price: $${price.toFixed(2)} Change: $${(moneyInserted-price).toFixed(2)}`);
            totalIncome+=price;
        } else{
            console.log(`Not enough money for ${drinkType}. Need $${(price - moneyInserted).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}
