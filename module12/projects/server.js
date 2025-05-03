const express =require("express");
const path =require("path");
const app =express();
const port =3800;

app.use(express.static("public"))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(port,()=>{
  console.log(port);
})