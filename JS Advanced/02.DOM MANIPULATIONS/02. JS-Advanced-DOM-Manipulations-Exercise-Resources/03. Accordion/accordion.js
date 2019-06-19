function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let extraDivElement = document.getElementById('extra');

    let buttonText = buttonElement.textContent;

    if (buttonText === 'More'){
        extraDivElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraDivElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}