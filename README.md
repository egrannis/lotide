# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emmagrannis/lotide`

**Require it:**

`const _ = require('@emmagrannis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: asserts if two primitive data types are equal in value
* `eqArrays`: tests if two arrays are equal in value
* `assertArraysEqual`: asserts if two arrays are equal in value
* `assertObjectsEqual`: asserts if two objects are equal in value
* `head`: returns the first item in the array
* `tail`: returns the tail (everything except for the first item of an array)
* `middle`: takes in an array and returns the middle-most element(s)
* `countLetters`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence
* `countOnly`: given an array and an object, it returns an object containing counts of everything in the array that the input object lists as true
* `eqObjects`: takes in two objects and returns true or false, based on an exact match
* `findKey`: takes in an object and a callback function, scans the object, and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: takes in an object and a value, scans the object, and returns the first key which contains the given value
* `letterPositions`: returns all the indices (zero-based positions) in the string where each character is found
* `map`: takes in an array and a callback function, and returns a new array based on the results of the callback function
* `takeUntil`: takes in an array and a callback function, and returns the first part of the array until an element fulfills the function
* `without`: takes in a source array and items to remove array, and returns a subset of a given array, removing unwanted elements