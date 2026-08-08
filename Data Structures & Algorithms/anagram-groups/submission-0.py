class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    
        dic = {}
        for i, n  in enumerate(strs):

            key = tuple(sorted(n))
            if key not in dic:
                dic[key] = []
            
            dic[key].append(n)

        return list(dic.values())