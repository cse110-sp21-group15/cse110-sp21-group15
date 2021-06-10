# All Unit Tests should go in this directory 

How to run your tests locally <br />

npm init -y <br />
npm install --save-dev jest babel-jest @babel/core @babel/preset-env <br />
npm install --save-dev puppeteer jest-puppeteer <br />
<br />

For style and to make it easier to understand what you're testing, name your tester file whatever file you are testing, and appending '.test.js', so for example if I have a file 'functions.js', and I wanted to test to make sure everything is working, I would make a file called 'functions.test.js' and put my unit tests here<br />
Within the 'testing' directory, put all test files you are making into a new directory under the 'testing' directory, naming it whatever feature you are testing, and put all your '.test.js' files in this new directory. This way, you can run all the tests within that directory by running 'npm run test './testing/your_testing_directory''. You just need to give the relative path to the directory, and this will run all tests within this directory. 

You can now start testing, if you had questions on how specifically to test a component of your code check this link out: https://jestjs.io/docs/mock-functions it has some different functions you can use in jest for testing<br />

After you make any tests you need for a specific test.js file, to run these tests, using 'npm run test test_file.test.js'<br />

If you want to run all tests across all .test.js files, you can run 'npm run test', this will test every test within the testing directory. No flag needed to get test within each directory<br />
