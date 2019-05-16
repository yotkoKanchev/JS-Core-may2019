function calculateMoney(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let moneyNeeded = weightInKg * price;

    let outputResult = `I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;

    console.log(outputResult);
}
