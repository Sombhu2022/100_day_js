// truncate string in js 

const truncateStr =( str , num)=>{
    if (str.length > num) {
        return `${str.slice(0 , num) }...` 
    } else {
        return `Not Truncate ... string length is ${ str.length } `
    }
}
console.log(truncateStr("sombhu das- 8943 jsd " , 8));
console.log(truncateStr("som" , 8));