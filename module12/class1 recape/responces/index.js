const http =require("http");
const { type } = require("os");


const user =[
  {id:1,name:"sazzad Hossen", email:"Sazzad@gmail.com"},
  {id:2,name:"sazzad shamim", email:"Sazzad1@gmail.com"},
  {id:3,name:"shamim Hossen", email:"Sazzad2@gmail.com"},
]

const server =http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  res.end(JSON.stringify(user));
})

server.listen(3000,()=>{
  console.log("Server Create Success 3000");
})
