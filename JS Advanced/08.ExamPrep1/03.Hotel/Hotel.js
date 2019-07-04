class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = +capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.availableRooms = {
            single: Math.round(this.capacity * 0.5),
            double: Math.round(this.capacity * 0.3),
            maisonette: Math.round(this.capacity * 0.2)
        };

        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };

        this.servicesPricing = {

            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.availableRooms[roomType] === 0) {
            let output = `No ${roomType} rooms available!`;

            for (const room in this.availableRooms) {
                if (this.availableRooms[room] > 0) {
                    output += ` Available ${room} rooms: ${this.availableRooms[room]}.`;
                }
            }
            return output;
        }

        let clientObject = {
            clientName,
            roomType,
            nights,
            bookingNumber: this.currentBookingNumber
        };

        this.bookings.push(clientObject);
        this.availableRooms[roomType]--;
        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`
    }

    roomService(currentBookingNumber, serviceType) {
        let currentBooking = this.bookings.find(x => x.bookingNumber === currentBookingNumber);

        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        if (!this.servicesPricing[serviceType]) {
            return `We do not offer ${serviceType} service.`
        }

        if (!currentBooking.hasOwnProperty('services')) {
            currentBooking['services'] = [];
        }

        currentBooking.services.push(serviceType);
        return `Mr./Mrs. ${currentBooking.clientName}, Your order for ${serviceType} service has been successful.`
    };

    checkOut(currentBookingNumber) {
        let currentBooking = this.bookings.find(x => x.bookingNumber === currentBookingNumber);

        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        this.bookings.splice(this.bookings.indexOf(currentBooking), 1);
        this.availableRooms[currentBooking.roomType]++;
        let totalMoney = currentBooking.nights * this.roomsPricing[currentBooking.roomType];

        if (currentBooking.services) {
            let totalServiceMoney = currentBooking.services.reduce((a, b) => a + this.servicesPricing[b], 0);
            totalMoney += totalServiceMoney;

            return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`
        }

        return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`
    }

    report() {
        let output = `${this.name.toUpperCase()} DATABASE:\n`;
        output += '-'.repeat(20) + '\n';

        if (this.bookings.length === 0) {
            return output + 'There are currently no bookings.';
        }

        for (const booking of this.bookings) {
            output += `bookingNumber - ${booking.bookingNumber}\n` + `clientName - ${booking.clientName}\n` + `roomType - ${booking.roomType}\n` + `nights - ${booking.nights}\n`;

            if (booking.services) {
                output += `services: ${booking.services.join(', ')}\n`;
            }
            output += '-'.repeat(10) + '\n';
        }
        return output.slice(0, output.length - 12);
    }
}