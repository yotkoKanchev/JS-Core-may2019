function drawSquareOfStars(starsCount){
    if(!starsCount){
        starsCount = 5;
    }

    for (let i = 0; i < starsCount; i++) {
        console.log(('*'.repeat(starsCount)).split('').join(' '));
    }
}

drawSquareOfStars(5);