const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const route=require('./routes');
const cors=require('cors');

//creating dotenv
dotenv.config();

//connecting to DB
mongoose.connect(process.env.DB,{dbName:""});
app.use(cors());
app.use(express.json());


app.use('/',route);

app.listen(3001,()=>console.log('Server is Running'));
