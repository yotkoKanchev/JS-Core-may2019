function aggregateElements(elements) {
    function aggregate(elements, value, func) {
        let currentValue = value;

        for (let i = 0; i < elements.length; i++) {
            currentValue = func(currentValue, elements[i]);
        }

        return currentValue;
    }

    let sum = aggregate(elements, 0, (a, b) => a + b);
    let inversedValuesSum = aggregate(elements, 0, (a, b) => a + 1/b);
    let concatanatedString = aggregate(elements, '', (a, b) => a + b);

    console.log(sum);
    console.log(inversedValuesSum);
    console.log(concatanatedString);
}

aggregateElements([1, 2, 3]);