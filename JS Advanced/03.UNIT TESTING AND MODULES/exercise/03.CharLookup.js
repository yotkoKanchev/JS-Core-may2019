function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require("chai").expect;

describe('Test lookupChar function works correctly', function() {
    describe('invalid parameter types', ()=>{
        it('Check returns undefined with numeric first parameter and valid second parameter', ()=>{
            let actual = lookupChar(5,5);
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return undefine with numeric first parameter');
        });
    
        it('Check returns undefined with string as second parameter and valid first parameter', () => {
            let actual = lookupChar('test', 'string');
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return udenfine with invalid second parameter');
        });

        it('Check returns undefined with invalid both parameters', () => {
            let actual = lookupChar(5, 'string');
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return undefined with both invalid parameters');
        })

        it('Check returns undefined with floating point number as second parameter', ()=> {
            let actual = lookupChar('string', 5.5);
            let expected = undefined;
            expect(actual).to.be.equal(expected, 'did not return undefined with floating point number as second parameter');
        })
    
        it('Check returns undefined with missing second parameter', () => {
            expect(lookupChar('parameter')).to.be.equal(undefined, 'did not return undefine with missing parameter');
        });
    });

    describe('valid parameter types', () => {
        it('Check returns Incoret Index with negative number for second parameter', ()=>{
            let actual = lookupChar('string', -5);
            let expected = 'Incorrect index';
            expect(actual).to.be.equal(expected, 'did not return Incorrect Index with negative index parameter');
        });

        it('Check returns Incorrect Index with second parameter biger than string length', ()=> {
            let actual = lookupChar('string', 100);
            let expected = 'Incorrect index';
            expect(actual).to.be.equal(expected, 'did not return Incorrect index with index biger than string length');
        });
    });

    describe('valid first and second parameter', () => {
        it('Check if returns correct letter on the given index as second parameter', ()=> {
            let actual = lookupChar('GetE', 1);
            let expected = 'e';
            expect(actual).to.be.equal(expected, 'did not return the correct letter on the valid index');
        });
    });   
});