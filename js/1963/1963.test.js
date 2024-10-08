const minSwaps = require('./1963')


test('Test case 1', () => {
    const input = "][][";
    const output = 1;
    expect(minSwaps(input)).toEqual(output);
})

test('Test case 2', () => {
    const input = "]]][[[";
    const output = 2;
    expect(minSwaps(input)).toEqual(output);
})

test('Test case 3', () => {
    const input = "[]";
    const output = 0;
    expect(minSwaps(input)).toEqual(output);
})