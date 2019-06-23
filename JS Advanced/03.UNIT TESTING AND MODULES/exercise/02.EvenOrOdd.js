function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require("chai").expect;

describe('Test isOddOrEven Function', () => {
    it('check if return undefined with number parameter', () => {
        let actual = isOddOrEven(2);
        let expected = undefined;
        expect(actual).to.be.equal(expected, 'did not return undefined with number parameter')
    });

    it('check if return even when string length is even', () => {
        let actual = isOddOrEven('even');
        let expected = 'even';
        expect(actual).to.be.equal(expected, 'did not return even with even string length' )
    });

    it('check if return odd when string length is odd', () => {
        let actual = isOddOrEven('odd');
        let expected = 'odd';
        expect(actual).to.be.equal(expected, 'did not return odd with odd string length' )
    })

});