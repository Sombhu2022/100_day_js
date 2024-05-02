
const arrayToObject =(arr)=>{
  obj = {}
  arr.map((ele, index)=>{
      obj = { ...obj , [index]:ele}
  })
  return obj
}

console.log(arrayToObject([3,5,8,9,0,3]));
