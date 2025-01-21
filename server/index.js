const express = require('express');
const http = require('http');
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./src/routes/auth-routes');
const chanelRoutes = require('./src/routes/chanel-routes');


dotEnv.config();

const PORT = process.env.PORT || "3000";

// test


const app = express();


app.use(express.json());

app.use(cors());

app.use("/api/v1/auth",authRoutes);

app.use("/api/v1/chanel",chanelRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Data base running...");
    
    
    app.listen(PORT,()=>{
        console.log("server running");
    })
})
.catch((err)=>{
    console.log("Data base connection failed");
})
