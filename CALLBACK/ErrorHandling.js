//Callback
function starting(Callback){
    console.log("taking maggi and water");
    Callback()   
}
function nextstep(Callback){
    setTimeout(()=>{
        console.log("Go to shop for buy oil and tea and it in starting");
        const error=new Error("dukan bnd h saman nhi milega saman")
        Callback(error)
    },10000)
}
function laststep(Callback){
    console.log("completed our maggi making,then we are eating");
    Callback()
}

function maggi(){
    starting(()=>{
        nextstep((error)=>{
            if(error){
                console.log(error);
            }
            laststep(()=>{

            })
})
    })
    }
maggi()