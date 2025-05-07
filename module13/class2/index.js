const express =require('express');
const multer = require('multer');

const app=express();
app.use(express.json())



app.use((req,res,next)=>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})
// Multer storage configuration
const storage = multer.diskStorage({
  destination: 'upload/', // Destination folder to save uploaded files
  filename: (req, file, cb) => {
    const fileName = `${Date.now()} - ${file.originalname}`; // Use Date.now() for timestamp
    cb(null, fileName); // Provide the file name to save
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });


const port =3000;

function authMiddleware(req,res,next){
  const token =req.headers['authorization']
  if(token=='password123'){
    next()
  }else{
    res.status(403).send('Forbidden')
  }
}


// query parameters 
app.get('/search',authMiddleware,(req,res)=>{
  console.log(req.method)
  console.log(req.url)
  const { name, age, coder } = req.query; // extracts query parameters from the URL
  console.log(`Name: ${name}, Age: ${age}, Coder: ${coder}`);
  res.send({
    name: name,
    age: age,
    coder: coder
  });

})

// Port change
app.get('/book/:bookCode/:bookName',(req,res)=>{
  const {bookCode,bookName} =req.params
  console.log(bookCode)
  res.send(`Book Code is ${bookCode} and Name ${bookName}`)
})



// app.post('/submit',(req,res)=>{
// const data =req.body;
// console.log(data)
// res.send("Response")
// })


// app.post('/search',(req,res)=>{
//   const {keyword}=req.query;
//   console.log(keyword)
//   const data =req.body;
//   console.log(data)
//   res.json({
//     status:201,
//     data:req.body
//   })
// })



app.post('/upload',upload.single('file'),(req,res)=>{
  console.log(req.file)
  res.json({
    message:'File Upload Successfully'
  })
})


app.listen(port, () => {
  console.log('Server is running on port ' + port);
});