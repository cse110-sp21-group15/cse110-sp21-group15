# Determined Testing Tools

* Status: accepted
* Deciders: Zain Khan and Emily Jewik
* Date: 2021-05-09 


## Context and Problem Statement
What tools should we use for testing purposes?

## Decision Drivers

* Compatible with JavaScript
* Very easy to set up and test

## Considered Options

* Jest
* Selenium

## Decision Outcome

Chosen option: "Jest", because everyone on the team was already familiar with Jest (from the lab), and it wasn't too hard to set up

### Positive Consequences

* Made testing accessible and easy

## Pros and Cons of the Options

### Jest


* Good, beacause it was easy to set up
* Good, because makng an action to run tests upon PRs was simple
* Bad, because we forgot to also add testing for jest-puppeteer which took some time to figure out and fix

