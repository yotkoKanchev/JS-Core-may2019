let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require("chai").expect;

describe('Test matEnforcer() works correctly', function () {
    describe('Test addFive', () => {
        it('Check if returns undefined with non-numeric parameter', () => {
            let actual = mathEnforcer.addFive('test');
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.addFive({})).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.addFive([])).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.addFive(true)).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
        });

        it('Check returns correct sum with negative number as parameter', () => {
            let actual = mathEnforcer.addFive(-5);
            let expected = 0;
            expect(actual).to.be.equal(expected, 'did not return the correct sum');
        });

        it('Check returns correct sum with positive number as parameter', () => {
            let actual = mathEnforcer.addFive(5);
            let expected = 10;
            expect(actual).to.be.equal(expected, 'did not return the correct sum');
        });

        it('Check returns correct sum with floating point parameter', () => {
            let actual = mathEnforcer.addFive(5.5);
            let expected = 10.5;
            expect(actual).to.be.closeTo(expected, 0.01, 'did not return the correct sum');
        });
    });

    describe('Test subtractTen', () => {
        it('Check if returns undefined with non-numeric parameter', () => {
            let actual = mathEnforcer.subtractTen('test');
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.subtractTen({})).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.subtractTen([])).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
            expect(mathEnforcer.subtractTen(true)).to.be.equal(expected, 'did not return undefine with ivalid parameter type');
        });

        it('Check returns correct result with negative number as parameter', () => {
            let actual = mathEnforcer.subtractTen(-90);
            let expected = -100;
            expect(actual).to.be.equal(expected, 'did not return the correct result');
        });

        it('Check returns correct result with positive number as parameter', () => {
            let actual = mathEnforcer.subtractTen(5);
            let expected = -5;
            expect(actual).to.be.equal(expected, 'did not return the correct result');
        });

        it('Check returns correct result with floating point number as parameter', () => {
            let actual = mathEnforcer.subtractTen(15.5);
            let expected = 5.5;
            expect(actual).to.be.closeTo(expected, 0.01, 'did not return the correct result');
        });
    });

    describe('Test sum', () => {
        describe('Test with invalid parameters', () => {
            it('Check returns undefined with both non-numeric parameters', () => {
                let actual = mathEnforcer.sum('test', {});
                let expected = undefined;
                expect(actual).to.be.equal(expected, 'did not return undefined with both non-numeric parameters');
            });

            it('Check returns undefined with non-numeric first parameter and valid second', () => {
                let actual = mathEnforcer.sum('test', 10);
                let expected = undefined;
                expect(actual).to.be.equal(expected, 'did not return undefined with first non-numeric parameters');
            });

            it('Check returns undefined with non-numeric second parameter and valid first', () => {
                let actual = mathEnforcer.sum(10, 'test');
                let expected = undefined;
                expect(actual).to.be.equal(expected, 'did not return undefined with second non-numeric parameters');
            });

            it('Check returns undefined with missing parameter', () => {
                let actual = mathEnforcer.sum(10);
                let expected = undefined;
                expect(actual).to.be.equal(expected, 'did not return undefined with missing parameters');
            });
        });

        describe('Test with valid parameters', () => {
            it('Check returns correct sum with both positive integer parameters', () => {
                let actual = mathEnforcer.sum(99,1);
                let expected = 100;
                expect(actual).to.be.equal(expected, 'did not return the correct sum with both positive integer parameters');
            });

            it('Check returns correct sum with both negative integer numeric parameters', () => {
                let actual = mathEnforcer.sum(-99,-1);
                let expected = -100;
                expect(actual).to.be.equal(expected, 'did not return the correct sum with both negative integer parameters');
            });

            it('Check returns correct sum with first negative and second positive integer parameters', () => {
                let actual = mathEnforcer.sum(-101,1);
                let expected = -100;
                expect(actual).to.be.equal(expected, 'did not return the correct sum with first negative and second positive integer parameters');
            });

            it('Check returns correct sum with first positive and second negative integer parameters', () => {
                let actual = mathEnforcer.sum(101,-1);
                let expected = 100;
                expect(actual).to.be.equal(expected, 'did not return the correct sum with first positive and second negative integer parameters');
            });

            it('Check if retund the correct sum with both floating point parameters', ()=>{
                let actual = mathEnforcer.sum(10.5, 89.6);
                let expected = 100.1;
                expect(actual).to.be.closeTo(expected, 0.01, 'did not return the correct sum with floating point parameters');
            });

            it('Check if retund the correct sum with first floating point parameters', ()=>{
                let actual = mathEnforcer.sum(10.5, 90);
                let expected = 100.5;
                expect(actual).to.be.closeTo(expected, 0.01, 'did not return the correct sum with first floating point parameters');
            });

            it('Check if retund the correct sum with second floating point parameters', ()=>{
                let actual = mathEnforcer.sum(10.5, 90);
                let expected = 100.5;
                expect(actual).to.be.closeTo(expected, 0.01, 'did not return the correct sum with second floating point parameters');
            });
        });
    });
});