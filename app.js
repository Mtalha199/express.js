const express=require('express')
const app=express();

app.get('/',(req,res)=>{
res.send("this is home page of express")
})

app.get('/about',(req,res)=>{
    res.send("this is about page of express")
    })

app.listen(5000,()=>{
    console.log("listning on port 5000")
})