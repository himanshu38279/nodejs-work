const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')


router.post('/users',async (req,res)=>{
    // const task1 = new Tasks(req.body)
    // try{
    //     await task1.save()
    //     res.status(201).send(task1)
    // }catch(e){
    //     res.status(400).send() 
    // }

    // task1.save().then(()=>{
    //     res.status(201).send(task1)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })

   


    const user = new User(req.body)
    
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
        console.log(user)
    }catch(e){
        res.status(400).send(e) 
    }

    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((error)=>{
    //     res.status(400).send()
    // })
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateAuthToken()
        // console.log(token)
        res.send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/users/me',auth,async (req,res)=>{

    res.send(req.user)
    // try{
    //     const users= await User.find({})
    //     res.send(users)
    // }catch(e){
    //     res.status(500).send()
    // }
    
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((error)=>{
    //     res.status(500).send()
    // })
})

router.post('/users/logout',auth, async (req,res)=>{
    try{
         req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
         })
         await req.user.save()
         res.send()
    }catch(e){
            res.status(500).send();
    }
})


router.post('/users/logoutall',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
   }catch(e){
           res.status(500).send();
   }
})
 

router.get('/users',async (req,res)=>{

    try{
        const users= await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
    
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((error)=>{
    //     res.status(500).send()
    // })
})


// router.get('/users/:id',async (req,res)=>{
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

    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         res.status(400).send()
    //     }
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
// })



//Update the in the uswr details

router.patch('/users/me',auth,async(req,res)=>{
    const upadtes =Object.keys(req.body)
    const allowedUpdated= ["age" ,"name" , "email" ,"password"]
    const isvalidOperator = upadtes.every((update)=> allowedUpdated.includes(update)
    )
    
    if(!isvalidOperator){
        return res.status(400).send({error:'Invalid updates'})
    }
    
    
    try{

       

        upadtes.forEach((update)=>req.user[update] = req.body[update])

        await req.user.save()

        //const user= await User.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
        // if(!user){
        //     return res.status(400).send()
        // }
        res.send(req.user)
        console.log(user)
    }catch(e){
        res.status(400).send(e)
    }
})
// router.patch('/users/:id',async(req,res)=>{
//     const upadtes =Object.keys(req.body)
//     const allowedUpdated= ["age" ,"name" , "email" ,"password"]
//     const isvalidOperator = upadtes.every((update)=> allowedUpdated.includes(update)
//     )
    
//     if(!isvalidOperator){
//         return res.status(400).send({error:'Invalid updates'})
//     }
    
    
//     try{

//         const user = await User.findById(req.params.id)

//         upadtes.forEach((update)=>user[update] = req.body[update])

//         await user.save()

//         //const user= await User.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
//         if(!user){
//             return res.status(400).send()
//         }
//         res.send(user)
//         console.log(user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

router.delete("/users/me",auth,async (req,res)=>{
    try{

// const user= await User.findByIdAndDelete(req.params.id)
// if(!user){
//     return res.status(400).send()
// }
await req.user.remove()
 res.send(req.user)

    }catch(e){
        res.status(500).send()
    }
})



// router.delete("/users/:id",async (req,res)=>{
//     try{
// const user= await User.findByIdAndDelete(req.params.id)
// if(!user){
//     return res.status(400).send()
// }
// res.send(user)

//     }catch(e){
//         res.status(400).send(e)
//     }
// })

module.exports = router;