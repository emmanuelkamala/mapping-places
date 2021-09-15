import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
mongoose.connect(process.env.MONGO_URl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log('MONGODB is connected'))
  .catch((error)=>console.log(error))

app.listen(5000, ()=>{
  console.log('Backend server running');
})