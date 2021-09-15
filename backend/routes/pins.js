import express from 'express';
import Pin from '../models/Pin';
const pinRouter = express.Router();

pinRouter.post('/', async (req, res) => {
  const newPin = new Pin(req.body);

  try {
    const savedPin = await newPin.Save();
    res.status(200).json(savedPin);
  } catch (error) {
    res.status(500).json(error);
  }
})