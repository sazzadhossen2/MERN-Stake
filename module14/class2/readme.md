# Encryption -decryption process
```
const algorithm ="aes-256-cbc"
const secretkey= crypto.randomBytes(32)
const iv =crypto.randomBytes(16)

function encrypt(text){
  const cipher =crypto.createCipheriv(algorithm,secretkey,iv);
  let encrypted =cipher.update(text,'utf8','hex')
  encrypted +=cipher.final('hex')

  return {
    iv:iv.toString('hex'),
    content:encrypted
  }
}

function decrypt(encrypted){
  const decipher = crypto.createDecipheriv(algorithm,secretkey,Buffer.from(encrypted.iv,'hex'))
  let decrypted =decipher.update(encrypted.content,'hex','utf8')
decrypted +=decipher.final('utf8')
return decrypted

}


app.post('/encrypt',(req,res)=>{
  const {text} =req.body;
  const encrypted =encrypt(text)
  res.json(encrypted)
})


app.post('/decrypt',(req,res)=>{
  const {encryptedData} =req.body;
  const decrypted =decrypt(encryptedData)
  res.json(decrypted)
})
```

# JSON Wev Token(JWT)

```
const users=[]
app.post('/register',async(req,res)=>{
  const {username,password}=req.body;

  try{
    const hashPassword =await bcrypt.hash(password,10)
users.push({
  username:username,
  password:hashPassword
})
console.log(users)
res.status(201).json({message:"user register is successfully"})
  }catch(error)
  {
res.status(500).json({error:"Something went wrong!"})
  }
})


app.post('/login',async(req,res)=>{
  const {username,password}=req.body;
  try{
    const user =users.find(user=>user.username ===username)
    if(!user) return res.status(404).json({message:"user Not Found"})
 const isMatch = await bcrypt.compare(password,user.password)
if(isMatch){
  res.status(200).json({message:"Login Success"})
}else{
  res.status(401).json({message:"invalid password"})
}


  }catch(error){
res.status(500).json({error:"Some thing went wrong"})
  }
})```