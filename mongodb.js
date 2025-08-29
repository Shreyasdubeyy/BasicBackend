const mongoose=require('mongoose')

mongoose.connect(`mongodb://localhost:27017/practice`).then(()=>{
console.log("Connected to mongo db")
})
                   


const userSchema=mongoose.Schema({
    name: String,
    phone: Number
})

module.exports=mongoose.model("user",userSchema)