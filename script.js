const express=require("express")

const app=express();

const userModel=require("./mongodb")

// app.get("/",(req,res)=>{ 
//     console.log("normal") 
//     res.send("Home page")
// })

//create
var count=1;
app.post("/:name",async(req,res)=>{
   const user=await userModel.create({
        name:req.params.name,
        phone:8698822554
    })
   // res.send(`Successfully created ${count++}`)
   // res.send(user)
     res.status(201).send({
      message: "User successfully created",
      user,
    });

})

//read
app.get("/read",async(req,res)=>{
    let users=await userModel.find()

    res.send(users)

})

app.get("/delete", async(req,res)=>{
    let users=await userModel.find()
    
    await userModel.deleteMany()
    count=1;
    if(!users){return res.send("No user found")}

    res.send(`Deleted user ${users}`)
    console.log(`Deleted user ${JSON.stringify(users)}`)
})

app.listen(3000,()=>{
    console.log("Connected to application server");
    
})