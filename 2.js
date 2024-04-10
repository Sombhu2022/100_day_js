// hash tag genarator ...
//input -> my name is sombhu das
//output-> #MyNameIsSombhuDas

const hashTagGenarator=(str)=>{
   // split function return array from  string  
   str = str.split(" ") // [ 'my', 'name', 'is', 'sombhu', 'das' ]

   str =str.map((ele)=>{
      if(ele === "") {
         return ""
      }
      ele = ele[0].toUpperCase() + ele.slice(1)
      return ele
   })
   // join function return string from array 
   str="#"+str.join("") // #MyNameIsSombhuDas 
   return str
}

console.log(hashTagGenarator("my      name is3 -      sombhu das"));