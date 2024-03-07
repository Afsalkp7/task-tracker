const express = require("express")
const app = express()
const PORT = 3010

app.get("/",(req,res)=>{
    res.json({message:"hello"})
})

app.listen(PORT,()=>console.log("server running...."))
