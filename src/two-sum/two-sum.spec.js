/** 
 * This module tests the two sum module.
 */

// Imports.
const testCreator = require('../../lib/test-creator');

// Use the test creator to create the tests with the module name and the test data.
testCreator('two-sum',
  [{
    input: [

      {
        nums: [2, 7, 11, 15],
        target: 9
      }, {
        nums: [8, 1, 12, 4],
        target: 5
      }
    ],
    output: [
      [0, 1],
      [1, 3]
    ]
  }]
);