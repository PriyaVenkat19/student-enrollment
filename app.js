require("dotenv").config();
const express=require("express");
const app=express();
const PORT=3400;
const router=require('./routers/students')
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/students')
const db=mongoose.connection
db.on('error',(errorMessage)=>console.log(errorMessage));
db.once('open',()=>console.log("Connection established"))
app.get("/",(req,res)=>{
 res.send("Welcome");
})

app.listen(PORT,console.log("Listening server on  http://localhost:"+PORT));