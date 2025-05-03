const express =require("express");
const path =require("path");

const app =express();
const port =3000;

app.use(express.static("public"))

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

app.get("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","about.html"

  ))
})


app.get("/contact",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","contact.html"

  ))
})

app.get("/service",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","service.html"

  ))
})


app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
