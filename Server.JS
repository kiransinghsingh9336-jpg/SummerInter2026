import dotenv from 'dotenv'

dotenv.config()

const MyName=process.env.NAME
console.log(MyName);
console.log(process.env.ADD);


