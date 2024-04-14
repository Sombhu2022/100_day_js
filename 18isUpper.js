// isUpper or isLower 

const isUpper = (char)=>
{
    if(char === " " || char === "") return false
    if(char === char.toUpperCase()) return true
    return false
} 

const isLower = (char)=>{
    if(char === " " || char === "") return false
    if(char === char.toLowerCase()) return true
    return false
} 

console.log(isUpper("U"));
console.log(isUpper("u"));
console.log(isUpper(" "));
console.log(isLower("s"));
console.log(isLower("S"));
console.log(isLower(" "));