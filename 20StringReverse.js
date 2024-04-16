// string reverse with out using builed in function ...

const stringReverse =(str)=>{
    let strRev =""
   const size = str.length
   for(let j=size-1 ; j> -1 ; j-- ){
       strRev += str[j]
   }
 return strRev
}

console.log(stringReverse("sombhu das"));
