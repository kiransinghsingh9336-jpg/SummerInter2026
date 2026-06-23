//CRUD OPerations
// create object
let Actor = {
    name:"Allu",
    ReleasedMovie:"DJ"
}
// add
Actor.age=40

// update 
Actor.name="Arjun"

//delete
delete Actor.age
console.log(Actor);

//checking properties
console.log("name" in Actor);//true
console.log("age" in Actor);//false
console.log(Actor.hasOwnProperty("name"));






