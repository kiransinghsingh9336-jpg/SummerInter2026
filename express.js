import express from 'express'
import { log } from 'node:console';
const app=express()

app.listen(5000,()=>{
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

// app.use(express.json())
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send(req.body)
// })

app.use(express.urlencoded({ extended: true })); //http://localhost:5000/signin
app.use(express.json());

app.post('/signin', (req, res) => {
    console.log(req.body);
    res.send({
        message: "Data is send",
        Data: req.body
    });
});

