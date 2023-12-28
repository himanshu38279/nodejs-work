// setTimeout(()=>{
//     console.log("Settime out  run ")
// })


// const getcoder = (address,callback)=>{
//     setTimeout(()=>{
//         const data=
//         {
//          latitude : 0 ,
//          longitude :0
//         }
//         return callback(data)
//     },2000)
    
//     // const data=
//     // {
//     //  latitude : 0 ,
//     //  longitude :0
//     // }

//     // return data
// }

// // const data = getcoder()
// // console.log(data)
// getcoder('india',(data)=>{
//     console.log(data)
// })


const add=(num,num2,callback)=>{

    setTimeout(()=>{
      const sum =num+num2;
      callback(sum)
    },2000)
}


add(1,4,(sum)=>{
    console.log(sum)
})