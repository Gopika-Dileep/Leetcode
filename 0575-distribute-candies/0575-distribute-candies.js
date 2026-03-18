/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const candy = [...new Set(candyType)]
    let half = candyType.length / 2
    if (candy.length >= half) {
        return half
    } else {
        return candy.length
    }

};