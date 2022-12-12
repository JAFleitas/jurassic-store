import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database/db";
import { IProduct } from "../../../../interfaces/product";
import Product from "../../../../models/Product";

type Data =
  | {
      message: string;
    }
  | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = "" } = req.query;

  if (q.length === 0) res.status(400).json({ message: "Enter a search" });

  q = q.toString().toLowerCase();

  await db.connect();

  const products = await Product.find({
    $text: { $search: q, $caseSensitive: false },
  })
    .select("name slug price images stock -_id")
    .lean();
  await db.disconnect();

  return res.status(200).json(products);
};
