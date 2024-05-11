// cradit card validation...


// ********************  luhn algo **********************
// steps
// 1. revesse the number 123489 -> 984321
// 2. then multipy by 2 is every even number  9 8*2 4 3*2 2 1*2 
// 3. if any digit contain double digit then , subtuct by 9  like , 9 16-9 4 6 2 2 
// 4. then add all digit 
// 5. if modulas of the sum is 0 then this is valid , other wise not according to luhn algo


const craditCardValidation = (num)=>{
     let nums = num.trim().split("").filter((ele)=> ele !== " ")
     nums = nums.reverse()
     nums = nums.map((ele , index)=> {
         if(index % 2 !== 0){
            return Number(ele)*2
         }
         return Number(ele)
     } )
     // if double digit ..
     nums = nums.map((ele)=>{
         if(ele.toString().length > 1){
           
             ele = ele -9 ;
             return ele
        }
        else{

            return ele
        }
     })
     
     const sum = nums.reduce((acc , curr)=> acc+curr , 0)
     
     const isValid = sum % 10

     if ( ! isValid) {
        return true 
     } else {
        return false
     }

}

console.log(craditCardValidation("  4539 1488 0343 6467 "));