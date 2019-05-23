function solve(array) {
    let firstThreeElementsArray = array.slice(1,1+ array[0]);
    let lastThreeElementsArray = array.slice(array.length-array[0]);

    console.log(firstThreeElementsArray.join(' '));
    console.log(lastThreeElementsArray.join(' '));
}
