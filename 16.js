// find minimum into array

const minElement = (arr)=>{
    if(arr.length === 0){
        return []
    }else{

        return arr.reduce((pre , next)=> {
         if ( pre > next){
             return next
         }else{
             return pre
         }
        } )
    }
}

const minArrayEle = ( arr=[4,6,7,0,-1] )=>{
   return Math.min(...arr)
}

console.log(minElement([1,5,3,-7,8 ,3 ]));
console.log(minElement([]));

console.log(minArrayEle());