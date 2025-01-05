import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  area: { type: String, required: true },
  building: { type: String, required: true },
  town: { type: String, required: true },
  postalCode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: { type: Date, required: true },
  sex: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: addressSchema, required: true },
  img: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
