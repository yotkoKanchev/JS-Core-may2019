function acceptance() {
	let inputElements = document.getElementById('fields').children; /if usin querySelector we don't need that/
	let addButtonElement = document.getElementById('acceptance');
	let warehouseElement = document.getElementById('warehouse');

	let shippingCompanyElement = inputElements[0].firstElementChild; /document.querySelector('input[name="shippingCompany"]')/
	let productNameElement = inputElements[1].firstElementChild;
	let productQuantityElement = inputElements[2].firstElementChild;
	let productScrapeElement = inputElements[3].firstElementChild;

	addButtonElement.addEventListener('click', addProduct);

	function addProduct(){
		let shippingCompany = shippingCompanyElement.value;
		let productName = productNameElement.value;
		let productQuantity = Number(productQuantityElement.value);
		let productScrape = Number(productScrapeElement.value);

		if (shippingCompany && productName && productQuantity && productScrape && productQuantity > productScrape){
			let divElement = document.createElement('div');
			let pElement = document.createElement('p');
			let buttonElement = document.createElement('button');

			buttonElement.textContent = 'Out of stock';
			buttonElement.addEventListener('click', () => {
				divElement.remove();
			});

			pElement.textContent = `[${shippingCompany}] ${productName} - ${productQuantity - productScrape} pieces`;
			divElement.appendChild(pElement);
			divElement.appendChild(buttonElement);
			warehouseElement.appendChild(divElement);
		}

		shippingCompanyElement.value = '';
		productNameElement.value = '';
		productQuantityElement.value = '';
		productScrapeElement.value = '';
	}
}