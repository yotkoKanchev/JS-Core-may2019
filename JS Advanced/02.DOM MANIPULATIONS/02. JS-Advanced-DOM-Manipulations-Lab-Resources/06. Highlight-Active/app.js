function focus() {
    let inputElementsArray = Array.from(document.getElementsByTagName('input'));

    for (const inputElement of inputElementsArray) {
        inputElement.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused'
        });

        inputElement.addEventListener('blur', (e) => {
            e.target.parentNode.removeAttribute('class')
        })
    }
}