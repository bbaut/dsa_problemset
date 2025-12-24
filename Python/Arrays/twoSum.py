"""
    TWO SUM. LEETCODE 1
"""

"""
Given an array of integers nums and a intenger target return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution and you may not use the same element twice. You can return the answer in any order 
"""

from typing import List

"""
    Hash Map solution: complements approach.

    Args:
        nums: The nums array.
        target: The target we are looking for.

    Returns:
        The indices array.
"""

def twoSum (nums: List[int], target: int) -> List[int]:
	complements: dict[int, int] = {};
	
	for i in range(len(nums)):
		#Compute the complement of the current element
		complement = target - nums[i]	
		
		#Have we seen the complement of the current element before?
		if complement in complements:
			return [complements[complement], i]
			
		#Add nums[i] to later check if the current int is the complement of another int
		complements[nums[i]] = i

"""
Time complexity O(n) considering the array is already sorted as in the example.
Space complexity O(n)
"""