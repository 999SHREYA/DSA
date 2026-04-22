//  Palindrom 
//  level ?

function palindrom(s){
    let i = 0;
    let j = s.length -1;
    console.log(s,i,j)
    while(i<j){
        if(s[i]!==s[j])
        {
            return false
        }

        
        i++;
        j--
    }
    return true
    
}
const ispalindrom = palindrom("level")
console.log(ispalindrom)