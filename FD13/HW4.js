 //Q7. Nested Object
//Create a student object with an address object inside it.
//Example:

let Student={
  name:"Rahul",
  age:20,
  address: {
    city:"Lucknow",
    state:"UP"
  }
}
//Display the city and state separately.
console.log(Student.address.city);
console.log(Student.address.state);
