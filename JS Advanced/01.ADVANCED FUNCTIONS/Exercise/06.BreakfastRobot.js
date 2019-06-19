function solve() {

    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    function restock([product, quantity]) {
        quantity = Number(quantity);
        ingredients[product] += quantity;
        return "Success";
    }

    function prepare([food, quantity]) {
        quantity = Number(quantity);
        let result;
        switch (food) {
            case "apple":
                if (ingredients['flavour'] < quantity * 2) {
                    result = "Error: not enough flavour in stock";
                }
                if (ingredients['carbohydrate'] < quantity) {
                    result = "Error: not enough carbohydrate in stock";
                }

                if (!result) {
                    ingredients['flavour'] -= quantity * 2;
                    ingredients['carbohydrate'] -= quantity;
                    return "Success";
                }
                break;
            case "lemonade":
                if (ingredients['flavour'] < quantity * 20) {
                    result = "Error: not enough flavour in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 10) {
                    result = "Error: not enough carbohydrate in stock";
                }
                if (!result) {
                    ingredients['flavour'] -= quantity * 20;
                    ingredients['carbohydrate'] -= quantity * 10;
                    return "Success";
                }
                break;
            case "burger":
                if (ingredients['flavour'] < quantity * 3) {
                    result = "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity * 7) {
                    result = "Error: not enough fat in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 5) {
                    result = "Error: not enough carbohydrate in stock";
                }
                if (!result) {
                    ingredients['flavour'] -= quantity * 3;
                    ingredients['fat'] -= quantity * 7;
                    ingredients['carbohydrate'] -= quantity * 5;
                    return "Success";
                }
                break;
            case "eggs":
                if (ingredients['flavour'] < quantity) {
                    result = "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity) {
                    result = "Error: not enough fat in stock";
                }
                if (ingredients['protein'] < quantity * 5) {
                    result = "Error: not enough protein in stock";
                }
                if (!result) {
                    ingredients['flavour'] -= quantity;
                    ingredients['fat'] -= quantity;
                    ingredients['protein'] -= quantity * 5;
                    return "Success";
                }
                break;
            case "turkey":
                if (ingredients['flavour'] < quantity * 10) {
                    result = "Error: not enough flavour in stock";
                }
                if (ingredients['fat'] < quantity * 10) {
                    result = "Error: not enough fat in stock";
                }
                if (ingredients['carbohydrate'] < quantity * 10) {
                    result = "Error: not enough carbohydrate in stock";
                }
                if (ingredients['protein'] < quantity * 10) {
                    result = "Error: not enough protein in stock";
                }
                if (!result) {
                    for (let ingredient in ingredients) {
                        ingredients[ingredient] -= quantity * 10;
                    }
                    return "Success";
                }
                break;
        }
        return result;
    }

    function report() {
        return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
    }

    return function (command) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        switch (action) {
            case "prepare":
                return prepare(tokens);
            case "restock":
                return restock(tokens);
            case "report":
                return report();
        }
    }
}
