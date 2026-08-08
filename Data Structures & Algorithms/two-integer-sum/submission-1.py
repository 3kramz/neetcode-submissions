class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}
        for i, n in enumerate(nums):
            dic[n]= i
        
        for i, n in enumerate(nums):
            sub = target - n
            if sub in dic and dic[sub] != i:
                return [i, dic[sub]]  