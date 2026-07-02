//promise  
// making maggi

function starting(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("taking maggi and water");
        resolve()
    },1000)
})
return prms
}

function nextstep(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Go to shop for buy oil and tea and it in starting");
        resolve()
    },2000)
})
return prms
}

function laststep(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("completed our maggi making,then we are eating");
    resolve()
},3000)
})
return prms
}

async function maggi(){
    try{
    await starting()
    } catch(error){
        console.log("Error is=",error);
    }
    try{
    await nextstep()
    } catch(error){
        console.log("Error is=",error);
    }
    try{
    await laststep()
    } catch(error){
        console.log("Error is=",error);
    }
    
}

maggi()