function addItem() {
    let menuElement = document.getElementById('menu');

    let newItem = document.getElementById('newItemText').value;
    let textValue = document.getElementById('newItemValue').value;

    if (newItem){
        let newOption = document.createElement('option');
        newOption.textContent = newItem;
        newOption.value = textValue;

        menuElement.appendChild(newOption);

        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    } else{
        document.getElementById('newItemValue').value = '';
        alert("Text field can not be empty !!!")
    }
}