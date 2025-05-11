import mongoose from "mongoose";

import config from "./config/config.js";
import app from "./app.js";


const {PORT,MONGO_URI} =config;

mongoose.connect(MONGO_URI).then(
  ()=>{
    console.log("Hi");
  
    app.listen(PORT,()=>{
      console.log('server is running')
    })
  })


