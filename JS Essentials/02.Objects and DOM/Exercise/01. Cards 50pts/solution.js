function solve() {
    let firstPlayerCards = document.getElementById('player1Div').getElementsByTagName('img');
    let secondPlayerCards = document.getElementById('player2Div').getElementsByTagName('img');
    let resultFieldElements = document.getElementById('result').getElementsByTagName('span');
    let historyDivElement = document.getElementById('history');

    let firstPlayercardValue = 0;
    let secondPlayercardValue = 0;
    let firstPlayerCurrentCard;
    let secondPlayerCurrentCard;

    for (let i = 0; i < firstPlayerCards.length; i++) {
        firstPlayerCards[i].addEventListener('click', (e) => {
            resultFieldElements[0].textContent = '';
            resultFieldElements[2].textContent = '';
            firstPlayerCurrentCard = e.currentTarget;
            firstPlayercardValue = firstPlayerCurrentCard.getAttribute('name');
            firstPlayerCurrentCard.src = "images/whiteCard.jpg";
            resultFieldElements[0].textContent = firstPlayercardValue;
        });

        secondPlayerCards[i].addEventListener('click', (c) => {
            secondPlayerCurrentCard = c.currentTarget;
            secondPlayercardValue = secondPlayerCurrentCard.getAttribute('name');
            secondPlayerCurrentCard.src = "images/whiteCard.jpg";
            resultFieldElements[2].textContent = secondPlayercardValue;

            if (Number(firstPlayercardValue) > Number(secondPlayercardValue)) {
                firstPlayerCurrentCard.style.border = '2px solid green';
                secondPlayerCurrentCard.style.border = '2px solid red';
            } else if (Number(secondPlayercardValue) > Number(firstPlayercardValue)) {
                firstPlayerCurrentCard.style.border = '2px solid red';
                secondPlayerCurrentCard.style.border = '2px solid green';
            }
            historyDivElement.textContent += `[${firstPlayercardValue} vs ${secondPlayercardValue}]`;
        });
    }
}