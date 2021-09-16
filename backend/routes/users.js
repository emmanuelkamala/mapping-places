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
userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong username or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json('Wrong username or password');

    res.status(200).json({ _id: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default userRouter;
