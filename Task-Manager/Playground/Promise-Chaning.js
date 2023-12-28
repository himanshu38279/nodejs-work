require('../src/db/mongoose')
const User= require('../src/models/user')

// User.findByIdAndUpdate('651e67f914a2d86c1c8fcb0f',{age: 27}).then(
//     (user)=>{
//         console.log(user)
//         return User.countDocuments({age:27})
//     }).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//         console.log(e)
//     })


const updateAgeandCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}    



updateAgeandCount('651e67f914a2d86c1c8fcb0f',28).then((count)=>{
console.log(count)
}).catch((e)=>{
    console.log('e',e)
})