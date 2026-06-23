// Q1. Create a Student Object
//Create an object named student with the following properties:
// name
// age
// course
// city

let Student = {
    name:"Kiran",
    age:20,
    Course:"Btech",
    City:"Lucknow"
}
//console.log(Student);

 //Q2. Update Object Properties
//Using the above object:

//Change the city name.
//Change the age.
//Display the updated object.

Student.City="Delhi"
Student.age=19
//console.log(Student);

//Q3. Add New Properties
//Add the following properties to the student object:
//email
//mobile
//Display the updated object.

Student.emali="kiransinghsingh9336gmail.com"
Student.mobile=5657840389
//console.log(Student);

 //Q4. Delete a Property
//Delete the mobile property from the object and display the final object.

delete Student.mobile
console.log(Student);



