let inputElement = document.getElementById('towns');
inputElement.value = '';

let loadTownsBtn = document.getElementById('btnLoadTowns');
let ulElement = document.getElementsByTagName('ul')[0];

loadTownsBtn.addEventListener('click', loadTowns);

function loadTowns() {
    let towns = inputElement.value.split(', ');

    const template = document.getElementById('towns-template').innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    const context = {
        towns
    };

    const root = document.getElementById('root');
    root.innerHTML = compiledTemplate(context);
};
