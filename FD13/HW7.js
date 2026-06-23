//Create an object named company containing:
//* companyName
//* founder
//* establishedYear
//* employees
//Perform the following:
//1. Display all details.
//2. Add a new property location.
//3. Update the number of employees.
//4. Delete the founder property.
//5. Display the final object.

let company={
    companyName:"Google",
    founder:"Larry Page",
    establishedYear:1998,
    employees:100000
}
console.log(company);
company.locaton="callifornia"
company.employees=200000
delete company.founder
console.log(company);



