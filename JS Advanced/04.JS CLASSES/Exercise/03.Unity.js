class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat.constructor.name === 'Rat') {
            /otherRat instanceof Rat/
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = `${this.name}`;

        for (let rat of this.unitedRats) {
            result += `\n##${rat.name}`;
        }
        return result;
    };
}
