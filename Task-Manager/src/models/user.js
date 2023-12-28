const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const bcrypt1 = require('bcrypt')
const jwt = require('jsonwebtoken')

// const { errorMonitor } = require('events');

const userSchema =mongoose.Schema({ 
    name:
    {
    type : String,
    required:true,
    trim: true
},
age:{
    type: Number,
    default:0,
    validate(value){
        if(value<0){
            throw new Error("Age must be a Positive number")
        }
    }
},
email: {
    type: String,
    required: true,
    lowercase: true,
    trim:true,
    unique: true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is invalid")
        }
    }
},
password: {
    type: String,
    required: true,
    minLength: 7,
    lowercase:true,
    trim:true,
    validate(value){
        if(value.toLowerCase().includes('password')){
            throw new Error("password is not contain as passowrd")
        }
    }
    
  },
  tokens:[{
    token:{
        type:String,
        required:true,
    }
  }]
})




userSchema.pre('save',async function(next){
    const user =this
    // console.log('just before saving')
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})


userSchema.methods.toJSON = function ()
{
    const user= this
    const  userobject = user.toObject()
    delete userobject.password
    delete userobject.tokens
    return userobject
}
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email :email})
    console.log(user)
    console.log(email)
    console.log(password)
    if (!user) {
        throw new Error('Unable to login')
    }
const isMatch = await bcrypt.compare(password,user.password)
console.log(isMatch)

if(isMatch){
    throw new Error ('Unable to loging')
}
return user
}


userSchema.methods.generateAuthToken = async function (){
    try{const user = this
     const token = jwt.sign({_id:user._id.toString()},"thisismycourse")
    //  console.log(token)
    user.tokens= user.tokens.concat({token})
    await user.save()
     return token
    }catch(e){
        console.log(e)
     }
}


const User = mongoose.model('User', userSchema);
// const User = mongoose.model('User', { 
//     name:
//     {
//     type : String,
//     required:true,
//     trim: true
// },
// age:{
//     type: Number,
//     default:0,
//     validate(value){
//         if(value<0){
//             throw new Error("Age must be a Positive number")
//         }
//     }
// },
// email: {
//     type: String,
//     required: true,
//     lowercase:true,
//     trim:true,
//     validate(value){
//         if(!validator.isEmail(value)){
//             throw new Error("Email is invalid")
//         }
//     }
// },
// password: {
//     type: String,
//     required: true,
//     minLength: 7,
//     lowercase:true,
//     trim:true,
//     validate(value){
//         if(value.toLowerCase().includes('password')){
//             throw new Error("password is not contain as passowrd")
//         }
//     }
    
//   },
// });

module.exports = User;