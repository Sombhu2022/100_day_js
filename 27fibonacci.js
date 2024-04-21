// fibonacci serise using recurtion 

// formula => f(n) = f(n-1)+f(n-2)

const fibonacci=(num)=>{
  if (num <= 1) {
    return num
  } else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}

console.log(fibonacci(0));