import SegmentDeal from "./segmentDeal";
import { LayoutSegments } from "../../../api/layout/type";
import Pagination from "./pagination";
import { ReactNode } from "react";
import SegmentBanner from "./segmentBanner";

export default function Segments({ segments }: { segments: LayoutSegments[] }) {
  const segmentsRender = segments.map((item: LayoutSegments, index: number) => {
    if (item.type === "banners") {
      return (
        <>
          <SegmentBanner key={index} items={item.list.items} />
        </>
      );
    } else {
      return (
        <div key={index}>
          <h2> Deals </h2>
          <SegmentDeal items={item.list.items} />
          <Pagination metadata={item.list.metadata} />
        </div>
      );
    }
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
