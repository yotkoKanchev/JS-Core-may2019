class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArray) {

        for (const productDetails of productsArray) {
            let [name, quantity, price] = productDetails.split(' ');
            let message = `There was not enough money to load ${quantity} ${name}`;
            if (this.budget >= Number(price)) {
                if (!this.productsInStock[name]) {
                    this.productsInStock[name] = 0;
                }

                this.productsInStock[name] += Number(quantity);
                this.budget -= Number(price);
                message = `Successfully loaded ${quantity} ${name}`;
            }
            this.actionsHistory.push(message);
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProductsArray, price) {
        if (!this.menu[meal]) {
            let currentMealObject = {};
            currentMealObject['products'] = neededProductsArray;
            currentMealObject['price'] = Number(price);
            this.menu[meal] = currentMealObject;
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let output = `Our menu is not ready yet, please come later...`;
        if (Object.keys(this.menu).length > 0) {
            output = '';
            for (const meal in this.menu) {
                output += `${meal} - $ ${this.menu[meal].price}\n`
            }
            output.trim();
        }
        return output;
    }

    makeTheOrder(meal) {
        let output = `There is not ${meal} yet in our menu, do you want to order something else?`;
        if (this.menu[meal]) {
            output = `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            let hasAllProducts = true;

            for (const product of this.menu[meal].products) {
                let productTokens = product.split(' ');
                let askedProduct = productTokens[0];
                let askedQuantity = Number(productTokens[1]);
                if (!this.productsInStock[askedProduct] || this.productsInStock[askedProduct] < askedQuantity) {
                    hasAllProducts = false;
                }
            }

            if (hasAllProducts) {
                for (const product of this.menu[meal].products) {
                    let productTokens = product.split(' ');
                    let askedProduct = productTokens[0];
                    let askedQuantity = Number(productTokens[1]);
                    this.productsInStock[askedProduct] -= askedQuantity;
                }
                this.budget += this.menu[meal].price;
                output = `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }
        return output;
    }
}
