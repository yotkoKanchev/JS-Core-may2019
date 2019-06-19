function aggregates(array) {
    function reducer(array, func) {
        let result = array.shift();

        for(let element of array){
            result = func(result, element);
        }

        return result;
    }

    console.log(`Sum = ${reducer(array, (a, b) => a + b)}`);
    console.log(`Min = ${reducer(array, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reducer(array, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reducer(array, (a, b) => a * b)}`);
    console.log(`Join = ${reducer(array, (a, b) => a.toString() + b)}`);
}