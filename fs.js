// // Now I am going to learn about fs Module
// //1. Read the File
// import fs from 'fs/promises'
// async function reading(){
//     try{
//     const data=await fs.readFile("kiran.txt",'utf-8')
//     console.log('File Content:',data);
//     } catch(error){
//         console.log(error);
//     }
// }
// reading()


// //2. Creating a File
//  import fs from 'fs/promises'
//  async function writing(){
//      try{
//     const data=await fs.writeFile("Cyvanta.txt",'Currently Web development class is running')
//     console.log('File is created successfully');
//     } catch(error){
//         console.log(error);
//     }
 //}
// writing()

// //2. Deleting a File
// import fs from 'fs/promises'
// async function Deleting(){
//     try{
//     const data=await fs.unlink("Cyvanta.txt")
//     console.log('File is deleted Successfully');
//     } catch(error){
//         console.log(error);
//     }
// }
// Deleting()

//2. updating a File
import fs from 'fs/promises'
 async function updating(){
    try{
   await fs.appendFile('Cyvanta.txt','\nUpdated Content')
   console.log('File is updated successfully');
    } catch(error){
  console.log(error);
  }
 }
updating()

