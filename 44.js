

const fizzBuzz = (low= 1 , high=low)=>{
     let arr = []
     if (low <= high) {
         for( let i = low ; i<= high ; i++){
            arr.push(i);
         }   
     } else {
        for( let i = high ; i<= low ; i++){
            arr.push(i);
         }
     }

     arr = arr.map((ele)=>{
        if (ele % 3 === 0 && ele % 5 ===0 ) return 'FrzzBuzz'
        else if(ele % 3 === 0) return 'Frzz'
        else if(ele % 5 === 0) return 'Buzz'
        else return ele
     })
    
     return arr
}

console.log(fizzBuzz(10,15));
console.log(fizzBuzz(20,15));
console.log(fizzBuzz(15,15));
console.log(fizzBuzz(15));
console.log(fizzBuzz( "" , 15));