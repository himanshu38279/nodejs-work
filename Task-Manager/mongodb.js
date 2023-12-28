const mongodp= require('mongodb')
const ObjectId= mongodp.ObjectId
const MongoClient = mongodp.MongoClient

const id= new ObjectId()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)
const connectURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-Manager'

MongoClient.connect(connectURL,{ useUnifiedTopology: true },(error,client)=>{
    if(error){ 
        return console.log("error occure")
    }
    
    const db = client.db(databaseName)

    // db.collection('Tasks').find({completed: ObjectId("651bcaa19356796b98d29a39")},(error,user)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(user)
    //    })

    db.collection('Tasks').find({completed: true}).toArray((error,user)=>{
      console.log(user)
    })
      
    // db.collection('users').insertMany([{
    //     name:"Rahul",
    //     age: 29
    // },{
    //     name:" Akshit",
    //     age: "23"
    // }],(error,result)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('Tasks').insertMany([{
    //     description: "Do the work",
    //     completed: true
    // },{
    //     description: "take a bath",
    //     completed: false
    
    // }],(error,result)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertOne({
    //     name: 'himanshu Garg',
    //     age:26
    // },(error,result)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(result.ops)

    // })

//    db.collection('Tasks').updateMany(
//     { completed : true},
//     {
//         $set: { completed : false} 
//    }).then((result)=>{
//  console.log(result)
//    }).catch((error)=>{
//     console.log(error)
//    })

db.collection("Tasks").deleteOne({"description" : "Do the work"}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


    console.log("connected with mongodp server")
})
