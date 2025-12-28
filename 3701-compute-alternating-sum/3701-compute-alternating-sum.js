/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum1=0
    let sum2=0
    for(let i =0 ; i<nums.length;i++){
        if(i%2==0){
            sum1+=nums[i]
        }else{
            sum2+=nums[i]
        }
    }
    let res = sum1-sum2
    return res
};