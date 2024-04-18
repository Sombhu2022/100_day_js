// calculate mean in js ...
const findMean =(arr)=>{
   if(arr.length === 0) return 0
   const total = arr.reduce((a,b)=> a+b)
   return total / arr.length

}

console.log(findMean([9,4,3,2,7]));