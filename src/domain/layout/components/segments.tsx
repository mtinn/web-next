import SegmentDeal from "./segmentDeal";
import { LayoutSegments } from "../../../api/layout/type";
import Pagination from "./pagination";
import { ReactNode } from "react";

export default function Segments({ segments }: { segments: LayoutSegments[] }) {
  const segmentsRender = segments.map((item: LayoutSegments) => {
    if (item.type === "banners") {
      return (
        <>
          <h2> Banner </h2>
        </>
      );
    } else {
      return (
        <>
          <h2> Deals </h2>
          <SegmentDeal items={item.list.items} />
          <Pagination metadata={item.list.metadata} />
        </>
      );
    }
  });

  return (
    <>
      {segmentsRender.map((item: ReactNode) => (
        <>
          <div>{item}</div>
        </>
      ))}
    </>
  );
}
