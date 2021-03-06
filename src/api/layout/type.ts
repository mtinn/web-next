import { z } from "zod";

export const HeaderSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export const SegmentDealItem = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  status: z.string(),
  mainImage: z.object({
    items: z.object({
      normal: z.string(),
      large: z.string(),
    }),
  }),
  price: z.object({
    newPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
    oldPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
    discountPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
  }),
});
export const MediaSchema = z.object({
  size: z.object({
    width: z.number(),
    height: z.number(),
  }),
  items: z.object({
    xsmall: z.string(),
    small: z.string(),
    normal: z.string(),
    large: z.string(),
    xlarge: z.string(),
  }),
});
export const SegmentBannerItem = z.object({
  id: z.string(),
  name: z.string(),
  uri: z.string(),
  media: MediaSchema,
});
export const SegmentItemMetadata = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
});
export const SegmentsSchemaDeal = z.object({
  id: z.string(),
  title: z.string(),
  type: z.literal("deals"),
  list: z.object({
    metadata: SegmentItemMetadata,
    items: z.array(SegmentDealItem),
  }),
});
export const SegmentsSchemaBanner = z.object({
  id: z.string(),
  title: z.string(),
  type: z.literal("banners"),
  list: z.object({
    metadata: SegmentItemMetadata,
    items: z.array(SegmentBannerItem),
  }),
});
export const SegmentsCategoryRecs = z.object({
  id: z.string(),
  title: z.string(),
  type: z.literal("category_recs"),
  list: z.object({
    metadata: SegmentItemMetadata,
    items: z.array(SegmentBannerItem),
  }),
});
export const SegmentContentBlock = z.object({
  id: z.string(),
  title: z.string(),
  type: z.literal("content_block"),
  list: z.object({
    metadata: SegmentItemMetadata,
    items: z.array(SegmentBannerItem),
  }),
});
export const SegmentsSchema = z.union([
  SegmentsSchemaDeal,
  SegmentsSchemaBanner,
  SegmentsCategoryRecs,
  SegmentContentBlock,
]);
export const layoutSchema = z.object({
  header: HeaderSchema.nullish(),
  segments: z.array(SegmentsSchema),
});
export type Media = z.infer<typeof MediaSchema>;
export type SegmentMetaData = z.infer<typeof SegmentItemMetadata>;
export type LayoutSegments = z.infer<typeof SegmentsSchema>;
export type SegmentDealItem = z.infer<typeof SegmentDealItem>;
export type SegmentBannerItem = z.infer<typeof SegmentBannerItem>;
export type LayoutHeader = z.infer<typeof HeaderSchema>;
export type Layout = z.infer<typeof layoutSchema>;
