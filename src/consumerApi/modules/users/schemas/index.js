import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    name: {
      type: String,
      index: true,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('User', userSchema);

export default model;
