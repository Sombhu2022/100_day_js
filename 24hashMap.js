// find the total count of any number in an array ..

const hashMap=(arr)=>{
    hash ={}
    console.log(arr);
    arr.forEach(ele=>{
        hash[ele]= ( hash[ele] || 0)+1
    })
    return hash
}

console.log(hashMap([3,4,2,3,4,2,1,2,3,4,5]));