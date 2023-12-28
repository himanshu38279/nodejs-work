const express = require('express')
const router = new express.Router()
const Tasks = require('../models/tasks')


router.post('/tasks',async (req,res)=>{
    const task1 = new Tasks(req.body)
    try{
        await task1.save()
        res.status(201).send(task1)
        console.log(task1)
    }catch(e){
        res.status(400).send() 
    }
})

router.get('/tasks',async (req,res)=>{
    try{
       const tasks= await Tasks.find({})
       res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
  
})


router.get('/tasks/:id',async (req,res)=>{
    console.log(req.params)
    const _id= req.params.id
try{
    const user=await Tasks.findById(_id)
    if(!user){
        res.status(400).send()
    }
    res.send(user)
}catch(e){
    res.status(500).send()
}
})


router.patch('/tasks/:id',async(req,res)=>{
    const upadtes =Object.keys(req.body)
    const allowedUpdated= ["completed","description"]
    const isvalidOperator = upadtes.every((update)=> allowedUpdated.includes(update)
    )
    
    if(!isvalidOperator){
        return res.status(400).send({error:'Invalid updates'})
    }
    
    
    try{
        const user = await Tasks.findById(req.params.id)

        upadtes.forEach((update)=>user[update] = req.body[update])

        await user.save()
        // const user= await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true})
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
        console.log(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete("/tasks/:id",async (req,res)=>{
    try{
const user=await Tasks.findByIdAndDelete(req.params.id)
if(!user){
    return res.status(400).send('task not found')
}
res.send("Handle Success")

    }catch(e){
        res.status(400).send('Handle error')
    }
})

module.exports = router;