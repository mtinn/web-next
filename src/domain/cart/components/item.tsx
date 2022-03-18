import Link from "next/link";
import React from "react";
import { cartItem } from "../../../api/cart/type";
import Image from "next/image";
import styles from "./Cart.module.css";

function Item(item: cartItem) {
  return (
    <li key={item.id} className={styles.item}>
      <div className={styles.details}>
        <Link
          key={item.id}
          href={{
            pathname: "/deal/[id]/[slug]",
            query: { id: item.deal.id, slug: item.deal.slug },
          }}
        >
          <a>{item.deal.title}</a>
        </Link>
        <div>
          {item.deal.dealLine.name} - {item.quantity}
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={item.deal.mainImage.items.small}
          alt=""
          width={168}
          height={108}
        />
        <div className={styles.price}>{item.deal.price.formattedValue}</div>
      </div>
    </li>
  );
}

export default Item;
