import { z } from "zod";

export const autoItem = z.object({
  displayName: z.string(),
  type: z.string(),
  uri: z.string(),
});
export const autoCompleteSchema = z.object({
  items: z.array(autoItem),
});

export type autoItem = z.infer<typeof autoItem>;
export type AutoComplete = z.infer<typeof autoCompleteSchema>;
