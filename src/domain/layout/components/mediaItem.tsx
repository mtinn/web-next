import { Media } from "../../../api/layout/type";
import Image from "next/image";
import styles from "../../header/components/Header.module.css";
import React from "react";

export default function MediaItem({ item }: { item: Media }) {
  return (
    <Image
      className={styles.logo}
      src={item.items.normal}
      alt=""
      width={item.size.width}
      height={item.size.height}
    />
  );
}
