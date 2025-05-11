
import express from 'express';
import router from './routes/routs.js';
import cors from "cors";
const app = express();

// Middle Wares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// Routs Entry
app.use('/api/v1',router)
export default app;