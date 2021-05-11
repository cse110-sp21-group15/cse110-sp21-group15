# Linting and Code Style Tools

* Status: accepted
* Deciders: Zain Khan, Emily Jewik
* Date: 2021-05-21 (when the decision was last updated)

## Context and Problem Statement
What tools should we use to enforce linting and code style?

## Decision Drivers <!-- optional -->

* Compatible with JavaScript
* Compatible with GitHub
* Customizable

## Considered Options

* CodeClimate and ESLint
* Codacity

## Decision Outcome

Chosen option: "CodeClimate and ESLint", because both tools integrate with each
other and satisfy decision drivers 

### Positive Consequences

* Easy to use- build pipeline constructed faster

### CodeClimate and ESLint

* Good, because each come with default setups that can be customized
* Good, because auto sync with GitHub
* Bad, because setup is somewhat complicated

### Codacity

* Good, because fast setup
* Bad, because no auto sync with GitHub
