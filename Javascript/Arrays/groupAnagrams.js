/*
    GROUP ANAGRAMS. LEETCODE 49
*/

/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, tipically using all the original letter exactly once.
 */

/**
 * HashMap + Sorting solution: We make use of the definition of anagrams and sort each string in the array.
            This sorted string must be the same for each anagram so we can use it as key of the HashMap to group
            all anagrams with the same sorted string.
 * @param {Array<String>} strs - The array of strings. 
 * @returns {Array<Array<String>>} Array of the grouped anagrams
 */

function groupAnagrams(strs) {
    //Define the hash map. Using defaultdict avoids manual existence checks
    const occurenciesMap = new Map();

    for(let str of strs) {
        //Sort the string and use it as key
        const sortedStr = str.split('').sort().join('');

        //Use the sorted string as key
        if(!occurenciesMap.has(sortedStr)) occurenciesMap.set(sortedStr, []);
        occurenciesMap.get(sortedStr).push(str);
    }

    return Array.from(occurenciesMap.values());
}
/*
    Time complexity O(n * k log k) considering n the length of the array and k the average length of the strings because we are ordering each string
    Space complexity O(n * k)
*/

/**
 * HashMap + Counter solution: Using an auxiliary Array. We keep track of the frequency of appearance 
 *      of each character within s and t with the help an array.
 * @param {Array<String>} strs - The array of strings. 
 * @returns {Array<Array<String>>} Array of the grouped anagrams
 */

function groupAnagramsOpt(strs) {
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

/*
    Time complexity O(n * k) considering n the length of the array and k the average length of the strings
    Space complexity O(n) for the hash map
*/