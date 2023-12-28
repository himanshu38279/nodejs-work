const book ={
'title': "the agale eye",
'author' :"Ryan Holiday"
}

console.log(typeof(book))

const fs = require('fs')
const jsondata=JSON.stringify(book)

 console.log(typeof(jsondata))
// fs.writeFileSync('json-1.json',jsondata)
const data = fs.readFileSync('json-1.json')
// console.log(data.author)s
console.log(typeof(data))
const stringdata=  data.toString()
console.log(typeof(stringdata))
const parsedata= JSON.parse(stringdata)
console.log(typeof(parsedata))
console.log(parsedata.uname)

parsedata.uname ="Himanshu"
parsedata.ISonline =23
const datachange = JSON.stringify(parsedata)
console.log(datachange)
fs.writeFileSync('json-1.json',datachange)
// console.log(parsedata.author)