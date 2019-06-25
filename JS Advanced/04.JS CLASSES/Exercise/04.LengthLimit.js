class Stringer {
    constructor(text, num) {
        this.innerString = text;
        this.innerLength = Number(num);
    };

    increase(length) {
        this.innerLength += Number(length);
    };

    decrease(length) {
        if (this.innerLength >= length) {
            this.innerLength -= length;
        } else {
            this.innerLength = 0;
        }
    };

    toString() {
        return  this.innerString.slice(0, this.innerLength) + '...';
    }
}
