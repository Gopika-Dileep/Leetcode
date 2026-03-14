/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let map1 = new Map()
    let map2 = new Map()
    let sp = s.split(' ')
    if (pattern.length !== sp.length) return false
    console.log(sp)
    for (let i = 0; i < pattern.length; i++) {
        let a = pattern[i]
        let b = sp[i]
        if (map1.has(a) && map1.get(a) !== b) return false
        if (map2.has(b) && map2.get(b) !== a) return false

        map1.set(a, b)
        map2.set(b, a)
    }

    return true

};