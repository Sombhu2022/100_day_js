// find total number of vowel...

vowel = [ 'a' , 'e' , 'i' , 'o' , 'u']

const viwelFinder = (str)=>{
    let count =0
    str = str.toLowerCase()
    str = Array.from(str)


/*************** logic 1 ******************** */
    // str.map((ele)=>{
    //     vowel.some((vow)=>{
    //         if( ele === vow){
    //             count +=1
    //         }
    //     })
    
    // })


    /*************** logic 2 ******************* */

    // includes() method check givin element are present or not ...
    for(let char of str){
        if(vowel.includes(char) ){
            count ++ ;
        }
    }

    return count
}

console.log(viwelFinder("SOmBhu Das o e It"));