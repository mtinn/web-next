import { Deal, DealSchema } from "./type";
import apiClient from "../apiClient";

export async function getDeal(id: string): Promise<Deal> {
  const deal = await apiClient.get<Deal>("deals/" + id);
  return DealSchema.parse(deal);
}
