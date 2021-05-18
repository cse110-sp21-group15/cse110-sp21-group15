# GitHub Actions

## Background
In order to run different tasks on push or pull-requests to branches, we can use
GitHub Actions. The naming scheme is somewhat confusing as setting up an action
with GitHub Actions requires you to configure a *workflow* that runs
some number of actions. This 
[link](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
from GitHub breaks down the structure of a workflow. Make sure you read through
the entire document as it also defines terminology like jobs and steps that'll
be mentioned without definition later.

## Workflows
We can configure a workflow for every branch we make. This allows us to run
different types of tasks on different branches. For example, consider two
branches: main and new-feature. Any time we push or make a pull request to main
we want to make sure the code is formatted, linted, tested, and has documents
generated for it. But, since new-feature is a branch for prototyping a new
feature, we don't need to generate documents for any code pushed to it since any
new code might change frequently and any documents generated would be obsolete
by the next push. We need a different workflow!

GitHub Actions allows us to configure multiple workflows. Within each workflow,
we specify which branch a workflow should trigger on.

We can make two workflows: main-branch-workflow new-feature-branch-workflow. The
former triggers only on pushes or pull requests to the main branch, the latter
only triggers on pushes or pull requests to the new-feature branch.

> Our workflows live in the root directory under .github/workflows

## Multiple Workflows
Alright great! We now have two different workflows for our two branches. While
our two workflows are different, they still share some of the same features.
Any time source code is pushed to our repository, regardless of which branch
it's pushed to, we need to make sure it's formatted and linted. This means that
both branches need to format and lint code.

We could write the workflow for the main branch, make a copy of it and configure
the copy to only trigger on the new-feature branch, and then manually delete the
document generating action but we would be repeating much of the workflow code
in both files. Any time we want to make changes to the actions shared by both
workflows, we would need to update the action in two places. This could cause
the actions to be inconsistent with each other if anyone forgot to update an
action in both workflows. This method might be maintainable if there are only
two workflows that share actions, but what if there 3 or 5 or 10?
[GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
for example has 6 different types of branches and if each branch had a workflow,
there would be 6 different places where one action would have to be updated.

Since actions within workflows are composed of multiple runs: or uses: elements,
we can write a special type of file that consolidates all of the runs: elements
of a job's steps and call it with
[uses:](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses).
(Since actions are reusable units of code, similar to functions in programming,
they can be written locally, or pulled in from GitHub. Since they can be hosted
in multiple places, look especially at the difference in providing the path to
an action hosted in the same repository as our workflow vs providing a path a
public action that's hosted on GitHub and authored by someone else in the link
above).

## Composite Run Steps Actions
Think of [Composite Run Steps
Actions](https://docs.github.com/en/actions/creating-actions/creating-a-composite-run-steps-action)
(same disclaimer as before, read through this document as well) as functions in
programming. They have inputs, outputs, and run some code.

At their core, they "compose" multiple "run steps" into a single file that can
be called in different workflows. Instead of having these run steps in a
workflow under steps:, they can live in their own file.

> One key difference between the steps: section in workflow files vs in 
> Composite Run Steps Actions files is that only the run: step can be called,
> i.e., the uses: step **can not** be called. Additionally, after each run: step
> in a Composite Run Steps Actions file, the shell: must be specified (usually
> with shell: bash)

This special type of action allows us to write an action for
linting/formatting/etc in one place and call it across multiple workflows. 

We can reuse actions!

> Our actions live in the root directory under .github/workflows/actions
> **Each action lives under name-of-action/action.yaml. The individual .yaml files
> for an action are literally called 'action.yaml'.** GitHub Actions
> differentiates each action.yaml file by the directory the action.yaml file
> lives in. So, each action needs to be in its own directory under. When using
> the action in a workflow, we provide route to the directory like so:
> ./.github/workflows/actions/name-of-action

## Additinonal Notes
- For each job in a workflow, we must specify which OS it runs on. Our repo will
be built with Ubuntu so we specify 'runs-on: ubuntu-lastest'. This also means
that any Composite Run Steps Actions will run on ubuntu-latest.
- For each job in a workflow, the first item under steps: must be 'uses:
actions/checkout@v2'. This action checks out our repository's code on the
machine that runs our workflow. You can also specify 'with: ref: branch-name' if
you want to specify that code from a specific branch should be checked out
- The 'steps:' section for both workflows and Composite Run Steps Action is
defined as a yaml list so you do not need a new '-' character for every line.
Specifying '-' indicates that you are about to write a new step. Each step
should only have one run: element but can include metadata like a name: element
or a [with:](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) 
element that serves to pass inputs to a Composite Run Steps Action.
