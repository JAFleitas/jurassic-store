import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database/db";
import { IProduct } from "../../../interfaces/product";
import Product from "../../../models/Product";

type Data = { message: string } | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const products = await Product.find()
    .select("name images price slug inStock _id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
