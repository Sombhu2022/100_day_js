// fibonacci serise using recurtion 

// formula => f(n) = f(n-1)+f(n-2)

n=5

const fibonacci=(num)=>{
  if (num <= 1) {
    return num
  } else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}


while( n > -1){
 console.log(fibonacci(n--));
}

