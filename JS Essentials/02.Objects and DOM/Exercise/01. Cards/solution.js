function solve() {
    let allCardsElements = document.getElementsByTagName('img');
    let resultFieldElements = document.getElementById('result').getElementsByTagName('span');
    let historyDivElement = document.getElementById('history');

    let firstCardValue = 0;
    let secondCardValue = 0;
    let firstPlayerCard;
    let secondPlayerCard;

    for (let element of Array.from(allCardsElements)) {
        element.addEventListener('click', (c) => {
            let currentCard = c.currentTarget;
            if (currentCard.parentElement.id === 'player1Div') {
                if (secondCardValue === 0) {
                    resultFieldElements[2].textContent = '';
                }
                resultFieldElements[0].textContent = currentCard.getAttribute('name');
                firstCardValue = Number(currentCard.getAttribute('name'));
                firstPlayerCard = currentCard;
                firstPlayerCard.src = "images/whiteCard.jpg"
            } else if (currentCard.parentElement.id === 'player2Div') {
                if (firstCardValue === 0) {
                    resultFieldElements[0].textContent = '';
                }
                resultFieldElements[2].textContent = currentCard.getAttribute('name');
                secondCardValue = Number(currentCard.getAttribute('name'));
                secondPlayerCard = currentCard;
                secondPlayerCard.src = "images/whiteCard.jpg";
            }

            if (firstCardValue > 0 && secondCardValue > 0) {

                if (firstCardValue > secondCardValue) {
                    firstPlayerCard.style.border = "2px solid green";
                    secondPlayerCard.style.border = "2px solid red";

                } else if (secondCardValue > firstCardValue) {
                    secondPlayerCard.style.border = "2px solid green";
                    firstPlayerCard.style.border = "2px solid red";
                }

                historyDivElement.textContent += `[${firstCardValue} vs ${secondCardValue}] `;

                firstCardValue = 0;
                secondCardValue = 0;
            }
        });
    }
}