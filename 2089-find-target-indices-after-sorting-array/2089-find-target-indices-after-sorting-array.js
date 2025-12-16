/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sortarr = nums.sort((a,b)=>a-b)
    let arr =[]
    for(let i = 0 ; i<sortarr.length;i++){
            if(sortarr[i]==target){
                arr.push(i)
            }
    }
    return arr
    
};