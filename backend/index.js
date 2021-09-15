import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
mongoose.connect(process.env.MONGO_URl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.listen(5000, ()=>{
  console.log('Backend server running');
})