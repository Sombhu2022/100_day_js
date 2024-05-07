// create a bar chat using arr element ...

const barChat =(arr)=>{
    let res = []
    let bar =''
    res = arr.map((ele)=>{
        bar =''
        for(let i=0 ; i< ele ; i++){
            bar  += '*'
        }
        return bar
    })
    return res
}

console.log(barChat([5,12,14,18,20]));