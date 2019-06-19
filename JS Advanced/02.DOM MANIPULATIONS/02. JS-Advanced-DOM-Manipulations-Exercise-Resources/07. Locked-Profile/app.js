function lockedProfile() {
    let profileDivCollection = Array.from(document.getElementsByClassName('profile'));

    for (const divElement of profileDivCollection) {
        let hidenDivElement = divElement.getElementsByTagName('div')[0];
        let radioElements = divElement.getElementsByTagName('input');
        console.log(radioElements);
        let currentButtonElement = divElement.getElementsByTagName('button')[0];

        currentButtonElement.addEventListener('click', (f) => {
            let buttonText = currentButtonElement.textContent;
            if (radioElements[1].checked){
                if (buttonText === 'Show more'){

                    hidenDivElement.style.display = 'block';
                    currentButtonElement.textContent = 'Hide it';
                } else {
                    hidenDivElement.style.display = 'none';
                    currentButtonElement.textContent = 'Show more';
                }
            }
        });
    }
}