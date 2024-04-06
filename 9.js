// avarage of Array Element

const averageCalculator=(arr)=>{
   const avg = arr.reduce((pre , next)=>{
    return pre+next
   })
   return avg/arr.length
}

console.log(averageCalculator([20,40,5,10]));