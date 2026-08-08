class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let lists = new Map()
        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('');
            if(!lists.has(sorted)){
                lists.set(sorted,[])
            }
            lists.get(sorted).push(strs[i])
        }

        return [...lists.values()]
    }
}
