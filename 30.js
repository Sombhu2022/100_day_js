// create array using range

const createArr = ( low , high)=>{
    let arr =[]
    if (low <= high) {
        for (let index = low; index <= high;  index++) {
            arr.push(index)  
        }

    } else {
      
        for (let index = low ; index >= high ;  index--) {
            arr.push(index)  
        }
        
    }
    return arr
}

console.log(createArr(-2 , 5));
console.log(createArr(2 , -2));
console.log(createArr(2 , 2));