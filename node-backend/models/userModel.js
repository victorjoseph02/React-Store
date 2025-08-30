import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    pass: { type: String },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
