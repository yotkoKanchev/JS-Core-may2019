class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        let products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(numberString) {
        if (!(numberString.length === 6 || [...numberString].every(a => (typeof a) === "number"))) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = numberString;
    }

    set email(emailString) {
        const pattern = /^\w+@[\w\\.]+$/;

        if (!pattern.test(emailString)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = emailString;
    }

    set firstName(nameString) {
        if (nameString.length < 3 || nameString.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }


        if ([...nameString].some(c => c.toLowerCase() === c.toUpperCase() || c.charCodeAt(0) > 255)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = nameString;
    }

    set lastName(nameString) {
        if (nameString.length < 3 || nameString.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if ([...nameString].some(c => c.toLowerCase()=== c.toUpperCase() || c.charCodeAt(0) > 255)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = nameString;
    }
}
