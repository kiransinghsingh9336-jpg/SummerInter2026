//synchronous -> one by one processes executes
// making maggi

function starting(){
    console.log("taking maggi and water");
    
}
function nextstep(){
    console.log("making maggi with apply masalas");
    
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
