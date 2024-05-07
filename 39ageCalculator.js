// age calculetor ...

const ageCalculetor = (dob)=>{
9
    const now = new Date()
    const dob1 = new Date(dob)
    if(dob1 == 'Invalid Date') return ` please put valid date as this formate(yyyy-mm-dd)`
    let diff = Math.abs(dob1 - now)
    const res = Math.floor(diff/(1000*60*60*24))
      
   const year = Math.floor(res/365)
   const month = Math.floor((res % 365)/30)
   const  day = (res % 365) % 30
  
    
    return `${year} year, ${month} month, ${day} day `
   
}


function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust years and months if birth month is after current month or if birth month is the same but birth day is after current day
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust days if birth day is after current day
    if (days < 0) {
        const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = prevMonthLastDay - birthDate.getDate() + today.getDate();
        months--;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}


console.log(ageCalculetor("2002-09-23"));
console.log(calculateAge('2002-9-23'));