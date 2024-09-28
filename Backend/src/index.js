// import express from "express"
// import dotenv from "dotenv"
// import connectDB from "../db/index.js";
// import { app } from "./app.js";
// import serviceRoutes from '../routes/serviceRoutes.js'
// import teamRoutes from '../routes/teamRoutes.js'
// import projectRoutes from '../routes/projectRoutes.js'
// import { errorHandeler } from '../middleware/errorMiddleware.js'


// dotenv.config({
//     path: '../env'
// })

// connectDB()

// .then(()=> {
//     app.listen(process.env.PORT || 8000, ()=> {
//         console.log(`Server is runnig at port : ${ process.env.PORT}`);
        
//     })
// })

// .catch((err) => {
//     console.log("MONGODB connection failed", err);
    
// })








import cors from "cors"
import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../db/index.js';
import serviceRoutes from '../routes/serviceRoutes.js';
import teamRoutes from '../routes/serviceRoutes.js';
import projectRoutes from '../routes/projectRoutes.js';
import { errorHandler } from '../middleware/errorMiddleware.js'

dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/projects', projectRoutes);

// Error handling middleware
app.use(errorHandler);

//frontend error sol try
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
