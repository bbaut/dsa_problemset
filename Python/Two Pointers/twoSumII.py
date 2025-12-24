"""
    167. TWO SUM II - Input Array Is Sorted. LEETCODE 167
"""

"""
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
"""

from typing import List

"""
    Two pointers solution: Over a sorted array implement two pointers.

    Args:
        nums: The nums array.
        target: The target we are looking for.

    Returns:
        The indices array + 1.
"""

def twoSum (nums: List[int], target: int) -> List[int]:
    #Create both pointers starting at the edges of the array
    left: int = 0
    right: int = len(nums)-1

    #We iterate while the pointers do not cross each other to not make double check 
    while left < right:
        if(nums[left] + nums[right] == target):
            return [left+1, right+1]

        #If sum is grater than the target we move our right pointer to a smaller value to decrease the sum
        if (nums[left] + nums[right] > target):
            right -= 1
        #If sum is smaller than the target we move our left pointer to a grater value to increase the sum
        else:
            left += 1 

"""
Time complexity O(n) considering the array is already sorted as in the example.
Space complexity O(1)
"""