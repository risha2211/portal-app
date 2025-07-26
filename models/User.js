import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  verified: { type: Boolean, default: false },
  role: { type: String, default: "student" },
});

// Prevent recompilation error in dev
export default mongoose.models.User || mongoose.model("User", UserSchema);

