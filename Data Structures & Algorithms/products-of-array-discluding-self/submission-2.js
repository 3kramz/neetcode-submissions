class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = []
        arr[0]= 1
1
    
        for (let i=1; i<nums.length; i++){
            let j=i-1
            arr[i] = arr[j]*nums[i-1]
        }

        let res = []

        // nums[1,      2,     4,    6]
        // arr [1,      1,     2,    8 ]
        // res [2*24   2*12   2*6    8 ]
        //     [48      24     12    8 ]

        let suffix = 1

        for (let i = nums.length-1 ; i>=0;i--){
            arr[i] = arr[i]*suffix
            suffix = suffix*nums[i]
        }

        return arr
    }
}
