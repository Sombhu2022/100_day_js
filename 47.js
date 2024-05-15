// find the sequence of number from  a input string

const findDigit = (str)=>{
    // + when we use + , means we check minimum one digit are here ...  
    return str.match(/\d+/g);
}

console.log(findDigit('ab1234ty67oi9df8')); //[ '1234', '67', '9', '8' ]
console.log(findDigit('som@1234das12...68ji')); //[ '1234', '12', '68' ]

// refarance :---> https://www.youtube.com/watch?v=-BQg9O_TuE4