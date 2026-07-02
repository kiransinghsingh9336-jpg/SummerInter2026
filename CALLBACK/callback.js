//  Callback()
//Callback -> A callback function is a function that is passed as an argument to another function 
// and is executed later, 
// usually after some operation has finished.
function ApplyForm(callback){
    setTimeout(()=>{
         console.log("I apply form for job");
         callback()
    },5000)
}
function call(callback) {
    console.log("I recieved call for our job");
    callback(); 
}
function Invite(callback){
    setTimeout(()=>{
         console.log("I prepare for interview");callback()},2000)
}
function Interview(callback){
    console.log("I done my Interview");callback()
}
function joining(callback){
    console.log("After that interview I joined our job");callback()
}
function job(){
    ApplyForm(()=>{
        call(()=>{
        Invite(()=>{
    Interview(()=>{
        joining(()=>{
            console.log("Task is completed");
        })
    })
            })
        })
    }) 
}
job()