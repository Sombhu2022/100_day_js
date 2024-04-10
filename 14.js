// find the given value is power of 2 or not 

// 8  true  2**3
// 7 false

const powerOfTwo=(num)=>{
   for(let i=1 ; i<= num/2 +1 ; i++){
    if(2**i === num){
        return true
    }
   }
   return false
}

console.log(powerOfTwo(8));
console.log(powerOfTwo(5));