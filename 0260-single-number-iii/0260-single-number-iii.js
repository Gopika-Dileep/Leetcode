/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let freq = {}
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    let arr = []
    for (let key in freq) {
        if (freq[key] == 1) {
            arr.push(Number(key))
        }
    }
    return arr
};