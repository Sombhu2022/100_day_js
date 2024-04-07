// sort the array 
arr = [3,10,4,7,4,6]

// when we use sort method then js bydefult trited array element as a string 
// so out put is  [10,3,4,4,6,7] -> becouse "3" biger then '1'.
arr.sort()

// in numerical number we can use callback function 
// where (a , b) => a -> containe previous value and b containe next value from the array 
// return a-b -> to sort array in accending order , b-a -> use to sort decending order.

arr.sort((a , b)=>{
    return a-b
})


console.log(arr);