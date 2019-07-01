class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (Number(budget) < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (this.kids[grade]) {
            for (const kid of this.kids[grade]) {
                let kidName = kid.split('-')[0];
                if (kidName === name) {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
        }

        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (this.kids[grade]) {
            for (const kid of this.kids[grade]) {
                let kidName = kid.split('-')[0];
                if (kidName === name) {
                    this.kids[grade].splice(this.kids[grade].indexOf(kid), 1);
                    return this.kids[grade];
                }
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if (this.numberOfChildren > 0) {
            let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
            for (const currentGrade in this.kids) {
                output += `Grade: ${currentGrade}\n`;

                let kidNumber = 1;
                for (const kid of this.kids[currentGrade]) {
                    output += `${kidNumber}. ${kid}\n`;
                }
            }

            return output;
        }
        return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    }

    get numberOfChildren() {
        return Object.keys(this.kids).reduce((sum, key) => sum + this.kids[key].length, 0);
    }
}
