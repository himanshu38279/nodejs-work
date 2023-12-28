require('../src/db/mongoose')
const Tasks= require('../src/models/tasks')

// #651e6d53329dee633ca64681
// Tasks.findByIdAndRemove('651e6d53329dee633ca64681').then((tasks)=>{
//     console.log(tasks)
//     return Tasks.countDocuments({completed : false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

// 651d2574a0d7ad63b845f2bc
deleteTaskAndcount= async(id,value)=>{
    const task = await Tasks.findByIdAndRemove(id)
    const count = await Tasks.countDocuments({completed : value})
    return count
}


deleteTaskAndcount('651d2574a0d7ad63b845f2bc',true).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})