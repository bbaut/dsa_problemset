from collections import defaultdict
from typing import List


class Solution:
    """
        HashMap + Sorting solution: We make use of the definition of anagrams and sort each string in the array.
            This sorted string must be the same for each anagram so we can use it as key of the HashMap to group
            all anagrams with the same sorted string.

        Args:
            str: List of strings.

        Returns:
            The list of lists of anagrams.
    """
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #Define the hash map. Using defaultdict avoids manual existence checks
        groups = defaultdict(list)

        for s in strs:
            #Sort the string and use it as key
            sorted_str = ''.join(sorted(s))
            #Use the sorted string as key
            groups[sorted_str].append(s)

        return list(groups.values())
    """
    Time complexity O(n * k log k) considering n the length of the array and k the average length of the strings because we are ordering each string
    Space complexity O(n * k)
    """

    """
        HashMap + Counter solution: We make use of the definition of anagrams and count hoy many times does each
            character appears in every string of the array.
            This count of chars must be the same for each anagram so we can use it as key of the HashMap to group
            all anagrams with the same count. To track the count we use a list DS but a DS tuple to use it as key. 

        Args:
            str: List of strings.

        Returns:
            The list of lists of anagrams.
    """
    def groupAnagramsOpt(self, str: List[str]) -> List[List[str]]:
        #Define the hash map. Using defaultdict avoids manual existence checks
        groups = defaultdict(list)

        for s in str:
            #Fixed count of 26 letters (a-z)
            count = [0]*26
            
            #Iterate over the chars of the string
            for chr in s:
                #Locate the corresponding index of the char and add one to the counter of that char
                count[ord(chr) - ord('a')] += 1
            
            #Convert count from list to a tuple to use it as key of the hash map
            #Lists are not hashable in Python but tuples are.
            groups[tuple(count)].append(s)
        
        return list(groups.values())
    
    """
    Time complexity O(n * k) considering n the length of the array and k the average length of the strings
    Space complexity O(n) for the hash map
    """