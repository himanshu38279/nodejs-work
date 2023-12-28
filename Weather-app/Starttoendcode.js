// console.log("Himanshu")

// const request = require("request");

// setTimeout(()=>{
//     console.log("run after 2 second")
// },2000)

// setTimeout(()=>{
//     console.log("run after 0 second")
// },0)

// console.log("lovely")

const request = require('request')
const geocoder = require('./utilis/geocoder')
const endpoint =require('./utilis/endpoint')

// const url ="https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=e0e0737fc26fc80b53c3d8eb490df684&units=imperial"

// const geocoderurl ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGltYW5zaHUzODI3OSIsImEiOiJja3BtdjlpejY0ODl5Mm9ueG5hNHk3cnQ2In0.bxeas-SkaecgxpjkvddM7A&limit=1"

// request({url:url,json:true},(error,response)=>{
//      //console.log(response.body.main)
//     //   console.log(response.body)
//     //   const data =response.body.weather[0].description
//     //   console.log(data)
// //    const data=JSON.parse(response.body.main)
// if(error){
//     console.log("Unable to connect the weather service!")
// }else if(response.body.message){
//     console.log("Unable to find location")
// }else{
//     console.log(`${response.body.weather[0].description}. It is currently ${response.body.main.temp} degree out . It is fell like ${response.body.main.feels_like} degree out`)
// }
   
// //    console.log(response.current)
// })

// request({url:geocoderurl,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect the weather service!")
//     }else if(response.body.message){
//         console.log("Unable to find location")
//     }
//     else{
//         console.log(response.body.features[0].center[0])
//         console.log(response.body.features[0].center[1])
//     }
//     // const data = JSON.parse(response.body)
//     // console.log(data)
// })

// const request = require('request')





endpoint(37.8267,-122.4233,(error,data)=>{
    console.log('error',error)
    console.log('data',data)
})

geocoder('delhi',(error,data)=>{
    console.log('error',error)
    console.log('Data',data)
})