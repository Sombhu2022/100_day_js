// hash tag genarator ...
//input -> my name is sombhu das
//output-> #MyNameIsSombhuDas

const hashTagGenarator=(str)=>{
   // split function return array from  string  
   str = str.split(" ") // [ 'My', 'Name', 'Is', 'Sombhu', 'Das' ]
   str =str.map((ele)=>{
      ele = ele[0].toUpperCase() + ele.slice(1)
      return ele
   })
   // join function return string from array 
   str="#"+str.join("") // #MyNameIsSombhuDas 
   return str
}

console.log(hashTagGenarator("my name is sombhu das"));