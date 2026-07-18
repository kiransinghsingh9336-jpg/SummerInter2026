import bcrypt from 'bcrypt'
let password1='kiran@123' // plain pass
let password2='Alok@345' // plain pass
let hashpass1=await bcrypt.hash(password1,5) // Encrypted pass
let hashpass2=await bcrypt.hash(password2,5) // Encrypted pass
//console.log("hashPass= ",hashpass);

// Compare\
let isMatch1=await bcrypt.compare(password1,hashpass1)
let isMatch2=await bcrypt.compare(password1,hashpass2)
console.log(isMatch1);
console.log(isMatch2);



