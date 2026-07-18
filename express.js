import express from 'express'
const app=express()

app.listen(3000,()=>{
    console.log("server is running at port no:5000"); 
})
app.get('/',(req,res)=>{
    res.send("This is my home page of server");
})
app.get('/product',(req,res)=>{
    res.send("This is my product page here");
})
app.post('/BuyNow',(req,res)=>{
    res.send("This is my BuyNow page here");
})
app.put('/Login',(req,res)=>{
    res.send("This is my login page here");
})
app.post('/Recieving',(req,res)=>{
    res.send("This is my recieving view page here");
})



