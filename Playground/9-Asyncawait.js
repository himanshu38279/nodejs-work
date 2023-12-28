const add =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0||b<0){
                reject("number should be positive")
            }
            resolve(a+b)
        },2000)
    })
}



const dowork = async()=>{
    // throw new Error('something went wrong')
    const sum= await add(1,2)
    const sum1 = await add(sum,-5)
 return sum
}


dowork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('e',e)
})