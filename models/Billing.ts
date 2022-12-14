import mongoose, { Schema, model, Model } from "mongoose";
import { IBilling } from "../interfaces/billing";

const billingSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    products: [
      {
        _id: { type: String, require: true },
        quantity: { type: Number, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Billing: Model<IBilling> =
  mongoose.models.Billing || model("Billing", billingSchema);

export default Billing;
