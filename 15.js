// find the squear value in all element of array

const sumOfSquear =(arr)=>{
  
   return arr.reduce((acc , current )=>{
        return acc+(current**2)
    },0)
}

console.log(sumOfSquear([1,2,3,4]));