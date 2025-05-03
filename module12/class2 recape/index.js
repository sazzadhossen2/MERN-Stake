const fs = require('fs')

// const data =fs.readFileSync('file.txt','utf8')
// console.log(data);
// console.log('After Read')


// fs.readFile('file.txt','utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// })
// console.log('After Read')


// File Write
// fs.writeFileSync('file2.txt','Hello File System!');
// console.log('File Written Successfully')


// fs.writeFile('file3.txt','Hello! file System',(err)=>{
//   if(err) throw err;
//   console.log('File written successfully');
// })



// Update txt
// fs.appendFile('file.txt','\n I am from index.js',(err)=>{
//   if(err) throw err;
//   console.log("File append SuccessFully")
// })


//Deleting file
// fs.unlinkSync('file2.txt');
// console.log('File Deleted');


// fs.unlink('file.txt',(err)=>{
//   if(err) throw err;
//   console.log('File Deleted');
// })


//renaming
// fs.renameSync('file.txt','mern.txt');
// console.log('File Rename');


//File Checking
fs.access('file3.txt',fs.constants.F_OK,(err)=>{
  console.log(err?"File Doesn't exist":"File Exist")
})