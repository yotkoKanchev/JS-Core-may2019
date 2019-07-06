function solve(days) {
    days = Number(days);

    let coffeeCups = days * 3;
    let colaCups = days * 2;
    let teaCups = days * 3;
    let energyDrinks = 0;

    if (days > 4) {
        energyDrinks = parseInt(days / 5) * 3;
    }

    if (days > 8) {
        colaCups += parseInt(days / 9) * 4;
        energyDrinks += parseInt(days / 9) * 2;
    }

    let totalCaffeine = ((coffeeCups * 150) / 100 * 40)
        + ((colaCups * 250) / 100 * 8)
        + ((teaCups * 350) / 100 * 20)
        + ((energyDrinks * 500) / 100 * 30);

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

solve(8);