function encodeAndDecodeMessages() {
    let textAreaElements = document.getElementsByTagName('textarea');
    let buttonElements = document.getElementsByTagName('button');

    let senderMessageElement = textAreaElements[0];
    let recieverMessageElement = textAreaElements[1];
    let encodeButtonElement = buttonElements[0];
    let decodeButtonElement = buttonElements[1];

    encodeButtonElement.addEventListener('click', ()=> {
        let sendedText = senderMessageElement.value;
        let encodedText = '';

        for (const letter of sendedText) {
            encodedText += String.fromCharCode(letter.charCodeAt(0) + 1);
        }

        recieverMessageElement.value = encodedText;
        senderMessageElement.value = '';
    });

    decodeButtonElement.addEventListener('click', () =>{
        let encodedMessage = recieverMessageElement.value;
        let decodedText = '';

        for (const letter of encodedMessage) {
            decodedText += String.fromCharCode(letter.charCodeAt(0) - 1);
        }

        recieverMessageElement.value = decodedText;
    });
}