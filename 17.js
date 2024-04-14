// conver to word into camelCase ....

const camelCase=(str)=>{
//    str = str.split(" ")
   str = str.split(" ").filter(
    ele=> ele !==""
   )

  let arr = str.map((ele , index)=>{
    if(index === 0) return ele.toLowerCase()
    return  ele[0].toUpperCase() + ele.slice(1).toLowerCase()
  }
).join("")

   return arr.replace(/[^A-Za-z0-9_]/g , "")
}

console.log(camelCase(" This iS DecdeToR ShiPe #      ok"));


// convert camelCase to snake_case ...

const snakeCase =(str)=>{
   let ans = str.split("").map((ele)=>{
    if(ele !== ele.toLowerCase()) return `_${ele}`.toLowerCase()
    return ele
   }).join("")
   return ans
}


const str = camelCase(" indian army fan  ")
console.log(snakeCase(str));
