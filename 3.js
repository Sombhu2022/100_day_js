// find the specific charecter in the given word ...

// input -> "MissIssipi" , char-> i
// output -> 4

let count =0
// using simple method
function charCounter(word , char){
   word =word.toLowerCase()
   char = char.toLowerCase()
   // using simple technique

//    for(let i=0 ; i <word.length ; i++ ){
//       if ( word[i] === char){
//         count++;
//       }
//    }
//    return count


/************************************** using reduce method ********************************************** */
// using reduce method 

array = word.split("") // split method convert string to array .
console.log(array)

let count_value= array.reduce((count , ch)=>{
    console.log(count , ch);
    if (ch === char){
       count++;
    }
    return count
} , 0)

return count_value

}


console.log(charCounter("MissIssipi" , "i"));
