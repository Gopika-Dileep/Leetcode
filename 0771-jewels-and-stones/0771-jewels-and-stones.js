/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let freq = {}
    for (let i = 0; i < stones.length; i++) {
        freq[stones[i]] = (freq[stones[i]] || 0) + 1
    }
    let count = 0
    for (let i = 0; i < jewels.length; i++) {
        if (stones.includes(jewels[i])) {
            count += freq[jewels[i]]
        }
    }
    return count
};