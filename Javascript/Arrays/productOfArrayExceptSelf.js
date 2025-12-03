/*
    PRODUCT OF ARRAY EXCEPT SELF. LEETCODE 238
*/

/*
    Given an integer array nums, return an array aswer such that answer[i] is equal to the product of all the elements of nums except nums[i].
    The product of any prefix or suffix of nums is guaranteed to fit in 32-bit integer.
    You must write an algorithm that runs in O(n) time and without using the division operation
 */

/**
 * Approach solution: Using an auxiliary Arrays for prefix and suffix at each position.
 * @param {Array<number>} nums - The array of elements.
 * @returns {Array<number>} answer -  Array of the answer
 */

function productOfArrayExceptSelfFirstApproach (nums) {
    //if the array nums is empty or has one value, the answer must be itself
    if(nums.length === 0 || nums.length === 1) return nums;
    
    const answer = Array.from({length: nums.length});
    //We initialize the prefixArray array and the suffixArray with 1 because we need products accumulative. The length of the arrays is the same as nums, of course.
    const prefixArray = Array.from({length: nums.length}).fill(1);
    const suffixArray = Array.from({length: nums.length}).fill(1);

    //We compute the accumulative of left elements at each i-th position
    for(let i = 1; i < nums.length; i++) {
        prefixArray[i] =  prefixArray[i-1] * nums[i-1];
    }

    //We compute the accumulative of right elements at each i-th position
    for(let i = nums.length-2 ; i >= 0; i--) {
        suffixArray[i] =  suffixArray[i+1] * nums[i+1];
    }

    //The answer will be, then, simply the product between the accumulative of the left elements and the right elements at each i-th positon
     for(let i = 0; i < nums.length; i++) {
        answer[i] =  prefixArray[i] * suffixArray[i];
    }

    return answer;
}

/**
 * Optimal solution: Without using extra auxiliary Arrays for prexis and suffix.
 * @param {Array<number>} nums - The array of elements.
 * @returns {Array<number>} answer -  Array of the answer
 */

function productOfArrayExceptSelf (nums) {
    //if the array nums is empty or has one value, the answer must be itself
    if(nums.length === 0 || nums.length === 1) return nums;
    
    //We initialize the answer array with 1 because we need products accumulative. The length of the array is the same as nums, of course.
    const answer = Array.from({length: nums.length}).fill(1);

    //We use the prefix and suffix approach. Separate the array into two parts left and right of each element, to compute the product of each part separately without considering the element itself.
    //We initialize two variales for prefix and suffix with value 1. Because in this variables we are going to store the accumulative of the products
    let prefixProd = 1;
    let suffixProd = 1;

    //We calculate first the prefix product
    for(let i = 1; i < nums.length; i++) {
        //Calculate the prefix product (accumulative) of the left elements of the element i. 
        prefixProd = prefixProd * nums[i-1];

        //Compute the i-th accumulative product using this prefix product (Product of all elements at the right of the i-th element).
        answer[i] = answer[i]*prefixProd;
    }

    //We calculate second the suffix product
    for(let i = nums.length-2 ; i >= 0; i--) {
        //Calculate the suffix product (accumulative) of the right elements of the element i
        suffixProd = suffixProd * nums[i+1];

       //Compute the i-th accumulative product using this suffix product. (Product of all elements at the left of the i-th element).
        answer[i] = answer[i]*suffixProd;
    }

    return answer; 
}