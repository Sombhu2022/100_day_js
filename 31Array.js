// fill all element in array using  recursive function ...

let arr =[]
const arrayFill = (low , high)=>{
    if(low === high) return arr.push(low)
    arr.push(low)
    arrayFill(low+1 , high)
    return arr
    
}

console.log(arrayFill(2,10));