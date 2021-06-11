# Composite Run Step Actions

* Status: accepted
* Deciders: Rahul Dadlani, Emily Jewik, Zain Khan
* Date: 2021-05-24

## Context and Problem Statement

How should we organize Github Actions?

## Decision Drivers <!-- optional -->

* Actions should be reusable
* We want different workflows for multiple branches

## Considered Options

* Composite run steps actions
* Github Actions in main.yml

## Decision Outcome

Chosen option: Composite run steps actions, because they allow us to easily reuse actions and organize our workflows in a more streamlined way