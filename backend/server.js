import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudniary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// App configuration
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

// Database and Cloudinary connections
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://medical-scheduling-system-frontend.onrender.com', // Restrict origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// API Endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("API Working Great");
});

// Server listener
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
