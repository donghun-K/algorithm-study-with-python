class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        for i, n1 in enumerate(nums):
            n2 = target - n1
            
            if n2 in nums[i+1:]:
                return nums.index(n1), nums[i + 1:].index(n2) + (i + 1)