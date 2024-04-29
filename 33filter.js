// filter images ..

const arr =[
    {
        name:"neture img1",
        type:"neture"
    },
    {
        name:"neture img2",
        type:"neture"
    },
    {
        name:"bird img 1",
        type:"bird"
    },
    {
        name:"bird img 2",
        type:"bird"
    },
    {
        name:"tree img 1",
        type:"tree"
    },
    {
        name:"tree img 2",
        type:"tree"
    },
    {
        name:"hills img 1",
        type:"hill"
    },
    {
        name:"hills img 2",
        type:"hill"
    },
]


const imgFilter =(arr, type="all")=>{
    if(!type) return "type is required" 
    if (type === "all") {
        return arr
    } else {
        
        const res = arr.filter((ele)=> ele.type === type.toLowerCase() )
        return res
    }
}

console.log(imgFilter(arr , "Hill"));