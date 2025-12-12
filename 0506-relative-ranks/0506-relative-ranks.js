/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let arr = score.map((val, idx) => [val, idx]);

    
    arr.sort((a, b) => b[0] - a[0]);

  
    let result = new Array(score.length);

   
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i][1];
        if (i === 0) result[index] = "Gold Medal";
        else if (i === 1) result[index] = "Silver Medal";
        else if (i === 2) result[index] = "Bronze Medal";
        else result[index] = (i + 1).toString();
    }

    return result;

};