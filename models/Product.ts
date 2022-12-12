import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces/product";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    images: [{ type: String }],
    stock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);
productSchema.index({ name: "text", tags: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
