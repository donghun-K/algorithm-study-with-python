class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        nums_dict = {}
        
        for i, n in enumerate(nums):
            nums_dict[n] = i
            
        for i, n in enumerate(nums):
            if target - n in nums_dict and i != nums_dict[target - n]:
                return nums.index(n), nums_dict[target - n]