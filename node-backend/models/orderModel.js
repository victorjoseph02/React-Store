import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    email: { type: String },
    items: { type: Object },
    total: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
