const express =require("express");
const cors =require("cors");
const multer= require("multer");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"upload/");
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() +"_"+ file.originalname);
  },
})

const upload = multer({storage:storage})

app.get("/",(req,res)=>{
  res.send("Hello World")
})


app.post("/upload",upload.single('file'),(req,res)=>{
  console.log(req.file)
  res.send("File Upload Success")
})


app.use("/get-file",express.static("upload"))
app.listen(8000,()=>{
  console.log("Server Started on Port 8000")
})