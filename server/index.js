const express = require('express');
const http = require('http');
const cors = require('cors');
const dotEnv = require('dotenv');

dotEnv.config();

const PORT = process.env.PORT || "3000";



const app = express();


app.use(express.json());

app.use(cors());


app.get('/',(req,res,next)=>{
    console.log("Running the server..");
    return res.send("Hello !")
})

app.listen(PORT,()=>{
    console.log("server running");
})