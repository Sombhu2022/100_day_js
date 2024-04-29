// password validation ... 
 
const validatePassword = (pass)=>{
    if (pass.length >= 8) {
        if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass)) {
          return `${pass.slice(0,3)}***** is right`
        }else{
          return `${pass.slice(0,3)}***** must be commbine of lower case , upper case and number`
        }
        
    } else {
        return  `${pass.slice(0,3)}***** must be 8 charectar`
    }

}

console.log(validatePassword("somsdkokA1"));