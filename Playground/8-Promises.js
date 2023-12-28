// const dowork = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // reject("error")
// resolve("resolve ")
//     },2000)
// })

// dowork.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

const add =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}


add(1,2).then((sum)=>{
    console.log(sum)
    add(sum,4).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })
})

add(1,1).then((sum)=>{
    console.log(sum)
    return add(2,sum)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})