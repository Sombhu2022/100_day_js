// genarate rgba code using js

const rgbCode =()=>{
    let randomInt =Math.random()
  
  // Convert the integer to hexadecimal
  let hexCode = randomInt.toString(16);
    return `#${hexCode.slice(3 , 9)}`
}

console.log(rgbCode());