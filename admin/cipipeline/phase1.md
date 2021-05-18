# Pipeline Phase 1 Status

 ## Linting
 
Linting is configured with ESLint for this project and in three ways:
 
 1. The ESLint VSCode extension
 2. A githook that runs on staged files before commit
 3. As a CodeClimate plugin

### In Editor

To see style issues in Visual Studio Code, install the ESLint Visual Studio Code extension. Open the editor in the repo and open test_linting_functions.js in the pipeline directory. If you hover your mouse next to the line numbers, a blue lightbulb icon should show that prompts you to allow ESLint. The styling issues should now show in the file. There should be other ways to enable the extension as well. 

Opening Visual Studio Code's command palette allows you to run different ESLint commands - if trying to troubleshoot ESLint issues, open the command palette and try to restart the ESLint server and/or show the output channel. 

### Revise/Blocking Upon Commit

The githook runs on all staged files before commit, and reports any styling issues as failed. However, if ESLint is being overly picky, especially since the linter rules are not fully set yet, the script will prompt the user and ask if they would like to commit anyway after reviewing the styling issues. 

The githook is modified from this link: https://gist.github.com/linhmtran168/2286aeafe747e78f53bf

Git hooks are not tracked by git and are local in the .git/hooks directory by default. The default git hooks directory is not tracked by version control, and as such changes to that directory cannot be staged and committed. To get around this there is a .githooks directory in the root of the project and the hook script exists in that folder so that we may make changes to that directory that can be committed to our repo. 

Each person must run the command 'git config --local core.hooksPath .githooks' in the root directory of the repo to change their default git hooks directory to this new .githooks directory under version control. To test that this works, feel free to make any edit to the test_linting_functions.js file and commit. The script should run. Then, erase the test commit with 'git reset --soft HEAD^'. 

### CodeClimate plugin

TBD

### To-Do

 - Github actions on push 

## Formatting

## Automated Code Quality Checks

Automated code quality is currently configured with CodeClimate. Currently, we're trying to see if we can change our repo to private and still keep CodeClimate, as CodeClimate is only free for public repos. We sent an email to support and they should get back to us in a day.

## Testing
We are using Jest for all testing in our project
Testing is implemented using GitHub Actions as well, so upon pushing to the main branch, all unit testing will be ran, and you can only successfully push to main if all unit tests are passed successfully. Unit tests can also be made and tested before pushing for any tests needed.
## Automatic Doc Generation
We are using JSDocs for our automatic doc generation.
Using github actions, a command will be run for JSDocs that will generate an html page that automatically documents our code. All it requires is a little work from developers to add JSDoc compatible method descriptions in comments above each method.
![ORBIS Brainstorming MindMap (1)](https://user-images.githubusercontent.com/68146410/118579196-709d1780-b742-11eb-9aa1-baa537a3920d.jpg)

