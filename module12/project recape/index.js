const http =require("http");
const fs =require("fs");
const path =require("path");

const Server = http.createServer((req,res)=>{
  if(req.url ==="/"){
    const filepatch= path.join(__dirname,"public/index.html");
    fs.readFile(filepatch,(err,data)=>{
      if(err){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end("Error loading index.html");
      }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
      }
    })
  }else{
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end("Not Found")
  }
})


let port =5050;
Server.listen(port,()=>{
  console.log("Server In Running")
})