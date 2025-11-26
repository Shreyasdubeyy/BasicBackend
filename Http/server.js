const http=require("http")

const server=http.createServer(callback)

 function callback(req,res){
    res.end("Hi from server")
 }
const port=7777
 server.listen(port,()=>{
console.log("server started on",`http://localhost:${port}`)
 })