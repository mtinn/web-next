import Link from "next/link";
import {
  SegmentBannerItem,
  SegmentDealItem,
  SegmentMetaData,
} from "../../../api/layout/type";
import { ReactNode } from "react";
import Pagination from "./pagination";
import { SegmentType } from "./segments";
interface SegmentType2 extends SegmentType {
  items: SegmentDealItem[];
}
export default function SegmentDeal({ items, meta }: SegmentType2) {
  const segmentsRender = items.map((item: SegmentDealItem) => {
    return (
      <>
        <Link
          key={item.id}
          href={{
            pathname: "/deal/[id]/[slug]",
            query: { id: item.id, slug: item.slug },
          }}
        >
          <a>{item.title}</a>
        </Link>
      </>
    );
  });

  return (
    <>
      <ul>
        {segmentsRender.map((item: ReactNode, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {items.length !== meta.total && <Pagination metadata={meta} />}
    </>
  );
}
