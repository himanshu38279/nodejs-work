const name="Himanshu"
const age = 27

const data ={
    name,
    uage: age,
    location: "Haryana",
    remarks: 4.3
}

// console.log(data)

// const {location:pLocation,remarks=5}= /data

const {remarks=6}= data
console.log(remarks)
// console.log(pLocation,remarks)

const transport = (type,{uage=0,location}={})=>{
    console.log(type,uage,location)
}

transport('report')