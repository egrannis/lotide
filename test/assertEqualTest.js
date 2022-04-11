const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(1, 1);//pass
assertEqual("Lighthouse Labs", "Lighthouse Labs");//pass
assertEqual(3, 1);//fail
assertEqual("Lighthouse Labs", "Bootcamp");//fail
