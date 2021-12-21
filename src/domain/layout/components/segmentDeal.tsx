import Link from "next/link";
import { SegmentDealItem } from "../../../api/layout/type";
import { ReactNode } from "react";

export default function SegmentDeal({ items }: { items: SegmentDealItem[] }) {
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
    </>
  );
}
