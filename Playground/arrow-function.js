// const sqare = function(x)
// {
//     return x*x
// }

// sqare = (x)=>{
//     return x*x
// } 

sqare= (x) => x*x; 

console.log(sqare(3));

const event ={
    name : "birthday party",
    list: ["himanshu","akshat","Sumit"],
    // Guest : function(){
    //     console.log("guest list for"+this.name)
    // }
    Guest() {
        console.log("guest list for "+this.name)
        this.list.forEach( (guest) => {
            console.log(guest+" is attending the "+ this.name)
        })
    }
}

event.Guest();