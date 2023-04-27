const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const port=9000;
const moongoose=require('mongoose')


//Connecting DataBase
moongoose.connect("mongodb://localhost:27017/Talha",{      
family: 4,

}).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})

//Defining the schema for collection
const schema=mongoose.Schema;
const firstCollectionSchema=new schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//Defining the name of collection and schema
 moongoose.model('Talha',firstCollectionSchema)

app.get('/',(req,res)=>{
res.status(200).send("this is home page of express")
})

app.get('/about',(req,res)=>{
    res.send("this is about page of express")
    })

app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})