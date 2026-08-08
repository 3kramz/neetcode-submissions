class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let numMap = new Map()
        

        for (let i = 0; i < numbers.length; i++) {
            numMap.set(numbers[i], i+1)
        }

        for (let i = 0; i < numbers.length; i++) {
               let comp = target - numbers[i];

            if (numMap.has(comp) && numMap.get(comp) !== i + 1) {
                return [i + 1, numMap.get(comp)];
            }
        }
    }
}
