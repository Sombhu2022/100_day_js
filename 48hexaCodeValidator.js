// hexa code validator ..

const hexaCodeValidator = (str)=>{
     return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(str)
}

console.log(hexaCodeValidator("#123456"));
console.log(hexaCodeValidator("#1f3a5c"));
console.log(hexaCodeValidator("#123"));
console.log(hexaCodeValidator("#2334"));
console.log(hexaCodeValidator("#233ehg"));
console.log(hexaCodeValidator("233ehg"));