// remove duplicate value from array ...


//using set
const duplicateValue = (arr)=>{
  const res = new Set(arr)
  return Array.from(res)
}

console.log(duplicateValue([1,5,3,1,2,2,2,2,-2,2,2,-2,4,1,5,9]));
console.log(duplicateValue([]));