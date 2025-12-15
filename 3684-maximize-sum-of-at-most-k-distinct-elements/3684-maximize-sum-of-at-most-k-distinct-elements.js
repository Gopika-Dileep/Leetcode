/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {

    let num = [...new Set(nums)]
    console.log(num)

    let sortarr = num.sort((a,b)=>b-a)
    
    
    let arr = sortarr.slice(0,k)




    return arr


    
};