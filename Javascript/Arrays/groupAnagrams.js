/*
    GROUP ANAGRAMS. LEETCODE 49
*/

/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, tipically using all the original letter exactly once.
 */

/**
 * Approach solution: Using an auxiliary Array. We keep track of the frequency of appearance of each character within s and t with the help an array.
 * @param {Array<String>} strs - The array of strings. 
 * @returns {Array<Array<String>>} Array of the grouped anagrams
 */

function groupAnagrams(strs) {
    //If the strs array is empty, return empty array
    if(strs.length === 0) return [];

    //Array to keep track of the ocurrencies of each char in each string.
    const charCounterArray = Array.from({length: 26})

    //Map to keep track of the anagrams
    const occurenciesMap = new Map();

    //Fill the hashMap with the anagrams within strs
    for(let str of strs) {
        //Fill the array of the ocurriencies with zeros for each string.
        charCounterArray.fill(0);

        for(let char of str) {
            //Increase the counter of the char related to its index.
            charCounterArray[char.charCodeAt(0) - 97]++;
        }

        //Convert the array of ocurrencies to string
        const keyStringForStr = charCounterArray.join("#");

        //Update hash map with the values of each anagram
        const strArray = occurenciesMap.get(keyStringForStr) || [];
        strArray.push(str);
        occurenciesMap.set(keyStringForStr, strArray);
    }

    return Array.from(occurenciesMap.values());
}