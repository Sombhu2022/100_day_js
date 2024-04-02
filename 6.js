// check a string palindrom or not 

const checkPalindrom =(str)=>{
    //   /[^A-Za-z0-9_]/g  -> this reguler expresion replece all non string char
  str = str.toLowerCase().replace(/[^A-Za-z0-9_]/g , "")
  const r_str = str.split("").reverse().join("")
  console.log(str);
  return str === r_str
}

console.log(checkPalindrom("Mad,am"));
console.log(checkPalindrom("A man , a plan , a canal , Panama"));
