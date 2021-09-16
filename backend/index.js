import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pinRouter from './routes/pins.js';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log('MONGODB is connected'))
  .catch((error)=>console.log(error))

app.use('/api/pins', pinRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log('Backend server running');
})