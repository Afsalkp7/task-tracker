const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const MONGODB_URI = "mongodb+srv://afsalkpmanu31:afsalkp123@cluster0.yzytvxu.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("connected....");
})
.catch((error)=>{
    console.log("error...");
})