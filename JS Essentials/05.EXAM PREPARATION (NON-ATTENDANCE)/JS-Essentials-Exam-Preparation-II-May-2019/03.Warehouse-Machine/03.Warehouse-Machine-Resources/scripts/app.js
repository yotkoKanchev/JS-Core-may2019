function coffeeStorage(array) {
    let textAreaElement = document.getElementsByTagName('textarea')[0];
    let reportPElement = document.getElementsByTagName('p')[0];
    let inspectionPElement = document.getElementsByTagName('p')[1];

    let inputArray = JSON.parse(textAreaElement.value);

    let products = [];

    for (let row of inputArray) {
        let rowArray = row.split(', ').filter(x => x !== '');
        let command = rowArray[0];

        if (command === 'REPORT') {
            let result = '';

            for (let brand of products) {
                result += brand.brand + ': ';

                for (let type of brand.typeList) {
                    result += `${type.name} - ${type.expireDate} - ${type.quantity}. `
                }
                result = result.slice(0,result.length-1);
                result +=  '</br>';
            }

            reportPElement.innerHTML = result;

        } else if (command === 'INSPECTION') {
            let result = '';
            let sortedProducts = products.sort((a, b) => a.brand.localeCompare(b.brand));

            for (let brand of sortedProducts) {
                result += brand.brand + ': ';
                for (let type of brand.typeList.sort((a, b) => b.quantity - a.quantity)) {
                    result += `${type.name} - ${type.expireDate} - ${type.quantity}. `
                }
                result = result.slice(0,result.length-1);
                result += '</br>';
            }

            inspectionPElement.innerHTML = result;
        } else {
            let currentCoffee = {
                'brand': rowArray[1],
                'name': rowArray[2],
                'expireDate': rowArray[3],
                'quantity': Number(rowArray[4])
            };

            let currentCoffeeType = {
                'name': currentCoffee.name,
                'expireDate': currentCoffee.expireDate,
                'quantity': currentCoffee.quantity
            };

            let currentBrand = {
                'brand': currentCoffee.brand,
                'typeList': []
            };


            let searchedBrand = products.find(b => b.brand === currentCoffee.brand);

            if (command === 'IN') {
                if (!searchedBrand) {
                    currentBrand.typeList.push(currentCoffeeType);
                    products.push(currentBrand);
                } else {
                    let searchedCoffeeType = searchedBrand.typeList.find(t => t.name === currentCoffee.name);

                    if (searchedCoffeeType) {
                        if (searchedCoffeeType.expireDate < currentCoffee.expireDate) {
                            searchedCoffeeType.expireDate = currentCoffee.expireDate;
                            searchedCoffeeType.quantity = currentCoffee.quantity;
                        } else if (searchedCoffeeType.expireDate === currentCoffee.expireDate) {
                            searchedCoffeeType.quantity += currentCoffee.quantity;
                        }
                    } else {
                        searchedBrand.typeList.push(currentCoffeeType);
                    }
                }
            } else if (command === 'OUT') {
                if (searchedBrand) {
                    let searchedCoffeeType = searchedBrand.typeList.find(t => t.name === currentCoffee.name);
                    if (searchedBrand && searchedCoffeeType) {
                        if (searchedCoffeeType.expireDate > currentCoffee.expireDate
                            && searchedCoffeeType.quantity >= currentCoffee.quantity) {
                            searchedCoffeeType.quantity -= currentCoffee.quantity;
                        }
                    }
                }
            }
        }
    }
}
