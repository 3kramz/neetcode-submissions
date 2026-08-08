class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};

        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }

        let buckets = new Array(nums.length + 1).fill(null).map(() => []);

        for (let num in obj) {
            let freq = obj[num];
            buckets[freq].push(Number(num));
        }

        let result = [];
        for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {
            for (let num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
