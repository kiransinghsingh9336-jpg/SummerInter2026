//promise  
// making maggi

function starting(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("taking maggi and water");
        reject(new Error("Mood Off"))
    },1000)
})
return prms
}

function nextstep(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Go to shop for buy oil and tea and it in starting");
        reject(new Error("Bhai Dukan bnd h"))
    },2000)
})
return prms
}

function laststep(){
    const prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("completed our maggi making,then we are eating");
   // reject(new Error("Not Completed"))
   resolve()
},3000)
})
return prms
}

function maggi(){
    starting()
    .catch((err)=>{
        console.log(err);
    })
    .then(nextstep)
    .catch((err)=>{
        console.log(err);
        
    })
    .then(laststep)
    .catch((err)=>{
        console.log(err);
        
})
}
maggi()