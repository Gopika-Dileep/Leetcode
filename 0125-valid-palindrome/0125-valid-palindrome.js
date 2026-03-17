/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (left < right && !isAlph(s[left])) left++
        while (left < right && !isAlph(s[right])) right--

        if (s[left].toUpperCase() !== s[right].toUpperCase()) {
            return false
        }
        left++
        right--
    }
    return true
};


function isAlph(char) {
    return /^[a-zA-Z0-9]$/i.test(char)
}