import mongoose, { Schema } from 'mongoose';

const PinSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 3,
  },
  desc: {
    type: String,
    required: true,
    min: 4,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  lat: {
    type: Number,
    required: true
  },
  long: {
    type: Number, 
    required: true,
  }
}, {
  timestamps: true
})

const pinSchema = mongoose.model('Pin', PinSchema);

export default pinSchema;