function solve(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let destinationsArray = [];

    for (const destinationArgs of array) {
        let tokens = destinationArgs.split('|');
        let currentCity = tokens[0];
        let currentPrice = Number(tokens[1]);
        let currentStatus = tokens[2];

        destinationsArray.push(new Ticket(currentCity, currentPrice, currentStatus));
    }

    let sortedArray = [];

    switch (criteria) {
        case 'destination' :
            sortedArray = destinationsArray.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case 'price':
            sortedArray = destinationsArray.sort((a, b) => {
                return a.price - b.price;
            });
            break;
        case 'status':
            sortedArray = destinationsArray.sort((a, b) => {
                return a.status.localeCompare(b.status);
            });
            break;
    }

    return sortedArray;
}
