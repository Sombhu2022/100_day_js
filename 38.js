// date calculate ....

const dateCalculate = (d1 , d2)=>{
     let date1 = new Date(d1.toString().split('/') )
     let date2 = new Date(d2.toString().split('/') )
     if ( date1 == 'Invalid Date' || date2 == 'Invalid Date') return `please put valid date`
     const diff = Math.abs(date1 - date2)
     const res = Math.ceil(diff/(1000*60*60*24))
     let year=0
     let month=0 ; 
     let day=0;
     
     year = Math.floor(res/365)
     month = Math.floor((res % 365)/30)
     day = (res % 365) % 30
     
     return `${year} year, ${month} month, ${day} day`
}

console.log(dateCalculate('2002/9/23' , '2024/5/5'));