import Link from "next/link";
import {
  SegmentBannerItem,
  SegmentDealItem,
  SegmentMetaData,
} from "../../../api/layout/type";
import React, { ReactNode } from "react";
import Pagination from "./pagination";
import { SegmentType } from "./segments";
import arrowRight from "../../../../public/arrow-right.svg";
import Image from "next/image";
import styles from "./Deal.module.css";
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
          <a>
            <div className={styles.dealCard}>
              <div className={styles.mainImage}>
                <Image
                  src={item.mainImage.items.normal}
                  alt=""
                  width={318}
                  height={212}
                />
                <div className={styles.meta}>
                  <span className={styles.oldPrice}>
                    {item.price.oldPrice.formattedValue}
                  </span>
                  <span className={styles.newPrice}>
                    {item.price.newPrice.formattedValue}
                  </span>
                </div>
              </div>

              <div>
                <h3>{item.title}</h3>
                <div>{item.subtitle}</div>
              </div>
            </div>
          </a>
        </Link>
      </>
    );
  });

  return (
    <>
      <ul className={styles.dealList}>
        {segmentsRender.map((item: ReactNode, index) => (
          <li className={styles.deal} key={index}>
            {item}
          </li>
        ))}
      </ul>
      {items.length !== meta.total && <Pagination metadata={meta} />}
    </>
  );
}
