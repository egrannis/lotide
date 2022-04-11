const head = require('../head');
const assertEqual = require('../assertEqual');


//Test Code
assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head([]), undefined); // pass
assertEqual(head([5]), 5); // pass