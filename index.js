const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const PORT = 3010
const mongoose = require("./database/connect");
const userRoutes = require ("./routes/user")
app.use(bodyParser.json());

app.use('/user', userRoutes);


app.get("/",(req,res)=>{
    res.json({message:"working"})
})

app.listen(PORT,()=>console.log("server running...."))
