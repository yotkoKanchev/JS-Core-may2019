function solve() {
    let buttonElements = document.getElementsByClassName('add-product');
    let productElements = document.getElementsByClassName('product');
    let textAreaElement = document.getElementsByTagName('textarea')[0];
    let checkOutButtonElement = document.getElementsByClassName('checkout')[0];
    let boughtProducts = [];
    let totalMoney = 0;
    console.log(buttonElements.length);

    for (let element of Array.from(buttonElements)) {
        element.addEventListener('click', () => {
            let index = Array.from(buttonElements).indexOf(element);
            console.log(index);
            let productName = productElements[index].getElementsByClassName('product-title')[0].textContent;
            if (!boughtProducts.includes(productName)) {
                boughtProducts.push(productName);
            }
            let price = Number(productElements[index].getElementsByClassName('product-line-price')[0].textContent);
            totalMoney += price;
            textAreaElement.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`


        });
    }
    checkOutButtonElement.addEventListener('click', () => {
        textAreaElement.textContent += `You bought ${boughtProducts.join(', ')} for ${totalMoney.toFixed(2)}.`

        for (let button of Array.from(buttonElements)) {
            button.disabled = true;
        }
        checkOutButtonElement.disabled = true;
    })
}
