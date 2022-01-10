// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addToCart } from "../../../api/cart/data";
import { Cart } from "../../../api/cart/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>
) {
  const token = req.cookies;
  const result = await addToCart(token.access_token, JSON.parse(req.body));
  res.status(200).json(result);
}
