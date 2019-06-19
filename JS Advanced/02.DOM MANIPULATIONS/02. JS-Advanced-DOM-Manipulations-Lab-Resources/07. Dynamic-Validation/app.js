function validate () {
    const regex = /^[a-z][a-zA-Z]+@[a-z]+\.[a-z]+$/

    let emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', (e) => {
        let target = e.target;

        if (!regex.test(target.value)) {
            target.className = 'error'
        } else {
            target.removeAttribute('class')
        }
    })
}