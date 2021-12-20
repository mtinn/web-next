import { z } from "zod";

export const HeaderSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export const SegmentListItem = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
});
export const SegmentItemMetadata = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
});
export const SegmentsSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  list: z.object({
    metadata: SegmentItemMetadata,
    items: z.array(SegmentListItem),
  }),
});
export const layoutSchema = z.object({
  header: HeaderSchema.nullish(),
  segments: z.array(SegmentsSchema),
});
export type SegmentMetaData = z.infer<typeof SegmentItemMetadata>;
export type LayoutSegments = z.infer<typeof SegmentsSchema>;
export type SegmentListItem = z.infer<typeof SegmentListItem>;
export type LayoutHeader = z.infer<typeof HeaderSchema>;
export type Layout = z.infer<typeof layoutSchema>;
