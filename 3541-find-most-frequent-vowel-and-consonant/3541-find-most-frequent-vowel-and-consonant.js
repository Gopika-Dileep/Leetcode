/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
     const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // Vowels set
    const vowels = new Set(['a','e','i','o','u']);

    // Track max vowel frequency and max consonant frequency
    let maxVowel = 0, maxConsonant = 0;

    // Check each letter from 'a' to 'z'
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 97);
        if (vowels.has(char)) {
            maxVowel = Math.max(maxVowel, freq[i]);
        } else {
            maxConsonant = Math.max(maxConsonant, freq[i]);
        }
    }
    
    return maxVowel + maxConsonant;
    
};