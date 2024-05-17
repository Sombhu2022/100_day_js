//date validation without using pre define functions.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


const dateValidator = (date)=>{

    const dateArr = date.split('/')
    console.log(dateArr);
    if(Number(dateArr[0])%2 === 0) 
        {
            if(dateArr[0]==='02'){
                if(isLeapYear(Number(dateArr[2]))) return /^(0[0-9]{1}|1([0-2]){1})\/(0[0-9]{1}|[12]{1}[0-9]{1})\/((19|20)[0-9]{2})$/.test(date)
                else return /^(0[0-9]{1}|1([0-2]){1})\/(0[0-9]{1}|[12]{1}[0-8]{1})\/((19|20)[0-9]{2})$/.test(date)    
            }
            return /^(0[0-9]{1}|1([0-2]){1})\/(0[0-9]{1}|[12]{1}[0-9]{1}|30)\/((19|20)[0-9]{2})$/.test(date)

        }

    return /^(0[0-9]{1}|1([0-2]){1})\/(0[0-9]{1}|[12]{1}[0-9]{1}|3[0-1]{1})\/((19|20)[0-9]{2})$/.test(date)
}

console.log(dateValidator('05/31/2002'));
console.log(dateValidator('04/30/2002'));
console.log(dateValidator('04/31/2002'));
console.log(dateValidator('02/29/2025'));
console.log(dateValidator('02/29/2024'));