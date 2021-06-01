# Using IndexDB for the Database

* Status: accepted
* Deciders: Rahul Dadlani
* Date: 2021-05-27

## Context and Problem Statement

What should we use to store the app's data?

## Decision Drivers <!-- optional -->

* Must offer persistent storage
* Should be performant

## Considered Options

* IndexedDB
* CouchDB

## Decision Outcome

Chosen option: IndexedDB, because operations performed are asynchronous and would not block the UI or other operations in our code. 