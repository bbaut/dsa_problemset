/*
    CONTAINS DUPLICATE. LEETCODE 217
*/

/*
Given an integer array nums, return true if any value appears at last twice in the array, and return false if every element is distinct.
*/

/**
 * Brute force solution: Test every combination in the array
 * @param {Array<number>} nums - The nums array.
 * @return {boolean} Exists a duplicate or not
 */

function containsDuplicateBF(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return true;
        }
    }

    return false;
}

/*
    Time complexity: O(n^2) - Because of the two nested loops.
    Space complexity: O(1) - It is constant because we have not used extra space. 
*/

/**
 * Best approach solution: Using and auxiliary DS
 * @param {Array<number>} nums - The nums array. 
 * @returns {boolean} Exists a duplicate or not
 */

function containsDuplicate (nums) {
    const counterMap = new Set();

    for (let i = 0; i<nums.length; i++) {
        if(counterMap.has(nums[i])) return true;

        counterMap.add(nums[i])
    }

    return false;
}

/*
    Time complexity: O(n) - Because we iteare over the array only once. In the worst case n = nums.length;
    Space complexity: O(n) - Because we use an auxiliary map. In the worst case n = nums.length - 1;
*/