/*
    ROMAN TO INTEGER. LEETCODE 13
*/

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

/**
 * First approach solution
 * @param {*} s - The roman symbol (number).
 * @return {number} - The equivalent roman number in decimal representation
 */

const romanSymb = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
]);

function romanToInt (s) {
    //Keep track of the sum
    let sum = 0;

    //Keep track of the i symbol of s
    let i = 0;

    //Walk through the roman number one by one
    while (i < s.length) {
        //Consider boundary conditions for checking symbol pairs. 
        if(i < s.length-1) {
            //We take the symbols pair including the current symbol
            const twoSymbols = s.slice(i, i+2);
            console.log(twoSymbols);
            //Check if the pair is part of the substraction instances
            if(romanSymb.has(twoSymbols)) {
                //Sum the value of the corresponding subtraction instance
                sum += romanSymb.get(twoSymbols);

                //Jump the second symbol because it is part of the substraction instance
                i = i+2;

                //Do anything else
                continue;
            }
        }

        //Consider only the current symbol
        const oneSymbol = s[i];

        //Sum the value of the corresponding symbol
        sum += romanSymb.get(oneSymbol);

        //Increment i to check for the next value. 
        i = i+1;
    }

    return sum;
}