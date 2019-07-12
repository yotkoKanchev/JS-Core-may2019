function attachEvents() {
    url = 'https://rest-messanger.firebaseio.com/messanger.json';
    let textAreaElement = document.getElementById('messages');
    let nameInputElement = document.getElementById('author');
    let messageInputElement = document.getElementById('content');
    let sendBtnElement = document.getElementById('submit');
    let refreshBtnElement = document.getElementById('refresh');

    sendBtnElement.addEventListener('click', sendFunc);
    refreshBtnElement.addEventListener('click', refreshFunc);

    function  sendFunc() {
        let authorName = nameInputElement.value;
        let msgText = messageInputElement.value;

        if (authorName && msgText) {
            let obj = {
                author: `${authorName}`,
                content: `${msgText}`
            };

            textAreaElement.textContent += `${authorName}: ${msgText}\n`;

            fetch(url, {
                method: 'post',
                body: JSON.stringify(obj)
            })
                .then(res => res.json());
        }

        nameInputElement.value = '';
        messageInputElement.value = '';
    };

    function  refreshFunc() {
        textAreaElement.textContent = '';

        fetch(url)
            .then(req => req.json())
            .then(data => {
                let values = Object.values(data);

                for (let value of values){
                    let authorName = value.author;
                    let msgText = value.content;
                    textAreaElement.textContent += `${authorName}: ${msgText}\n`;
                }
            });
    }
}

attachEvents();