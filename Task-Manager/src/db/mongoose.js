const validator = require('validator')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Task-Manager-api',{useFindAndModify:false,useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/users');

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

// const task1 =new Tasks({
//     description:" take a bath     ",
   
// })

// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log('error!',error)
// })
// const me = new User(
//     { 
//     name: ' Himanshu Garg    ' ,
//     age: 24,
//     email: '    Himanshu38279@gmail.com    ',
//     password: '    password123   '

// });

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })