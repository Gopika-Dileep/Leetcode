/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack=[]
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    for(let char of s){
        if(char==='('||char==='{'||char==='['){
            stack.push(char)
        }else{
            let popped=stack.pop()
            if(popped!==map[char]){
                return false
            }
        }
    }
    return stack.length===0
};/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack=[]
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    for(let char of s){
        if(char==='('||char==='{'||char==='['){
            stack.push(char)
        }else{
            let popped=stack.pop()
            if(popped!==map[char]){
                return false
            }
        }
    }
    return stack.length===0
};