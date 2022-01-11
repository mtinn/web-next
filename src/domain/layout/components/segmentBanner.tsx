import Link from "next/link";
import { SegmentBannerItem, SegmentMetaData } from "../../../api/layout/type";
import { ReactNode } from "react";
import MediaItem from "./mediaItem";

export default function SegmentBanner({
  items,
  meta,
}: {
  items: SegmentBannerItem[];
  meta: SegmentMetaData;
}) {
  const segmentsRender = items.map((item: SegmentBannerItem) => {
    return (
      <>
        <li key={item.id}>
          <Link href={item.uri}>
            <a>
              <MediaItem item={item.media} />
            </a>
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
