/*
    TWO SUM. LEETCODE 1
*/

/*
Given an array of integers nums and a intenger target return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution and you may not use the same element twice. You can return the answer in any order 
*/

/**
 * Brute force solution: Test every combination in the array
 * @param {Array<number>} nums - The nums array.
 * @param {number} target - The target we are looking for
 * @return {Array<number>} The indices array
 */

function twoSumBF (nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
}

/*
    Time complexity: O(n^2) - Because of the two nested loops.
    Space complexity: O(1) - It is constant because we have not used extra space. 
*/

/**
 * Using an auxiliary DS
 * @param {Array<number>} nums - The nums array.
 * @param {number} target - The target we are looking for
 * @return {Array <number>} The indices array
 */

function twoSumDS (nums, target) {
    //Map to store the complements of the values in the array
    const complementMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        //Check if the current num is the complement of some past value
        if(complementMap.has(nums[i])) return [complementMap.get(nums[i]), i];

        //Save the complement value of the current num
        const complement = target - nums[i];
        complementMap.set(complement, i); 
    }
}

/*
    Time complexity: O(n) - Because we iteare over the array only once. In the worst case n = nums.length;
    Space complexity: O(n) - Because we use an auxiliary map. In the worst case n = nums.length - 1;
*/


/*
    If we can loose indices order, we can implement the next solution.
*/

/**
 * Sorting array solution
 * @param {Array<number>} nums - The nums array.
 * @param {number} target - The target we are looking for
 * @return {Array<number>} The indices array
 */

function twoSumSA (nums, target) {
    nums.sort((a,b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        const sum = nums[left] + nums[right];
        
        if(sum === target) return [left, right];
        if(sum < target) {
            left++
        } else {
            right--
        }
    }
}