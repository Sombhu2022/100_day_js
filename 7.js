// find the maximum value in the array 

const maxValue =(arr)=>{
   return arr.reduce((pre , next )=>{
      if ( pre > next) return pre
      return next
   })
}

const maxWithMathMethod =(arr)=>{
    // console.log(arr , ...arr);
    return Math.max(...arr)
}

console.log(maxValue([-10,2,5,7,3]));
console.log(maxWithMathMethod([2,4,10,-70,4]));