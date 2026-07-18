import http from 'http';
import dotenv from 'dotenv';
dotenv.config()

const server = http.createServer((req,res)=>{

res.writeHead(200,{'content-type':'text/plan'}) //set the header of content
    res.end("Hello server is live ")   //send the response on server
});

let port=process.env.PORT
 server.listen(port,()=>{
    console.log("server is running at port no 5000");        //set the port no for server
    
})