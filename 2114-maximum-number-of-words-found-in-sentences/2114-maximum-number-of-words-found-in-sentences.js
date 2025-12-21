/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let length = 0 
    for(let i =0; i<sentences.length ; i++){
        let count =0
        let sen = sentences[i].split(" ")
        for(let j = 0 ; j<sen.length ;j++){
            count++
        }
        if(count > length ){
            length =count
        }
    }
    return length
};