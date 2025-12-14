/*
    FIRST MISSING POSITIVE. LEETCODE 41
*/

/*
    Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
    You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

    Example 1:

    Input: nums = [1,2,0]
    Output: 3
    Explanation: The numbers in the range [1,2] are all in the array.

    Example 2:

    Input: nums = [3,4,-1,1]
    Output: 2
    Explanation: 1 is in the array but 2 is missing.

    Example 3:

    Input: nums = [7,8,9,11,12]
    Output: 1
    Explanation: The smallest positive integer 1 is missing.
*/

/**
 * Optimal solution: in-place solution and best solution
 * @param {Array<number>} nums 
 * @returns 
 */
function firstMissingPositive (nums) {
    const n = nums.length;

    // The first missing positive number must be in the range of numbers [1, n+1], always.
    // All negative integers, zero or grater than n must be replaced by n+1 to clean up the array from these values
    for(let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n+1;
        }
    }

    //At this point the array has elements only within this interval [1, n+1]. 

    // We are going to identify the presence of the num within [1, n+1] by the negative sign at its index representing its value
    // Ex. if num 3 is present, then the value at idx 2 (num-1) must be replace by its negative representation
    for(let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if(num <= n) {
            nums[num-1] = -Math.abs(nums[num-1]);
        }
    }

    // At this point we have identify which values are present by the relation value -> idx + 1.
    
    // We iterate over the array to look for the idx of the first element with negative sign, which means that the value = idx + 1 is the first possitive integer
    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) return i+1;
    }

    //If all the elements are negative, then, it means that the first positive integer must be n+1 because the complete sequence of integers [1,n] is present in the array.
    return n+1;
}

// Time complexity O(n)
// Space complexity O(1)