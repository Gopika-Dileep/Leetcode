/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let remainder = sum % k;

    return remainder ;

};