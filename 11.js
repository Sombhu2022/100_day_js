//  sum of  digits in number 
//235 =>  2+3+5=10

const sumOfDigits =(num)=>{
   console.log(num);
   /*Array.form method convert itarable object (like string) to array , but num is a number so first we 
    convert number to string and , Number is a type of array element ..*/ 
   num = Array.from(String(num) , Number)
   let res = num.reduce((a,b)=>a += b , 0)
   return res
}

console.log(sumOfDigits(10334));