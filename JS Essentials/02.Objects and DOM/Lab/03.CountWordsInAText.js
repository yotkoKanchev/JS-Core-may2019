function solve(text){
    let wordsArray = text[0].split(/\W/).filter(x=>x);

    let wordsObject = {}
    for (const word of wordsArray) {
        if (!wordsObject[word]) {
            wordsObject[word] = 0;
        }

        wordsObject[word]++;
    }

    console.log(JSON.stringify(wordsObject));
}
