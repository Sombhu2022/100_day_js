// password validation using reguler expression..

const passwordValidation = (pass)=>{
    if( pass.length < 8 ) return `password must be 8 character` 
    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/.test(pass);
    if(isValid) return `password is valid .`
    else return `password must be contain small later , capital latter , digit , specile char`
}

console.log(passwordValidation('Wd@123'));
console.log(passwordValidation('nijd@123'));
console.log(passwordValidation('somWd@123'));