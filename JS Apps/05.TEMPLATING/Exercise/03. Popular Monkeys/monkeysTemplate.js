let monkeysDiv = document.getElementsByClassName('monkeys')[0];

(() => {
    monkeys.forEach(monkey => {
        let html = getHTML(monkey);

        monkeysDiv.innerHTML += html;

        let buttons = Array.from(document.getElementsByTagName('button'));
        
        buttons.forEach((b) => {
            b.addEventListener('click', () => {
                b.nextElementSibling.style.display = "block";
            })
        })
    });
})();

function getHTML(context) {
    let source = document.getElementById('monkey-template').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(context);

    return html;
}