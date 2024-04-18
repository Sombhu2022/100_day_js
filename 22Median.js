// find median in arr.

const findMedian =(arr)=>{
   const size = arr.length 
   if(size === 0) return 0 
   arr = arr.sort((a,b)=> a-b)
   if(size %2 === 0){
     return (arr[size/2] + arr[(size/2)-1])/2
   }else{
    return arr[Math.round(size/2) -1]
   }
}

console.log(findMedian([4,6,2,3,9,1]));