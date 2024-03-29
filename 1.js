// find longest word in the string .....

const longestWord = (str)=>{
    str= str.split(" ")
    let c=0
    let ans 
    str.map((ele)=>{
        // console.log(ele.length);
        if (ele.length > c){
            c = ele.length
            ans = ele
        }    
    })
    return ans
}

console.log(longestWord("my name is sombhu das"));
 