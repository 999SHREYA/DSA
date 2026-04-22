
function isValidPalindrom(s){
    let i = 0;
    let j = s.length-1;
    while(i<j){
        while(i<j && !isValid(s[i])){
            i++
        }
         while(i<j && !isValid(s[j])){
            j--
        }
        if(s[i]!==s[j]){
            return false
        }
        i++;
        j--
        
    }
    return true
}
function isValid(ch){
    return /[a-z0-9]/i.test(ch); 
}
const result  = isValidPalindrom(" le v el")
console.log(result)