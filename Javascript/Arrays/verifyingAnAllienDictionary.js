/*
    VERIFYING AN ALIEN DICTIONARY. LEETCODE 953
*/

/*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
*/

/**
 * First approach solution using hash map
 * @param {Array<String>} words - The words of aliens.
 * @param {string} order - The alien alphabet order.
 * @return {boolean} - The words are sorted or not.
 */


function isAlienSorted (words, order) {
    const orderMap = new Map();

    for(let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }

    //Iterate over the words array considering we are going to take pairs, so we do not consider the last element. 
    for(let i = 0; i < words.length-1; i++) {
        console.log(i)
        //Iterate over the characters of the words
        for(let j = 0; j < words[i].length; j++) {

            //Check if the second word is a prefix of the first word
            if(j >= words[i+1].length) return false;
            console.log(1)

            //Check if the current letter is not the same
            if(words[i][j] !== words[i+1][j]) {
                //We need to compare positions
                const currentLetter = orderMap.get(words[i][j]);
                const nextLetter = orderMap.get(words[i+1][j]);

                //Check the order of the letters
                if(nextLetter < currentLetter) return false;
                console.log(2)

                //We found a match so we can continue
                break;
            }
        }
    }

    return true;
}

//Time complexity: O(n) where n is the number of words given
//Space complexity: O(n)