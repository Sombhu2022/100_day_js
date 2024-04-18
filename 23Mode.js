// find the mode of the array ...

const findMode = (arr , val)=>{
   let hashMap ={} 
   arr.forEach(ele=>{
      hashMap[ele] = 0
   })
   arr.forEach(ele=>{
      hashMap[ele] +=1
   })
   let isPresent = arr.includes(val)
//    console.log(isPresent);
   if(isPresent){
       return hashMap[val]
   }
   return 0
}

console.log(findMode([3,5,3,4,5,3] , 3));