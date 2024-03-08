const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = 3010
const mongoose = require("./database/connect");
const userRoutes = require ("./routes/user")
const taskRoutes = require("./routes/task")
app.use(bodyParser.json());
app.use(cors())

app.use('/user', userRoutes);
app.use('/task', taskRoutes);


app.get("/",(req,res)=>{
    res.json({message:"working"})
})

app.listen(PORT,()=>console.log("server running...."))
