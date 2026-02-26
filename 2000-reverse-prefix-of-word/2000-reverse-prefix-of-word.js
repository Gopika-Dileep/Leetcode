/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

    if(word.includes(ch)){
        let n = word.indexOf(ch)
    let str=""
        for(let i = n ;i>=0;i--){
            str+=word[i]
        }
        for(let j = n+1;j<word.length;j++){
            str+=word[j]
        }
        return str
    }
    return word
};