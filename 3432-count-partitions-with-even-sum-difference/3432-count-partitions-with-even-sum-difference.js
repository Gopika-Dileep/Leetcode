/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {

    let count =0
    let s1=0
    for(let i = 0; i<nums.length-1;i++){
        s1+=nums[i]
        let s2=0
        for(let j = i +1;j<nums.length;j++){
            s2 +=nums[j]
        }
        let diff = Math.abs(s1-s2)

        if(diff%2==0){
            count++
        }
    }
    return count
};