/*
    CONTAINS DUPLICATE II. LEETCODE 219
*/

/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i -j) <= k
*/

/**
 * Approach solution: Using an auxiliary Hashset and window approach. Basically we are looking for the duplicate values within a window (subarray) of size k.
 * @param {Array<number>} nums - The nums array. 
 * @param {number} k - The subarray size
 * @returns {boolean} Exists a duplicate or not
 */


function containsDuplicate2 (nums, k) {
    //Set to store the integers in the window of size k
    const windowSet = new Set();

    for(let i = 0; i < nums.length; i++) {
        //Check if the current num is present in the current windowSet
        if(windowSet.has(nums[i])) return true;

        //If it is not present, then add it to the current windowSet
        windowSet.add(nums[i]);

        //Remove the first element of the the current window keeping the window size to look for the condition abs(i-j) <= k.
        if(windowSet.size > k) {
            windowSet.delete(nums[i-k]);
        }
    }

    return false
}

/**
 * Approach solution: Using an auxiliary HashMap and look for conditions to be fulfilled explicitly
 * @param {Array<number>} nums - The nums array. 
 * @param {number} k - The subarray size
 * @returns {boolean} Exists a duplicate or not
 */

function containsDuplicate2HM (nums, k) {
    //Map to store integers already seen
    const seenNumbers = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        //Check if the current integer is the Map
        if(seenNumbers.has(nums[i])) {
            // Return the index of the number seen before
            const idxSeenNumber = seenNumbers.get(nums[i]);
            //Check if both conditions are fulfilled. If so return true. 
            if(nums[i] === nums[idxSeenNumber] && Math.abs(i - idxSeenNumber) <= k) return true;
            //If one condition or neither both are met, then do nothing and continue
        }

        //If I have not seen before the current integer store in the map as the key and its index as the value.
        seenNumbers.set(nums[i], i);
    }

    return false;
}