function solve(firstBool, secondBool, thirdBool, status) {
    let money = 0;

    if (firstBool) {
        money += 170;
    }

    if (secondBool) {
        money += 180;
    }

    if (thirdBool) {
        money += 190;
    }

    if (firstBool && secondBool) {
        money -= 180 * 0.1;
    }

    if (firstBool && secondBool && thirdBool) {
        money *= 0.94;
    }

    if (status === 'online') {
        money *= 0.94;
    }

    console.log(Math.round(money));
}
