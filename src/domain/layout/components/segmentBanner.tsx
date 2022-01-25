import Link from "next/link";
import { SegmentBannerItem, SegmentMetaData } from "../../../api/layout/type";
import { ReactNode } from "react";
import MediaItem from "./mediaItem";
import { PropsType, SegmentType } from "./segments";

interface SegmentType2 extends SegmentType {
  items: SegmentBannerItem[];
}
export default function SegmentBanner({ items, meta }: SegmentType2) {
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
