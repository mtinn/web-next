import Link from "next/link";
import { SegmentDealItem, SegmentMetaData } from "../../../api/layout/type";
import { ReactNode } from "react";
import Pagination from "./pagination";

export default function SegmentDeal({
  items,
  meta,
}: {
  items: SegmentDealItem[];
  meta: SegmentMetaData;
}) {
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
