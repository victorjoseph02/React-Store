import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    price: { type: Number },
    
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
