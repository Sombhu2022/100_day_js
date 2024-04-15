// check the string start with sub string ..

const startWithStr = (str , subStr)=>{
    //is a string method that return bool value ...
//   return str.toLowerCase().startsWith(subStr)
//   or
  return str.toLowerCase().slice(0 , subStr.length) === subStr.toLowerCase()



}

console.log(startWithStr("som das" , 'som'));