class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let counts = new Map()

        for (let ch of s) {
            counts.set(ch, (counts.get(ch) || 0) + 1)
        }

        for( let ch of t){
            if (!counts.get(ch)) return false
            else{
                counts.set(ch, counts.get(ch)-1)
                if (counts.get(ch) === 0)  counts.delete(ch)
            }
        }

        return counts.size === 0
        
    }
}
