class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dic = {}
        l=[]
        for n in nums:
            if n not in dic:
                dic[n]=0
            dic[n]+=1

        sorted_l = sorted(dic.items(), key = lambda x:x[1], reverse= True)
        for i in range(k):
            l.append(sorted_l[i][0])

        return l