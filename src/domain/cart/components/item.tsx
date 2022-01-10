import Link from "next/link";
import React from "react";
import { cartItem } from "../../../api/cart/type";

function Item(item: cartItem) {
  return (
    <li key={item.id}>
      <Link
        key={item.id}
        href={{
          pathname: "/deal/[id]/[slug]",
          query: { id: item.deal.id, slug: item.deal.slug },
        }}
      >
        <a>
          {item.deal.title} - {item.deal.dealLine.name} - {item.quantity}
        </a>
      </Link>
    </li>
  );
}

export default Item;
