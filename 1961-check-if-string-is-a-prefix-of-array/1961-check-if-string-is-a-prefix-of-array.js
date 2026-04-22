/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let word=''
for(i=0;i<words.length;i++){
    word+=words[i]
    if(s==word){
        return true
    }

}
return false
};