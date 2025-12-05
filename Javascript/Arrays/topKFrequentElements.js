/*
    TOP K FREQUENT ELEMENTS. LEETCODE 347
*/

/*
    Given an array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

/**
 * Approach solution: Bucket Sort Approach
 * @param {Array<number>} nums - The array of elements.
 * @param {number} k - The num of most frequent elements.
 * @returns {Array<number>} Array of the answer with the k most frequent elements.
 */

function topKFrequent (nums, k) {
    // Create a hash map to count the frequency of the elements
    const counterMap = new Map();

    //Create an array to store the result most frequent elements
    let mostFreqElem = [];

    //Fill the hash map
    for(let num of nums) {
        counterMap.set(num, (counterMap.get(num) || 0) + 1);
    }

    //Create an array to store buckets of elements in such a way that the index of the array represents the frequency of the elements.
    const buckets = Array.from({length: nums.length + 1}, () => []);

    //Fill the buckets.
    for(let [key, value] of counterMap) {
        buckets[value].push(key)
    }

    //Iterate over the buckets backwards (from the most frequent elements) upto we have k elements.
    for(let i = buckets.length-1; i>=0 && mostFreqElem.length < k; i--) {
        if(buckets[i].length > 0) {
            mostFreqElem.push(...buckets[i]);
        }
    }

    //Return slice in case we have some extra element in the result array because of the last bucket. 
    return mostFreqElem.slice(0,k);
}

/**
 * Approach solution: Bucket Sort Approach. Using flat() method.
 * @param {Array<number>} nums - The array of elements.
 * @param {number} k - The num of most frequent elements.
 * @returns {Array<number>} Array of the answer with the k most frequent elements.
 */

function topKFrequent (nums, k) {
    // Create a hash map to count the frequency of the elements
    const counterMap = new Map();

    //Create an array to store the result most frequent elements
    let mostFreqElem = [];

    //Fill the hash map
    for(let num of nums) {
        counterMap.set(num, (counterMap.get(num) || 0) + 1);
    }

    //Create an array to store buckets of elements in such a way that the index of the array represents the frequency of the elements
    const buckets = Array.from({length: nums.length + 1}, () => []);

    //Fill the buckets.
    for(let [key, value] of counterMap) {
        buckets[value].push(key)
    }

    //Flat the buckets array from 2D to 1D. Considering the flat() method holds the order
    mostFreqElem = buckets.flat();

    //Return the most frequent element (slice the resulting array backwards)
    return mostFreqElem.slice(-k);
}