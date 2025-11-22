/*
    VALID ANAGRAM. LEETCODE 242
*/

/*
Given two strings s and t  return true if t.is an anagram of s and false otherwise.
*/

/**
 * Approach solution: Using an auxiliary Array. We keep track of the frequency of appearance of each character within s and t with the help an array.
 * @param {String} s - The s string. 
 * @param {String} t - The t string.
 * @returns {boolean} t is anagram of s or not
 */

function validAnagram (s,t) {
    // To be anamagram of each other, the length of the two strings must be the same. 
    if(t.length !== s.length) return false;

    // Create an array of 26 elements started with a value of zero where each index represents each letter of the English alphabet, for example a -> 0, b -> 1, c -> 2, etc and the value at that index represents the frequency of appearance 
    const charCounterArray = Array.from({length: 26}).fill(0);

    // As s and t are of the same length we can iterate once.
    for (let i = 0; i < s.length; i++) {
        //Increase the counter of the char s[i] related to its index.
        charCounterArray[s[i].charCodeAt(0)-97]++;
        
        //Decrease the counter of the char t[i] related to its index.
        charCounterArray[t[i].charCodeAt(0)-97]--;
    }

    //If s and t are anagrams of each other, then the frequecy of each char must be zero after increasing it and decreasing it.
    // Check the frequency of each char of s and t. 
    for(const count of charCounterArray) {
        //If there are a value different from zero at some index, then t is not an anagram of s.
        if(count !== 0) return false;
    }

    return true;
}

/**
 * Approach solution: Using an auxiliary HashMap. We keep track of the frequency of appearance of each character within s and t with the help the HashMap.
 * @param {String} s - The s string. 
 * @param {String} t - The t string. 
 * @returns {boolean} t is anagram of s or not
 */

function validAnagramHM (s,t) {
    // To be anamagram of each other, the length of the two strings must be the same. 
    if(t.length !== s.length) return false;

    // Create a hash map to keep track of the frequency of the chars in each string.
    const charCounterMap = new Map();

    // As s and t are of the same length we can iterate once.
    for (let i = 0; i < s.length; i++) {
        //Create a key as: s[i] with value: 1 or increase the counter of s[i] if already exists.
        charCounterMap.set(s[i], (charCounterMap.get(s[i]) || 0) + 1);
        
        //Create a key as: t[i] with value: -1 or decrease the counter of t[i] if already exists.
        charCounterMap.set(t[i], (charCounterMap.get(t[i]) || 0) - 1);
    }

    //If s and t are anagrams of each other, then the frequecy of each char must be zero after increasing it and decreasing it.
    //Check the frequency of each char of s and t. 
    for(const [key, val] of charCounterMap) {
        //If there are a value different from zero of some key, then t is not an anagram of s.
        if(val !== 0) return false;
    }

    return true;
}