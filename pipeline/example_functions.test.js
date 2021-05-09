/*
This file is to use Jest to do some simple unit testing on the example fuctions, and to show some basic functinoality of Jest.

To make a test file for another file you'd like to test, call this new testing file the same name as the origonal file, then'.test.js' and Jest will pick that up,
So for example if I had a file 'xyz.js' I wanted to test, I would test functions in a new file called 'xyz.test.jz'
*/
const functions = require('./example_functions');

test('14 + 13 equals 27', () => {
    expect(functions.add(14, 13)).toBe(27);
});

test('10 - 7 equals 3', () => {
    expect(functions.subtract(10, 7)).toBe(3);
});
test('Account is Zain\'s account', () => {
    expect(functions.makeAccount()).toEqual({
        name: 'Zain',
        age: 20
    });
});
//example test that will fail
/*
test('20 divided by 2 equals 10', () => {
    expect(functions.divide_Will_Fail(20, 2)).toBe(10);
});
*/
