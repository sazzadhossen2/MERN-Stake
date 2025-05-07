import express from  "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { REQUEST_TIME,REQUEST_NUMBER,REQUEST_MESSAGE, MAX_JSON_SIZE, WEB_CACHE, PORT} from "./src/config/config.js";
import router from "./src/routes/api.js";

const app =express();

// App use Default Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(helmet());
app.use(cookieParser());


// Rate Limiter Middleware
 const limiter = rateLimit({
  windowMs: REQUEST_TIME,
  max:REQUEST_NUMBER,
  message:REQUEST_MESSAGE,
 })
 app.use(limiter)

 //Cache
//  app.use("etag",WEB_CACHE)
app.set("etag", WEB_CACHE);

 //MongoDB Connection


 //Api Routes
 app.use("/api/v1",router)


 //app listen
 app.listen(PORT,()=>{
  console.log("Server is running Port-",PORT)
 })