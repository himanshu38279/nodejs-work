const validator = require('validator')
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description:{
        type:String,
        required: true,
        trim: true
    },
    completed :{
        type: Boolean,
        default: false
    }
})

// taskSchema.pre('save',async function (next){
//     const task = this
//     console.log("before the save ")

//     next()
// })

const Tasks= mongoose.model("Tasks",taskSchema)

// const Tasks= mongoose.model("Tasks",{
//     description:{
//         type:String,
//         required: true,
//         trim: true
//     },
//     completed :{
//         type: Boolean,
//         default: false
//     }
// })

module.exports= Tasks