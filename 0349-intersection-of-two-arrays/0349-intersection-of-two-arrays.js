/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map ={}
    let result =[]
    for(let i of nums1){
        map[i] = (map[i]||0)+1
    }
    for(let i of nums2){
        if(map[i]){
            result.push(i)
            delete map[i]
        }
    }
    return result
};