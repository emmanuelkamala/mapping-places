import express from 'express';
import Pin from '../models/Pin.js';
const pinRouter = express.Router();

pinRouter.post('/', async (req, res) => {
  const newPin = new Pin({
    username: req.body.username,
    title: req.body.title,
    desc: req.body.desc,
    rating: req.body.rating,
    lat: req.body.lat,
    long: req.body.long,
  });

  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

pinRouter.get('/', async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default pinRouter;
