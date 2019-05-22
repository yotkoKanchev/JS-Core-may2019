function solve() {
    let inputElement = document.getElementById('chat_input');
    let messagesElement = document.getElementById('chat_messages');
    let buttonElement = document.getElementById('send');

    buttonElement.addEventListener('click', () => {
        let inputText = inputElement.value;
        if (inputText) {
            let newDivElement = document.createElement('div');
            newDivElement.textContent = inputText;
            newDivElement.setAttribute('class', 'message my-message');
            messagesElement.appendChild(newDivElement);
            inputElement.value = '';
        }
    })
}


