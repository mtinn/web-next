import type { NextApiRequest, NextApiResponse } from "next";
import { getList } from "../../../api/autocomplete/data";
import { AutoComplete } from "../../../api/autocomplete/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutoComplete>
) {
  const q = req.query?.q;
  const text = typeof q === "string" ? q : "";
  const list = await getList(text);

  res.status(200).json(list);
}
