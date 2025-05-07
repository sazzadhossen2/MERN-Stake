const express = require('express');

const jwt = require('jsonwebtoken')
// const crypto =require('crypto')
// const bcrypt =require('bcrypt');
// const { error } = require('console');
const app =express();
app.use(express.json());


const SECRET_KEY ="mysecretkey1234567"
app.post('/login',(req,res)=>{
  const {username}=req.body;
  const user ={id:1,username}
const token = jwt.sign(user,SECRET_KEY,{expiresIn:'1h'})
 res.json({token})
})

app.get('/protected',(req,res)=>{
  const authHeader =req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) return res.sendStatus(401);
  jwt.verify(token,SECRET_KEY,(err,user)=>{
    if(err) return res.sendStatus(403);
    res.json({message:" content" ,user})
  })
})

const port =3000;
app.listen(port,()=>{
  console.log("server running")
})
