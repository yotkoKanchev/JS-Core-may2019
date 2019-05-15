function getStringLength(firstString, secondString, thirdString){
    let lengthsSum = firstString.length + secondString.length + thirdString.length;

    console.log(lengthsSum);
    console.log(Math.floor(lengthsSum/3));
}

getStringLength('chocolate', 'ice cream', 'cake');