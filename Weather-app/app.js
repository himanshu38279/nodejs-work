const geocoder = require('./utilis/geocoder')
const endpoint =require('./utilis/endpoint')

const address =process.argv[2]

if(!address){
    console.log("please provide the address")
}else{
    geocoder(address,(error,{latitude,longitude,place_name})=>{
        if(error){
            return console.log(error)
        }
    
        endpoint(latitude,longitude,(error,endpointdata)=>{
            if(error){
                return console.log(error)
            }
            console.log(place_name)
            console.log(endpointdata)
        })
    })
}