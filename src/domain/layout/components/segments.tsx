import SegmentDeal from "./segmentDeal";
import SegmentBanner from "./segmentBanner";
import {
  LayoutSegments,
  SegmentBannerItem,
  SegmentDealItem,
  SegmentMetaData,
} from "../../../api/layout/type";
import { Component, ReactNode } from "react";
export interface PropsType<T> {
  items: (SegmentDealItem | SegmentBannerItem)[];
  meta: SegmentMetaData;
}
export interface SegmentType {
  items: object[];
  meta: SegmentMetaData;
}
type segment = typeof SegmentBanner | typeof SegmentDeal;
const viewsTypeSegment = new Map<string, any>([
  ["banners", SegmentBanner],
  ["deals", SegmentDeal],
]);

export default function Segments({ segments }: { segments: LayoutSegments[] }) {
  const segmentsRender = segments.map((item: LayoutSegments, index: number) => {
    const Component = viewsTypeSegment.get(item.type);
    if (undefined === Component) return null;
    return (
      <Component
        key={index}
        items={item.list.items}
        meta={item.list.metadata}
      />
    );
  });

  return (
    <>
      {segmentsRender.map((item: ReactNode, index: number) => (
        <section key={index}>
          <div>{item}</div>
        </section>
      ))}
    </>
  );
}
