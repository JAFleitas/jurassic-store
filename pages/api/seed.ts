import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database/db";
import { seedProducts } from "../../database/seed-products";
import Product from "../../models/Product";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(401)
      .json({ message: "No access to the requested route" });
  }

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedProducts);

  await db.disconnect();

  res.status(200).json({ message: "successfully done !" });
}
