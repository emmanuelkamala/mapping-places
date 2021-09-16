import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const userRouter = express.Router();

// Register

userRouter.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save();
    const {password, ...info} = savedUser._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

// Login


export default userRouter;
