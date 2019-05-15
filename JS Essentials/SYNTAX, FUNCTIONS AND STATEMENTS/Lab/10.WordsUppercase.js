function convertToUppercase(text) {
    let wordsArray = text.split(/[\W]+/);

    for (let i = 0; i < wordsArray.length; i++) {
        if (!wordsArray[i]) {
            wordsArray.splice(i--, 1);
        } else {
            wordsArray[i] = wordsArray[i].toUpperCase();
        }
    }

    console.log(wordsArray.join(', '));
}

convertToUppercase('hello')