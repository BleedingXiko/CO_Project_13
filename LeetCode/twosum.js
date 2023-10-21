/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // var to store the elements as keys and their indices as values
    const numIndices = {};
  
    // loop through the array
    for (let i = 0; i < nums.length; i++) {
      // Calculate the complement needed to reach the target
      const complement = target - nums[i];
      
      // Check if the complement is in the numIndices object
      if (numIndices.hasOwnProperty(complement)) {
        // If found, return the indices of the two numbers that add up to the target
        return [numIndices[complement], i];
      }
      
      // If not found, add the current element and its index to the numIndices object
      numIndices[nums[i]] = i;
    }
      
  };