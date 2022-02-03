import api from "../../api/api";
import { AutoComplete, autoItem } from "../../api/autocomplete/type";

export async function getList(q: string): Promise<AutoComplete> {
  const list = await api.get<AutoComplete>("/api/autocomplete?q=" + q);
  return {
    ...list,
    items: list.items.map((item: autoItem) => {
      return { ...item, uri: item.uri.replace("letsdeal://", "") };
    }),
  };
}
