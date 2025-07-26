import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  verified: { type: Boolean, default: false },
  role: { type: String, default: "student" },
});

// keep to avoid recompilation error 
export default mongoose.models.User || mongoose.model("User", UserSchema);

