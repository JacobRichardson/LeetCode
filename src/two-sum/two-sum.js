/** 
 * This module returns the two indexes of an array
 * that equal a given target value.
 */

// Export the function.
module.exports = twoSum;

/**
 * Returns the indexes of the two numbers that add to the target.
 * @param {Object} opts The opts object.
 * @param {Array<Number>} opts.nums An array of numbers.
 * @param {Number} opts.target The desired total of two numbers in the array.
 */
function twoSum (opts) {

  // Retrieve nums and target from opts.
  const { nums, target } = opts;

  // Set index hash map to an empty object.
  const indexHashMap = {};

  // For each number in nums.
  for (let i = 0; i < nums.length; i++) {

    // If the property already exists on the hash map.
    if (indexHashMap.hasOwnProperty(String(nums[i]))) {

      // Set the value equal to an array of the previous value and the current index.
      indexHashMap[nums[i]] = [indexHashMap[nums[i]], i];
    }

    // The property doesn't already exist.
    else {

      // Set the property of the number on the hash map and set the value equal to the index.
      indexHashMap[nums[i]] = i;
    }
  }

  // Set complement hash map to an empty object.
  const complementHashMap = {};

  // For each number in nums.
  for (let i = 0; i < nums.length; i++) {

    // Set the property of the num on the hash map and set the value equal to target minus num.
    complementHashMap[nums[i]] = target - nums[i];
  }

  // Create a array of keys.
  const keys = Object.keys(complementHashMap);

  // For each key in the hash map.
  for (let i = 0; i < keys.length; i++) {

    // If the match is a property on the hash map.
    if (complementHashMap.hasOwnProperty(complementHashMap[keys[i]])) {

      // If the complement is an array.
      if (Array.isArray(indexHashMap[keys[i]])) {

        // Return it.
        return indexHashMap[keys[i]];
      }

      // Return a new array of the current index and the index of the current num on the hash map.
      return [indexHashMap[keys[i]], indexHashMap[complementHashMap[keys[i]]]]
    }
  }
}