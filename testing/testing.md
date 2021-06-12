# Testing Breakdown
---

This document explains (1) where to write tests and (2) how to run them

## Setting up your Environment to Run Tests Locally

To set up the testing environment, navigate to the cse110-sp21-group15 directory. Run the following commands to initialize npm and install the testing framework, Jest, as well as the Puppeteer packages.

```
npm init -y
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
npm install --save-dev puppeteer jest-puppeteer
```

In order to run the tests:

1. Open index.html using VSCode and go live using the Live Server extension.
   
2. To run every test, run the command: `npm test`
   
3. To run a specific test, run the command `npm test source/\_\_test\_\_/<path to .test.js file>`

## How to write and format tests

### Test Types

There are 2 types of tests:

1. **Unit Tests**
   
   1. Written with [Jest](https://jestjs.io/docs/getting-started)
   
2. **End-to-End Tests**

   1. Written with [Jest-Puppeteer](https://jestjs.io/docs/puppeteer)


In the `__tests__` directory for both `src/app` and `src/website`, there are two subfolders:

1. `E2E`
     
2. `unit`

When testing a feature, you should put your unit tests for that feature in `__tests__/unit/feature` and your E2E tests in `__tests__/E2E/feature`.

For style and to make it easier to understand what you're testing, name your tester file whatever file (or function) you are testing, and appending `.test.js`. For example, if the file name is `functions.js`, the testing file should be called `functions.test.js`.

You can now start testing, if you had questions on how specifically to test a component of your code check this link out: https://jestjs.io/docs/mock-functions it has some different functions you can use in jest for testing

After you make any tests you need for a specific test.js file, to run these tests, using `npm run test test_file.test.js`

If you want to run all tests across all .test.js files, you can run `npm run test`, this will test every test within the testing directory. No flag needed to get test within each directory