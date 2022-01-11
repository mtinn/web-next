import SegmentDeal from "./segmentDeal";
import SegmentBanner from "./segmentBanner";
import { LayoutSegments } from "../../../api/layout/type";
import { ReactNode } from "react";

const viewsTypeSegment = new Map<string, Function>([
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
