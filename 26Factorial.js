// factorial using recurtion ...

fact=1
const factorial = (num)=>{
    if(num === 0) return 1
    return num *factorial(num-1)
}

console.log(factorial(5));