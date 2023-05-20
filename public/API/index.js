import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';

const app = express();
dotenv.config()

app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

mongoose.connect("mongodb+srv://admin:admin@cluster0.u0bcdps.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server start on port 5000")
    })
})
.catch((err)=>{
    console.log(err)
})