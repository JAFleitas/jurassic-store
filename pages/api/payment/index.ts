import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database/db";
import { IBilling } from "../../../interfaces/billing";
import Billing from "../../../models/Billing";
const Stripe = require("stripe");
type Data = {
  success: boolean;
  billing?: IBilling;
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", null);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token = {}, amount, products, form } = req.body;

  if (!Object.keys(token).length || !amount) {
    res.status(400).json({ success: false });
  }

  const { id: customerId } = await stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .catch((e: any) => {
      console.log(e);
      return null;
    });

  if (!customerId) {
    res.status(500).json({ success: false });
    return;
  }

  const invoiceId = `${
    token.email
  }-${Math.random().toString()}-${Date.now().toString()}`;

  const charge = await stripe.charges
    .create(
      {
        amount: amount,
        currency: "USD",
        customer: customerId,
        receipt_email: token.email,
        description: "pay",
      },
      { idempotencyKey: invoiceId }
    )
    .catch((e: any) => {
      console.log(e);
      return null;
    });

  if (!charge) {
    res.status(500).json({ success: false });
    return;
  }
  await db.connect();
  const billing = await Billing.create({ ...form, products, amount });
  await db.disconnect();
  res.status(201).json({ success: true, billing });
}
