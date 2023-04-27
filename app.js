const express=require('express')
const app=express();
const moongoose=require('mongoose')

moongoose.connect("mongodb://localhost:27017/Talha",{      
family: 4,

}).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
res.send("this is home page of express")
})

app.get('/about',(req,res)=>{
    res.send("this is about page of express")
    })

app.listen(5000,()=>{
    console.log("listning on port 5000")
})