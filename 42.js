// currency converter

const currencyConvert = (ammount , from , to )=>{
    if (from == 'USD') {
        return ammount*rates[to]
    } else {
        const res = (rates.USD / rates[from]) * ammount
        return (res * rates[to]).toFixed(2)
    }

}

const rates = {
    USD:1,
    EUR:0.8,
    GBP:0.9,
    INR:82
}

console.log(currencyConvert(1.6 , 'EUR' , 'INR'));
console.log(currencyConvert(1.6 , 'INR' , 'INR'));
console.log(currencyConvert(100 , 'USD' , 'INR'));
console.log(currencyConvert(1.8 , 'GBP' , 'INR'));