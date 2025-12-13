/*
    LONGEST CONSECUTIVE SEQUENCE. LEETCODE 128
*/

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:

Input: nums = [1,0,1,2]
Output: 3

Interesting cases of study:
[100,4,200,1,3,2]
[0,3,7,2,5,8,4,6,0,1]
[1,2,0,1]
[0]
[0,0]
[]
*/

/**
 * First approach using Hash Set and considering O(n) time complexity as the problem says.
 * @param {Array<number>} nums - Unsorted array of integers   
 * @returns {number} length of the longest consecutive sequence of numbers
 */

function longestConsecutive (nums) {
    //Basic case when nums is an empty array
    if(nums.length === 0) return 0;

    //We convert nums into set to avoid duplicates and keep the O(n) time complexity
    const numsSet = new Set(nums);

    //Basic case when nums has only one element
    if(nums.length === 1) return 1;
    
    //Keep track of the max length of the consecutive sequence
    let maxConsecutive = 0;

    //Iterate over the set to find the initial elements of the sequences in the set
    for(let num of numsSet) {
        
        //Evaluate the starting element of a new sequence. To be the start of a sequence the element num-1 must not be present in the set
        if(!numsSet.has(num-1)) {
            
            //We keep track of the current element of the current sequence
            let currNum = num;

            //We keep track of the length of the current sequence
            let lenCurrSequence = 1;

            //We look for the next elements of the current sequence
            while(numsSet.has(currNum + 1)) {

                //If the next element of the possible sequence is in the set, we update the current element
                currNum++;

                //And we update the length of the current sequence
                lenCurrSequence++;
            }

            //Once we complete identifying the sequence we look for the max length of all the sequence identified until this point
            maxConsecutive = Math.max(maxConsecutive, lenCurrSequence);
        }
    }

    return maxConsecutive;
}

//Time complexity O(n)
//Space complexity O(n) 