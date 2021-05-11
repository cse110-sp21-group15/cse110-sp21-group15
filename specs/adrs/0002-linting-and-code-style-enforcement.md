# Determined Linting and Code Style Tools

* Status: accepted
* Deciders: [Emily Jewik, Zain Khan]
* Date: 2021-05-09 


## Context and Problem Statement
What tools should we use for linting and enforcing code style guidelines?

## Decision Drivers

* Compatible with JavaScript
* Customizable

## Considered Options

* ESLint and CodeClimate
* Codacity

## Decision Outcome

Chosen option: "ESLint and CodeClimate", because both tools fit decision drivers
and integrate with each other

### Positive Consequences

* Improves quality of code

## Pros and Cons of the Options

### ESLint and CodeClimate


* Good, because CodeClimate auto syncs with GitHub
* Good, because it comes with default settings
* Bad, because somewhat difficult to setup

### Codacity

* Good, because easy to setup
* Bad, because no auto sync with GitHub
