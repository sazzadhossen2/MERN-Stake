const http =require('http')
const { json } = require('stream/consumers')


const users=[
  {id:1,name:"Sazzad",email:"sazzad@gmail.com"},
  {id:2,name:"Sazzad Hossen",email:"sazzad@gmail.com"},
  {id:3,name:"Shamim",email:"sazzad@gmail.com"},
]
const server =http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'})
  res.end(JSON.stringify(users))
})

server.listen(3000,()=>{
  console.log("success Listening 3000")
})