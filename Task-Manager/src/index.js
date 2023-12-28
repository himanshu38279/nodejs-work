const express= require('express')
require('./db/mongoose')

const userRouter =require('./routers/user')
// const User = require('./models/user')
const Tasks =require('./models/tasks')
const taskRouter =require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

// const maintenanceMode = true; // Set this to true when the site is under maintenance.

// app.use((req, res, next) => {
// //   if (maintenanceMode) {
//     res.status(503).send('Site Under Maintenance. Please try again later.');
// //   } else {
// //     next();
// //   }
// });
// // app.use((req,res,next)=>{
//     console.log(req.method,req.path)
//     next()
// })

// const user={} ;
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

// const myFunction = async ()=>{
//     const token = jwt.sign({'_id': "abc123"},"thisismycourse")
    
//     console.log(token)

//     const data =jwt.verify(token,'thisismycourse')
//     console.log(data)
    // console.log(hashedPassowd)

    // const isMatch=await bcyptjs.compare("himnS",hashedPassowd)
    // console.log(isMatch)

// }

// myFunction()




// const bcyptjs = require('bcryptjs')

// const myFunction = async ()=>{
//     const password = "Himanshu@@1234"
//     const hashedPassowd = await bcyptjs.hash(password,8)
    
//     console.log(password)
//     console.log(hashedPassowd)

//     const isMatch=await bcyptjs.compare("himnS",hashedPassowd)
//     console.log(isMatch)

// }

// myFunction()



// app.post('/users',async (req,res)=>{
//     // const task1 = new Tasks(req.body)
//     // try{
//     //     await task1.save()
//     //     res.status(201).send(task1)
//     // }catch(e){
//     //     res.status(400).send() 
//     // }

//     // task1.save().then(()=>{
//     //     res.status(201).send(task1)
//     // }).catch((error)=>{
//     //     res.status(400).send(error)
//     // })

   


//     const user = new User(req.body)
//     console.log(req.body)
    
//     try{
//         await user.save()
//         res.status(201).send(user)
//     }catch(e){
//         res.status(400).send() 
//     }

//     // user.save().then(()=>{
//     //     res.status(201).send(user)
//     // }).catch((error)=>{
//     //     res.status(400).send()
//     // })
// })

// app.get('/users',async (req,res)=>{

//     try{
//         const users= await User.find({})
//         res.send(users)
//     }catch(e){
//         res.status(500).send()
//     }
    
//     // User.find({}).then((users)=>{
//     //     res.send(users)
//     // }).catch((error)=>{
//     //     res.status(500).send()
//     // })
// })


// app.get('/users/:id',async (req,res)=>{
//     console.log(req.params)
//     const _id= req.params.id

//  try{
//   const user= await  User.findById(_id)
//   if(!user){
//     res.status(400).send()
//   }
//   res.send(user)
//  }catch(e){
//     res.status(500).send()
//  }

//     // User.findById(_id).then((user)=>{
//     //     if(!user){
//     //         res.status(400).send()
//     //     }
//     //     res.send(user)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })


// app.post('/tasks',async (req,res)=>{
//     const task1 = new Tasks(req.body)
//     try{
//         await task1.save()
//         res.status(201).send(task1)
//     }catch(e){
//         res.status(400).send() 
//     }
// })

// app.get('/tasks',async (req,res)=>{
//     try{
//        const tasks= await Tasks.find({})
//        res.send(tasks)
//     }catch(e){
//         res.status(500).send()
//     }
//     // Tasks.find().then((tasks)=>{
//     //     res.send(tasks)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })


// app.get('/tasks/:id',async (req,res)=>{
//     console.log(req.params)
//     const _id= req.params.id
// try{
//     const user=await Tasks.findById(_id)
//     if(!user){
//         res.status(400).send()
//     }
//     res.send(user)
// }catch(e){
//     res.status(500).send()
// }

//     // Tasks.findById(_id).then((user)=>{
//     //     if(!user){
//     //         res.status(400).send()
//     //     }
//     //     res.send(user) 
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })

// // app.patch('/users/:id',async(req,res)=>{
// //     const upadtes =Object.keys(req.body)
// //     const allowedUpdated= ["age" ,"name" , "email" ,"password"]
// //     const isvalidOperator = upadtes.every((update)=> allowedUpdated.includes(update)
// //     )
    
// //     if(!isvalidOperator){
// //         return res.status(400).send({error:'Invalid updates'})
// //     }
    
    
// //     try{
// //         const user= await User.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
// //         if(!user){
// //             return res.status(400).send()
// //         }
// //         res.send(user)
// //         console.log(user)
// //     }catch(e){
//         res.status(400).send(e)
//     }
// })


// app.patch('/tasks/:id',async(req,res)=>{
//     const upadtes =Object.keys(req.body)
//     const allowedUpdated= ["completed","description"]
//     const isvalidOperator = upadtes.every((update)=> allowedUpdated.includes(update)
//     )
    
//     if(!isvalidOperator){
//         return res.status(400).send({error:'Invalid updates'})
//     }
    
    
//     try{
//         const user= await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
//         if(!user){
//             return res.status(400).send()
//         }
//         res.send(user)
//         console.log(user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })


// // app.delete("/users/:id",async (req,res)=>{
// //     try{
// // const user=await User.findByIdAndDelete(req.params.id)
// // if(!user){
// //     return res.status(400).send()
// // }
// // res.send(user)

// //     }catch(e){
// //         res.status(400).send(e)
// //     }
// // })



// app.delete("/tasks/:id",async (req,res)=>{
//     try{
// const user=await Tasks.findByIdAndDelete(req.params.id)
// if(!user){
//     return res.status(400).send('task not found')
// }
// res.send("Handle Success")

//     }catch(e){
//         res.status(400).send('Handle error')
//     }
// })


app.listen(port,()=>{
    console.log('Server is connected'+ port)
})


// const pet ={
//     name : "hal"
// }

// pet.toJSON = function() {
//     console.log(this)
//     return this
// }

// pet.toJSON = function() {
//     // console.log(this)
//     return {}
// }


// console.log(JSON.stringify(pet))


