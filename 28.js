// copy string at nth time ..

const dupString =( str , num)=>{
    let res = str
     for(let i =1 ; i< num; i++){
        res += str
     }
   return res
}

const withRepeatFun =(str , num)=>{
    return str.repeat(num)
}

console.log(dupString("som" , 2));
console.log(withRepeatFun("rs " ,0 ));