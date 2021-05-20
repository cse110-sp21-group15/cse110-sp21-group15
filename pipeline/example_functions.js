/*
a couple simple functions to test Jest
*/

const functions = {
    multiple: (n1, n2) => n1*n2,
    subtract: (n1, n2) => n1-n2,
    add: (n1, n2) => n1+n2,
    //example function that fail
    divide_Will_Fail: (n1, n2) => n1 + n2 + 1,
    makeAccount: () => {
        const account = {
            name: 'Zain',
            age: 20
        };
        return account; // test
    }
}
module.exports = functions;