# Pipeline Documentation/Instructions for Developers

 ## Linting
 
Linting is configured with ESLint for this project and in two ways:
 
 1. The ESLint VSCode extension
 2. A githook that runs on staged files before commit

 We are using AirBnB style rules, demonstrated in this [configuration file](./.eslintrc). If there are any particularly annoying rules, we can block them to make sure it doesn't slow progress.

### In Editor

To see style issues in Visual Studio Code, install the ESLint Visual Studio Code extension. Open the editor in the repo open any .js file that isn't a test file. If you hover your mouse next to the line numbers, a blue lightbulb icon should show that prompts you to allow ESLint. The styling issues should now show in the file. There should be other ways to enable the extension as well. 

Opening Visual Studio Code's command palette allows you to run different ESLint commands - if you're trying to troubleshoot ESLint issues, open the command palette and try to restart the ESLint server and/or show the output channel. This provides useful output that may help resolve issues with running ESLint locally.

Some styling issues are auto-fixable. The VSCode command palette has an option to fix all auto-fixable issues. Choose this to fix all indentation and similar issues in editor.

### Revise/Blocking Upon Commit

The githook in the hidden .githooks directory runs on all staged files before commit, and reports any styling issues as failed. However, if ESLint is being overly picky, the script will prompt the user and ask if they would like to commit anyway after reviewing the styling issues that appear. No set up is required - the githook runs automatically before each commit. 

The githook is modified from this [link](https://gist.github.com/linhmtran168/2286aeafe747e78f53bf). 

Git hooks are not tracked by git and are local in the .git/hooks directory by default. The default git hooks directory is not tracked by version control, and as such changes to that directory cannot be staged and committed. To get around this there is a .githooks directory in the root of the project. The hook script exists in that folder so that we may make changes to that directory that can be committed to our repo. 

Each contributor must run the command 'git config --local core.hooksPath .githooks' in the root directory to change their default git hooks directory to this new .githooks directory under version control. To test that this works, make any edit to a .js file and commit. The script should run. Then, erase the test commit with 'git reset --soft HEAD^' to revert one commit back. 

## Automatic Doc Generation

We are using JSDocs for our automatic doc generation. Using github actions, a command will be run for JSDocs that will generate html files that will document the .js files in our source directory. The files are deployed to Github Pages on the gh-pages branch of our repository on push and pull request. The static site is deployed to this [link](https://cse110-sp21-group15.github.io/cse110-sp21-group15/)

Visual Studio Code can automatically generate JSDoc comments for methods if you type '/**' above a given method or constructor. Code must be commented in JSDoc format in order for the html files to be automatically generated. [This](https://jsdoc.app/about-getting-started.html) is some basic documentation on how to write JSDoc style comments. There are more examples in the source directory. 

## Deployment

The landing page for JRNL is deployed through Netlify. [This](https://jrnl-site.netlify.app/) is the link to our deployed page. Netlify automatically deploys the landing page when code is pushed to the main branch. 
