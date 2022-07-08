class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        result = 0
        for i in range(0, len(sorted_nums), 2):
            result += min(sorted_nums[i], sorted_nums[i + 1])
            
        return result
        