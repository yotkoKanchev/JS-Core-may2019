function solve(inputArray) {
    let totalMoney = 0;

    for (let row of inputArray) {
        let currentRowAsArray = row.split(', ');
        let price = 0.80;

        let insertedCoins = Number(currentRowAsArray[0]);
        let drink = currentRowAsArray[1];

        if (drink === 'coffee') {
            let coffeeType = currentRowAsArray[2];

            if (coffeeType === 'decaf') {
                price += 0.1;
            }

            if (currentRowAsArray[3] === 'milk') {
                let milkPrice = Number((price * 0.1).toFixed(1));
                price += milkPrice;
            }
        } else {
            if (currentRowAsArray[2] === 'milk') {
                let milkPrice = Number((price * 0.1).toFixed(1));
                price += milkPrice;
            }
        }

        let sugarQuantity = Number(currentRowAsArray[currentRowAsArray.length - 1]);

        if (sugarQuantity > 0) {
            price += 0.1;
        }

        let change = Math.abs(price - insertedCoins);

        if (insertedCoins >= price) {
            totalMoney += price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
        } else {
            console.log(`Not enough money for ${drink}. Need ${change.toFixed(2)}$ more.`)
        }
    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`)
}
