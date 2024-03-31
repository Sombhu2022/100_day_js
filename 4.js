/********** find the type of tringal -> isosceles, equilateral, scalene, ******* */

const tringleType = (type)=>{
    return type
}

const tringalCheckar =(a , b , c)=>{
     if( a === b && b === c) return tringleType("equilateral");
     if( a === b || b === c || c===a) return tringleType("isosceles")
     return  tringleType("scalene")
}

console.log(tringalCheckar(4,4,4));
console.log(tringalCheckar(4,7,4));
console.log(tringalCheckar(5,8,4));

// anonymous function 
((params=400) => {
    console.log(params);
})();