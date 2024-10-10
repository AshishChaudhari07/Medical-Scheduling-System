import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudniary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';


// app config
const app = express()
dotenv.config();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

//middel ware
app.use(express.json())
app.use(cors({
    origin: 'https://medical-scheduling-system-admin.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// api endpoint
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Api Working Great")
})

app.listen(port,()=>{
    console.log(`server start on http://localhost:${port}`);
})