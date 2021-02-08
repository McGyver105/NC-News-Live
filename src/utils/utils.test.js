const dateObjToStr = require('./utils')

describe('dateObjToStr', () => {
    describe('functionality', () => {
        it('takes a date object and returns a string', () => {
            const input = new Date();
            expect(typeof dateObjToStr(input)).toBe('string');
        });
        it('takes a date object and gives a statement of when it was created', () => {
            const input = new Date(1611137348464);
            expect(dateObjToStr(input)).toBe('created on wed jan 3 at 10hrs 9min');
        });
    })
    describe('pure function', () => {
        it('does not mutate in the input object', () => {
            const input = new Date(1611137348464);
            const copyOfInput = new Date(1611137348464);
            dateObjToStr(input);
            expect(input).toEqual(copyOfInput);
        });
    })
})