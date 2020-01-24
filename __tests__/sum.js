const sum = require('../app');

// done -- sum() = 0
// sum(2) = 2
// sum(2, 3) = 5
// sum(3, 4, 5) = 12

test('return 0 when there is no input provided', () => {
    expect(sum()).toBe(0);
});

test('return the number when there is a single input value', () => {
    const answer = sum(5);
    expect(answer).toBe(5);
});

test('returns the sum of two input values', () => {
    const answer = sum(2, 3);
    expect(answer).toBe(5);
})