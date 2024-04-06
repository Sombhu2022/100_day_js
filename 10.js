// check equality of two array 

const arrayEqual = (arr1 , arr2)=>{
   if (arr1.length !== arr2.length) return false

   // JavaScript Array every() method checks if all elements in an array pass a test specified by a function.
   return  arr1.every((ele , index , array)=>{
      return ele === arr2[index]
   })
  
}

console.log(arrayEqual([1,2,3] , [1,2,3]));