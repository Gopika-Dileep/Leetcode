/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let maps = {}
    let mapt = {}

    for (let i = 0; i < s.length; i++) {
        let a = s[i]
        let b = t[i]

        if (maps[a] && maps[a] !== b) return false
        if (mapt[b] && mapt[b] !== a) return false

        maps[a] = b
        mapt[b] = a
    }
    return true

};