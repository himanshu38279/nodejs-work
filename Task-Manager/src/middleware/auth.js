const User = require('../models/user')
const jwt =require('jsonwebtoken')

const auth =async (req,res,next)=>{
    console.log("auth Middleware")
    try{
        const token =req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,"thisismycourse")
        console.log(decoded)
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        console.log(user)
        req.token=token
        req.user = user
        console.log(token)
        next()
    }catch(e){
console.log(e)
 res.status(401).send({error:"Plaese authenticate token"})
    }
    
}

module.exports =auth