//synchronous -> It execute processes in orderd way
// making maggi

function starting(){
    console.log("taking maggi and water");
    
}
function nextstep(){
    setTimeout(()=>{
        console.log("Go to shop for buy oil and tea and it in starting");
    },10000)
 
}

function laststep(){
    console.log("completed our maggi making,then we are eating");
 
}

function maggi(){
    starting()
    nextstep()
    laststep()
}

maggi()