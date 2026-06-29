// synchronous 
//doing process to join job:
function ApplyForm(){
    setTimeout(()=>{
         console.log("I apply form for job");
    },5000)
}
function call(){
    console.log("I recieved call for our job");
    
}
function Invite(){
    console.log("I prepare for interview");
    
}
function Interview(){
    console.log("I done my Interview");
    
}
function joining(){
    console.log("After that interview I joined our job");
    
}
function job(){
    ApplyForm()
    call()
    Invite()
    Interview()
    joining()
}
job()