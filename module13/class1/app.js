//Common Js
// const express = require('express')

//ES6 MOdule
import express from 'express'
import { PORT } from './config/config.js'
import router from './routes/api.js'
const app = express()
// const port = 3000

app.use('/api/v1',router);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
