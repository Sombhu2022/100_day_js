// email validation 

const emailValidation = (email)=>{
   return /^[a-zA-z\d]+(?:[._][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/.test(email)
}

console.log(emailValidation("somBHU39@gmail.com"));
console.log(emailValidation("som.BHU39@gmail.com"));
console.log(emailValidation("som.BHU3_9@gmail.com"));
console.log(emailValidation("som.B..HU39@gmail.com")); // false