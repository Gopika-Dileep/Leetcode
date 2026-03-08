/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {

    const seen = new Set()
    let count=0
    for(let word of words){
        let reversed = word.split('').reverse().join('')
        if(seen.has(reversed)){
            count++
        }else{
            seen.add(word)
        }
    }
    return count
    
};