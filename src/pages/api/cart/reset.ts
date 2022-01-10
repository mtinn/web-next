// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { resetCart } from "../../../api/cart/data";
import { Cart } from "../../../api/cart/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>
) {
  const token = req.cookies;
  const result = await resetCart(token.access_token);
  res.status(200).json(result);
}
