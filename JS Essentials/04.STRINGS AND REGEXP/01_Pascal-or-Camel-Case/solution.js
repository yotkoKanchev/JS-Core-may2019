function solve() {
    let textInputElement = document.getElementById('text');
    let namingConventionElement = document.getElementById('naming-convention');
    let spanResultElement = document.getElementById('result');


    let textInput = textInputElement.value;
    let conventionInput = namingConventionElement.value;
    let result = '';


    if (conventionInput === 'Camel Case' || conventionInput === 'Pascal Case') {
        for (let word of textInput.split(' ').filter(w => w !== '')) {
            result += word[0].toUpperCase() + word.substr(1).toLowerCase();

            if (conventionInput === 'Camel Case') {
                result = result[0].toLowerCase() + result.substr(1);
            }
        }
    } else {
        result = 'Error!';
    }
    spanResultElement.textContent = result;
}
