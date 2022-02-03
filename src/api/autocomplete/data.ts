import apiClient from "../apiClient";
import { AutoComplete, autoCompleteSchema, autoItem } from "./type";

export async function getList(query: string): Promise<AutoComplete> {
  const list = await apiClient.get<AutoComplete>("autocomplete?q=" + query);
  return autoCompleteSchema.parse(list);
}
