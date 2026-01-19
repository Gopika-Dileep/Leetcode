/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const result = new Array(words.length);

    for (let word of words) {
        const pos = parseInt(word[word.length - 1]) - 1;
        const actualWord = word.slice(0, -1);
        result[pos] = actualWord;
    }

    return result.join(" ");
};
