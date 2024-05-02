
const isObjectEmpty = (obj={})=>{

    if(!obj) return `${obj} is empty`
    for(let val of Object.values(obj)){
        console.log(val , typeof val);
        if(val != null || val != undefined  ){
           return `${obj} is not empty`
        } 
    }
    return `${obj} is empty`
}

console.log(isObjectEmpty({key: null , key2:undefined }));
// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({key:undefined , key2:'null'}));