import Link from "next/link";
import { SegmentListItem } from "../../../api/layout/type";
import { ReactNode } from "react";

export default function SegmentDeal({ items }: { items: SegmentListItem[] }) {
  const segmentsRender = items.map((item: SegmentListItem) => {
    return (
      <>
        <li key={item.id}>
          <Link
            href={{
              pathname: "/deal/[id]/[slug]",
              query: { id: item.id, slug: item.slug },
            }}
          >
            <a>{item.title}</a>
          </Link>
        </li>
      </>
    );
  });

  return (
    <>
      <ul>
        {segmentsRender.map((item: ReactNode) => (
          <>
            <div>{item}</div>
          </>
        ))}
      </ul>
    </>
  );
}
