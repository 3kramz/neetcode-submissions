class Solution {

    twoSum(nums, target) {
        let counts = new Map()


        // nums=[4,5,6]
        //counts =4.5.6
        // target=10

        for (let i = 0; i < nums.length; i++) {
            //6
            let comp = target - nums[i]
            if (!counts.has(comp)) {
                counts.set(nums[i], i)
            }
           else {
                return [counts.get(comp), i]
            }
        }
    }
}
