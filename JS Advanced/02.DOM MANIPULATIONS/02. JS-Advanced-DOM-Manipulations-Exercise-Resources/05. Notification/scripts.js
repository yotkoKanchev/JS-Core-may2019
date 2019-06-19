function notify(message) {
    let notificationDivElement = document.getElementById('notification');
    notificationDivElement.textContent = message;
    notificationDivElement.style.display = 'block';

    setTimeout(() => {
        notificationDivElement.style.display = 'none'
    }, 2000)
}