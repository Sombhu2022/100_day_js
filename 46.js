// phone number check ...

const phoneNumberCheck =(num)=>{
    // /[6789]\d{9}/ means select any one from 6,7,8 or 9 .. and take any 9 digit ..

    return /^[6-9]+[\d]{9}$/.test(num)
}

console.log(phoneNumberCheck(7047808326));
console.log(phoneNumberCheck(3047808326));
console.log(phoneNumberCheck(90907047800));
console.log(phoneNumberCheck("+9907047800"));
